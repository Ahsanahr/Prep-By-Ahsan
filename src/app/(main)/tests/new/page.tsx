'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, Button, PageHeader } from '@/components/ui';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { SAT_DOMAINS } from '@/data/satTopics';
import { TimerMode, TestConfig } from '@/types/sat';
import { generateCustomTestQuestions, checkAvailability } from '@/lib/customTestGenerator';
import { useExamStore } from '@/store/examStore';
import { useQuestionBank } from '@/lib/useQuestionBank';
import { trackFeatureUsage } from '@/lib/analytics';
import { LoadingScreen } from '@/components/LoadingScreen';

type DifficultyType = 'Adaptive' | 'Easy' | 'Medium' | 'Hard';

export default function CustomTestPage() {
  const router = useRouter();
  const { questions: bankQuestions, countsByDomain } = useQuestionBank();
  const { start } = useExamStore();

  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  // STEP 1 STATE: Topics and Number of Questions
  const [topicCounts, setTopicCounts] = useState<Record<string, number>>({});

  // STEP 2 STATE: Time
  const [timerMode, setTimerMode] = useState<TimerMode>('per_question');
  const [customTime, setCustomTime] = useState<number>(60); // minutes or seconds based on mode

  // STEP 3 STATE: Difficulty
  const [difficulty, setDifficulty] = useState<DifficultyType>('Adaptive');

  const [testTitle, setTestTitle] = useState<string>('');

  const [isStarting, setIsStarting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const totalQuestions = Object.values(topicCounts).reduce((acc, val) => acc + val, 0);

  const handleTopicCountChange = (domainId: string, value: string) => {
    const parsed = parseInt(value, 10);
    const num = isNaN(parsed) ? 0 : parsed;
    setTopicCounts(prev => ({
      ...prev,
      [domainId]: Math.max(0, num)
    }));
  };

  const handleNextToStep2 = () => {
    if (totalQuestions === 0) {
      setErrorMessage('Please enter at least 1 question for at least one topic.');
      return;
    }
    setErrorMessage(null);
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextToStep3 = () => {
    setErrorMessage(null);
    setCurrentStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const availability = checkAvailability({ topicCounts, difficulty }, bankQuestions);

  const handleLaunchTest = () => {
    setErrorMessage(null);

    const questions = generateCustomTestQuestions({
      topicCounts,
      difficulty
    }, bankQuestions);

    if (questions.length === 0) {
      setErrorMessage(`No ${difficulty === 'Adaptive' ? '' : difficulty + ' '}questions exist for the topics you picked. Choose another difficulty or topic.`);
      return;
    }
    if (questions.length < totalQuestions) {
      const ok = window.confirm(
        `Only ${questions.length} of the ${totalQuestions} questions you asked for are available at "${difficulty}" difficulty. Start with ${questions.length}?`
      );
      if (!ok) return;
    }
    setIsStarting(true);

    let timeLimitSeconds = 0;
    if (timerMode === 'per_question') {
      timeLimitSeconds = customTime;
    } else if (timerMode === 'total') {
      timeLimitSeconds = customTime * 60;
    }

    const testConfig: TestConfig = {
      mode: 'custom_test',
      title: testTitle.trim() ? testTitle.trim() : `Custom Test (${questions.length} Questions)`,
      section: 'all',
      domains: Object.keys(topicCounts).filter(k => topicCounts[k] > 0) as any[],
      explanationMode: 'off',
      showAnswerFeedback: false,
      timerMode,
      timeLimitSeconds,
      questionCount: questions.length,
      moduleCount: 1,
      layoutStyle: 'split',
      adaptive: difficulty === 'Adaptive',
    };

    trackFeatureUsage('custom_test_started', { questions: questions.length, timerMode, difficulty });
    start(questions, testConfig);

    setTimeout(() => {
      router.push(`/exam/custom-${Date.now()}`);
    }, 300);
  };

  if (isStarting) {
    return (
      <LoadingScreen
        fullPage={true}
        label="Generating Custom Test..."
        sublabel="Curating questions according to your selected topics and timing parameters."
      />
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8">
      <PageHeader 
        title="Custom Test Creator" 
        description="Build a targeted practice test in 3 simple steps." 
      />

      {/* Progress Indicator */}
      <div className="flex border-b border-line pb-4 space-x-6">
        {[1, 2, 3].map(step => (
          <div key={step} className={`flex items-center space-x-2 ${currentStep === step ? 'text-accent font-bold' : 'text-ink-muted'}`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs text-white ${currentStep === step ? 'bg-accent' : 'bg-surface-muted'}`}>
              {step}
            </div>
            <span className="text-sm">
              {step === 1 ? 'Content & Questions' : step === 2 ? 'Time' : 'Difficulty Level'}
            </span>
          </div>
        ))}
      </div>

      {errorMessage && (
        <div className="p-4 rounded-lg bg-danger/10 border border-danger/30 text-danger text-sm flex items-center gap-2">
          <span>{errorMessage}</span>
        </div>
      )}

      {/* STEP 1: Content and Questions */}
      {currentStep === 1 && (
        <Card className="p-6 md:p-8 space-y-6 bg-surface border border-line">
          <div className="border-b border-line pb-4">
            <h2 className="text-xl font-bold text-ink">1. Subjects & Question Count</h2>
            <p className="text-sm text-ink-muted mt-1">Specify exactly how many questions you want from each topic.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column: Reading & Writing */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-ink border-b border-line pb-2 mb-2">Reading & Writing</h3>
              {SAT_DOMAINS.filter(d => d.section === 'reading_writing').map(domain => {
                const available = countsByDomain[domain.id] || 0;
                return (
                  <div key={domain.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-line rounded-lg hover:border-accent/40 transition-colors gap-4">
                    <div>
                      <h3 className="font-bold text-ink text-base">{domain.name}</h3>
                      <p className="text-xs text-accent mt-1">{available} Available</p>
                    </div>
                    <div className="flex items-center space-x-3 shrink-0">
                      {available === 0 ? (
                        <span className="text-sm font-semibold text-ink-muted italic">In this case you can try something else.</span>
                      ) : (
                        <>
                          <span className="text-sm font-semibold text-ink">Qs:</span>
                          <input 
                            type="number"
                            min="0"
                            max={available}
                            value={topicCounts[domain.id] === undefined ? '' : topicCounts[domain.id]}
                            onChange={(e) => handleTopicCountChange(domain.id, e.target.value)}
                            placeholder="0"
                            className="w-20 p-2 border border-line rounded bg-surface focus:outline-none focus:border-accent text-center font-bold text-ink"
                          />
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Mathematics */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-ink border-b border-line pb-2 mb-2">Mathematics</h3>
              {SAT_DOMAINS.filter(d => d.section === 'math').map(domain => {
                const available = countsByDomain[domain.id] || 0;
                return (
                  <div key={domain.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-line rounded-lg hover:border-accent/40 transition-colors gap-4">
                    <div>
                      <h3 className="font-bold text-ink text-base">{domain.name}</h3>
                      <p className="text-xs text-accent mt-1">{available} Available</p>
                    </div>
                    <div className="flex items-center space-x-3 shrink-0">
                      {available === 0 ? (
                        <span className="text-sm font-semibold text-ink-muted italic max-w-[150px] text-right">In this case you can try something else.</span>
                      ) : (
                        <>
                          <span className="text-sm font-semibold text-ink">Qs:</span>
                          <input 
                            type="number"
                            min="0"
                            max={available}
                            value={topicCounts[domain.id] === undefined ? '' : topicCounts[domain.id]}
                            onChange={(e) => handleTopicCountChange(domain.id, e.target.value)}
                            placeholder="0"
                            className="w-20 p-2 border border-line rounded bg-surface focus:outline-none focus:border-accent text-center font-bold text-ink"
                          />
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-6 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-lg font-bold text-ink">
              Total Questions: <span className="text-accent">{totalQuestions}</span>
            </div>
            <Button size="lg" onClick={handleNextToStep2} className="flex items-center space-x-2 px-8">
              <span>Next</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      )}

      {/* STEP 2: Time Settings */}
      {currentStep === 2 && (
        <Card className="p-6 md:p-8 space-y-6 bg-surface border border-line">
          <div className="border-b border-line pb-4">
            <h2 className="text-xl font-bold text-ink">2. Time Options</h2>
            <p className="text-sm text-ink-muted mt-1">Choose exactly how you want to be timed.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <label className={`flex flex-col space-y-2 p-5 border-2 rounded-xl cursor-pointer transition-colors ${timerMode === 'per_question' ? 'border-accent bg-accent/5' : 'border-line hover:border-accent/40'}`}>
              <div className="flex items-center justify-between">
                <span className="font-bold text-ink">Time per Question</span>
                <input 
                  type="radio" 
                  name="timerMode" 
                  checked={timerMode === 'per_question'}
                  onChange={() => { setTimerMode('per_question'); setCustomTime(60); }}
                  className="w-4 h-4 text-accent focus:ring-accent"
                />
              </div>
              <span className="text-xs text-ink-muted">Set seconds per individual question.</span>
            </label>

            <label className={`flex flex-col space-y-2 p-5 border-2 rounded-xl cursor-pointer transition-colors ${timerMode === 'total' ? 'border-accent bg-accent/5' : 'border-line hover:border-accent/40'}`}>
              <div className="flex items-center justify-between">
                <span className="font-bold text-ink">Total Time</span>
                <input 
                  type="radio" 
                  name="timerMode" 
                  checked={timerMode === 'total'}
                  onChange={() => { setTimerMode('total'); setCustomTime(25); }}
                  className="w-4 h-4 text-accent focus:ring-accent"
                />
              </div>
              <span className="text-xs text-ink-muted">Set total minutes for the entire test.</span>
            </label>

            <label className={`flex flex-col space-y-2 p-5 border-2 rounded-xl cursor-pointer transition-colors ${timerMode === 'untimed' ? 'border-accent bg-accent/5' : 'border-line hover:border-accent/40'}`}>
              <div className="flex items-center justify-between">
                <span className="font-bold text-ink">Without Time</span>
                <input 
                  type="radio" 
                  name="timerMode" 
                  checked={timerMode === 'untimed'}
                  onChange={() => setTimerMode('untimed')}
                  className="w-4 h-4 text-accent focus:ring-accent"
                />
              </div>
              <span className="text-xs text-ink-muted">No countdown timer pressure.</span>
            </label>
          </div>

          {timerMode !== 'untimed' && (
            <div className="p-6 bg-surface-muted rounded-xl border border-line space-y-6 mt-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-ink">
                  Set {timerMode === 'per_question' ? 'Seconds' : 'Minutes'}
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    min="1"
                    max={timerMode === 'per_question' ? 300 : 180}
                    value={customTime}
                    onChange={(e) => setCustomTime(Math.max(1, Number(e.target.value)))}
                    className="w-20 h-9 px-2 text-center font-bold rounded border border-line focus:border-accent focus:outline-none"
                  />
                  <span className="text-sm font-medium text-ink-muted">
                    {timerMode === 'per_question' ? 'sec' : 'min'}
                  </span>
                </div>
              </div>
              
              <input 
                type="range"
                min="5"
                max={timerMode === 'per_question' ? 300 : 180}
                value={customTime}
                onChange={(e) => setCustomTime(Number(e.target.value))}
                className="w-full h-2 bg-line rounded-lg appearance-none cursor-pointer accent-accent"
              />
            </div>
          )}

          <div className="pt-6 border-t border-line flex items-center justify-between">
            <Button variant="secondary" onClick={() => setCurrentStep(1)} className="px-6">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Button>
            <Button size="lg" onClick={handleNextToStep3} className="flex items-center space-x-2 px-8">
              <span>Next</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      )}

      {/* STEP 3: Difficulty */}
      {currentStep === 3 && (
        <Card className="p-6 md:p-8 space-y-6 bg-surface border border-line">
          <div className="border-b border-line pb-4">
            <h2 className="text-xl font-bold text-ink">3. Difficulty Level & Name</h2>
            <p className="text-sm text-ink-muted mt-1">Select the difficulty and name your test.</p>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-bold text-ink block">Test Name (Optional)</label>
            <input 
              type="text" 
              value={testTitle}
              onChange={(e) => setTestTitle(e.target.value)}
              placeholder="e.g. Weekend Math Drill"
              className="w-full p-3 border border-line rounded-lg bg-surface focus:outline-none focus:border-accent text-ink"
            />
          </div>

          <div className="space-y-3 pt-4 border-t border-line">
            <label className="text-sm font-bold text-ink block">Select Difficulty</label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Easy', 'Medium', 'Hard', 'Adaptive'].map(level => (
                <div 
                  key={level}
                  onClick={() => setDifficulty(level as DifficultyType)}
                  className={`p-5 rounded-xl border-2 cursor-pointer transition-colors flex items-center justify-between ${
                    difficulty === level ? 'border-accent bg-accent/10' : 'border-line hover:border-accent/40'
                  }`}
                >
                  <span className="font-bold text-ink text-base">{level}</span>
                  {difficulty === level && <Check className="w-5 h-5 text-accent stroke-[3]" />}
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 bg-surface-muted rounded-xl border border-line mt-6">
            <h3 className="font-bold text-ink mb-3 flex items-center">
              <Check className="w-4 h-4 mr-2 text-success" />
              Test Summary
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-xs text-ink-muted block">Questions</span>
                <span className="font-bold text-ink">{totalQuestions} Questions</span>
              </div>
              <div>
                <span className="text-xs text-ink-muted block">Timing Mode</span>
                <span className="font-bold text-ink">
                  {timerMode === 'untimed' ? 'Untimed' : `${customTime} ${timerMode === 'per_question' ? 'seconds per question' : 'minutes total'}`}
                </span>
              </div>
              <div>
                <span className="text-xs text-ink-muted block">Difficulty</span>
                <span className="font-bold text-accent">{difficulty}</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-line flex items-center justify-between">
            <Button variant="secondary" onClick={() => setCurrentStep(2)} className="px-6">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Button>
            <Button size="lg" onClick={handleLaunchTest} disabled={isStarting} className="px-10 shadow-sm text-base">
              {isStarting ? 'Starting Exam...' : 'Start Test'}
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}
