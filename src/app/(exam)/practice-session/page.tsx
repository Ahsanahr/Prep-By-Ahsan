'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useExamStore } from '@/store/examStore';
import { BluebookExamPlayer } from '@/components/BluebookExamPlayer';
import { TestResultSummary } from '@/types/sat';
import { saveAttempt } from '@/lib/firebase';
import { useAuth } from '@/context/AuthContext';
import { trackFeatureUsage } from '@/lib/analytics';
import { LoadingScreen } from '@/components/LoadingScreen';

/**
 * Practice Zone session. Uses the same Bluebook player as exams, so it gets
 * Desmos (graphing + scientific), reference sheet, line reader, eliminator,
 * question navigator and per-question time tracking. The session config
 * (set on /practice) controls: explanations on/off, time tracking on/off,
 * and flagging (always off in practice).
 */
export default function PracticeSessionPage() {
  const { user } = useAuth();
  const router = useRouter();
  const { session, finish } = useExamStore();

  useEffect(() => {
    if (!session || session.questions.length === 0) router.push('/practice');
  }, [session, router]);

  if (!session || session.questions.length === 0) {
    return (
      <LoadingScreen
        fullPage={true}
        label="Loading Practice Session..."
        sublabel="Preparing player environment and test questions."
      />
    );
  }

  const handleFinish = (result: TestResultSummary) => {
    finish(result);
    trackFeatureUsage('test_completed', { mode: result.mode, questions: result.totalQuestions, accuracy: result.rawScorePercentage });
    if (user && user.uid !== 'guest') saveAttempt(user.uid, result);
    router.push('/dashboard');
  };

  return (
    <BluebookExamPlayer
      config={session.config}
      questions={session.questions}
      onExit={() => router.push('/practice')}
      onFinish={handleFinish}
    />
  );
}
