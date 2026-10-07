/**
 * Solved-question tracking for Practice Zone.
 * The IDs of solved questions are kept in a persistent "solved file"
 * (browser localStorage key `sat_solved_ids`), so they survive reloads.
 */
const KEY = 'sat_solved_ids';

export function getSolvedIds(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  try {
    const raw = localStorage.getItem(KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return new Set(Array.isArray(arr) ? arr : []);
  } catch {
    return new Set();
  }
}

export function saveSolvedIds(ids: Iterable<string>): void {
  try {
    const merged = getSolvedIds();
    for (const id of ids) merged.add(id);
    localStorage.setItem(KEY, JSON.stringify(Array.from(merged)));
  } catch {
    /* storage unavailable — ignore */
  }
}

export function clearSolvedIds(): void {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
}
