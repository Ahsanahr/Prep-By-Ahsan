import { DomainType, SectionType } from '../types/sat';

export interface SatSubtopic {
  id: string;
  name: string;
  skillKey: string;
  description: string;
}

export interface SatTopicDomain {
  id: DomainType;
  section: SectionType;
  name: string;
  description: string;
  subtopics: SatSubtopic[];
}

export const SAT_DOMAINS: SatTopicDomain[] = [
  // READING & WRITING
  {
    id: 'craft_and_structure',
    section: 'reading_writing',
    name: 'Craft and Structure',
    description: 'Words in context, text structure, purpose, and cross-text analysis.',
    subtopics: [
      { id: 'words_in_context', name: 'Words in Context', skillKey: 'Words in Context', description: 'Vocabulary precision and contextual connotations.' },
      { id: 'text_structure', name: 'Text Structure & Purpose', skillKey: 'Text Structure and Purpose', description: 'Rhetorical structure, perspective, and author intention.' },
      { id: 'cross_text', name: 'Cross-Text Connections', skillKey: 'Cross-Text Connections', description: 'Comparative analysis across paired viewpoints.' },
    ],
  },
  {
    id: 'information_and_ideas',
    section: 'reading_writing',
    name: 'Information and Ideas',
    description: 'Central ideas, inferences, textual evidence, and quantitative graphics.',
    subtopics: [
      { id: 'central_ideas', name: 'Central Ideas & Details', skillKey: 'Central Ideas and Details', description: 'Core themes, explicit meaning, and key details.' },
      { id: 'command_evidence_text', name: 'Command of Evidence (Textual)', skillKey: 'Command of Evidence (Textual)', description: 'Validating literary and scientific claims.' },
      { id: 'command_evidence_quant', name: 'Command of Evidence (Quantitative)', skillKey: 'Command of Evidence (Quantitative)', description: 'Interpreting tables, graphs, and data claims.' },
      { id: 'inferences', name: 'Inferences', skillKey: 'Inferences', description: 'Drawing logical conclusions from implicit premises.' },
    ],
  },
  {
    id: 'standard_english_conventions',
    section: 'reading_writing',
    name: 'Standard English Conventions',
    description: 'Punctuation boundaries, clause structure, agreement, and syntax.',
    subtopics: [
      { id: 'boundaries', name: 'Boundaries & Punctuation', skillKey: 'Boundaries', description: 'Periods, semicolons, dashes, and comma splices.' },
      { id: 'form_structure', name: 'Form, Structure, and Sense', skillKey: 'Form, Structure, and Sense', description: 'Subject-verb agreement, modifier placement, verb tenses.' },
    ],
  },
  {
    id: 'expression_of_ideas',
    section: 'reading_writing',
    name: 'Expression of Ideas',
    description: 'Rhetorical synthesis, transitions, and optimizing paragraph coherence.',
    subtopics: [
      { id: 'transitions', name: 'Transitions', skillKey: 'Transitions', description: 'Conjunctive adverbs, causal links, and contrast words.' },
      { id: 'rhetorical_synthesis', name: 'Rhetorical Synthesis', skillKey: 'Rhetorical Synthesis', description: 'Synthesizing student bullet-point notes for specific goals.' },
    ],
  },

  // MATHEMATICS
  {
    id: 'algebra',
    section: 'math',
    name: 'Algebra',
    description: 'Linear equations, inequalities, systems of linear equations, and functions.',
    subtopics: [
      { id: 'linear_eq_one', name: 'Linear Equations in 1 Variable', skillKey: 'Linear Equations in One Variable', description: 'Single variable linear equations and identity analysis.' },
      { id: 'linear_eq_two', name: 'Linear Equations in 2 Variables', skillKey: 'Linear Equations in Two Variables', description: 'Slope-intercept, point-slope, and standard forms.' },
      { id: 'linear_functions', name: 'Linear Functions & Rates', skillKey: 'Linear Functions', description: 'Modeling constant change and contextual interpretations.' },
      { id: 'systems_linear', name: 'Systems of Linear Equations', skillKey: 'Linear Systems in Two Variables', description: 'Simultaneous equations, intersections, and zero/infinite solutions.' },
      { id: 'linear_ineq', name: 'Linear Inequalities', skillKey: 'Linear Inequalities', description: 'Single and two-variable inequality solution regions.' },
    ],
  },
  {
    id: 'advanced_math',
    section: 'math',
    name: 'Advanced Math',
    description: 'Quadratics, polynomials, rational exponents, and nonlinear functions.',
    subtopics: [
      { id: 'equivalent_expr', name: 'Equivalent Expressions', skillKey: 'Equivalent Expressions', description: 'Factoring, exponent rules, and completing the square.' },
      { id: 'nonlinear_eq', name: 'Nonlinear Equations', skillKey: 'Nonlinear Equations', description: 'Quadratic formulas, discriminants, and radical equations.' },
      { id: 'nonlinear_func', name: 'Nonlinear Functions & Parabolas', skillKey: 'Nonlinear Functions & Parabolas', description: 'Vertices, extrema, symmetries, and exponential growth models.' },
      { id: 'exponents_radicals', name: 'Exponents and Radicals', skillKey: 'Exponents and Radicals', description: 'Rational exponents, roots, and fractional power laws.' },
    ],
  },
  {
    id: 'problem_solving_and_data_analysis',
    section: 'math',
    name: 'Problem-Solving & Data Analysis',
    description: 'Ratios, percentages, unit conversions, two-way tables, and statistics.',
    subtopics: [
      { id: 'ratios_rates', name: 'Ratios, Rates, and Proportions', skillKey: 'Ratios, Rates, and Proportions', description: 'Scale factors, dimensional analysis, and proportional reasoning.' },
      { id: 'percentages', name: 'Percentages & Growth', skillKey: 'Percentages and Exponential Growth', description: 'Percent increase, decrease, interest, and multi-step changes.' },
      { id: 'unit_conversion', name: 'Unit Conversion', skillKey: 'Unit Conversion', description: 'Metric/Imperial conversion and compound rate units.' },
      { id: 'stats_probability', name: 'Statistics & Probability', skillKey: 'Statistics and Probability', description: 'Mean, median, standard deviation, and sample margins of error.' },
    ],
  },
  {
    id: 'geometry_and_trigonometry',
    section: 'math',
    name: 'Geometry & Trigonometry',
    description: 'Area, volume, right triangles, trigonometry, and circle theorems.',
    subtopics: [
      { id: 'area_volume', name: 'Area & Volume Formulas', skillKey: 'Area and Volume Formulas', description: 'Prisms, cones, cylinders, pyramids, and composite solids.' },
      { id: 'lines_angles', name: 'Lines, Angles & Triangles', skillKey: 'Lines, Angles, and Triangles', description: 'Parallel transversal angles, congruence, and similarity.' },
      { id: 'circles', name: 'Circles & Arc Length', skillKey: 'Circles, Central Angles, and Arc Length', description: 'Equations of circles, radian measure, sectors, and tangents.' },
      { id: 'right_trig', name: 'Right Triangle Trigonometry', skillKey: 'Right Triangle Trigonometry', description: 'SOH-CAH-TOA, co-function identities, and special triangles.' },
    ],
  },
];
