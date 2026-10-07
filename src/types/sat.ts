export type SectionType = 'reading_writing' | 'math';

export type DomainType =
  // Reading & Writing
  | 'craft_and_structure'
  | 'information_and_ideas'
  | 'standard_english_conventions'
  | 'expression_of_ideas'
  // Math
  | 'algebra'
  | 'advanced_math'
  | 'problem_solving_and_data_analysis'
  | 'geometry_and_trigonometry';

export interface QuestionOption {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
}

/**
 * Display template. Each one has its own layout and its own validation rules
 * (see lib/questionValidator.ts). A question is only shown if it passes the
 * rules for its template.
 *
 *  rw_passage       single passage (left) + prompt/choices (right)
 *  rw_paired        "Text 1" / "Text 2" passages (left) + prompt/choices
 *  rw_notes         bulleted student notes (Rhetorical Synthesis)
 *  rw_quantitative  passage + required table or graph image (Command of Evidence: Quantitative)
 *  math_mcq         centred math stem + 4 choices
 *  math_spr         centred math stem + student-produced response box
 *  math_figure      math stem with required figure (graph, diagram, table)
 */
export type QuestionTemplate =
  | 'rw_passage'
  | 'rw_paired'
  | 'rw_notes'
  | 'rw_quantitative'
  | 'math_mcq'
  | 'math_spr'
  | 'math_figure';

export interface QuestionFigure {
  src: string; // path under /public, e.g. /mcq-assets/a15b3219.png
  alt: string;
}

export interface Question {
  id: string;
  section: SectionType;
  domain: DomainType;
  domainTitle: string;
  skill: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  type: 'mcq' | 'spr'; // multiple choice or student-produced response
  template?: QuestionTemplate; // inferred if missing (built-in samples)
  passage?: string | null; // Reading & Writing passage or context text
  prompt: string;
  figure?: QuestionFigure; // graph / diagram image
  table?: string; // markdown table
  options?: QuestionOption[]; // only for mcq
  correctAnswer: string; // 'A'|'B'|'C'|'D' or number string like "4", "3.5", "7/2"
  acceptableAnswers?: string[]; // for SPR variants like ["3.5", "7/2"]
  explanation: string;
  moduleIndex?: 1 | 2;
  source?: { pdf?: string; page?: number };
}

export type ExplanationMode = 'instant' | 'on_review' | 'off';
export type TimerMode = 'per_question' | 'total' | 'untimed';
export type LayoutStyle = 'split' | 'single';

export interface TestConfig {
  mode: 'practice' | 'custom_test' | 'mock_test';
  title: string;
  section?: SectionType | 'all';
  domains?: DomainType[];
  explanationMode: ExplanationMode;
  timerMode: TimerMode;
  timeLimitSeconds: number; // total time or seconds per question
  questionCount: number;
  moduleCount: 1 | 2;
  layoutStyle: LayoutStyle;
  adaptive?: boolean;
  /** Mark-for-review flagging. Disabled in Practice Zone. Defaults to true. */
  allowFlagging?: boolean;
  /** Record/show time spent per question. Defaults to true. */
  trackTime?: boolean;
  /** Show instant correct/wrong feedback upon answer selection */
  showAnswerFeedback?: boolean;
}

export interface UserAnswerState {
  chosenOption?: string; // 'A' | 'B' | 'C' | 'D' or typed SPR answer
  flagged?: boolean;
  eliminatedOptions?: string[]; // e.g. ['A', 'C']
  notes?: string;
  timeSpentSeconds: number;
  isCorrect?: boolean;
}

export interface TestSessionState {
  config: TestConfig;
  questions: Question[];
  currentQuestionIndex: number;
  currentModule: 1 | 2;
  answers: Record<string, UserAnswerState>;
  startTime: number;
  timeRemaining: number;
  isTimerRunning: boolean;
  isTimerVisible: boolean;
  isFinished: boolean;
  inReviewModal: boolean;
  isBreak: boolean;
}

export interface TestResultSummary {
  testId: string;
  title: string;
  date: string;
  /** Epoch ms of when the attempt was saved (filled from Firestore createdAt on load). */
  createdAtMs?: number;
  mode: 'practice' | 'custom_test' | 'mock_test';
  totalQuestions: number;
  correctCount: number;
  rawScorePercentage: number;
  estimatedScaledScore?: number; // 400 - 1600 (or 200 - 800)
  totalTimeSeconds: number;
  sectionBreakdown: {
    readingWriting?: {
      total: number;
      correct: number;
      estimatedScore: number;
    };
    math?: {
      total: number;
      correct: number;
      estimatedScore: number;
    };
  };
  domainStats: Record<string, { total: number; correct: number }>;
  rawQuestions?: Question[];
  rawAnswers?: Record<string, UserAnswerState>;
}

export interface DomainMetadata {
  id: DomainType;
  title: string;
  section: SectionType;
  description: string;
}

export const OFFICIAL_DOMAINS: DomainMetadata[] = [
  {
    id: 'craft_and_structure',
    title: 'Craft and Structure',
    section: 'reading_writing',
    description: 'Words in context, text structure, purpose, and cross-text connections.',
  },
  {
    id: 'information_and_ideas',
    title: 'Information and Ideas',
    section: 'reading_writing',
    description: 'Central ideas, details, command of textual/quantitative evidence, inferences.',
  },
  {
    id: 'standard_english_conventions',
    title: 'Standard English Conventions',
    section: 'reading_writing',
    description: 'Sentence boundaries, agreement, punctuation, and grammatical usage.',
  },
  {
    id: 'expression_of_ideas',
    title: 'Expression of Ideas',
    section: 'reading_writing',
    description: 'Rhetorical synthesis and transitions for clarity and flow.',
  },
  {
    id: 'algebra',
    title: 'Algebra',
    section: 'math',
    description: 'Linear equations, linear functions, systems, and inequalities.',
  },
  {
    id: 'advanced_math',
    title: 'Advanced Math',
    section: 'math',
    description: 'Equivalent expressions, non-linear equations, quadratics, and polynomials.',
  },
  {
    id: 'problem_solving_and_data_analysis',
    title: 'Problem-Solving & Data Analysis',
    section: 'math',
    description: 'Ratios, rates, percentages, probability, unit conversions, and statistics.',
  },
  {
    id: 'geometry_and_trigonometry',
    title: 'Geometry & Trigonometry',
    section: 'math',
    description: 'Area, volume, angles, triangles, right-triangle trigonometry, and circles.',
  },
];
