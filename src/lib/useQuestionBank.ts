'use client';

import { useEffect, useMemo, useState } from 'react';
import { Question } from '../types/sat';
import { filterValidQuestions } from './questionValidator';

interface ManifestEntry {
  domain: string;
  title: string;
  section: string;
  file: string;
  count: number;
}

/**
 * Question bank loader — ONLY the new database.
 *
 * Data flow:
 *   database/{reading,mathematics}/domains/*.json
 *     --(python sync_bank.py)-->  public/bank/manifest.json + public/bank/<domain>.json
 *     --(this hook)-->            validated questions
 *
 * No built-in samples and no archived/legacy data are ever mixed in. A domain
 * with no questions simply has a count of 0 and the UI tells the user to pick
 * something else.
 */
export function useQuestionBank() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('/bank/manifest.json', { cache: 'no-store' });
        if (!res.ok) throw new Error('manifest missing');
        const manifest: { domains: ManifestEntry[] } = await res.json();
        const files = manifest.domains.filter((d) => d.count > 0);
        const chunks = await Promise.all(
          files.map((d) => fetch(`/bank/${d.file}`, { cache: 'no-store' }).then((r) => (r.ok ? r.json() : [])))
        );
        const seen = new Set<string>();
        const unique = filterValidQuestions(chunks.flat()).filter((q) => (seen.has(q.id) ? false : (seen.add(q.id), true)));
        if (!cancelled) setQuestions(unique);
      } catch {
        if (!cancelled) setQuestions([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  /** Number of available questions per domain id, e.g. { algebra: 244 } */
  const countsByDomain = useMemo(() => {
    const c: Record<string, number> = {};
    questions.forEach((q) => {
      c[q.domain] = (c[q.domain] || 0) + 1;
    });
    return c;
  }, [questions]);

  return { questions, loading, countsByDomain };
}
