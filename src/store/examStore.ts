'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Question, TestConfig, TestResultSummary } from '../types/sat';

interface ExamSession {
  questions: Question[];
  config: TestConfig;
}

interface ExamStore {
  session: ExamSession | null;
  /** last finished attempt, shown on the results screen */
  lastResult: { summary: TestResultSummary; questions: Question[] } | null;
  start: (questions: Question[], config: TestConfig) => void;
  finish: (summary: TestResultSummary) => void;
  clear: () => void;
  clearResult: () => void;
}

export const useExamStore = create<ExamStore>()(
  persist(
    (set, get) => ({
      session: null,
      lastResult: null,
      start: (questions, config) => set({ session: { questions, config }, lastResult: null }),
      finish: (summary) => {
        const s = get().session;
        set({ session: null, lastResult: { summary, questions: s?.questions ?? [] } });
      },
      clear: () => set({ session: null }),
      clearResult: () => set({ lastResult: null }),
    }),
    {
      name: 'sat_exam_session',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
