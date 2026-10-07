'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { BluebookExamPlayer } from '@/components/BluebookExamPlayer';
import { MOCK_TESTS } from '@/data/mockTests';
import { useExamStore } from '@/store/examStore';
import { TestConfig, TestResultSummary, Question } from '@/types/sat';
import { filterValidQuestions } from '@/lib/questionValidator';
import { calculateCompositeScore } from '@/lib/satScoringModel';
import { saveAttempt, loadInProgressAttempts, saveInProgressAttempt, deleteInProgressAttempt, loadAttempts } from '@/lib/firebase';
import { useAuth } from '@/context/AuthContext';
import { trackFeatureUsage } from '@/lib/analytics';
import { Card, Button } from '@/components/ui';
import { 
  Trophy, 
  CheckCircle2, 
  Clock, 
  BarChart3, 
  ArrowRight, 
  RotateCcw,
  BookOpen,
  Coffee,
  PlayCircle
} from 'lucide-react';

import { LoadingScreen } from '@/components/LoadingScreen';

export default function ExamPage() {
  const { user } = useAuth();
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const attemptId = params.attemptId as string;
  const [mounted, setMounted] = useState(false);
  const [completedResult, setCompletedResult] = useState<TestResultSummary | null>(null);

  // Multi-module mock test state
  const [mockModuleIndex, setMockModuleIndex] = useState<number>(0);
  const [showModuleTransition, setShowModuleTransition] = useState<boolean>(false);
  const [accumulatedResults, setAccumulatedResults] = useState<TestResultSummary[]>([]);
  const [initialPlayerState, setInitialPlayerState] = useState<any>(null);
  const [dataLoaded, setDataLoaded] = useState(false);
  const { session, finish } = useExamStore();
  const [restoredQuestions, setRestoredQuestions] = useState<Question[] | null>(null);
  const [restoredConfig, setRestoredConfig] = useState<TestConfig | null>(null);

  useEffect(() => {
    setMounted(true);
    const isAnalytics = searchParams.get('analytics') === 'true';
    if (isAnalytics) {
      loadAttempts(user?.uid || 'guest').then(attempts => {
        const found = attempts.find(a => a.testId === attemptId);
        if (found) setCompletedResult(found);
        setDataLoaded(true);
      });
    } else {
      loadInProgressAttempts(user?.uid || 'guest').then(inProg => {
        const attempt = inProg[attemptId];
        if (attempt) {
          setMockModuleIndex(attempt.moduleIndex || 0);
          setAccumulatedResults(attempt.accumulatedResults || []);
          setInitialPlayerState({
            currentIndex: attempt.currentIndex,
            answers: attempt.answers,
            elapsedSeconds: attempt.elapsedSeconds
          });
          if (attempt.questions) setRestoredQuestions(attempt.questions as Question[]);
          if (attempt.config) setRestoredConfig(attempt.config as TestConfig);
        }
        setDataLoaded(true);
      });
    }

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  if (!mounted || !dataLoaded) {
    return (
      <LoadingScreen
        fullPage={true}
        label="Preparing Test Environment..."
        sublabel="Loading questions and configuring the test player."
      />
    );
  }

  const mockTestMatch = attemptId ? MOCK_TESTS.find(m => m.id === attemptId) : undefined;
  const isMock = Boolean(mockTestMatch || (attemptId && (attemptId.startsWith('mock-') || attemptId.includes('mock'))));

  // Disconnected completely from previous database if this is a Mock Test
  const mockTest = isMock
    ? (mockTestMatch || MOCK_TESTS[0])
    : null;

  let activeQuestions: Question[] = [];
  let activeConfig: TestConfig = {
    mode: 'custom_test',
    title: 'Practice Session',
    timeLimitSeconds: 20 * 60,
    timerMode: 'total',
    layoutStyle: 'split',
    explanationMode: 'on_review',
    questionCount: 0,
    moduleCount: 1,
  };

  if (isMock && mockTest) {
    // Exclusively load from isolated mock database
    const currentMod = mockTest.modules[mockModuleIndex] || mockTest.modules[0];
    activeQuestions = currentMod.questions.map((q: any) => ({
      ...q,
      type: q.type || q.question_type || 'mcq',
      correctAnswer: q.correctAnswer || q.correct_answer || '',
      domainTitle: q.domainTitle || q.domain_title || 'General',
      acceptableAnswers: q.acceptableAnswers || (q.correct_answer ? [q.correct_answer] : []),
    }));
    activeConfig = {
      mode: 'mock_test',
      title: `${mockTest.title} — ${currentMod.title}`,
      timeLimitSeconds: currentMod.timeSeconds || currentMod.time_seconds || 1920,
      timerMode: 'total',
      layoutStyle: 'split',
      explanationMode: 'on_review',
      questionCount: activeQuestions.length,
      moduleCount: 1,
    };
  } else if (session && session.questions.length > 0) {
    activeQuestions = session.questions;
    activeConfig = session.config;
  } else if (restoredQuestions && restoredQuestions.length > 0 && restoredConfig) {
    activeQuestions = restoredQuestions;
    activeConfig = restoredConfig;
  }

  const handleExit = () => {
    if (window.confirm('Are you sure you want to exit? Your progress is safely auto-saved. You can return anytime.')) {
      if (isMock) {
        router.push('/mocks');
      } else {
        router.push('/tests/new');
      }
    }
  };

  const handleFinish = (result: TestResultSummary) => {
    if (isMock && mockTest) {
      const nextResults = [...accumulatedResults, result];
      setAccumulatedResults(nextResults);

      if (mockModuleIndex < mockTest.modules.length - 1) {
        // Move to transition screen between modules
        setShowModuleTransition(true);
        return;
      }

      // Merge all modules into single cumulative score report
      let totalQ = 0;
      let totalCorrect = 0;
      let totalTime = 0;
      let rwTotal = 0, rwCorrect = 0;
      let mathTotal = 0, mathCorrect = 0;
      const mergedDomains: Record<string, { total: number; correct: number }> = {};

      nextResults.forEach((r) => {
        totalQ += r.totalQuestions;
        totalCorrect += r.correctCount;
        totalTime += r.totalTimeSeconds;
        if (r.sectionBreakdown?.readingWriting) {
          rwTotal += r.sectionBreakdown.readingWriting.total;
          rwCorrect += r.sectionBreakdown.readingWriting.correct;
        }
        if (r.sectionBreakdown?.math) {
          mathTotal += r.sectionBreakdown.math.total;
          mathCorrect += r.sectionBreakdown.math.correct;
        }
        Object.entries(r.domainStats || {}).forEach(([dom, stats]) => {
          if (!mergedDomains[dom]) mergedDomains[dom] = { total: 0, correct: 0 };
          mergedDomains[dom].total += stats.total;
          mergedDomains[dom].correct += stats.correct;
        });
      });

      const officialScores = calculateCompositeScore(rwCorrect, mathCorrect);
      const rwScore = officialScores.rw.midpoint;
      const mathScore = officialScores.math.midpoint;
      const finalScaled = officialScores.composite.midpoint;

      const finalSummary: TestResultSummary = {
        testId: mockTest.id + '-' + Date.now(),
        title: mockTest.title,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        mode: 'mock_test',
        totalQuestions: totalQ,
        correctCount: totalCorrect,
        rawScorePercentage: Math.round((totalCorrect / Math.max(1, totalQ)) * 100),
        estimatedScaledScore: finalScaled,
        totalTimeSeconds: totalTime,
        sectionBreakdown: {
          readingWriting: rwTotal > 0 ? { total: rwTotal, correct: rwCorrect, estimatedScore: rwScore } : undefined,
          math: mathTotal > 0 ? { total: mathTotal, correct: mathCorrect, estimatedScore: mathScore } : undefined,
        },
        domainStats: mergedDomains,
      };

      finish(finalSummary);
      trackFeatureUsage('test_completed', { mode: 'mock_test', testId: mockTest.id, score: finalScaled, accuracy: finalSummary.rawScorePercentage });
      if (user && user.uid !== 'guest') saveAttempt(user.uid, finalSummary);
      setCompletedResult(finalSummary);
    } else {
      finish(result);
      trackFeatureUsage('test_completed', { mode: result.mode, questions: result.totalQuestions, accuracy: result.rawScorePercentage });
      if (user && user.uid !== 'guest') saveAttempt(user.uid, result);
      setCompletedResult(result);
    }
  };

  const startNextModule = () => {
    setShowModuleTransition(false);
    setMockModuleIndex((prev) => prev + 1);
  };

  // Module transition / break screen
  if (showModuleTransition && mockTest) {
    const completedMod = mockTest.modules[mockModuleIndex];
    const nextMod = mockTest.modules[mockModuleIndex + 1];
    const isSectionBreak = completedMod.section === 'reading_writing' && nextMod.section === 'math';

    return (
      <div className="min-h-screen bg-bg p-6 flex items-center justify-center text-ink">
        <Card className="max-w-lg w-full p-8 text-center space-y-6 border-line bg-surface shadow-xl">
          <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center bg-accent-soft text-accent">
            {isSectionBreak ? <Coffee className="w-8 h-8" /> : <CheckCircle2 className="w-8 h-8" />}
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
              {completedMod.title} Completed
            </span>
            <h2 className="text-2xl font-bold text-ink">
              {isSectionBreak ? 'Scheduled 10-Minute Break' : 'Ready for Next Module'}
            </h2>
            <p className="text-sm text-ink-muted leading-relaxed">
              {isSectionBreak
                ? 'Great job completing the Reading and Writing section! Official Bluebook provides a 10-minute break before starting Section 2: Math.'
                : `You are about to begin ${nextMod.title}. It contains ${nextMod.questionCount} questions with a ${Math.round(nextMod.timeSeconds / 60)}-minute time limit.`}
            </p>
          </div>

          <div className="pt-2">
            <Button onClick={startNextModule} className="w-full py-3 flex items-center justify-center gap-2">
              <PlayCircle className="w-5 h-5" />
              <span>{isSectionBreak ? 'Resume Testing Now' : 'Begin Next Module'}</span>
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  // If test is completed, show authentic SAT score report
  if (completedResult) {
    const formatTime = (secs: number) => {
      const mins = Math.floor(secs / 60);
      const rem = secs % 60;
      return `${mins}m ${rem}s`;
    };

    return (
      <div className="min-h-screen bg-bg p-6 md:p-12 flex items-center justify-center">
        <div className="max-w-3xl w-full space-y-8 animate-in fade-in zoom-in-95 duration-500">
          
          {/* Header Card */}
          <div className="text-center space-y-3">
            <div className="inline-flex p-3 rounded-full bg-accent-soft text-accent border border-accent/20">
              <Trophy className="w-10 h-10" />
            </div>
            <h1 className="text-3xl font-extrabold text-ink tracking-tight">Test Completed!</h1>
            <p className="text-ink-muted text-sm max-w-md mx-auto">
              Review your performance metrics and domain insights below.
            </p>
          </div>

          <Card className="p-8 shadow-lg border-2 border-line bg-surface space-y-8">
            {/* Top Score Banner */}
            <div className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-xl bg-surface-muted border border-line gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent">Composite Performance</span>
                <div className="text-4xl font-extrabold text-ink mt-1 font-mono">
                  {completedResult.estimatedScaledScore || '--'}
                  <span className="text-lg text-ink-muted font-normal"> / 1600</span>
                </div>
                <p className="text-xs text-ink-muted mt-1">Official Digital SAT Scaled Estimation</p>
              </div>

              <div className="flex items-center gap-6 text-center sm:text-right">
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-ink-muted uppercase">Raw Accuracy</div>
                  <div className="text-2xl font-bold text-ink">
                    {completedResult.rawScorePercentage}%
                  </div>
                  <div className="text-xs text-ink-muted">
                    {completedResult.correctCount} of {completedResult.totalQuestions} Correct
                  </div>
                </div>

                <div className="w-px h-12 bg-line" />

                <div className="space-y-1">
                  <div className="text-xs font-semibold text-ink-muted uppercase">Time Spent</div>
                  <div className="text-2xl font-bold text-ink font-mono">
                    {formatTime(completedResult.totalTimeSeconds)}
                  </div>
                  <div className="text-xs text-ink-muted">
                    Timed Session
                  </div>
                </div>
              </div>
            </div>

            {/* Section Subscores */}
            <div className="grid sm:grid-cols-2 gap-4">
              {completedResult.sectionBreakdown?.readingWriting && (
                <div className="p-4 rounded-lg border border-line bg-surface space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-ink">Reading & Writing</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-accent-soft text-accent">
                      {completedResult.sectionBreakdown.readingWriting.estimatedScore} / 800
                    </span>
                  </div>
                  <div className="w-full bg-surface-muted h-2 rounded-full overflow-hidden border border-line">
                    <div 
                      className="bg-accent h-full rounded-full transition-all"
                      style={{ 
                        width: `${(completedResult.sectionBreakdown.readingWriting.correct / Math.max(1, completedResult.sectionBreakdown.readingWriting.total)) * 100}%` 
                      }}
                    />
                  </div>
                  <p className="text-xs text-ink-muted">
                    {completedResult.sectionBreakdown.readingWriting.correct} of {completedResult.sectionBreakdown.readingWriting.total} correct
                  </p>
                </div>
              )}

              {completedResult.sectionBreakdown?.math && (
                <div className="p-4 rounded-lg border border-line bg-surface space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-ink">Mathematics</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-accent-soft text-accent">
                      {completedResult.sectionBreakdown.math.estimatedScore} / 800
                    </span>
                  </div>
                  <div className="w-full bg-surface-muted h-2 rounded-full overflow-hidden border border-line">
                    <div 
                      className="bg-accent h-full rounded-full transition-all"
                      style={{ 
                        width: `${(completedResult.sectionBreakdown.math.correct / Math.max(1, completedResult.sectionBreakdown.math.total)) * 100}%` 
                      }}
                    />
                  </div>
                  <p className="text-xs text-ink-muted">
                    {completedResult.sectionBreakdown.math.correct} of {completedResult.sectionBreakdown.math.total} correct
                  </p>
                </div>
              )}
            </div>

            {/* Domain Mastery Breakdown */}
            {completedResult.domainStats && Object.keys(completedResult.domainStats).length > 0 && (
              <div className="space-y-4 pt-2">
                <h3 className="text-sm font-bold text-ink flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-accent" />
                  <span>Domain Performance Analysis</span>
                </h3>
                <div className="space-y-3">
                  {Object.entries(completedResult.domainStats).map(([domainKey, stats]) => {
                    const pct = Math.round((stats.correct / Math.max(1, stats.total)) * 100);
                    const formattedName = domainKey.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
                    return (
                      <div key={domainKey} className="space-y-1 text-xs">
                        <div className="flex justify-between font-semibold text-ink">
                          <span>{formattedName}</span>
                          <span>{stats.correct} / {stats.total} ({pct}%)</span>
                        </div>
                        <div className="w-full bg-surface-muted h-2 rounded-full overflow-hidden border border-line">
                          <div 
                            className={`h-full rounded-full transition-all ${
                              pct >= 75 ? 'bg-success' : pct >= 50 ? 'bg-accent' : 'bg-danger'
                            }`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Navigation Actions */}
            <div className="pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
              <Button
                variant="secondary"
                onClick={() => router.push('/mocks')}
                className="w-full sm:w-auto"
              >
                Back to Mock Tests
              </Button>
              <Button
                onClick={() => {
                  setCompletedResult(null);
                  setMockModuleIndex(0);
                  setAccumulatedResults([]);
                  setShowModuleTransition(false);
                }}
                className="w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Test</span>
              </Button>
              <Button
                variant="secondary"
                onClick={() => window.print()}
                className="w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <span>Save as PDF</span>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <BluebookExamPlayer
      key={`module-${mockModuleIndex}`}
      config={activeConfig}
      questions={isMock ? activeQuestions : filterValidQuestions(activeQuestions)}
      onExit={handleExit}
      onFinish={handleFinish}
      initialState={initialPlayerState}
      onProgressUpdate={(state) => {
        const attemptData: any = {
          testId: attemptId,
          title: activeConfig.title,
          mode: activeConfig.mode,
          moduleIndex: mockModuleIndex,
          currentIndex: state.currentIndex,
          answers: state.answers,
          elapsedSeconds: state.elapsedSeconds,
          accumulatedResults: accumulatedResults
        };
        if (!isMock) {
          attemptData.questions = activeQuestions;
          attemptData.config = activeConfig;
        }
        saveInProgressAttempt(user?.uid || 'guest', attemptData);
      }}
    />
  );
}
