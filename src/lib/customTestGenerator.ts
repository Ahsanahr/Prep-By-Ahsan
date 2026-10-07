import { Question } from '../types/sat';

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface CustomTestFilterOptions {
  topicCounts: Record<string, number>;
  difficulty: Difficulty | 'Adaptive';
}

/** Case-insensitive difficulty. Anything unrecognised (blank, "Unknown") returns null. */
export function normalizeDifficulty(d: unknown): Difficulty | null {
  const v = String(d ?? '').trim().toLowerCase();
  if (v === 'easy') return 'Easy';
  if (v === 'medium') return 'Medium';
  if (v === 'hard') return 'Hard';
  return null;
}

/**
 * How many questions each requested domain can actually supply for the chosen
 * difficulty, so the UI can warn before a test silently comes up short.
 */
export function checkAvailability(options: CustomTestFilterOptions, bank: Question[]) {
  const rows = Object.entries(options.topicCounts)
    .filter(([, n]) => n > 0)
    .map(([domain, requested]) => {
      const inDomain = bank.filter((q) => q.domain === domain);
      const available =
        options.difficulty === 'Adaptive'
          ? inDomain.length
          : inDomain.filter((q) => normalizeDifficulty(q.difficulty) === options.difficulty).length;
      return { domain, requested, available, short: Math.max(0, requested - available) };
    });
  return {
    rows,
    requested: rows.reduce((s, r) => s + r.requested, 0),
    obtainable: rows.reduce((s, r) => s + Math.min(r.requested, r.available), 0),
  };
}

/**
 * Filter and generate a tailored set of SAT questions matching user's custom test parameters.
 *
 * Rules (so wrong questions never appear):
 *  - only questions from the requested domain are used (no fallback to other domains)
 *  - a specific difficulty (Easy/Medium/Hard) returns ONLY that difficulty
 *  - no question is repeated; if a domain has fewer questions than requested,
 *    the test simply contains fewer questions for that domain
 */
export function generateCustomTestQuestions(
  options: CustomTestFilterOptions,
  customBank?: Question[]
): Question[] {
  const allAvailable = customBank ?? [];
  const result: Question[] = [];
  const used = new Set<string>();
  const shuffle = (a: Question[]) => {
    const arr = [...a];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  for (const [domainId, count] of Object.entries(options.topicCounts)) {
    if (count <= 0) continue;

    const pool = allAvailable.filter((q) => q.domain === domainId && !used.has(q.id));
    if (pool.length === 0) continue;

    let prioritizedPool: Question[] = [];
    if (options.difficulty === 'Adaptive') {
      const easy = shuffle(pool.filter((q) => normalizeDifficulty(q.difficulty) === 'Easy'));
      const med = shuffle(pool.filter((q) => normalizeDifficulty(q.difficulty) === 'Medium'));
      const hard = shuffle(pool.filter((q) => normalizeDifficulty(q.difficulty) === 'Hard'));
      const unrated = shuffle(pool.filter((q) => normalizeDifficulty(q.difficulty) === null));
      const maxLen = Math.max(easy.length, med.length, hard.length);
      for (let i = 0; i < maxLen; i++) {
        if (easy[i]) prioritizedPool.push(easy[i]);
        if (med[i]) prioritizedPool.push(med[i]);
        if (hard[i]) prioritizedPool.push(hard[i]);
      }
      prioritizedPool.push(...unrated);
    } else {
      prioritizedPool = shuffle(pool.filter((q) => normalizeDifficulty(q.difficulty) === options.difficulty));
    }

    for (const q of prioritizedPool.slice(0, count)) {
      used.add(q.id);
      result.push(q);
    }
  }

  // Group by section (Reading/Writing first, then Math), as on the real test.
  const rw = result.filter((q) => q.section === 'reading_writing');
  const math = result.filter((q) => q.section === 'math');

  return [...rw, ...math];
}
