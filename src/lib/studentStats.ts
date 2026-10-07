import { OFFICIAL_DOMAINS, SectionType, TestResultSummary } from '@/types/sat';

/**
 * Pure analytics helpers for the student dashboard.
 * Everything here is derived from saved TestResultSummary documents, so the
 * numbers on screen always agree with what the exam player stored.
 */

export type RangeFilter = '7d' | '30d' | '90d' | 'all';
export type SectionFilter = 'all' | SectionType;
export type ModeFilter = 'all' | 'practice' | 'custom_test' | 'mock_test';

export interface Filters {
  range: RangeFilter;
  section: SectionFilter;
  mode: ModeFilter;
}

export interface Bucket {
  id: string;
  label: string;
  total: number;
  correct: number;
  accuracy: number; // 0-100
}

export interface TrendPoint {
  testId: string;
  label: string;
  accuracy: number;
  score?: number; // only for full-length mocks (400-1600)
}

export interface Prediction {
  score: number;
  low: number;
  high: number;
  basedOn: number; // number of full mocks used
  trend: number | null; // change between first and last mock used
}

export interface StudentStats {
  attempts: TestResultSummary[];
  totalQuestions: number;
  totalCorrect: number;
  accuracy: number | null;
  avgSecondsPerQuestion: number | null;
  totalStudySeconds: number;
  sections: { math: Bucket | null; rw: Bucket | null };
  domains: Bucket[]; // sorted weakest -> strongest
  difficulty: Bucket[];
  weakSkills: Bucket[];
  trend: TrendPoint[]; // chronological
  fullMocks: TestResultSummary[]; // chronological
  prediction: Prediction | null;
  latestMock: TestResultSummary | null;
  streakDays: number;
  studiedDays: number;
}

const pct = (c: number, t: number) => (t > 0 ? Math.round((c / t) * 100) : 0);

/** Epoch ms for an attempt: Firestore server time when present, else the stored date string. */
export function attemptTime(a: TestResultSummary): number {
  if (a.createdAtMs && a.createdAtMs > 0) return a.createdAtMs;
  const parsed = Date.parse(a.date);
  return Number.isNaN(parsed) ? 0 : parsed;
}

export function isFullMock(a: TestResultSummary): boolean {
  const s = a.sectionBreakdown;
  return a.mode === 'mock_test' && !!s?.readingWriting && !!s?.math && (a.estimatedScaledScore ?? 0) >= 400;
}

const RANGE_DAYS: Record<RangeFilter, number | null> = { '7d': 7, '30d': 30, '90d': 90, all: null };

function dayKey(ms: number) {
  const d = new Date(ms);
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

function domainSection(id: string): SectionType | undefined {
  return OFFICIAL_DOMAINS.find((d) => d.id === id)?.section;
}

/** Correct/total of one attempt restricted to a section (null if the attempt has none of that section). */
function sectionTotals(a: TestResultSummary, section: SectionFilter): { total: number; correct: number } | null {
  if (section === 'all') return { total: a.totalQuestions, correct: a.correctCount };
  const s = section === 'math' ? a.sectionBreakdown?.math : a.sectionBreakdown?.readingWriting;
  return s ? { total: s.total, correct: s.correct } : null;
}

export function computeStats(all: TestResultSummary[], filters: Filters, now = Date.now()): StudentStats {
  const days = RANGE_DAYS[filters.range];
  const since = days ? now - days * 86_400_000 : 0;

  const attempts = all
    .filter((a) => a.totalQuestions > 0)
    .filter((a) => (filters.mode === 'all' ? true : a.mode === filters.mode))
    .filter((a) => attemptTime(a) >= since)
    .sort((x, y) => attemptTime(y) - attemptTime(x)); // newest first

  let totalQuestions = 0;
  let totalCorrect = 0;
  let timedQuestions = 0;
  let timedSeconds = 0;
  let totalStudySeconds = 0;

  const sec = { math: { t: 0, c: 0 }, rw: { t: 0, c: 0 } };
  const domainAgg: Record<string, { t: number; c: number }> = {};
  const diffAgg: Record<string, { t: number; c: number }> = {};
  const skillAgg: Record<string, { t: number; c: number }> = {};
  const days_ = new Set<string>();

  for (const a of attempts) {
    totalStudySeconds += Math.max(0, a.totalTimeSeconds || 0);
    days_.add(dayKey(attemptTime(a)));

    const totals = sectionTotals(a, filters.section);
    if (!totals || totals.total === 0) continue;
    totalQuestions += totals.total;
    totalCorrect += totals.correct;

    if (a.sectionBreakdown?.math) {
      sec.math.t += a.sectionBreakdown.math.total;
      sec.math.c += a.sectionBreakdown.math.correct;
    }
    if (a.sectionBreakdown?.readingWriting) {
      sec.rw.t += a.sectionBreakdown.readingWriting.total;
      sec.rw.c += a.sectionBreakdown.readingWriting.correct;
    }

    for (const [dom, st] of Object.entries(a.domainStats || {})) {
      if (filters.section !== 'all' && domainSection(dom) !== filters.section) continue;
      (domainAgg[dom] ??= { t: 0, c: 0 });
      domainAgg[dom].t += st.total;
      domainAgg[dom].c += st.correct;
    }

    // Per-question detail (practice / custom attempts keep raw questions + answers).
    let usedRaw = false;
    if (a.rawQuestions?.length && a.rawAnswers) {
      let secs = 0;
      let n = 0;
      for (const q of a.rawQuestions) {
        if (filters.section !== 'all' && q.section !== filters.section) continue;
        const ans = a.rawAnswers[q.id];
        const ok = !!ans?.isCorrect;
        (diffAgg[q.difficulty] ??= { t: 0, c: 0 });
        diffAgg[q.difficulty].t++;
        if (ok) diffAgg[q.difficulty].c++;
        if (q.skill) {
          (skillAgg[q.skill] ??= { t: 0, c: 0 });
          skillAgg[q.skill].t++;
          if (ok) skillAgg[q.skill].c++;
        }
        if (ans && ans.timeSpentSeconds > 0) {
          secs += ans.timeSpentSeconds;
          n++;
        }
      }
      if (n > 0) {
        timedQuestions += n;
        timedSeconds += secs;
        usedRaw = true;
      }
    }
    // Fallback for attempts without per-question data (e.g. merged mocks): only meaningful for "all sections".
    if (!usedRaw && filters.section === 'all' && a.totalTimeSeconds > 0) {
      timedQuestions += a.totalQuestions;
      timedSeconds += a.totalTimeSeconds;
    }
  }

  const bucket = (id: string, label: string, v: { t: number; c: number }): Bucket => ({
    id,
    label,
    total: v.t,
    correct: v.c,
    accuracy: pct(v.c, v.t),
  });

  const domains = Object.entries(domainAgg)
    .filter(([, v]) => v.t > 0)
    .map(([id, v]) => bucket(id, OFFICIAL_DOMAINS.find((d) => d.id === id)?.title ?? id, v))
    .sort((a, b) => a.accuracy - b.accuracy);

  const difficulty = ['Easy', 'Medium', 'Hard']
    .filter((d) => diffAgg[d])
    .map((d) => bucket(d, d, diffAgg[d]));

  const weakSkills = Object.entries(skillAgg)
    .filter(([, v]) => v.t >= 3)
    .map(([id, v]) => bucket(id, id, v))
    .sort((a, b) => a.accuracy - b.accuracy || b.total - a.total)
    .slice(0, 5);

  // Chronological trend (oldest -> newest), max last 30 points.
  const chronological = [...attempts].reverse();
  const trend: TrendPoint[] = chronological
    .map((a): TrendPoint | null => {
      const t = sectionTotals(a, filters.section);
      return t && t.total > 0
        ? {
            testId: a.testId,
            label: new Date(attemptTime(a)).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            accuracy: pct(t.correct, t.total),
            score: isFullMock(a) ? a.estimatedScaledScore : undefined,
          }
        : null;
    })
    .filter((p): p is TrendPoint => p !== null)
    .slice(-30);

  // Prediction uses full-length mocks ONLY (practice "scores" are not on the 400-1600 scale).
  const fullMocks = chronological.filter(isFullMock);
  let prediction: Prediction | null = null;
  if (fullMocks.length > 0) {
    const used = fullMocks.slice(-3);
    const weights = used.map((_, i) => i + 1); // newest weighs most
    const wsum = weights.reduce((x, y) => x + y, 0);
    const avg = used.reduce((s, m, i) => s + (m.estimatedScaledScore as number) * weights[i], 0) / wsum;
    const score = Math.min(1600, Math.max(400, Math.round(avg / 10) * 10));
    const spread = used.length > 1 ? Math.max(30, Math.round((Math.max(...used.map((m) => m.estimatedScaledScore as number)) - Math.min(...used.map((m) => m.estimatedScaledScore as number))) / 2 / 10) * 10) : 50;
    prediction = {
      score,
      low: Math.max(400, score - spread),
      high: Math.min(1600, score + spread),
      basedOn: used.length,
      trend: used.length > 1 ? (used[used.length - 1].estimatedScaledScore as number) - (used[0].estimatedScaledScore as number) : null,
    };
  }

  // Study streak: consecutive days (ending today or yesterday) with at least one attempt, over ALL attempts.
  const allDays = new Set(all.map((a) => dayKey(attemptTime(a))));
  let streakDays = 0;
  const cursor = new Date(now);
  if (!allDays.has(dayKey(cursor.getTime()))) cursor.setDate(cursor.getDate() - 1);
  while (allDays.has(dayKey(cursor.getTime()))) {
    streakDays++;
    cursor.setDate(cursor.getDate() - 1);
  }

  return {
    attempts,
    totalQuestions,
    totalCorrect,
    accuracy: totalQuestions > 0 ? pct(totalCorrect, totalQuestions) : null,
    avgSecondsPerQuestion: timedQuestions > 0 ? Math.round(timedSeconds / timedQuestions) : null,
    totalStudySeconds,
    sections: {
      math: sec.math.t > 0 ? bucket('math', 'Math', sec.math) : null,
      rw: sec.rw.t > 0 ? bucket('rw', 'Reading & Writing', sec.rw) : null,
    },
    domains,
    difficulty,
    weakSkills,
    trend,
    fullMocks,
    prediction,
    latestMock: fullMocks.length ? fullMocks[fullMocks.length - 1] : null,
    streakDays,
    studiedDays: days_.size,
  };
}

export function formatDuration(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.round((totalSeconds % 3600) / 60);
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}

export function attemptsToCsv(attempts: TestResultSummary[]): string {
  const rows = [['date', 'title', 'mode', 'questions', 'correct', 'accuracy_pct', 'scaled_score', 'time_seconds']];
  for (const a of attempts) {
    rows.push([
      new Date(attemptTime(a)).toISOString(),
      `"${(a.title || '').replace(/"/g, '""')}"`,
      a.mode,
      String(a.totalQuestions),
      String(a.correctCount),
      String(pct(a.correctCount, a.totalQuestions)),
      isFullMock(a) ? String(a.estimatedScaledScore) : '',
      String(a.totalTimeSeconds ?? 0),
    ]);
  }
  return rows.map((r) => r.join(',')).join('\n');
}
