'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Alert, Button, EmptyState, PageHeader, Spinner } from '@/components/ui';
import { useAuth } from '@/context/AuthContext';
import { loadAttempts, InProgressAttempt } from '@/lib/firebase';
import { TestResultSummary } from '@/types/sat';
import {
  Bucket,
  Filters,
  ModeFilter,
  RangeFilter,
  SectionFilter,
  attemptTime,
  attemptsToCsv,
  computeStats,
  formatDuration,
  isFullMock,
} from '@/lib/studentStats';

const RANGES: { value: RangeFilter; label: string }[] = [
  { value: '7d', label: '7 days' },
  { value: '30d', label: '30 days' },
  { value: '90d', label: '90 days' },
  { value: 'all', label: 'All time' },
];
const SECTIONS: { value: SectionFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'math', label: 'Math' },
  { value: 'reading_writing', label: 'Reading & Writing' },
];
const MODES: { value: ModeFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'practice', label: 'Practice' },
  { value: 'custom_test', label: 'Custom' },
  { value: 'mock_test', label: 'Mock' },
];
const MODE_LABEL: Record<string, string> = { practice: 'Practice', custom_test: 'Custom', mock_test: 'Mock' };

function Segmented<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-ink-muted">{label}</span>
      <div role="group" aria-label={label} className="flex rounded-md border border-line p-0.5">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            aria-pressed={value === o.value}
            onClick={() => onChange(o.value)}
            className={`rounded px-2.5 py-1 text-xs font-medium transition-colors ${
              value === o.value ? 'bg-ink text-bg' : 'text-ink-muted hover:text-ink'
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function Figure({ label, value, hint }: { label: string; value: React.ReactNode; hint?: React.ReactNode }) {
  return (
    <div className="px-6 py-5 first:pl-0 last:pr-0">
      <div className="text-xs text-ink-muted">{label}</div>
      <div className="mt-1 text-3xl font-semibold tracking-tight text-ink tabular-nums">{value}</div>
      {hint && <div className="mt-1 text-xs text-ink-muted">{hint}</div>}
    </div>
  );
}

function SectionTitle({ children, aside }: { children: React.ReactNode; aside?: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-baseline justify-between">
      <h2 className="text-sm font-semibold text-ink">{children}</h2>
      {aside && <div className="text-xs text-ink-muted">{aside}</div>}
    </div>
  );
}

function BarRow({ b, sub }: { b: Bucket; sub?: string }) {
  return (
    <li>
      <div className="flex items-baseline justify-between gap-4 text-sm">
        <span className="truncate text-ink">{b.label}</span>
        <span className="shrink-0 tabular-nums text-ink-muted">
          {b.correct}/{b.total} · <span className="font-medium text-ink">{b.accuracy}%</span>
        </span>
      </div>
      <div className="mt-1.5 h-1 w-full rounded-full bg-surface-muted">
        <div className="h-1 rounded-full bg-ink transition-all" style={{ width: `${b.accuracy}%` }} />
      </div>
      {sub && <div className="mt-1 text-xs text-ink-muted">{sub}</div>}
    </li>
  );
}

export default function DashboardPage() {
  const { user } = useAuth();
  const [attempts, setAttempts] = useState<TestResultSummary[]>([]);
  const [inProgress, setInProgress] = useState<InProgressAttempt[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters>({ range: 'all', section: 'all', mode: 'all' });
  const [chartMetric, setChartMetric] = useState<'accuracy' | 'score'>('accuracy');

  const isGuest = !user || user.uid === 'guest';

  useEffect(() => {
    if (!user) return;
    if (isGuest) {
      setLoading(false);
      return;
    }
    let cancelled = false;
    Promise.all([
      loadAttempts(user.uid, 200),
      import('@/lib/firebase').then(m => m.loadInProgressAttempts(user.uid))
    ])
      .then(([data, inProgDict]) => {
        if (cancelled) return;
        setAttempts(data);
        const inProgList = Object.values(inProgDict).sort((a, b) => {
          const tA = a.updatedAt?.toMillis?.() || 0;
          const tB = b.updatedAt?.toMillis?.() || 0;
          return tB - tA;
        });
        setInProgress(inProgList);
      })
      .catch((e) => !cancelled && setError(e instanceof Error ? e.message : 'Could not load your results.'))
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, [user, isGuest]);

  const stats = useMemo(() => computeStats(attempts, filters), [attempts, filters]);
  const set = <K extends keyof Filters>(k: K, v: Filters[K]) => setFilters((f) => ({ ...f, [k]: v }));

  const exportCsv = () => {
    const blob = new Blob([attemptsToCsv(stats.attempts)], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sat-results-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const showScoreChart = chartMetric === 'score' && stats.fullMocks.length > 0;
  const chartData = showScoreChart ? stats.trend.filter((p) => p.score !== undefined) : stats.trend;
  const weakest = stats.domains[0];

  return (
    <div className="min-h-screen bg-bg p-6 text-ink md:p-10">
      <PageHeader
        title="Analytics"
        description="How you are performing, where to focus, and your projected SAT score."
        action={
          <Button variant="secondary" size="sm" onClick={exportCsv} disabled={stats.attempts.length === 0}>
            <Download className="h-3.5 w-3.5" /> Export CSV
          </Button>
        }
      />

      {loading ? (
        <Spinner label="Loading your results" />
      ) : isGuest ? (
        <EmptyState
          title="Sign in to see your analytics"
          description="Guest sessions are not saved, so there is nothing to analyse. Create an account to keep your results."
          action={
            <Link href="/signup">
              <Button>Create account</Button>
            </Link>
          }
        />
      ) : (
        <div className="space-y-10">
          {error && <Alert>{error}</Alert>}

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <Segmented label="Period" value={filters.range} options={RANGES} onChange={(v) => set('range', v)} />
            <Segmented label="Section" value={filters.section} options={SECTIONS} onChange={(v) => set('section', v)} />
            <Segmented label="Type" value={filters.mode} options={MODES} onChange={(v) => set('mode', v)} />
          </div>

          {stats.attempts.length === 0 ? (
            <EmptyState
              title={attempts.length === 0 ? 'No results yet' : 'Nothing matches these filters'}
              description={
                attempts.length === 0
                  ? 'Finish a practice set, custom test or mock exam and your analytics will appear here.'
                  : 'Try a longer period or a different section or type.'
              }
              action={
                attempts.length === 0 ? (
                  <Link href="/practice">
                    <Button>Start practising</Button>
                  </Link>
                ) : (
                  <Button variant="secondary" onClick={() => setFilters({ range: 'all', section: 'all', mode: 'all' })}>
                    Reset filters
                  </Button>
                )
              }
            />
          ) : (
            <>
              {/* Key figures */}
              <section className="grid grid-cols-2 divide-x divide-line border-y border-line md:grid-cols-4">
                <Figure
                  label="Predicted score"
                  value={stats.prediction ? stats.prediction.score : '—'}
                  hint={
                    stats.prediction
                      ? `${stats.prediction.low}–${stats.prediction.high} · from ${stats.prediction.basedOn} mock${stats.prediction.basedOn > 1 ? 's' : ''}`
                      : 'Finish a full mock exam to unlock'
                  }
                />
                <Figure
                  label="Accuracy"
                  value={stats.accuracy !== null ? `${stats.accuracy}%` : '—'}
                  hint={`${stats.totalCorrect} of ${stats.totalQuestions} correct`}
                />
                <Figure
                  label="Avg. time per question"
                  value={stats.avgSecondsPerQuestion !== null ? `${stats.avgSecondsPerQuestion}s` : '—'}
                  hint={stats.avgSecondsPerQuestion === null ? 'No timing recorded' : undefined}
                />
                <Figure
                  label="Tests taken"
                  value={stats.attempts.length}
                  hint={`${formatDuration(stats.totalStudySeconds)} studied · ${stats.streakDays}-day streak`}
                />
              </section>

              {/* Trend */}
              <section>
                <SectionTitle
                  aside={
                    <div role="group" aria-label="Chart metric" className="flex gap-3">
                      {(['accuracy', 'score'] as const).map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setChartMetric(m)}
                          aria-pressed={chartMetric === m}
                          className={chartMetric === m ? 'font-medium text-ink underline underline-offset-4' : 'hover:text-ink'}
                        >
                          {m === 'accuracy' ? 'Accuracy' : 'Mock score'}
                        </button>
                      ))}
                    </div>
                  }
                >
                  Progress
                </SectionTitle>
                {chartMetric === 'score' && stats.fullMocks.length === 0 ? (
                  <p className="border border-dashed border-line py-12 text-center text-sm text-ink-muted">
                    Score history appears after you complete a full-length mock exam.
                  </p>
                ) : chartData.length < 2 ? (
                  <p className="border border-dashed border-line py-12 text-center text-sm text-ink-muted">
                    Complete at least two tests to see a trend.
                  </p>
                ) : (
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={chartData} margin={{ top: 8, right: 8, bottom: 0, left: -16 }}>
                        <CartesianGrid vertical={false} stroke="var(--border)" />
                        <XAxis dataKey="label" tickLine={false} axisLine={false} fontSize={11} stroke="var(--ink-muted)" />
                        <YAxis
                          tickLine={false}
                          axisLine={false}
                          fontSize={11}
                          stroke="var(--ink-muted)"
                          domain={showScoreChart ? [400, 1600] : [0, 100]}
                          unit={showScoreChart ? '' : '%'}
                        />
                        <Tooltip
                          cursor={{ stroke: 'var(--border)' }}
                          contentStyle={{
                            background: 'var(--surface)',
                            border: '1px solid var(--border)',
                            borderRadius: 6,
                            fontSize: 12,
                            color: 'var(--ink)',
                          }}
                          formatter={(v) => [showScoreChart ? v : `${v}%`, showScoreChart ? 'Score' : 'Accuracy']}
                        />
                        <Line
                          type="monotone"
                          dataKey={showScoreChart ? 'score' : 'accuracy'}
                          stroke="var(--ink)"
                          strokeWidth={1.75}
                          dot={{ r: 3, fill: 'var(--ink)', strokeWidth: 0 }}
                          activeDot={{ r: 5 }}
                          isAnimationActive={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </section>

              <div className="grid gap-10 md:grid-cols-2">
                {/* Sections */}
                <section>
                  <SectionTitle>Sections</SectionTitle>
                  <ul className="space-y-5">
                    {stats.sections.math && (
                      <BarRow
                        b={stats.sections.math}
                        sub={
                          stats.latestMock?.sectionBreakdown.math
                            ? `Latest mock: ${stats.latestMock.sectionBreakdown.math.estimatedScore} / 800`
                            : undefined
                        }
                      />
                    )}
                    {stats.sections.rw && (
                      <BarRow
                        b={stats.sections.rw}
                        sub={
                          stats.latestMock?.sectionBreakdown.readingWriting
                            ? `Latest mock: ${stats.latestMock.sectionBreakdown.readingWriting.estimatedScore} / 800`
                            : undefined
                        }
                      />
                    )}
                    {!stats.sections.math && !stats.sections.rw && (
                      <li className="text-sm text-ink-muted">No section data yet.</li>
                    )}
                  </ul>
                </section>

                {/* Difficulty */}
                <section>
                  <SectionTitle aside="Practice & custom tests">By difficulty</SectionTitle>
                  {stats.difficulty.length === 0 ? (
                    <p className="text-sm text-ink-muted">Difficulty detail is recorded for practice and custom tests.</p>
                  ) : (
                    <ul className="space-y-5">
                      {stats.difficulty.map((b) => (
                        <BarRow key={b.id} b={b} />
                      ))}
                    </ul>
                  )}
                </section>
              </div>

              {/* Domains + skills */}
              <div className="grid gap-10 md:grid-cols-2">
                <section>
                  <SectionTitle aside="Weakest first">Domains</SectionTitle>
                  {stats.domains.length === 0 ? (
                    <p className="text-sm text-ink-muted">No domain data yet.</p>
                  ) : (
                    <ul className="space-y-5">
                      {stats.domains.map((b) => (
                        <BarRow key={b.id} b={b} />
                      ))}
                    </ul>
                  )}
                </section>

                <section>
                  <SectionTitle aside="Min. 3 questions">Skills to work on</SectionTitle>
                  {stats.weakSkills.length === 0 ? (
                    <p className="text-sm text-ink-muted">Answer a few more practice questions to surface weak skills.</p>
                  ) : (
                    <ul className="space-y-5">
                      {stats.weakSkills.map((b) => (
                        <BarRow key={b.id} b={b} />
                      ))}
                    </ul>
                  )}
                  {weakest && weakest.accuracy < 80 && (
                    <Link
                      href="/practice"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink underline-offset-4 hover:underline"
                    >
                      Practise {weakest.label} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </section>
              </div>

              {/* History */}
              <section>
                <SectionTitle aside={`${stats.attempts.length} test${stats.attempts.length === 1 ? '' : 's'}`}>
                  History
                </SectionTitle>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-line text-xs text-ink-muted">
                        <th className="py-2 pr-4 font-medium">Test</th>
                        <th className="py-2 pr-4 font-medium">Type</th>
                        <th className="py-2 pr-4 text-right font-medium">Accuracy</th>
                        <th className="py-2 pr-4 text-right font-medium">Score</th>
                        <th className="py-2 pr-4 text-right font-medium">Time</th>
                        <th className="py-2 text-right font-medium">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inProgress.map((a) => (
                        <tr key={a.testId} className="border-b border-line/60 last:border-0 hover:bg-surface-muted bg-accent/5">
                          <td className="py-3 pr-4">
                            <span className="font-medium text-ink">
                              {a.title || 'Incomplete Test'}
                            </span>
                            <span className="ml-2 text-[10px] uppercase tracking-wider font-bold text-accent bg-accent/10 px-1.5 py-0.5 rounded">In Progress</span>
                          </td>
                          <td className="py-3 pr-4 text-ink-muted">{MODE_LABEL[a.mode || 'custom_test'] ?? a.mode}</td>
                          <td colSpan={2} className="py-3 pr-4 text-center">
                            <Link href={`/exam/${a.testId}`}>
                              <Button size="sm" variant="secondary" className="h-7 text-xs">
                                Continue <ArrowRight className="w-3 h-3 ml-1" />
                              </Button>
                            </Link>
                          </td>
                          <td className="py-3 pr-4 text-right tabular-nums text-ink-muted">
                            {a.elapsedSeconds > 0 ? formatDuration(a.elapsedSeconds) : '—'}
                          </td>
                          <td className="py-3 text-right text-ink-muted">
                            {a.updatedAt?.toMillis ? new Date(a.updatedAt.toMillis()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recently'}
                          </td>
                        </tr>
                      ))}
                      {stats.attempts.slice(0, 15).map((a) => (
                        <tr key={a.testId} className="border-b border-line/60 last:border-0 hover:bg-surface-muted">
                          <td className="py-3 pr-4">
                            <Link
                              href={`/exam/${a.testId}?analytics=true`}
                              className="font-medium text-ink underline-offset-4 hover:underline"
                            >
                              {a.title || 'Practice session'}
                            </Link>
                          </td>
                          <td className="py-3 pr-4 text-ink-muted">{MODE_LABEL[a.mode] ?? a.mode}</td>
                          <td className="py-3 pr-4 text-right tabular-nums">
                            {Math.round((a.correctCount / a.totalQuestions) * 100)}%
                            <span className="ml-1 text-xs text-ink-muted">
                              ({a.correctCount}/{a.totalQuestions})
                            </span>
                          </td>
                          <td className="py-3 pr-4 text-right tabular-nums">
                            {isFullMock(a) ? a.estimatedScaledScore : <span className="text-ink-muted">—</span>}
                          </td>
                          <td className="py-3 pr-4 text-right tabular-nums text-ink-muted">
                            {a.totalTimeSeconds > 0 ? formatDuration(a.totalTimeSeconds) : '—'}
                          </td>
                          <td className="py-3 text-right text-ink-muted">
                            {new Date(attemptTime(a)).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </>
          )}
        </div>
      )}
    </div>
  );
}
