'use client';

import React, { useState, useMemo } from 'react';
import reviewsRaw from '@/data/vocab/sat_reviews_1_86.json';
import affixesRaw from '@/data/vocab/sat_affixes.json';
import { QuickReview, VocabWord, AffixEntry } from '@/types/vocab';
import { 
  ChevronRight, 
  ArrowLeft, 
  CheckCircle2, 
  RotateCcw,
  Check,
  X,
  Play
} from 'lucide-react';

const reviewsData = reviewsRaw as unknown as QuickReview[];
const affixesData = affixesRaw as unknown as AffixEntry[];

// Main navigation states:
// 'home' = First screen with only 3 options
// 'exercises_list' = All 86 exercises listed vertically with "Start Practice"
// 'practice_session' = 3-step practice (Flashcards -> Columns -> Sentences)
// 'word_meanings' = Plain words & meanings list
// 'suffixes_prefixes' = Appendix A affixes
type ScreenView = 'home' | 'exercises_list' | 'practice_session' | 'word_meanings' | 'suffixes_prefixes';
type SessionStep = 'flashcards' | 'column_matching' | 'sentences';

export default function VocabPage() {
  const [currentScreen, setCurrentScreen] = useState<ScreenView>('home');
  const [selectedReviewId, setSelectedReviewId] = useState<number>(1);
  const [sessionStep, setSessionStep] = useState<SessionStep>('flashcards');

  // Track completed reviews (persisted in localStorage)
  const [completedReviews, setCompletedReviews] = useState<number[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('vocab_completed_reviews');
        return saved ? JSON.parse(saved) : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  // Modal state when clicking "Completed" to ask if user wants to retake
  const [retakePromptReviewId, setRetakePromptReviewId] = useState<number | null>(null);

  // Exercise 84 appears first, followed by others sequentially
  const orderedReviews = useMemo(() => {
    const ex84 = reviewsData.find((r) => r.review_id === 84);
    const others = reviewsData.filter((r) => r.review_id !== 84);
    return ex84 ? [ex84, ...others] : reviewsData;
  }, []);

  const currentReview = useMemo(() => {
    return reviewsData.find((r) => r.review_id === selectedReviewId) || reviewsData[0];
  }, [selectedReviewId]);

  const startExercise = (reviewId: number) => {
    setSelectedReviewId(reviewId);
    setSessionStep('flashcards');
    setCurrentScreen('practice_session');
  };

  const handleFinishExercise = (reviewId: number) => {
    setCompletedReviews((prev) => {
      if (!prev.includes(reviewId)) {
        const next = [...prev, reviewId];
        if (typeof window !== 'undefined') {
          try {
            localStorage.setItem('vocab_completed_reviews', JSON.stringify(next));
          } catch {}
        }
        return next;
      }
      return prev;
    });
    setCurrentScreen('exercises_list');
  };

  const handleRetakeConfirm = (reviewId: number) => {
    setRetakePromptReviewId(null);
    startExercise(reviewId);
  };

  return (
    <div className="min-h-[85vh] p-4 md:p-8 max-w-5xl mx-auto">
      {/* =========================================================================
          SCREEN 1: FIRST PAGE (ONLY 3 MINIMAL OPTIONS - NO DESCRIPTIONS AT TOP)
          ========================================================================= */}
      {currentScreen === 'home' && (
        <div className="py-12 md:py-16 flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-300">
          <h1 className="text-3xl md:text-5xl font-black text-navy tracking-tight text-center">
            Vocabulary
          </h1>

          <div className="w-full max-w-3xl space-y-4">
            {/* OPTION 1: Interactive Study */}
            <button
              type="button"
              onClick={() => setCurrentScreen('exercises_list')}
              className="w-full p-6 md:p-7 rounded-2xl border-2 border-line bg-surface hover:border-accent hover:bg-accent-soft/20 transition-all text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 group shadow-sm hover:shadow-md"
            >
              <div className="space-y-1">
                <span className="text-xl md:text-2xl font-bold text-navy group-hover:text-accent transition-colors block">
                  Interactive Study
                </span>
                <p className="text-xs md:text-sm text-ink-muted">
                  86 Practice Modules & Quizzes (Flashcards, Matching, Sentences)
                </p>
              </div>
              <span className="px-6 py-3 rounded-xl bg-navy hover:bg-[#163761] text-white font-bold text-sm inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all shrink-0">
                <span>Start</span>
                <ChevronRight className="w-4 h-4 text-accent" />
              </span>
            </button>

            {/* OPTION 2: Word Meanings */}
            <button
              type="button"
              onClick={() => setCurrentScreen('word_meanings')}
              className="w-full p-6 md:p-7 rounded-2xl border-2 border-line bg-surface hover:border-accent hover:bg-accent-soft/20 transition-all text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 group shadow-sm hover:shadow-md"
            >
              <div className="space-y-1">
                <span className="text-xl md:text-2xl font-bold text-navy group-hover:text-accent transition-colors block">
                  Word Meanings
                </span>
                <p className="text-xs md:text-sm text-ink-muted">
                  Plain Words, Pronunciations, Multi-line Meanings & Urdu Translations
                </p>
              </div>
              <span className="px-6 py-3 rounded-xl bg-navy hover:bg-[#163761] text-white font-bold text-sm inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all shrink-0">
                <span>Start</span>
                <ChevronRight className="w-4 h-4 text-accent" />
              </span>
            </button>

            {/* OPTION 3: Suffixes and Prefixes */}
            <button
              type="button"
              onClick={() => setCurrentScreen('suffixes_prefixes')}
              className="w-full p-6 md:p-7 rounded-2xl border-2 border-line bg-surface hover:border-accent hover:bg-accent-soft/20 transition-all text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 group shadow-sm hover:shadow-md"
            >
              <div className="space-y-1">
                <span className="text-xl md:text-2xl font-bold text-navy group-hover:text-accent transition-colors block">
                  Suffixes and Prefixes
                </span>
                <p className="text-xs md:text-sm text-ink-muted">
                  151 Essential Roots, Prefixes & Suffixes from Appendix A
                </p>
              </div>
              <span className="px-6 py-3 rounded-xl bg-navy hover:bg-[#163761] text-white font-bold text-sm inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all shrink-0">
                <span>Start</span>
                <ChevronRight className="w-4 h-4 text-accent" />
              </span>
            </button>
          </div>
        </div>
      )}

      {/* =========================================================================
          SCREEN 2: INTERACTIVE STUDY (EXERCISE 84 FIRST, FOLLOWED SEQUENTIALLY)
          ========================================================================= */}
      {currentScreen === 'exercises_list' && (
        <div className="space-y-5 animate-in fade-in duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-line">
            <button
              type="button"
              onClick={() => setCurrentScreen('home')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line bg-surface hover:bg-surface-muted text-xs font-semibold text-navy transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back
            </button>
            <span className="text-xs font-bold text-navy uppercase tracking-wider">
              {reviewsData.length} Practice Exercises
            </span>
          </div>

          {/* Vertical list: Exercise 84 at top, then Exercise 1, 2, 3... */}
          <div className="space-y-3">
            {orderedReviews.map((review) => {
              const sampleWords = review.words.slice(0, 5).map((w) => w.word).join(', ');
              const isCompleted = completedReviews.includes(review.review_id);

              return (
                <div
                  key={review.review_id}
                  className={`p-4 rounded-xl border bg-surface transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm ${
                    isCompleted ? 'border-emerald-300/80 bg-emerald-50/20' : 'border-line hover:border-accent'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-mono font-bold text-sm shrink-0 ${
                      isCompleted ? 'bg-emerald-600 text-white' : 'bg-navy text-white'
                    }`}>
                      {isCompleted ? (
                        <Check className="w-5 h-5 stroke-[2.5]" />
                      ) : (
                        review.review_id < 10 ? `0${review.review_id}` : review.review_id
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-navy">
                          Exercise {review.review_id}
                        </h3>
                        {isCompleted && (
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                            Completed
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-ink-muted">
                        <span className="font-semibold text-navy">Words:</span> {sampleWords}...
                      </p>
                    </div>
                  </div>

                  {/* Button: "Completed" (if finished) or "Start Practice" (if not finished) */}
                  <div className="shrink-0">
                    {isCompleted ? (
                      <button
                        type="button"
                        onClick={() => setRetakePromptReviewId(review.review_id)}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(16,185,129,0.39)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
                      >
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>Completed</span>
                        <RotateCcw className="w-3 h-3 opacity-80" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => startExercise(review.review_id)}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-accent text-white font-bold text-xs inline-flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(31,91,216,0.39)] hover:shadow-[0_6px_20px_rgba(31,91,216,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Start Practice</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* RETAKE CONFIRMATION MODAL */}
          {retakePromptReviewId !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
              <div className="w-full max-w-sm rounded-2xl bg-surface border-2 border-line p-6 shadow-2xl space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-12 h-12 rounded-xl bg-accent-soft text-accent flex items-center justify-center mx-auto">
                  <RotateCcw className="w-6 h-6" />
                </div>
                <div className="text-center space-y-1.5">
                  <h3 className="text-lg font-black text-navy">
                    Retake Exercise {retakePromptReviewId}?
                  </h3>
                  <p className="text-xs text-ink-muted">
                    You have already completed this exercise. Would you like to practice it again from stage 1?
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setRetakePromptReviewId(null)}
                    className="py-2.5 px-4 rounded-xl border border-line bg-surface hover:bg-surface-muted text-ink font-bold text-xs transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRetakeConfirm(retakePromptReviewId)}
                    className="py-2.5 px-4 rounded-xl bg-navy hover:bg-[#163761] text-white font-bold text-xs transition-colors shadow-md"
                  >
                    Yes, Retake
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* =========================================================================
          SCREEN 3: PRACTICE SESSION (3 STAGES: FLASHCARDS -> COLUMNS -> SENTENCES)
          ========================================================================= */}
      {currentScreen === 'practice_session' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          {/* Header & Step Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-line">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setCurrentScreen('exercises_list')}
                className="p-2 rounded-lg border border-line bg-surface hover:bg-surface-muted text-navy transition-colors"
                title="Back to Exercises"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <div>
                <h2 className="text-lg font-bold text-navy">
                  Exercise {currentReview.review_id}
                </h2>
                <span className="text-[11px] text-ink-muted">
                  {currentReview.words.length} Vocabulary Words
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 p-1 rounded-xl bg-surface-muted border border-line text-xs font-semibold">
              <button
                type="button"
                onClick={() => setSessionStep('flashcards')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  sessionStep === 'flashcards'
                    ? 'bg-navy text-white shadow-sm'
                    : 'text-ink-muted hover:text-navy'
                }`}
              >
                1. Flashcards
              </button>
              <button
                type="button"
                onClick={() => setSessionStep('column_matching')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  sessionStep === 'column_matching'
                    ? 'bg-navy text-white shadow-sm'
                    : 'text-ink-muted hover:text-navy'
                }`}
              >
                2. Columns
              </button>
              <button
                type="button"
                onClick={() => setSessionStep('sentences')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  sessionStep === 'sentences'
                    ? 'bg-navy text-white shadow-sm'
                    : 'text-ink-muted hover:text-navy'
                }`}
              >
                3. Sentences
              </button>
            </div>
          </div>

          {/* 1. ANIMATED FLASHCARDS */}
          {sessionStep === 'flashcards' && (
            <AnimatedFlashcardDeck 
              words={currentReview.words} 
              onProceed={() => setSessionStep('column_matching')}
            />
          )}

          {/* 2. TWO STRICT VERTICAL COLUMNS */}
          {sessionStep === 'column_matching' && (
            <VerticalColumnMatcher 
              review={currentReview} 
              onProceed={() => setSessionStep('sentences')}
            />
          )}

          {/* 3. CONTEXT SENTENCE PRACTICE */}
          {sessionStep === 'sentences' && (
            <ContextSentenceQuiz 
              review={currentReview} 
              onFinish={() => handleFinishExercise(currentReview.review_id)}
            />
          )}
        </div>
      )}

      {/* =========================================================================
          SCREEN 4: WORD MEANINGS (PLAIN WORDS AND THEIR MEANINGS - ENHANCED TEXT)
          ========================================================================= */}
      {currentScreen === 'word_meanings' && (
        <div className="space-y-4 animate-in fade-in duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-line">
            <button
              type="button"
              onClick={() => setCurrentScreen('home')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line bg-surface hover:bg-surface-muted text-xs font-semibold text-navy transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back
            </button>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-navy uppercase">Set:</span>
              <select
                value={selectedReviewId}
                onChange={(e) => setSelectedReviewId(Number(e.target.value))}
                className="bg-surface-muted text-navy font-semibold rounded-lg px-2.5 py-1 border border-line text-xs focus:outline-none focus:border-accent"
              >
                {reviewsData.map((r) => (
                  <option key={r.review_id} value={r.review_id}>
                    Exercise {r.review_id}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Vertical list of words & enlarged, readable meanings with Urdu */}
          <div className="space-y-4">
            {currentReview.words.map((w: VocabWord, idx: number) => {
              const defs = w.definitions_list && w.definitions_list.length > 0
                ? w.definitions_list
                : (w.definitions && w.definitions.length > 0 ? w.definitions : [w.matching_definition]);

              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-line bg-surface space-y-3.5 shadow-sm hover:border-accent/40 transition-colors"
                >
                  {/* Word Header with Urdu Meaning */}
                  <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-2.5">
                    <div className="flex flex-wrap items-baseline gap-2.5">
                      <span className="text-2xl font-black text-navy">{w.word}</span>
                      {w.part_of_speech && (
                        <span className="text-xs font-mono font-bold text-accent bg-accent-soft px-2.5 py-0.5 rounded-md">
                          {w.part_of_speech}
                        </span>
                      )}
                      {w.pronunciation && (
                        <span className="text-xs font-mono text-ink-muted">
                          /{w.pronunciation}/
                        </span>
                      )}
                    </div>

                    {/* Single Clean Urdu Meaning */}
                    {w.urdu_meaning && (
                      <span 
                        dir="rtl"
                        className="text-base font-bold text-navy bg-accent-soft/70 px-3 py-1 rounded-lg border border-accent/20"
                      >
                        {w.urdu_meaning}
                      </span>
                    )}
                  </div>

                  {/* Definitions on Separate Lines */}
                  <div className="p-3.5 rounded-xl bg-surface-muted border border-line space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-ink-muted block">
                      English Meanings:
                    </span>
                    <div className="space-y-1.5">
                      {defs.map((d: string, dIdx: number) => (
                        <div key={dIdx} className="flex items-start gap-2">
                          <span className="w-4 h-4 rounded-full bg-accent-soft text-accent text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {dIdx + 1}
                          </span>
                          <p className="text-sm md:text-base font-medium text-navy leading-relaxed">
                            {d}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Context Example Sentence */}
                  {w.sentences && w.sentences.length > 0 && (
                    <div className="space-y-1 pt-0.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-ink-muted">Example:</span>
                      <p className="text-xs md:text-sm text-ink-muted italic pl-3 border-l-2 border-accent leading-relaxed">
                        &quot;{w.sentences[0]}&quot;
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* =========================================================================
          SCREEN 5: SUFFIXES & PREFIXES (APPENDIX A)
          ========================================================================= */}
      {currentScreen === 'suffixes_prefixes' && (
        <div className="space-y-4 animate-in fade-in duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-line">
            <button
              type="button"
              onClick={() => setCurrentScreen('home')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line bg-surface hover:bg-surface-muted text-xs font-semibold text-navy transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back
            </button>
            <span className="text-xs font-bold text-navy uppercase tracking-wider">
              Suffixes and Prefixes ({affixesData.length})
            </span>
          </div>

          <div className="space-y-2">
            {affixesData.map((item: AffixEntry, idx: number) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-line bg-surface flex items-start justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-extrabold text-navy font-mono">{item.affix}</span>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-accent-soft text-accent">
                      {item.affix_type}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-navy mt-1">
                    {item.meaning}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// =============================================================================
// COMPONENT 1: 3D ANIMATED FLIP FLASHCARDS
// =============================================================================
function AnimatedFlashcardDeck({ 
  words, 
  onProceed 
}: { 
  words: VocabWord[]; 
  onProceed: () => void; 
}) {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCount, setKnownCount] = useState(0);

  const currentWord = words[index] || words[0];
  const total = words.length;

  const handleResponse = (knows: boolean) => {
    if (knows) {
      setKnownCount((prev) => prev + 1);
      nextCard();
    } else {
      setIsFlipped(true);
    }
  };

  const nextCard = () => {
    setIsFlipped(false);
    if (index + 1 < total) {
      setIndex((prev) => prev + 1);
    } else {
      onProceed();
    }
  };

  const definition = currentWord.definitions && currentWord.definitions.length > 0 
    ? currentWord.definitions.join('; ') 
    : currentWord.matching_definition;

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {/* Top indicator bar */}
      <div className="flex items-center justify-between text-xs md:text-sm text-ink-muted font-bold px-1">
        <span>Word {index + 1} of {total}</span>
        <span>Known: <strong className="text-accent">{knownCount}</strong></span>
      </div>

      {/* 3D Flip Card Container */}
      <div className="perspective-1000 w-full min-h-[480px] md:min-h-[520px]">
        <div
          className={`relative w-full min-h-[480px] md:min-h-[520px] transition-transform duration-500 transform-style-preserve-3d ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* FRONT SIDE (ONLY THE WORD - LARGE PROPORTIONED TEXT) */}
          <div className="absolute inset-0 w-full h-full backface-hidden p-8 md:p-12 rounded-2xl border-2 border-line bg-surface shadow-md flex flex-col justify-between">
            <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-navy tracking-tight leading-tight select-none">
                {currentWord.word}
              </h2>
            </div>

            <div className="pt-6 border-t border-line space-y-3">
              <p className="text-center text-xs md:text-sm font-semibold text-ink-muted">
                Do you know the meaning of this word?
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Red Classic Button for No */}
                <button
                  type="button"
                  onClick={() => handleResponse(false)}
                  className="py-3 px-4 sm:px-6 rounded-xl border border-red-200 bg-red-50 hover:bg-red-100 text-red-600 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95"
                >
                  <X className="w-4 h-4 shrink-0" />
                  <span>No (Flip Card)</span>
                </button>
                {/* Green Classic Button for Yes */}
                <button
                  type="button"
                  onClick={() => handleResponse(true)}
                  className="py-3 px-4 sm:px-6 rounded-xl border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95"
                >
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Yes, I Know</span>
                </button>
              </div>
            </div>
          </div>

          {/* BACK SIDE (FLIPPED: POS, PRONUNCIATION, HIGHLIGHTED URDU & LINE-BY-LINE MEANINGS, SENTENCE) */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-accent/40 bg-surface shadow-md flex flex-col justify-between overflow-hidden">
            <div className="space-y-4 overflow-y-auto pr-1">
              {/* Header with Word, Part of Speech, Pronunciation & Urdu Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
                <div className="flex flex-wrap items-baseline gap-2.5">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy">
                    {currentWord.word}
                  </h3>
                  {currentWord.urdu_meaning && (
                    <span 
                      dir="rtl"
                      className="text-base sm:text-lg md:text-xl font-bold text-navy bg-accent-soft/80 px-3 py-1 rounded-lg border border-accent/30 shadow-sm"
                    >
                      {currentWord.urdu_meaning}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {currentWord.pronunciation && (
                    <span className="text-xs sm:text-sm font-mono font-bold text-accent">
                      /{currentWord.pronunciation}/
                    </span>
                  )}
                  {currentWord.part_of_speech && (
                    <span className="text-xs sm:text-sm font-mono font-bold uppercase px-2.5 py-1 rounded-lg bg-accent-soft text-accent border border-accent/20">
                      {currentWord.part_of_speech}
                    </span>
                  )}
                </div>
              </div>

              {/* Highlighted Meaning Box (Separate lines for multiple definitions) */}
              <div className="p-4 rounded-xl bg-accent-soft/40 border border-accent/30 space-y-2">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-navy block">
                  Meanings:
                </span>
                <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                  {(currentWord.definitions_list && currentWord.definitions_list.length > 0 
                    ? currentWord.definitions_list 
                    : [definition]
                  ).map((d: string, dIdx: number) => (
                    <div key={dIdx} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        {dIdx + 1}
                      </span>
                      <p className="text-sm sm:text-base font-semibold text-navy leading-relaxed">
                        {d}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Context Example Sentence */}
              {currentWord.sentences && currentWord.sentences.length > 0 && (
                <div className="space-y-1 pt-1">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-ink-muted block">
                    Example Sentence:
                  </span>
                  <p className="text-xs sm:text-sm text-ink-muted italic border-l-2 border-accent pl-3 leading-relaxed">
                    &quot;{currentWord.sentences[0]}&quot;
                  </p>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-line mt-2 shrink-0">
              <button
                type="button"
                onClick={nextCard}
                className="w-full py-3 rounded-xl bg-navy hover:bg-[#163761] text-white text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-[0_4px_14px_0_rgba(11,31,58,0.3)] active:scale-[0.99]"
              >
                <span>Continue</span>
                <ChevronRight className="w-4 h-4 text-accent" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// COMPONENT 2: TWO STRICTLY VERTICAL COLUMNS MATCHING (CLASSIC GREEN & RED)
// =============================================================================
function VerticalColumnMatcher({ 
  review, 
  onProceed 
}: { 
  review: QuickReview; 
  onProceed: () => void; 
}) {
  const [selectedWordNum, setSelectedWordNum] = useState<number | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Record<number, string>>({});
  const [wrongAttempt, setWrongAttempt] = useState<{ num: number; letter: string } | null>(null);

  const leftWords = useMemo(() => {
    return Object.entries(review.col1_words || {})
      .map(([numStr, wordName]) => ({
        num: Number(numStr),
        word: String(wordName)
      }))
      .sort((a, b) => a.num - b.num);
  }, [review.review_id, review.col1_words]);

  const rightDefinitions = useMemo(() => {
    return Object.entries(review.col2_definitions || {}).map(([letter, def]) => ({
      letter: String(letter),
      def: String(def)
    }));
  }, [review.review_id, review.col2_definitions]);

  const handleReset = () => {
    setSelectedWordNum(null);
    setMatchedPairs({});
    setWrongAttempt(null);
  };

  const handleSelectWord = (num: number) => {
    if (matchedPairs[num]) return;
    setSelectedWordNum(num);
    setWrongAttempt(null);
  };

  const handleSelectDefinition = (letter: string) => {
    if (selectedWordNum === null) return;
    if (Object.values(matchedPairs).includes(letter)) return;

    const expectedLetter = review.answer_key ? String(review.answer_key[selectedWordNum] || '') : '';
    const isCorrect = expectedLetter && expectedLetter.toLowerCase() === letter.toLowerCase();

    if (isCorrect) {
      setMatchedPairs((prev) => ({ ...prev, [selectedWordNum]: letter }));
      setSelectedWordNum(null);
      setWrongAttempt(null);
    } else {
      setWrongAttempt({ num: selectedWordNum, letter });
      setTimeout(() => setWrongAttempt(null), 600);
    }
  };

  const isCompleted = leftWords.length > 0 && Object.keys(matchedPairs).length === leftWords.length;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs pb-1">
        <span className="text-ink-muted">
          Matched: <strong className="text-navy">{Object.keys(matchedPairs).length}</strong> / {leftWords.length}
        </span>
        <button
          type="button"
          onClick={handleReset}
          className="px-2 py-1 rounded border border-line bg-surface hover:bg-surface-muted text-navy font-semibold flex items-center gap-1 text-[11px]"
        >
          <RotateCcw className="w-3 h-3 text-ink-muted" /> Reset
        </button>
      </div>

      {isCompleted && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between animate-in fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span className="text-xs font-bold text-emerald-800">
              All words matched correctly! Proceed to sentence practice.
            </span>
          </div>
          <button
            type="button"
            onClick={onProceed}
            className="px-4 py-2 rounded-xl bg-accent text-white text-xs font-bold flex items-center gap-1 shadow-[0_4px_14px_0_rgba(31,91,216,0.39)] transition-all"
          >
            <span>Next Stage →</span>
          </button>
        </div>
      )}

      {/* TWO STRICT VERTICAL COLUMNS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* LEFT COLUMN: WORDS (VERTICAL) */}
        <div className="space-y-2">
          <div className="text-[10px] font-bold uppercase tracking-wider text-navy px-1">
            Column 1: Words
          </div>
          <div className="flex flex-col space-y-1.5">
            {leftWords.map(({ num, word }) => {
              const isMatched = !!matchedPairs[num];
              const isSelected = selectedWordNum === num;
              const isWrong = wrongAttempt?.num === num;

              return (
                <button
                  key={num}
                  type="button"
                  disabled={isMatched}
                  onClick={() => handleSelectWord(num)}
                  className={`w-full p-2.5 rounded-lg border text-left text-xs font-bold transition-all flex items-center justify-between ${
                    isMatched
                      ? 'border-emerald-300 bg-emerald-50 text-emerald-700 opacity-80 cursor-default'
                      : isWrong
                      ? 'border-red-400 bg-red-50 text-red-700 animate-shake-wrong'
                      : isSelected
                      ? 'border-accent bg-accent-soft text-navy ring-2 ring-accent/30'
                      : 'border-line bg-surface hover:border-accent hover:bg-surface-muted text-navy'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-surface-muted text-ink-muted text-[10px] flex items-center justify-center font-bold">
                      {num}
                    </span>
                    <span>{word}</span>
                  </div>
                  {isMatched && <span className="text-xs text-emerald-600 font-bold">✓</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: MEANINGS (VERTICAL) */}
        <div className="space-y-2">
          <div className="text-[10px] font-bold uppercase tracking-wider text-navy px-1">
            Column 2: Meanings
          </div>
          <div className="flex flex-col space-y-1.5">
            {rightDefinitions.map(({ letter, def }) => {
              const isMatched = Object.values(matchedPairs).includes(letter);
              const isWrong = wrongAttempt?.letter === letter;

              return (
                <button
                  key={letter}
                  type="button"
                  disabled={isMatched}
                  onClick={() => handleSelectDefinition(letter)}
                  className={`w-full p-2.5 rounded-lg border text-left text-xs transition-all flex items-center justify-between ${
                    isMatched
                      ? 'border-emerald-300 bg-emerald-50 text-emerald-700 opacity-80 cursor-default'
                      : isWrong
                      ? 'border-red-400 bg-red-50 text-red-700 animate-shake-wrong'
                      : selectedWordNum !== null
                      ? 'border-line bg-surface hover:border-accent hover:bg-surface-muted text-navy'
                      : 'border-line bg-surface text-navy'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-surface-muted text-ink-muted text-[10px] uppercase flex items-center justify-center font-bold">
                      {letter}
                    </span>
                    <span className="font-semibold text-navy leading-snug">{def}</span>
                  </div>
                  {isMatched && <span className="text-xs text-emerald-600 font-bold">✓</span>}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// COMPONENT 3: RANDOMIZED CONTEXT SENTENCE QUIZ (CLASSIC GREEN & RED)
// =============================================================================
function ContextSentenceQuiz({ 
  review, 
  onFinish 
}: { 
  review: QuickReview; 
  onFinish: () => void; 
}) {
  const [questionIdx, setQuestionIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  // Generate randomized questions and random options
  const questions = useMemo(() => {
    const list: Array<{
      targetWord: string;
      sentence: string;
      options: string[];
      correctAnswer: string;
      definition: string;
    }> = [];

    // Shuffle words so questions appear in random order
    const shuffledWords = [...review.words].sort(() => Math.random() - 0.5);

    shuffledWords.forEach((item: VocabWord) => {
      if (!item.sentences || item.sentences.length === 0) return;
      
      // Randomly pick one of the word's sentences
      const sentence = item.sentences[Math.floor(Math.random() * item.sentences.length)];
      const regex = new RegExp(`\\b${item.word}\\b`, 'gi');
      const blanked = sentence.replace(regex, '__________');

      // Randomly pick 3 distinct distractors from the review
      const otherWords = review.words
        .filter((w) => w.word.toLowerCase() !== item.word.toLowerCase())
        .map((w) => w.word)
        .sort(() => Math.random() - 0.5);

      const distractors = otherWords.slice(0, 3);
      const allOptions = [item.word, ...distractors].sort(() => Math.random() - 0.5);
      const def = item.definitions && item.definitions.length > 0 ? item.definitions[0] : item.matching_definition;

      list.push({
        targetWord: item.word,
        sentence: blanked,
        options: allOptions,
        correctAnswer: item.word,
        definition: def
      });
    });

    return list.slice(0, 12);
  }, [review.review_id, review.words]);

  const currentQ = questions[questionIdx];

  const handleOptionSelect = (opt: string) => {
    if (isAnswered) return;
    setSelectedOpt(opt);
    setIsAnswered(true);
    if (opt.toLowerCase() === currentQ.correctAnswer.toLowerCase()) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    setSelectedOpt(null);
    setIsAnswered(false);
    setQuestionIdx((prev) => prev + 1);
  };

  if (!currentQ || questionIdx >= questions.length) {
    return (
      <div className="p-8 rounded-2xl border border-line bg-surface text-center space-y-4 max-w-sm mx-auto shadow-sm">
        <h3 className="text-lg font-black text-navy">Exercise Completed</h3>
        <p className="text-xs text-ink-muted">
          Score: <strong className="text-emerald-600 font-bold">{score}</strong> / {questions.length} Correct
        </p>
        <button
          type="button"
          onClick={onFinish}
          className="w-full py-2.5 rounded-xl bg-accent text-white text-xs font-bold transition-all shadow-[0_4px_14px_0_rgba(31,91,216,0.39)]"
        >
          Return to All Exercises
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4 max-w-lg mx-auto">
      <div className="flex items-center justify-between text-xs text-ink-muted">
        <span>Question {questionIdx + 1} of {questions.length}</span>
        <span>Score: <strong className="text-accent">{score}</strong></span>
      </div>

      <div className="p-6 rounded-2xl border border-line bg-surface space-y-5 shadow-sm">
        <p className="text-sm md:text-base font-semibold text-navy leading-relaxed">
          &quot;{currentQ.sentence}&quot;
        </p>

        <div className="flex flex-col space-y-2">
          {currentQ.options.map((opt, idx) => {
            const isCorrect = opt.toLowerCase() === currentQ.correctAnswer.toLowerCase();
            const isSelected = selectedOpt === opt;

            let style = 'border-line bg-surface hover:bg-surface-muted text-navy';
            if (isAnswered) {
              if (isCorrect) {
                // Classic Green for correct
                style = 'border-emerald-500 bg-emerald-50 text-emerald-800 font-bold';
              } else if (isSelected) {
                // Classic Red for wrong
                style = 'border-red-500 bg-red-50 text-red-800 font-bold animate-shake-wrong';
              } else {
                style = 'border-line opacity-50 text-ink-muted';
              }
            }

            return (
              <button
                key={idx}
                type="button"
                disabled={isAnswered}
                onClick={() => handleOptionSelect(opt)}
                className={`w-full p-3 rounded-xl border text-left text-xs font-bold transition-all flex items-center justify-between ${style}`}
              >
                <span>{opt}</span>
                {isAnswered && isCorrect && <span className="text-emerald-600 font-bold">✓</span>}
                {isAnswered && isSelected && !isCorrect && <span className="text-red-600 font-bold">✗</span>}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="pt-3 border-t border-line flex items-center justify-between">
            <span className="text-xs text-ink-muted">
              Answer: <strong className="text-navy">{currentQ.correctAnswer}</strong>
            </span>
            <button
              type="button"
              onClick={handleNext}
              className="px-4 py-2 rounded-xl bg-accent text-white text-xs font-bold flex items-center gap-1 transition-all shadow-[0_4px_14px_0_rgba(31,91,216,0.39)]"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
