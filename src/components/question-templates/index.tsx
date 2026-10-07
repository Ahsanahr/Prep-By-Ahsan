'use client';

import React from 'react';
import { MathRenderer } from '../MathRenderer';
import { inferTemplate } from '../../lib/questionValidator';
import {
  TemplateProps,
  QuestionHeader,
  AnswerChoices,
  SprResponse,
  Feedback,
  Figure,
  SplitShell,
  CenterShell,
} from './shared';

/* Right-hand question column used by all Reading & Writing templates. */
const RwQuestionColumn: React.FC<TemplateProps> = (p) => (
  <>
    <QuestionHeader {...p} />
    <div className="text-[16px] leading-[1.7] text-ink mb-6">
      <MathRenderer content={p.question.prompt} />
    </div>
    <AnswerChoices {...p} />
    <Feedback {...p} />
  </>
);

/* ---------- Reading & Writing ---------- */

export const RwPassageTemplate: React.FC<TemplateProps> = (p) => (
  <SplitShell left={<MathRenderer content={p.question.passage || ''} />} right={<RwQuestionColumn {...p} />} />
);

/** Splits "Text 1 ... Text 2 ..." into two labelled blocks. */
export const RwPairedTemplate: React.FC<TemplateProps> = (p) => {
  const raw = p.question.passage || '';
  const parts = raw.split(/^\s*T\s?ext 2\s*$/m);
  const t1 = (parts[0] || '').replace(/^\s*T\s?ext 1\s*$/m, '').trim();
  const t2 = (parts[1] || '').trim();
  return (
    <SplitShell
      left={
        <div className="space-y-6">
          <div>
            <div className="font-sans font-bold mb-1">Text 1</div>
            <MathRenderer content={t1} />
          </div>
          <div>
            <div className="font-sans font-bold mb-1">Text 2</div>
            <MathRenderer content={t2} />
          </div>
        </div>
      }
      right={<RwQuestionColumn {...p} />}
    />
  );
};

/** Rhetorical Synthesis: intro line + bulleted notes. */
export const RwNotesTemplate: React.FC<TemplateProps> = (p) => {
  const lines = (p.question.passage || '').split('\n').map((l) => l.trim()).filter(Boolean);
  const introIdx = lines.findIndex((l) => /following notes/i.test(l));
  const intro = introIdx >= 0 ? lines[introIdx] : '';
  const notes = lines.slice(introIdx + 1).map((l) => l.replace(/^[•\-*]\s*/, ''));
  return (
    <SplitShell
      left={
        <div>
          {intro && <p className="mb-3">{intro}</p>}
          <ul className="list-disc pl-6 space-y-2">
            {notes.map((n, i) => (
              <li key={i}>
                <MathRenderer content={n} />
              </li>
            ))}
          </ul>
        </div>
      }
      right={<RwQuestionColumn {...p} />}
    />
  );
};

/** Command of Evidence (Quantitative): figure/table above the passage. */
export const RwQuantitativeTemplate: React.FC<TemplateProps> = (p) => (
  <SplitShell
    left={
      <>
        <Figure question={p.question} />
        <MathRenderer content={p.question.passage || ''} />
      </>
    }
    right={<RwQuestionColumn {...p} />}
  />
);

/* ---------- Math ---------- */

const MathBody: React.FC<TemplateProps & { withFigure?: boolean }> = ({ withFigure, ...p }) => (
  <CenterShell>
    <QuestionHeader {...p} />
    {withFigure && <Figure question={p.question} />}
    <div className="text-[16px] leading-[1.8] text-ink mb-6">
      <MathRenderer content={p.question.prompt} />
    </div>
    {p.question.type === 'mcq' ? <AnswerChoices {...p} /> : <SprResponse {...p} />}
    <Feedback {...p} />
  </CenterShell>
);

export const MathMcqTemplate: React.FC<TemplateProps> = (p) => <MathBody {...p} />;
export const MathSprTemplate: React.FC<TemplateProps> = (p) => <MathBody {...p} />;
export const MathFigureTemplate: React.FC<TemplateProps> = (p) => <MathBody {...p} withFigure />;

/* ---------- Dispatcher ---------- */

const REGISTRY = {
  rw_passage: RwPassageTemplate,
  rw_paired: RwPairedTemplate,
  rw_notes: RwNotesTemplate,
  rw_quantitative: RwQuantitativeTemplate,
  math_mcq: MathMcqTemplate,
  math_spr: MathSprTemplate,
  math_figure: MathFigureTemplate,
} as const;

/** Picks the right template for a question. */
export const QuestionTemplateRenderer: React.FC<TemplateProps> = (p) => {
  const Template = REGISTRY[inferTemplate(p.question)];
  return <Template {...p} />;
};
