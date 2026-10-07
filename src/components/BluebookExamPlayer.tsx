'use client';

import React, { useState, useEffect } from 'react';
import {
  Clock,
  Bookmark,
  Calculator,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  X,
  ChevronDown,
  ChevronUp,
  MoreVertical,
  MapPin,
} from 'lucide-react';
import { Question, TestConfig, UserAnswerState, TestResultSummary } from '../types/sat';
import { DesmosCalculator } from './DesmosCalculator';
import { MathReferenceSheet } from './MathReferenceSheet';
import { LineReader } from './LineReader';
import { QuestionTemplateRenderer } from './question-templates';

export interface PlayerInitialState {
  currentIndex: number;
  answers: Record<string, UserAnswerState>;
  elapsedSeconds: number;
}

interface BluebookExamPlayerProps {
  config: TestConfig;
  questions: Question[];
  onExit: () => void;
  onFinish: (result: TestResultSummary) => void;
  /** Called whenever the user answers a question (Practice Zone saves solved IDs with it). */
  onAnswer?: (questionId: string) => void;
  initialState?: PlayerInitialState;
  onProgressUpdate?: (state: PlayerInitialState) => void;
}

export const BluebookExamPlayer: React.FC<BluebookExamPlayerProps> = ({
  config,
  questions,
  onExit,
  onFinish,
  onAnswer,
  initialState,
  onProgressUpdate,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialState?.currentIndex ?? 0);
  const [answers, setAnswers] = useState<Record<string, UserAnswerState>>(initialState?.answers ?? {});

  // Tool states
  const [isDesmosOpen, setIsDesmosOpen] = useState<boolean>(false);
  const [isReferenceOpen, setIsReferenceOpen] = useState<boolean>(false);
  const [isLineReaderActive, setIsLineReaderActive] = useState<boolean>(false);
  const [isEliminatorActive, setIsEliminatorActive] = useState<boolean>(false);
  const [showQuestionMenu, setShowQuestionMenu] = useState<boolean>(false);
  const [showDirections, setShowDirections] = useState<boolean>(false);
  const [showMoreMenu, setShowMoreMenu] = useState<boolean>(false);
  const [isInModuleReview, setIsInModuleReview] = useState<boolean>(false);
  const [isInBreak] = useState<boolean>(false);

  

  // Timer states
  const [secondsRemaining, setSecondsRemaining] = useState<number>(config.timeLimitSeconds - (initialState?.elapsedSeconds ?? 0));
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(initialState?.elapsedSeconds ?? 0);
  const [isTimerVisible, setIsTimerVisible] = useState<boolean>(true);
  const [autoRevealedTimer, setAutoRevealedTimer] = useState<boolean>(false);

  // Progress Sync
  useEffect(() => {
    if (onProgressUpdate && elapsedSeconds % 5 === 0) {
      onProgressUpdate({ currentIndex, answers, elapsedSeconds });
    }
  }, [currentIndex, answers, elapsedSeconds, onProgressUpdate]);

  if (questions.length === 0) {
    return (
      <div className="fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center gap-4 text-ink">
        <AlertCircle className="w-10 h-10 text-danger" />
        <p className="text-lg font-semibold">No valid questions are available for this selection.</p>
        <button onClick={onExit} className="px-6 py-2 rounded-full bg-accent text-white font-semibold">Back</button>
      </div>
    );
  }

  return (
    <PlayerBody
      {...{
        config, questions, onExit, onFinish, onAnswer,
        currentIndex, setCurrentIndex, answers, setAnswers,
        isDesmosOpen, setIsDesmosOpen, isReferenceOpen, setIsReferenceOpen,
        isLineReaderActive, setIsLineReaderActive, isEliminatorActive, setIsEliminatorActive,
        showQuestionMenu, setShowQuestionMenu, showDirections, setShowDirections,
        showMoreMenu, setShowMoreMenu, isInModuleReview, setIsInModuleReview, isInBreak,
        secondsRemaining, setSecondsRemaining, elapsedSeconds, setElapsedSeconds,
        isTimerVisible, setIsTimerVisible, autoRevealedTimer, setAutoRevealedTimer,
      }}
    />
  );
};

type S<T> = React.Dispatch<React.SetStateAction<T>>;
interface BodyProps extends BluebookExamPlayerProps {
  currentIndex: number; setCurrentIndex: S<number>;
  answers: Record<string, UserAnswerState>; setAnswers: S<Record<string, UserAnswerState>>;
  isDesmosOpen: boolean; setIsDesmosOpen: S<boolean>;
  isReferenceOpen: boolean; setIsReferenceOpen: S<boolean>;
  isLineReaderActive: boolean; setIsLineReaderActive: S<boolean>;
  isEliminatorActive: boolean; setIsEliminatorActive: S<boolean>;
  showQuestionMenu: boolean; setShowQuestionMenu: S<boolean>;
  showDirections: boolean; setShowDirections: S<boolean>;
  showMoreMenu: boolean; setShowMoreMenu: S<boolean>;
  isInModuleReview: boolean; setIsInModuleReview: S<boolean>;
  isInBreak: boolean;
  secondsRemaining: number; setSecondsRemaining: S<number>;
  elapsedSeconds: number; setElapsedSeconds: S<number>;
  isTimerVisible: boolean; setIsTimerVisible: S<boolean>;
  autoRevealedTimer: boolean; setAutoRevealedTimer: S<boolean>;
}

const PlayerBody: React.FC<BodyProps> = (p) => {
  const {
    config, questions, onExit, onFinish, onAnswer, currentIndex, setCurrentIndex, answers, setAnswers,
    isDesmosOpen, setIsDesmosOpen, isReferenceOpen, setIsReferenceOpen, isLineReaderActive, setIsLineReaderActive,
    isEliminatorActive, setIsEliminatorActive, showQuestionMenu, setShowQuestionMenu, showDirections, setShowDirections,
    showMoreMenu, setShowMoreMenu, isInModuleReview, setIsInModuleReview, isInBreak,
    secondsRemaining, setSecondsRemaining, elapsedSeconds, setElapsedSeconds,
    isTimerVisible, setIsTimerVisible, autoRevealedTimer, setAutoRevealedTimer,
  } = p;

  const currentQ = questions[currentIndex] || questions[0];
  const currentAnswerState: UserAnswerState = answers[currentQ.id] || { timeSpentSeconds: 0, eliminatedOptions: [] };
  const isMath = currentQ.section === 'math';
  const sectionLabel = config.title || (isMath ? 'Section 2: Math' : 'Section 1: Reading and Writing');
  const [isDesmosFloating, setIsDesmosFloating] = useState(false);

  // Reset per-question timer when question index changes
  useEffect(() => {
    if (config.timerMode === 'per_question') setSecondsRemaining(config.timeLimitSeconds);
  }, [currentIndex, config.timerMode, config.timeLimitSeconds, setSecondsRemaining]);

  // Timer countdown / elapsed tracking (also records time spent per question)
  useEffect(() => {
    if (isInBreak || isInModuleReview) return;
    const tickQuestion = () => {
      if (config.trackTime === false) return;
      setAnswers((prev) => {
        const cur = prev[currentQ.id] || { timeSpentSeconds: 0, eliminatedOptions: [] };
        return { ...prev, [currentQ.id]: { ...cur, timeSpentSeconds: cur.timeSpentSeconds + 1 } };
      });
    };

    if (config.timerMode === 'untimed') {
      const t = setInterval(() => {
        setElapsedSeconds((s) => s + 1);
        tickQuestion();
      }, 1000);
      return () => clearInterval(t);
    }

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          if (config.timerMode === 'per_question' && currentIndex < questions.length - 1) {
            setCurrentIndex((idx) => idx + 1);
            return config.timeLimitSeconds;
          }
          clearInterval(timer);
          setIsInModuleReview(true);
          return 0;
        }
        // Bluebook forces the timer visible for the last 5 minutes
        if (config.timerMode === 'total' && prev <= 300 && !isTimerVisible && !autoRevealedTimer) {
          setIsTimerVisible(true);
          setAutoRevealedTimer(true);
        }
        return prev - 1;
      });
      tickQuestion();
    }, 1000);
    return () => clearInterval(timer);
  }, [config.timerMode, config.timeLimitSeconds, isInBreak, isInModuleReview, currentQ.id, currentIndex, questions.length, isTimerVisible, autoRevealedTimer, setAnswers, setCurrentIndex, setElapsedSeconds, setIsInModuleReview, setIsTimerVisible, setAutoRevealedTimer, setSecondsRemaining]);

  const patchAnswer = (patch: Partial<UserAnswerState>) =>
    setAnswers((prev) => ({ ...prev, [currentQ.id]: { ...currentAnswerState, ...patch } }));

  const handleSelect = (id: 'A' | 'B' | 'C' | 'D') => {
    const elims = (currentAnswerState.eliminatedOptions || []).filter((e) => e !== id);
    patchAnswer({ chosenOption: id, isCorrect: id === currentQ.correctAnswer, eliminatedOptions: elims });
    onAnswer?.(currentQ.id);
  };

  const handleEliminate = (id: 'A' | 'B' | 'C' | 'D') => {
    const elims = currentAnswerState.eliminatedOptions || [];
    const next = elims.includes(id) ? elims.filter((e) => e !== id) : [...elims, id];
    patchAnswer({ eliminatedOptions: next, ...(currentAnswerState.chosenOption === id && !elims.includes(id) ? { chosenOption: undefined, isCorrect: false } : {}) });
  };

  const handleSprChange = (val: string) => {
    const cleaned = val.replace(/[^0-9./-]/g, '').slice(0, val.startsWith('-') ? 6 : 5);
    const norm = (s: string) => s.trim();
    const ok = norm(cleaned) === norm(currentQ.correctAnswer) || !!currentQ.acceptableAnswers?.map(norm).includes(norm(cleaned));
    patchAnswer({ chosenOption: cleaned, isCorrect: ok });
    if (cleaned) onAnswer?.(currentQ.id);
  };

  const goTo = (i: number) => {
    setCurrentIndex(i);
    setShowQuestionMenu(false);
    setIsInModuleReview(false);
  };
  const isPractice = config.mode === 'practice';
  const handleNext = () =>
    currentIndex < questions.length - 1 ? setCurrentIndex(currentIndex + 1) : isPractice ? handleFinishTest() : setIsInModuleReview(true);
  const handlePrev = () => currentIndex > 0 && setCurrentIndex(currentIndex - 1);

  const handleFinishTest = () => {
    let correctCount = 0;
    const domainStats: Record<string, { total: number; correct: number }> = {};
    let rwTotal = 0, rwCorrect = 0, mathTotal = 0, mathCorrect = 0;

    questions.forEach((q) => {
      const isCorrect = answers[q.id]?.isCorrect || false;
      if (isCorrect) correctCount++;
      domainStats[q.domain] = domainStats[q.domain] || { total: 0, correct: 0 };
      domainStats[q.domain].total++;
      if (isCorrect) domainStats[q.domain].correct++;
      if (q.section === 'reading_writing') { rwTotal++; if (isCorrect) rwCorrect++; }
      else { mathTotal++; if (isCorrect) mathCorrect++; }
    });

    const rwScore = rwTotal > 0 ? Math.round(200 + (rwCorrect / rwTotal) * 600) : 0;
    const mathScore = mathTotal > 0 ? Math.round(200 + (mathCorrect / mathTotal) * 600) : 0;

    onFinish({
      testId: 'test-' + Date.now(),
      title: config.title,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      mode: config.mode,
      totalQuestions: questions.length,
      correctCount,
      rawScorePercentage: Math.round((correctCount / Math.max(1, questions.length)) * 100),
      estimatedScaledScore: rwTotal > 0 && mathTotal > 0 ? rwScore + mathScore : rwScore || mathScore || 500,
      totalTimeSeconds: config.timerMode === 'untimed' ? elapsedSeconds : config.timeLimitSeconds - secondsRemaining,
      sectionBreakdown: {
        readingWriting: rwTotal > 0 ? { total: rwTotal, correct: rwCorrect, estimatedScore: rwScore } : undefined,
        math: mathTotal > 0 ? { total: mathTotal, correct: mathCorrect, estimatedScore: mathScore } : undefined,
      },
      domainStats,
      rawQuestions: questions,
      rawAnswers: answers,
    });
  };

  const fmt = (sec: number) => `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;

  /* ---------------- Question grid (used by navigator popup + review page) ---------------- */
  const QuestionGrid: React.FC<{ big?: boolean }> = ({ big }) => (
    <div className={`grid ${big ? 'grid-cols-10 gap-4' : 'grid-cols-10 gap-3'}`}>
      {questions.map((q, idx) => {
        const st = answers[q.id];
        const answered = !!st?.chosenOption;
        const current = idx === currentIndex;
        return (
          <button
            key={q.id}
            onClick={() => goTo(idx)}
            className={`relative ${big ? 'w-12 h-12 text-base' : 'w-9 h-9 text-sm'} font-semibold flex items-center justify-center rounded-sm ${
              answered ? 'bg-accent text-white border border-accent' : 'border border-dashed border-ink text-accent'
            }`}
          >
            {current && <MapPin className="absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-4 text-ink fill-ink" />}
            {idx + 1}
            {st?.flagged && <Bookmark className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 text-danger fill-danger" />}
          </button>
        );
      })}
    </div>
  );

  const Legend = () => (
    <div className="flex items-center justify-center gap-6 text-xs text-ink py-3 border-y border-line">
      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 fill-ink" /> Current</span>
      <span className="flex items-center gap-1"><span className="w-3.5 h-3.5 border border-dashed border-ink" /> Unanswered</span>
      <span className="flex items-center gap-1"><Bookmark className="w-3.5 h-3.5 text-danger fill-danger" /> For Review</span>
    </div>
  );

  /* ---------------- Check Your Work (end of module) ---------------- */
  if (isInModuleReview) {
    const answeredCount = questions.filter((q) => !!answers[q.id]?.chosenOption).length;
    return (
      <div className="fixed inset-0 z-50 bg-bg flex flex-col text-ink">
        <header className="h-16 border-b-2 border-dashed border-line bg-surface flex items-center px-6">
          <span className="font-semibold">{sectionLabel}</span>
          {config.timerMode !== 'untimed' && <span className="absolute left-1/2 -translate-x-1/2 text-xl font-bold tabular-nums">{fmt(secondsRemaining)}</span>}
        </header>
        <main className="flex-1 min-h-0 overflow-y-auto py-10">
          <div className="max-w-3xl mx-auto text-center space-y-2 mb-8">
            <h1 className="text-3xl font-semibold">Check Your Work</h1>
            <p className="text-sm text-ink-muted">
              On test day, you won&apos;t be able to move on to the next module until time expires. For these practice questions, you can click <b>Next</b> when you&apos;re ready to move on.
            </p>
          </div>
          <div className="max-w-3xl mx-auto bg-surface rounded-xl shadow-md p-8 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-bold">{sectionLabel} Questions</h2>
              <div className="flex gap-4 text-xs">
                <span className="flex items-center gap-1 text-success"><CheckCircle2 className="w-4 h-4" /> {answeredCount} answered</span>
                <span className="flex items-center gap-1 text-danger"><AlertCircle className="w-4 h-4" /> {questions.length - answeredCount} unanswered</span>
              </div>
            </div>
            <Legend />
            <div className="pt-4"><QuestionGrid big /></div>
          </div>
        </main>
        <footer className="h-16 border-t-2 border-dashed border-line bg-surface px-6 flex items-center justify-end gap-3">
          <button onClick={() => setIsInModuleReview(false)} className="px-6 py-2 rounded-full bg-accent text-white font-semibold">Back</button>
          <button onClick={handleFinishTest} className="px-6 py-2 rounded-full bg-accent text-white font-semibold">Next</button>
        </footer>
      </div>
    );
  }

  const lowTime = config.timerMode !== 'untimed' && secondsRemaining <= (config.timerMode === 'per_question' ? 15 : 300);

  /* ---------------- Main exam screen ---------------- */
  return (
    <div className="fixed inset-0 z-40 bg-bg flex flex-col font-sans text-ink overflow-hidden">
      {/* TOP BAR: section + directions | timer + hide | tools */}
      <header className="h-[72px] border-b-2 border-dashed border-line bg-surface flex items-center justify-between px-6 shrink-0 relative">
        <div>
          <div className="text-[17px] font-semibold">{sectionLabel}</div>
          <button onClick={() => setShowDirections(!showDirections)} className="text-sm flex items-center gap-1 mt-0.5">
            Directions {showDirections ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
          {config.timerMode === 'untimed' ? (
            config.trackTime === false ? null : <div className="text-xl font-bold tabular-nums">{fmt(elapsedSeconds)}</div>
          ) : isTimerVisible ? (
            <div className={`text-xl font-bold tabular-nums ${lowTime ? 'text-danger' : ''}`}>{fmt(secondsRemaining)}</div>
          ) : (
            <Clock className="w-6 h-6" />
          )}
          {config.timerMode !== 'untimed' && (
            <button
              onClick={() => setIsTimerVisible(!isTimerVisible)}
              className="mt-1 text-xs font-semibold px-3 py-0.5 rounded-full border border-ink"
            >
              {isTimerVisible ? 'Hide' : 'Show'}
            </button>
          )}
        </div>

        <div className="flex items-end gap-5">
          {isMath && (
            <>
              <ToolButton icon={<Calculator className="w-5 h-5" />} label="Calculator" active={isDesmosOpen} onClick={() => setIsDesmosOpen(!isDesmosOpen)} />
              <ToolButton icon={<BookOpen className="w-5 h-5" />} label="Reference" active={isReferenceOpen} onClick={() => setIsReferenceOpen(true)} />
            </>
          )}
          <div className="relative">
            <ToolButton icon={<MoreVertical className="w-5 h-5" />} label="More" active={showMoreMenu} onClick={() => setShowMoreMenu(!showMoreMenu)} />
            {showMoreMenu && (
              <div className="absolute right-0 top-14 w-48 bg-surface border border-line rounded-lg shadow-lg py-2 z-50 text-sm">
                <button className="w-full text-left px-4 py-2 hover:bg-surface-muted" onClick={() => { setIsLineReaderActive(!isLineReaderActive); setShowMoreMenu(false); }}>
                  {isLineReaderActive ? 'Hide' : 'Show'} Line Reader
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-surface-muted text-danger" onClick={() => { setShowMoreMenu(false); onExit(); }}>
                  Save and Exit
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {showDirections && (
        <div className="absolute top-[72px] left-6 z-40 w-[560px] bg-surface border border-line rounded-lg shadow-xl p-6 text-sm leading-relaxed">
          <button onClick={() => setShowDirections(false)} className="absolute right-3 top-3"><X className="w-4 h-4" /></button>
          {isMath ? (
            <p>The questions in this section address a number of important math skills. Use of a calculator is permitted for all questions. Unless otherwise indicated, all variables and expressions represent real numbers, figures are drawn to scale, and all figures lie in a plane. For student-produced response questions, enter your answer in the box; a negative answer may use 6 characters, positive answers 5.</p>
          ) : (
            <p>The questions in this section address a number of important reading and writing skills. Each question includes one or more passages, which may include a table or graph. Read each passage and question carefully, and then choose the best answer to the question based on the passage(s). All questions in this section are multiple-choice with four answer choices. Each question has a single best answer.</p>
          )}
        </div>
      )}

      {/* QUESTION CANVAS & DEDICATED DESMOS WORKSPACE */}
      <main className="flex-1 min-h-0 overflow-hidden relative flex">
        {/* Question Area: Takes 2 parts in Math when Desmos is open, full width otherwise */}
        <div
          className={`h-full overflow-hidden transition-all duration-150 ${
            isMath && isDesmosOpen && !isDesmosFloating ? 'flex-1 min-w-0' : 'w-full'
          }`}
        >
          <QuestionTemplateRenderer
            question={currentQ}
            index={currentIndex}
            answer={currentAnswerState}
            eliminatorOn={isEliminatorActive}
            revealAnswer={config.showAnswerFeedback ?? config.explanationMode === 'instant'}
            showExplanation={config.explanationMode === 'instant'}
            onSelect={handleSelect}
            onEliminate={handleEliminate}
            onSprChange={handleSprChange}
            allowFlag={config.allowFlagging !== false}
            onToggleFlag={() => patchAnswer({ flagged: !currentAnswerState.flagged })}
            onToggleEliminator={() => setIsEliminatorActive(!isEliminatorActive)}
          />
        </div>

        {/* Dedicated Pure Rectangular Desmos Workspace in Math (1/3 of screen width) */}
        {isMath && isDesmosOpen && !isDesmosFloating && (
          <>
            <div className="w-1.5 bg-line shrink-0" />
            <div className="w-[36%] min-w-[380px] max-w-[560px] h-full shrink-0 flex flex-col bg-surface border-l border-line z-30">
              <DesmosCalculator
                isOpen={true}
                isDocked={true}
                onClose={() => setIsDesmosOpen(false)}
                onToggleDock={() => setIsDesmosFloating(true)}
                mode="graphing"
              />
            </div>
          </>
        )}
      </main>

      {/* BOTTOM BAR: name | Question X of Y ▲ | Back / Next */}
      <footer className="h-16 border-t-2 border-dashed border-line bg-surface px-6 flex items-center justify-between shrink-0 relative">
        <div className="text-[15px] font-semibold">{config.title || 'Digital SAT Practice'}</div>

        {isPractice ? (
          <div className="absolute left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-md bg-ink text-white text-sm font-semibold">
            Question {currentIndex + 1} of {questions.length}
          </div>
        ) : (
        <button
          onClick={() => setShowQuestionMenu(!showQuestionMenu)}
          className="absolute left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-md bg-ink text-white text-sm font-semibold flex items-center gap-2"
        >
          Question {currentIndex + 1} of {questions.length}
          {showQuestionMenu ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </button>
        )}

        <div className="flex items-center gap-3">
          {currentIndex > 0 && (
            <button onClick={handlePrev} className="px-6 py-2 rounded-full bg-accent text-white text-sm font-semibold">Back</button>
          )}
          <button onClick={handleNext} className="px-6 py-2 rounded-full bg-accent text-white text-sm font-semibold">
            {isPractice && currentIndex === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>

        {/* Question navigator popup (opens above the footer) */}
        {!isPractice && showQuestionMenu && (
          <div className="absolute bottom-[72px] left-1/2 -translate-x-1/2 w-[560px] bg-surface rounded-xl shadow-2xl border border-line p-6 z-50">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-sm">{sectionLabel} Questions</h3>
              <button onClick={() => setShowQuestionMenu(false)}><X className="w-5 h-5" /></button>
            </div>
            <Legend />
            <div className="pt-6 pb-4"><QuestionGrid /></div>
            <div className="flex justify-center">
              <button
                onClick={() => { setShowQuestionMenu(false); setIsInModuleReview(true); }}
                className="px-5 py-1.5 rounded-full border-2 border-accent text-accent text-sm font-semibold"
              >
                Go to Review Page
              </button>
            </div>
          </div>
        )}
      </footer>

      {isDesmosOpen && (isDesmosFloating || !isMath) && (
        <DesmosCalculator
          isOpen={true}
          isDocked={false}
          onClose={() => setIsDesmosOpen(false)}
          onToggleDock={() => setIsDesmosFloating(false)}
          mode="graphing"
        />
      )}
      <MathReferenceSheet isOpen={isReferenceOpen} onClose={() => setIsReferenceOpen(false)} />
      <LineReader isActive={isLineReaderActive} onClose={() => setIsLineReaderActive(false)} />
    </div>
  );
};

const ToolButton: React.FC<{ icon: React.ReactNode; label: string; active?: boolean; onClick: () => void }> = ({ icon, label, active, onClick }) => (
  <button onClick={onClick} className={`flex flex-col items-center text-xs gap-0.5 ${active ? 'text-accent' : 'text-ink'}`}>
    {icon}
    <span>{label}</span>
  </button>
);
