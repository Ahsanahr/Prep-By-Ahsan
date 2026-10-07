import { Question } from '../types/sat';

export const INITIAL_QUESTIONS: Question[] = [
  // ==========================================
  // READING AND WRITING
  // ==========================================

  // 1. Craft and Structure — Words in Context (Medium)
  {
    id: 'rw-official-1',
    section: 'reading_writing',
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Medium',
    type: 'mcq',
    passage: `In 1929, the astronomer Edwin Hubble published observations showing that distant galaxies appear to be receding from the Milky Way at speeds proportional to their distances. This discovery compelled theoretical physicists to discard the long-held assumption that the universe was immutable and static, prompting them to develop cosmological models that could $H_0$-scale expansion and ______ the observed velocity-distance relationship across astronomical redshift surveys.`,
    prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      { id: 'A', text: 'accommodate' },
      { id: 'B', text: 'disregard' },
      { id: 'C', text: 'preclude' },
      { id: 'D', text: 'obscure' }
    ],
    correctAnswer: 'A',
    explanation: 'The sentence describes how theoretical physicists had to formulate models capable of accounting for or aligning with the newly measured astronomical velocity-distance data. "Accommodate" means to allow for, fit, or incorporate without contradiction.',
  },

  // 2. Craft and Structure — Words in Context (Easy)
  {
    id: 'rw-official-1b',
    section: 'reading_writing',
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Easy',
    type: 'mcq',
    passage: `Although contemporary critics initially viewed artist Maya Lin’s minimalist design for the Vietnam Veterans Memorial as too austere and unconventional, public sentiment shifted rapidly once the memorial opened. Visitors found that the polished black granite wall ______ quiet contemplation and deep emotional connection.`,
    prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      { id: 'A', text: 'fostered' },
      { id: 'B', text: 'hindered' },
      { id: 'C', text: 'condemned' },
      { id: 'D', text: 'suppressed' }
    ],
    correctAnswer: 'A',
    explanation: 'The context contrasts early criticisms with the positive emotional connection visitors experienced once the memorial opened. "Fostered" means encouraged or cultivated, fitting the positive and contemplative atmosphere described.',
  },

  // 3. Craft and Structure — Text Structure & Purpose (Hard)
  {
    id: 'rw-official-1c',
    section: 'reading_writing',
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Text Structure and Purpose',
    difficulty: 'Hard',
    type: 'mcq',
    passage: `In literary criticism, modernists often celebrated fragmentation as the truest stylistic mirror of the fractured psychological state of 20th-century post-war society. However, architectural historian Kenneth Frampton contends that regional vernacular architecture achieves a counterbalancing effect: by grounding structures within indigenous topographies, local materials resist the homogenizing, disorienting effects of global commercial design.`,
    prompt: 'Which choice best states the main purpose of the text?',
    options: [
      { id: 'A', text: 'To contrast how modernist literature portrays fragmentation with how regional architecture offers cultural grounding against homogenization.' },
      { id: 'B', text: 'To advocate that vernacular architectural traditions must replace all modernist aesthetic concepts in public infrastructure.' },
      { id: 'C', text: 'To prove that 20th-century authors misunderstood the psychological implications of post-war reconstruction.' },
      { id: 'D', text: 'To outline the chronological evolution of Kenneth Frampton’s theories on global commercial design.' }
    ],
    correctAnswer: 'A',
    explanation: 'The passage sets up how modernist literature responded to 20th-century dislocation with stylistic fragmentation, then introduces Frampton’s perspective that regional architecture achieves an opposing, stabilizing anchor against global homogenization. Choice A accurately synthesizes this rhetorical relationship.',
  },

  // 4. Information and Ideas — Command of Evidence (Textual) (Hard)
  {
    id: 'rw-official-2',
    section: 'reading_writing',
    domain: 'information_and_ideas',
    domainTitle: 'Information and Ideas',
    skill: 'Command of Evidence (Textual)',
    difficulty: 'Hard',
    type: 'mcq',
    passage: `Ecologist Dr. Sonia Altizer investigated how migratory behavior affects pathogen loads in eastern North American monarch butterflies (Danaus plexippus). Altizer hypothesized that long-distance autumn migration acts as an evolutionary filter—a process termed "migratory culling"—wherein heavily infected butterflies carrying the protozoan Ophryocystis elektroscirrha succumb to physical exhaustion before reaching the high-altitude overwintering oyamel fir forests in Michoacán, Mexico. Consequently, the surviving overwintering population should exhibit significantly lower parasite prevalence than summer breeding cohorts.`,
    prompt: 'Which finding, if true, would most directly support Dr. Altizer’s hypothesis of migratory culling?',
    options: [
      { id: 'A', text: 'Monarchs sampled at northern breeding grounds in July demonstrated a 68% infection rate, whereas monarchs reaching the Mexican overwintering sanctuaries demonstrated an infection rate of under 12%.' },
      { id: 'B', text: 'Protozoan spores remained viable on oyamel fir foliage throughout the sub-zero winter temperatures recorded in Michoacán.' },
      { id: 'C', text: 'Uninfected monarch butterflies consumed substantially greater quantities of milkweed nectar during larval development than infected counterparts.' },
      { id: 'D', text: 'Non-migratory resident monarch colonies in southern Florida exhibited lower overall reproductive output than migratory northern populations.' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A provides direct quantitative evidence showing that parasite prevalence drops dramatically between the northern summer breeding grounds (68%) and the final destination in Mexico (under 12%), proving that infected individuals were culled along the migratory journey.',
  },

  // 5. Information and Ideas — Central Ideas and Details (Medium)
  {
    id: 'rw-official-2b',
    section: 'reading_writing',
    domain: 'information_and_ideas',
    domainTitle: 'Information and Ideas',
    skill: 'Central Ideas and Details',
    difficulty: 'Medium',
    type: 'mcq',
    passage: `Marine biologists studying the benthic zones of hydrothermal vents discovered that sulfur-oxidizing bacteria form the cornerstone of the local trophic pyramid. Unlike photosynthetic organisms on the surface that rely on sunlight, these lithoautotrophic bacteria convert toxic hydrogen sulfide gas expelled by the earth's crust into organic sugars through chemosynthesis, fueling sprawling colonies of giant tube worms and vent crabs thousands of meters beneath the photic zone.`,
    prompt: 'Based on the passage, what is primary difference between the vent ecosystem and typical surface ecosystems?',
    options: [
      { id: 'A', text: 'The base of the vent food web synthesizes metabolic energy using dissolved chemical compounds rather than sunlight.' },
      { id: 'B', text: 'Vent organisms do not require organic carbon compounds to maintain cellular metabolism.' },
      { id: 'C', text: 'Surface autotrophs produce hydrogen sulfide gas as a byproduct of photosynthetic phosphorylation.' },
      { id: 'D', text: 'Giant tube worms function as primary producers instead of consumer organisms in benthic communities.' }
    ],
    correctAnswer: 'A',
    explanation: 'The passage explicitly contrasts surface autotrophs reliant on solar radiation with hydrothermal vent lithoautotrophs that convert dissolved hydrogen sulfide gas into sugars via chemosynthesis without sunlight. Choice A directly captures this core concept.',
  },

  // 6. Information and Ideas — Inferences (Hard)
  {
    id: 'rw-official-2c',
    section: 'reading_writing',
    domain: 'information_and_ideas',
    domainTitle: 'Information and Ideas',
    skill: 'Inferences',
    difficulty: 'Hard',
    type: 'mcq',
    passage: `For decades, paleoanthropologists debated whether Neanderthals possessed the cognitive capability for symbolic expression or whether modern Homo sapiens were solely responsible for Upper Paleolithic cave art. Recent uranium-thorium radiometric dating of carbonate crusts overlying red ochre hand stencils in Maltravieso cave, Spain, yielded a minimum age of 64,800 years. Modern humans are not known to have arrived in Western Europe until roughly 45,000 years ago.`,
    prompt: 'Which choice most logically completes the text based on the archaeological dating evidence?',
    options: [
      { id: 'A', text: 'suggesting that Neanderthals in the Iberian Peninsula engaged in symbolic cave pigmentation long before modern human contact.' },
      { id: 'B', text: 'proving that uranium-thorium dating produces unreliable results when testing subterranean calcite minerals.' },
      { id: 'C', text: 'indicating that Homo sapiens established trade routes through Spain earlier than previously assumed.' },
      { id: 'D', text: 'demonstrating that Neanderthal populations were extinct across Europe prior to 64,800 years ago.' }
    ],
    correctAnswer: 'A',
    explanation: 'Since the cave paintings are at least 64,800 years old, and Homo sapiens did not arrive in Western Europe until ~45,000 years ago, the creators of the art during that earlier epoch must have been Neanderthals, demonstrating their capacity for symbolic cave markings.',
  },

  // 7. Standard English Conventions — Sentence Boundaries & Clauses (Medium)
  {
    id: 'rw-official-3',
    section: 'reading_writing',
    domain: 'standard_english_conventions',
    domainTitle: 'Standard English Conventions',
    skill: 'Form, Structure, and Sense',
    difficulty: 'Medium',
    type: 'mcq',
    passage: `Botanist Dr. Suzanne Simard demonstrated that mycorrhizal fungal mycelia link disparate tree root architectures into a subterranean chemical communication network. Through these symbiotic mycorrhizal channels, older "hub" trees transfer carbon, phosphorus, and defensive signals to younger ______ significantly increasing overall sapling survival during prolonged seasonal droughts.`,
    prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: [
      { id: 'A', text: 'seedlings;' },
      { id: 'B', text: 'seedlings,' },
      { id: 'C', text: 'seedlings' },
      { id: 'D', text: 'seedlings:' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct because a comma before the participial modifier clause ("significantly increasing overall sapling survival...") correctly links the dependent non-finite clause to the preceding main clause without creating a run-on or comma splice.',
  },

  // 8. Standard English Conventions — Subject-Verb Agreement (Easy)
  {
    id: 'rw-official-3b',
    section: 'reading_writing',
    domain: 'standard_english_conventions',
    domainTitle: 'Standard English Conventions',
    skill: 'Form, Structure, and Sense',
    difficulty: 'Easy',
    type: 'mcq',
    passage: `A comprehensive inventory of historic masonry buildings across northern Italy ______ that seismic retrofitting using carbon-fiber reinforcement dramatically diminishes structural damage during tectonic tremors.`,
    prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: [
      { id: 'A', text: 'reveals' },
      { id: 'B', text: 'reveal' },
      { id: 'C', text: 'have revealed' },
      { id: 'D', text: 'are revealing' }
    ],
    correctAnswer: 'A',
    explanation: 'The grammatical subject of the sentence is the singular noun "inventory" ("of historic masonry buildings across northern Italy" is a prepositional phrase). A singular subject requires the third-person singular verb "reveals" (Choice A).',
  },

  // 9. Expression of Ideas — Transitions (Easy)
  {
    id: 'rw-official-4',
    section: 'reading_writing',
    domain: 'expression_of_ideas',
    domainTitle: 'Expression of Ideas',
    skill: 'Transitions',
    difficulty: 'Easy',
    type: 'mcq',
    passage: `Deep geothermal wells require significant upfront capital expenditure to drill through multiple kilometers of solid crystalline basement rock. ______, once subterranean thermal reservoirs are tapped, geothermal power generation plants produce steady baseload electricity with near-zero greenhouse gas emissions regardless of diurnal cycles or inclement weather conditions.`,
    prompt: 'Which choice completes the text with the most logical transition?',
    options: [
      { id: 'A', text: 'For example,' },
      { id: 'B', text: 'Nevertheless,' },
      { id: 'C', text: 'Consequently,' },
      { id: 'D', text: 'In addition,' }
    ],
    correctAnswer: 'B',
    explanation: '"Nevertheless" establishes the appropriate concession/contrast between the drawback mentioned in the first sentence (high capital costs of drilling) and the distinct advantages highlighted in the second sentence (continuous baseload clean energy).',
  },

  // 10. Expression of Ideas — Rhetorical Synthesis (Medium)
  {
    id: 'rw-official-4b',
    section: 'reading_writing',
    domain: 'expression_of_ideas',
    domainTitle: 'Expression of Ideas',
    skill: 'Rhetorical Synthesis',
    difficulty: 'Medium',
    type: 'mcq',
    passage: `While researching a topic, a student has taken the following notes:
• The James Webb Space Telescope (JWST) was launched in December 2021.
• It operates at the second Sun-Earth Lagrange point (L2), 1.5 million kilometers from Earth.
• Unlike the Hubble Space Telescope, which primarily observes ultraviolet and visible light, JWST is optimized for infrared astronomy.
• Infrared observation allows astronomers to penetrate dense cosmic dust clouds to image the earliest stars and galaxies formed after the Big Bang.`,
    prompt: 'The student wants to highlight the primary operational advantage JWST possesses over Hubble. Which choice most effectively uses relevant information from the notes to achieve this goal?',
    options: [
      { id: 'A', text: 'Launched in December 2021, the JWST orbits at the second Sun-Earth Lagrange point, 1.5 million kilometers away.' },
      { id: 'B', text: 'Because it is optimized for infrared light rather than Hubble’s visible light, JWST can pierce cosmic dust to view early celestial bodies.' },
      { id: 'C', text: 'The Hubble Space Telescope primarily observes ultraviolet light, whereas other telescopes view different wavelengths.' },
      { id: 'D', text: 'Astronomers use both Hubble and JWST to study stars and galaxies formed directly after the Big Bang.' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B directly addresses the student’s specific rhetorical goal: highlighting the primary operational advantage (infrared optimization that penetrates dense cosmic dust clouds to image primordial stars) in contrast to Hubble.',
  },

  // ==========================================
  // MATHEMATICS
  // ==========================================

  // 11. Math: Algebra — Linear Equations (Easy MCQ)
  {
    id: 'm-official-1',
    section: 'math',
    domain: 'algebra',
    domainTitle: 'Algebra',
    skill: 'Linear Equations in One Variable',
    difficulty: 'Easy',
    type: 'mcq',
    prompt: 'If $4(2x - 3) + 7 = 35$, what is the value of $2x - 3$?',
    options: [
      { id: 'A', text: '$5$' },
      { id: 'B', text: '$7$' },
      { id: 'C', text: '$8$' },
      { id: 'D', text: '$14$' }
    ],
    correctAnswer: 'B',
    explanation: 'Subtract $7$ from both sides of the equation:\n$$4(2x - 3) = 35 - 7 = 28$$\nDivide both sides by $4$:\n$$2x - 3 = 7$$\nNotice the question asks for the value of the expression $2x - 3$, which is $7$ (Choice B).',
  },

  // 12. Math: Algebra — Linear Functions & Rate of Change (Medium MCQ)
  {
    id: 'm-official-1b',
    section: 'math',
    domain: 'algebra',
    domainTitle: 'Algebra',
    skill: 'Linear Functions',
    difficulty: 'Medium',
    type: 'mcq',
    prompt: 'A solar power installation company charges a fixed consultation fee of $\\$250$ plus $\\$45$ per installed panel. If a customer paid a total of $\\$1{,}600$, how many solar panels were installed?',
    options: [
      { id: 'A', text: '$25$' },
      { id: 'B', text: '$30$' },
      { id: 'C', text: '$35$' },
      { id: 'D', text: '$40$' }
    ],
    correctAnswer: 'B',
    explanation: 'Set up the linear cost function $C(n) = 45n + 250$ where $n$ represents the number of panels:\n$$45n + 250 = 1600$$\n$$45n = 1350$$\n$$n = \\frac{1350}{45} = 30$$\nTherefore, $30$ solar panels were installed (Choice B).',
  },

  // 13. Math: Algebra — Linear Systems (Medium SPR)
  {
    id: 'm-official-spr-1',
    section: 'math',
    domain: 'algebra',
    domainTitle: 'Algebra',
    skill: 'Linear Systems in Two Variables',
    difficulty: 'Medium',
    type: 'spr',
    prompt: 'Consider the system of linear equations below:\n$$\\begin{aligned} 3x + y &= 19 \\\\ y &= 2x - 1 \\end{aligned}$$\nWhat is the value of $x$?',
    correctAnswer: '4',
    acceptableAnswers: ['4'],
    explanation: 'Substitute $y = 2x - 1$ into the first equation:\n$$3x + (2x - 1) = 19$$\n$$5x - 1 = 19$$\n$$5x = 20$$\n$$x = 4$$',
  },

  // 14. Math: Algebra — Infinite Solutions (Hard MCQ)
  {
    id: 'm-official-1c',
    section: 'math',
    domain: 'algebra',
    domainTitle: 'Algebra',
    skill: 'Linear Equations in One Variable',
    difficulty: 'Hard',
    type: 'mcq',
    prompt: 'In the equation $k(3x - 5) + 4x = 19x - 25$, the constant $k$ is chosen so that the equation has infinitely many solutions for $x$. What is the value of $k$?',
    options: [
      { id: 'A', text: '$3$' },
      { id: 'B', text: '$5$' },
      { id: 'C', text: '$7$' },
      { id: 'D', text: '$15$' }
    ],
    correctAnswer: 'B',
    explanation: 'Expand the left side of the equation:\n$$3kx - 5k + 4x = (3k + 4)x - 5k$$\nFor an equation to have infinitely many solutions, the coefficients of $x$ must match and the constant terms must match:\n$$3k + 4 = 19 \\implies 3k = 15 \\implies k = 5$$\nCheck constant term: $-5(5) = -25$, which matches the right side! Thus $k = 5$ (Choice B).',
  },

  // 15. Math: Advanced Math — Quadratic Vertices & Extrema (Medium MCQ)
  {
    id: 'm-official-2',
    section: 'math',
    domain: 'advanced_math',
    domainTitle: 'Advanced Math',
    skill: 'Nonlinear Functions & Parabolas',
    difficulty: 'Medium',
    type: 'mcq',
    prompt: 'The quadratic function $f$ is defined by $f(x) = (x - 4)(x + 8)$. For what value of $x$ does $f(x)$ reach its minimum value?',
    options: [
      { id: 'A', text: '$-8$' },
      { id: 'B', text: '$-2$' },
      { id: 'C', text: '$2$' },
      { id: 'D', text: '$4$' }
    ],
    correctAnswer: 'B',
    explanation: 'The $x$-intercepts of the parabola occur where $f(x) = 0$, giving $x = 4$ and $x = -8$. Because parabolas are symmetric, the vertex occurs exactly at the midpoint of the zeros:\n$$x_{\\text{vertex}} = \\frac{4 + (-8)}{2} = \\frac{-4}{2} = -2$$\nTherefore, the minimum value is reached when $x = -2$ (Choice B).',
  },

  // 16. Math: Advanced Math — Exponential Equations (Hard SPR)
  {
    id: 'm-official-spr-3',
    section: 'math',
    domain: 'advanced_math',
    domainTitle: 'Advanced Math',
    skill: 'Exponents and Radicals',
    difficulty: 'Hard',
    type: 'spr',
    prompt: 'If $2^{3x - 1} = 128$, what is the value of $x$?',
    correctAnswer: '8/3',
    acceptableAnswers: ['8/3', '2.666', '2.667', '2.67'],
    explanation: 'Express $128$ as a power of base $2$:\n$$128 = 2^7$$\nSince the bases are identical:\n$$3x - 1 = 7$$\n$$3x = 8 \\implies x = \\frac{8}{3}$$\nOn the Digital SAT, both improper fractions ($8/3$) and decimal equivalents rounded to at least three places ($2.667$) are accepted.',
  },

  // 17. Math: Advanced Math — Discriminants & Real Roots (Hard MCQ)
  {
    id: 'm-official-2b',
    section: 'math',
    domain: 'advanced_math',
    domainTitle: 'Advanced Math',
    skill: 'Nonlinear Equations',
    difficulty: 'Hard',
    type: 'mcq',
    prompt: 'The equation $2x^2 - 8x + c = 0$ has exactly one distinct real solution. What is the value of the constant $c$?',
    options: [
      { id: 'A', text: '$4$' },
      { id: 'B', text: '$8$' },
      { id: 'C', text: '$16$' },
      { id: 'D', text: '$32$' }
    ],
    correctAnswer: 'B',
    explanation: 'For a quadratic equation $ax^2 + bx + c = 0$ to possess exactly one distinct real solution, its discriminant $\\Delta = b^2 - 4ac$ must equal zero:\n$$(-8)^2 - 4(2)(c) = 0$$\n$$64 - 8c = 0$$\n$$8c = 64 \\implies c = 8$$\nTherefore, $c = 8$ (Choice B).',
  },

  // 18. Math: Problem-Solving & Data Analysis — Percentages (Medium MCQ)
  {
    id: 'm-official-3',
    section: 'math',
    domain: 'problem_solving_and_data_analysis',
    domainTitle: 'Problem-Solving & Data Analysis',
    skill: 'Percentages and Exponential Growth',
    difficulty: 'Medium',
    type: 'mcq',
    prompt: 'A renewable energy facility had a power capacity of $450\\text{ MW}$ in Year 1. In Year 2, the capacity increased by $40\\%$. In Year 3, the capacity increased by an additional $20\\%$ over the Year 2 capacity. What was the power capacity, in megawatts, in Year 3?',
    options: [
      { id: 'A', text: '$630$' },
      { id: 'B', text: '$720$' },
      { id: 'C', text: '$756$' },
      { id: 'D', text: '$810$' }
    ],
    correctAnswer: 'C',
    explanation: 'Calculate Year 2 capacity:\n$$\\text{Year 2} = 450 \\times (1 + 0.40) = 450 \\times 1.40 = 630\\text{ MW}$$\nCalculate Year 3 capacity:\n$$\\text{Year 3} = 630 \\times (1 + 0.20) = 630 \\times 1.20 = 756\\text{ MW}$$\nTherefore, the power capacity in Year 3 was $756\\text{ MW}$ (Choice C).',
  },

  // 19. Math: Problem-Solving & Data Analysis — Ratios & Unit Conversion (Easy MCQ)
  {
    id: 'm-official-3b',
    section: 'math',
    domain: 'problem_solving_and_data_analysis',
    domainTitle: 'Problem-Solving & Data Analysis',
    skill: 'Ratios, Rates, and Proportions',
    difficulty: 'Easy',
    type: 'mcq',
    prompt: 'An athletic runner maintains an average speed of $12$ kilometers per hour during a half-marathon training session. How many meters per minute does this speed represent?',
    options: [
      { id: 'A', text: '$120$' },
      { id: 'B', text: '$200$' },
      { id: 'C', text: '$600$' },
      { id: 'D', text: '$1{,}200$' }
    ],
    correctAnswer: 'B',
    explanation: 'Convert kilometers to meters and hours to minutes:\n$$12\\text{ km/hr} = \\frac{12 \\times 1{,}000\\text{ m}}{60\\text{ min}} = \\frac{12{,}000}{60} = 200\\text{ meters per minute}$$\nTherefore, the runner covers $200$ meters per minute (Choice B).',
  },

  // 20. Math: Problem-Solving & Data Analysis — Statistics Margin of Error (Hard MCQ)
  {
    id: 'm-official-3c',
    section: 'math',
    domain: 'problem_solving_and_data_analysis',
    domainTitle: 'Problem-Solving & Data Analysis',
    skill: 'Statistics and Probability',
    difficulty: 'Hard',
    type: 'mcq',
    prompt: 'A random sample of $1{,}200$ registered voters from city $A$ found that $54\\%$ support a proposed municipal transit expansion, with an associated margin of error of $\\pm 2.8\\%$. If a second survey of the identical population used a sample size of $4{,}800$ voters under identical methodologies, which of the following is the most likely margin of error for the second survey?',
    options: [
      { id: 'A', text: '$\\pm 0.70\\%$' },
      { id: 'B', text: '$\\pm 1.40\\%$' },
      { id: 'C', text: '$\\pm 2.80\\%$' },
      { id: 'D', text: '$\\pm 5.60\\%$' }
    ],
    correctAnswer: 'B',
    explanation: 'The margin of error in a random sample is inversely proportional to the square root of the sample size: $\\text{MOE} \\propto \\frac{1}{\\sqrt{n}}$. Quadrupling the sample size from $1{,}200$ to $4{,}800$ multiplies the denominator by $\\sqrt{4} = 2$, cutting the margin of error in half:\n$$\\text{New MOE} = \\frac{2.8\\%}{2} = 1.40\\%$$\nChoice B is correct.',
  },

  // 21. Math: Geometry and Trigonometry — Co-function Identities (Medium MCQ)
  {
    id: 'm-official-4',
    section: 'math',
    domain: 'geometry_and_trigonometry',
    domainTitle: 'Geometry & Trigonometry',
    skill: 'Right Triangle Trigonometry',
    difficulty: 'Medium',
    type: 'mcq',
    prompt: 'In right triangle $ABC$, the measure of angle $C$ is $90^\\circ$ and $\\sin(A) = \\frac{5}{13}$. What is the value of $\\cos(B)$?',
    options: [
      { id: 'A', text: '$\\frac{5}{13}$' },
      { id: 'B', text: '$\\frac{12}{13}$' },
      { id: 'C', text: '$\\frac{5}{12}$' },
      { id: 'D', text: '$\\frac{13}{12}$' }
    ],
    correctAnswer: 'A',
    explanation: 'In any right triangle where angle $C = 90^\\circ$, the acute angles $A$ and $B$ are complementary: $A + B = 90^\\circ$.\nBy the trigonometric co-function identity:\n$$\\cos(B) = \\cos(90^\\circ - A) = \\sin(A)$$\nSince $\\sin(A) = \\frac{5}{13}$, it follows immediately that $\\cos(B) = \\frac{5}{13}$ (Choice A).',
  },

  // 22. Math: Geometry and Trigonometry — Arc Length (Hard SPR)
  {
    id: 'm-official-spr-2',
    section: 'math',
    domain: 'geometry_and_trigonometry',
    domainTitle: 'Geometry & Trigonometry',
    skill: 'Circles, Central Angles, and Arc Length',
    difficulty: 'Hard',
    type: 'spr',
    prompt: 'A circle with center $O$ has a circumference of $36\\pi$. A central angle intercepts an arc of length $6\\pi$. What is the measure, in degrees, of this central angle?',
    correctAnswer: '60',
    acceptableAnswers: ['60'],
    explanation: 'The measure of a central angle is directly proportional to the ratio of arc length to total circumference:\n$$\\frac{\\text{Arc Length}}{\\text{Circumference}} = \\frac{\\theta}{360^\\circ}$$\n$$\\frac{6\\pi}{36\\pi} = \\frac{\\theta}{360^\\circ} \\implies \\frac{1}{6} = \\frac{\\theta}{360^\\circ} \\implies \\theta = 60^\\circ$$\nTherefore, the measure of the central angle is $60^\\circ$.',
  },

  // 23. Math: Geometry and Trigonometry — Right Triangle 30-60-90 (Easy MCQ)
  {
    id: 'm-official-4b',
    section: 'math',
    domain: 'geometry_and_trigonometry',
    domainTitle: 'Geometry & Trigonometry',
    skill: 'Right Triangle Trigonometry',
    difficulty: 'Easy',
    type: 'mcq',
    prompt: 'A right triangle has a hypotenuse of length $10$ and an acute angle measuring $30^\\circ$. What is the length of the side opposite the $30^\\circ$ angle?',
    options: [
      { id: 'A', text: '$5$' },
      { id: 'B', text: '$5\\sqrt{3}$' },
      { id: 'C', text: '$10\\sqrt{2}$' },
      { id: 'D', text: '$20$' }
    ],
    correctAnswer: 'A',
    explanation: 'In a $30^\\circ-60^\\circ-90^\\circ$ special right triangle, the side opposite the $30^\\circ$ angle is exactly half the length of the hypotenuse:\n$$\\text{Side} = \\frac{10}{2} = 5$$\nAlternatively, $\\sin(30^\\circ) = \\frac{\\text{opposite}}{\\text{hypotenuse}} \\implies \\frac{1}{2} = \\frac{x}{10} \\implies x = 5$ (Choice A).',
  },

  // 24. Math: Geometry and Trigonometry — Cylinder Volume (Medium SPR)
  {
    id: 'm-official-spr-4',
    section: 'math',
    domain: 'geometry_and_trigonometry',
    domainTitle: 'Geometry & Trigonometry',
    skill: 'Area and Volume Formulas',
    difficulty: 'Medium',
    type: 'spr',
    prompt: 'A right circular cylinder has a base radius of $4$ and a height of $9$. The volume of the cylinder is $k\\pi$. What is the value of $k$?',
    correctAnswer: '144',
    acceptableAnswers: ['144'],
    explanation: 'The volume formula for a right circular cylinder is $V = \\pi r^2 h$:\n$$V = \\pi (4^2)(9) = \\pi (16)(9) = 144\\pi$$\nSince $V = k\\pi$, the value of $k$ is $144$.',
  }
];
