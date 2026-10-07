import { Question, QuestionTemplate } from '../types/sat';

/**
 * Client-side gatekeeper. Mirrors the rules in export_bank.py so that a broken
 * question can never reach the exam screen, even if it is added by hand or
 * imported from another source.
 */

const AXIS_DUMP = /(?:^\s*[\d,.%$-]+\s*$\n?){4,}/m;
const MISSING_MATH = /\bof\s+\?|\s{2,}(?:times|is|and|where|,|\.)\s|\(\s*\)|=\s*[,.?]/;

export function inferTemplate(q: Question): QuestionTemplate {
  if (q.template) return q.template;
  if (q.section === 'math') {
    if (q.figure || q.table) return 'math_figure';
    return q.type === 'spr' ? 'math_spr' : 'math_mcq';
  }
  const passage = q.passage || '';
  if (q.figure || q.table || /Quantitative/.test(q.skill)) return 'rw_quantitative';
  if (/^\s*T\s?ext 1\b/m.test(passage) && /T\s?ext 2\b/.test(passage)) return 'rw_paired';
  if (/following notes/.test(passage + q.prompt) || q.skill === 'Rhetorical Synthesis') return 'rw_notes';
  return 'rw_passage';
}

export function validateQuestion(q: Question): string[] {
  const errs: string[] = [];
  const template = inferTemplate(q);
  const body = `${q.passage || ''}\n${q.prompt || ''}`;

  if (!q.id) errs.push('missing_id');
  if (!q.prompt?.trim() && !(q.section === 'math' && q.figure)) errs.push('empty_prompt');
  // explanation is optional for mock tests where user chose not to include explanations

  if (q.type === 'mcq') {
    const opts = q.options || [];
    if (opts.length !== 4 || opts.some((o) => !o.text?.trim())) errs.push('missing_option_text');
    if (!['A', 'B', 'C', 'D'].includes(q.correctAnswer)) errs.push('invalid_answer_key');
  } else if (!q.correctAnswer?.trim()) {
    errs.push('missing_spr_answer');
  }

  if (AXIS_DUMP.test(body)) errs.push('graph_labels_in_text');

  if ((template === 'rw_quantitative' || template === 'math_figure') && !q.figure && !q.table) {
    errs.push('figure_or_table_required_but_missing');
  }

  if (template.startsWith('rw_') && q.section !== 'reading_writing') errs.push('template_section_mismatch');
  if (template.startsWith('math_') && q.section !== 'math') errs.push('template_section_mismatch');

  if (q.section === 'math') {
    const optText = (q.options || []).map((o) => o.text).join(' ');
    if (MISSING_MATH.test(`${body} ${optText}`)) errs.push('equation_missing_from_text');
  }

  return errs;
}

/** Returns only questions that pass, with template filled in. Logs rejects in dev. */
export function filterValidQuestions(list: Question[]): Question[] {
  const valid: Question[] = [];
  for (const q of list) {
    const errs = validateQuestion(q);
    if (errs.length === 0) {
      valid.push({ ...q, template: inferTemplate(q) });
    } else if (process.env.NODE_ENV !== 'production') {
      console.warn(`[question-bank] rejected ${q.id}:`, errs.join(', '));
    }
  }
  return valid;
}
