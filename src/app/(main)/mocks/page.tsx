'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, Button } from '@/components/ui';
import { MOCK_TESTS, MockFilterCategory } from '@/data/mockTests';
import { useAuth } from '@/context/AuthContext';
import { loadAttempts, loadInProgressAttempts, InProgressAttempt } from '@/lib/firebase';
import { TestResultSummary } from '@/types/sat';
import { trackFeatureUsage } from '@/lib/analytics';
import { LoadingScreen } from '@/components/LoadingScreen';

export default function MocksPage() {
  const { user } = useAuth();
  const [inProgress, setInProgress] = React.useState<Record<string, InProgressAttempt>>({});
  const [finished, setFinished] = React.useState<Record<string, TestResultSummary>>({});

  React.useEffect(() => {
    if (true) {
      loadInProgressAttempts(user?.uid || 'guest').then(setInProgress);
      loadAttempts(user?.uid || 'guest').then(attempts => {
        const dict: Record<string, TestResultSummary> = {};
        attempts.forEach(a => dict[a.testId] = a);
        setFinished(dict);
      });
    }
  }, [user]);
  const router = useRouter();
  const [filter, setFilter] = useState<MockFilterCategory>('all');
  const [loadingTestId, setLoadingTestId] = useState<string | null>(null);

  const navigateTo = (testId: string, analytics = false) => {
    setLoadingTestId(testId);
    router.push(`/exam/${testId}${analytics ? '?analytics=true' : ''}`);
  };

  const startTest = (testId: string) => {
    trackFeatureUsage('mock_started', { testId });
    setLoadingTestId(testId);
    router.push(`/exam/${testId}`);
  };

  const filteredTests = MOCK_TESTS.filter((test) => {
    if (filter === 'old_sat') return test.setType === 'old_sat';
    if (filter === 'new_sat') return test.setType === 'new_sat';
    if (filter === 'english_writing') return test.isEnglishWritingOnly;
    return true;
  });

  if (loadingTestId) {
    return (
      <LoadingScreen
        fullPage={true}
        label="Preparing Mock Exam..."
        sublabel="Configuring test modules, timer parameters, and question bank."
      />
    );
  }

  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-ink tracking-tight">Mock Tests</h1>
      </div>

      {/* Top Filter Buttons */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-line">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
            filter === 'all'
              ? 'bg-accent text-white'
              : 'bg-surface-muted text-ink-muted hover:text-ink hover:bg-surface'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('old_sat')}
          className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
            filter === 'old_sat'
              ? 'bg-accent text-white'
              : 'bg-surface-muted text-ink-muted hover:text-ink hover:bg-surface'
          }`}
        >
          Old SAT
        </button>
        <button
          onClick={() => setFilter('new_sat')}
          className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
            filter === 'new_sat'
              ? 'bg-accent text-white'
              : 'bg-surface-muted text-ink-muted hover:text-ink hover:bg-surface'
          }`}
        >
          New SAT
        </button>
        <button
          onClick={() => setFilter('english_writing')}
          className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
            filter === 'english_writing'
              ? 'bg-accent text-white'
              : 'bg-surface-muted text-ink-muted hover:text-ink hover:bg-surface'
          }`}
        >
          English Writing
        </button>
      </div>

      {/* Mock Tests List */}
      <div className="space-y-4">
        {filteredTests.length === 0 ? (
          <div className="p-8 text-center text-ink-muted text-sm border border-line rounded-lg">
            No mock tests available in this category yet.
          </div>
        ) : (
          filteredTests.map((test) => {
            const isLoading = loadingTestId === test.id;
            return (
              <Card key={test.id} className="p-5 border-line bg-surface">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg font-bold text-ink">{test.title}</h2>
                      {test.setType === 'old_sat' && (
                        <span className="px-2 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                          Old SAT
                        </span>
                      )}
                      {test.setType === 'new_sat' && (
                        <span className="px-2 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                          New SAT
                        </span>
                      )}
                      {test.isEnglishWritingOnly && (
                        <span className="px-2 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                          English Writing
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-ink-muted">{test.description}</p>
                    <div className="text-xs text-ink-muted pt-1">
                      {test.modules.length} Modules â€¢ {test.totalQuestions} Questions â€¢ {test.totalTimeMinutes} Minutes
                    </div>
                  </div>

                  
                  <div className="shrink-0 flex gap-2">
                    {finished[test.id] ? (
                      <>
                        <Button
                          onClick={() => navigateTo(test.id, true)}
                          disabled={isLoading}
                          variant="secondary"
                          className="w-full sm:w-auto px-5 py-2 font-medium"
                        >
                          Analytics
                        </Button>
                        <Button
                          onClick={() => navigateTo(test.id)}
                          disabled={isLoading}
                          className="w-full sm:w-auto px-5 py-2 font-medium"
                        >
                          Retake
                        </Button>
                      </>
                    ) : inProgress[test.id] ? (
                      <Button
                        onClick={() => navigateTo(test.id)}
                        disabled={isLoading}
                        className="w-full sm:w-auto px-5 py-2 font-medium"
                      >
                        {isLoading ? 'Loading...' : 'Continue'}
                      </Button>
                    ) : (
                      <Button
                        onClick={() => navigateTo(test.id)}
                        disabled={isLoading}
                        className="w-full sm:w-auto px-5 py-2 font-medium"
                      >
                        {isLoading ? 'Loading...' : 'Get Started'}
                      </Button>
                    )}
                  </div>

                </div>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
}
