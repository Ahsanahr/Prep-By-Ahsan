'use client';

import React from 'react';
import { Bookmark } from 'lucide-react';
import { Question, UserAnswerState } from '../../types/sat';
import { MathRenderer } from '../MathRenderer';

/* ------------------------------------------------------------------ */
/* Shared pieces used by every template                                */
/* ------------------------------------------------------------------ */

export interface TemplateProps {
  question: Question;
  index: number; // 0-based position in module
  answer: UserAnswerState;
  eliminatorOn: boolean;
  /** Highlight right/wrong choice right after answering (Practice Zone). */
  revealAnswer: boolean;
  /** Also show the written explanation. */
  showExplanation: boolean;
  onSelect: (id: 'A' | 'B' | 'C' | 'D') => void;
  onEliminate: (id: 'A' | 'B' | 'C' | 'D') => void;
  onSprChange: (val: string) => void;
  onToggleFlag: () => void;
  onToggleEliminator: () => void;
  /** false hides "Mark for Review" (Practice Zone). Defaults to true. */
  allowFlag?: boolean;
}

/** Bluebook question header: black number box, Mark for Review, ABC strike toggle. */
export const QuestionHeader: React.FC<Pick<TemplateProps, 'index' | 'answer' | 'onToggleFlag' | 'eliminatorOn' | 'onToggleEliminator' | 'question' | 'allowFlag'>> = ({
  index,
  answer,
  onToggleFlag,
  eliminatorOn,
  onToggleEliminator,
  question,
  allowFlag = true,
}) => (
  <div className="flex items-center justify-between bg-surface-muted border-b-2 border-dashed border-line -mx-1 px-1 pb-0 mb-6">
    <div className="flex items-center">
      <div className="w-8 h-8 bg-ink text-white font-bold text-sm flex items-center justify-center">{index + 1}</div>
      {allowFlag && (
        <button
          onClick={onToggleFlag}
          className={`ml-3 flex items-center gap-1.5 text-sm py-1.5 ${answer.flagged ? 'text-danger font-semibold' : 'text-ink'}`}
        >
          <Bookmark className={`w-4 h-4 ${answer.flagged ? 'fill-current' : ''}`} />
          Mark for Review
        </button>
      )}
    </div>
    {question.type === 'mcq' && (
      <button
        onClick={onToggleEliminator}
        title="Cross out answer choices"
        className={`text-xs font-bold px-2 py-1 rounded border line-through ${eliminatorOn ? 'bg-accent text-white border-accent' : 'border-ink-muted text-ink'}`}
      >
        ABC
      </button>
    )}
  </div>
);

/** Four answer choices with Bluebook-style per-choice cross-out button. */
export const AnswerChoices: React.FC<Pick<TemplateProps, 'question' | 'answer' | 'eliminatorOn' | 'onSelect' | 'onEliminate' | 'revealAnswer'>> = ({
  question,
  answer,
  eliminatorOn,
  onSelect,
  onEliminate,
  revealAnswer,
}) => (
  <div className="space-y-3">
    {question.options?.map((opt) => {
      const selected = answer.chosenOption === opt.id;
      const crossed = answer.eliminatedOptions?.includes(opt.id);
      const reveal = revealAnswer && answer.chosenOption;
      const isKey = reveal && opt.id === question.correctAnswer;
      const isWrongPick = reveal && selected && opt.id !== question.correctAnswer;
      return (
        <div key={opt.id} className="flex items-center gap-3">
          <button
            onClick={() => onSelect(opt.id)}
            className={`relative flex-1 flex items-start text-left p-3 rounded-lg border-2 transition-colors ${
              isKey
                ? 'border-success bg-success/10'
                : isWrongPick
                ? 'border-danger bg-danger/10'
                : selected
                ? 'border-accent bg-accent-soft'
                : 'border-ink/70 bg-surface hover:border-accent'
            } ${crossed ? 'opacity-50' : ''}`}
          >
            <span
              className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mr-3 border-2 ${
                selected ? 'bg-accent border-accent text-white' : 'border-ink text-ink'
              }`}
            >
              {opt.id}
            </span>
            <span className="flex-1 pt-0.5 text-[15px] leading-relaxed">
              <MathRenderer content={opt.text} />
            </span>
            {crossed && <span className="absolute left-2 right-2 top-1/2 h-0.5 bg-ink pointer-events-none" />}
          </button>
          {eliminatorOn && (
            <button
              onClick={() => onEliminate(opt.id)}
              className="w-7 h-7 text-xs font-bold rounded-full border border-ink text-ink shrink-0"
              title={crossed ? 'Undo' : `Cross out ${opt.id}`}
            >
              {crossed ? 'Undo' : <span className="line-through">{opt.id}</span>}
            </button>
          )}
        </div>
      );
    })}
  </div>
);

/** Student-produced response box with Bluebook's "Answer Preview". */
export const SprResponse: React.FC<Pick<TemplateProps, 'answer' | 'onSprChange'>> = ({ answer, onSprChange }) => {
  const val = answer.chosenOption || '';
  const preview = /^-?\d+\/\d+$/.test(val) ? `$\\frac{${val.replace('-', '').split('/')[0]}}{${val.split('/')[1]}}$` : val;
  return (
    <div className="space-y-3">
      <input
        type="text"
        inputMode="decimal"
        value={val}
        onChange={(e) => onSprChange(e.target.value)}
        maxLength={val.startsWith('-') ? 6 : 5}
        className="w-44 px-3 py-2 text-xl font-mono border-b-2 border-ink bg-surface focus:outline-none focus:border-accent"
        aria-label="Your answer"
      />
      <div className="text-sm text-ink-muted">
        Answer Preview: <span className="text-ink font-semibold">{val.startsWith('-') && preview.startsWith('$') ? '−' : ''}<MathRenderer content={preview || ' '} className="inline" /></span>
      </div>
    </div>
  );
};

export const ExplanationPanel: React.FC<{ question: Question }> = ({ question }) => (
  <div className="mt-8 p-5 rounded-lg border border-line bg-surface text-sm space-y-2">
    <div className="font-bold text-accent">Correct answer: {question.correctAnswer}</div>
    <div className="text-ink leading-relaxed">
      <MathRenderer content={question.explanation} />
    </div>
  </div>
);

/** Practice feedback: explanation panel when on, otherwise just the correct answer. */
export const Feedback: React.FC<Pick<TemplateProps, 'question' | 'answer' | 'revealAnswer' | 'showExplanation'>> = ({
  question,
  answer,
  revealAnswer,
  showExplanation,
}) => {
  if (!revealAnswer || !answer.chosenOption) return null;
  if (showExplanation) return <ExplanationPanel question={question} />;
  return (
    <div className="mt-6 p-4 rounded-lg border text-sm font-semibold">
      {answer.isCorrect ? 'Correct' : 'Incorrect'} � correct answer: {question.correctAnswer}
    </div>
  );
};

/** Renders a pipe-delimited markdown table. */
export const MarkdownTable: React.FC<{ md: string }> = ({ md }) => {
  const rows = md
    .trim()
    .split('\n')
    .filter((l) => l.includes('|') && !/^\s*\|?\s*:?-{2,}/.test(l))
    .map((l) => l.replace(/^\s*\||\|\s*$/g, '').split('|').map((c) => c.trim()));
  if (rows.length === 0) return null;
  const [head, ...body] = rows;
  return (
    <table className="mx-auto my-4 border-collapse text-sm">
      <thead>
        <tr>
          {head.map((h, i) => (
            <th key={i} className="border border-ink px-3 py-1.5 font-bold bg-surface-muted">
              <MathRenderer content={h} />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((r, i) => (
          <tr key={i}>
            {r.map((c, j) => (
              <td key={j} className="border border-ink px-3 py-1.5 text-center">
                <MathRenderer content={c} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const Figure: React.FC<{ question: Question }> = ({ question }) => (
  <>
    {question.figure && (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={question.figure.src} alt={question.figure.alt} className="mx-auto my-4 max-h-80 object-contain" />
    )}
    {question.table && <MarkdownTable md={question.table} />}
  </>
);

/* ------------------------------------------------------------------ */
/* Layout shells                                                       */
/* ------------------------------------------------------------------ */

/** Reading & Writing: passage left, question right, draggable-looking divider. */
export const SplitShell: React.FC<{ left: React.ReactNode; right: React.ReactNode }> = ({ left, right }) => (
  <div className="h-full flex">
    <div className="w-1/2 h-full overflow-y-auto px-12 py-10 bg-surface">
      <div className="max-w-[620px] ml-auto select-text font-serif text-[16px] leading-[1.9] text-ink">{left}</div>
    </div>
    <div className="w-1.5 bg-line shrink-0" />
    <div className="w-1/2 h-full overflow-y-auto px-12 py-10 bg-surface">
      <div className="max-w-[620px] select-text">{right}</div>
    </div>
  </div>
);

/** Math: single centred column with responsive padding for 2/3 + 1/3 layout. */
export const CenterShell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="h-full overflow-y-auto px-6 md:px-10 py-8 bg-surface">
    <div className="max-w-[720px] mx-auto select-text">{children}</div>
  </div>
);
