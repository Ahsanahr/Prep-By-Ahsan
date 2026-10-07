import { Question } from '../types/sat';

export const MOCK_RW_TEST_5: Question[] = [
  {
    id: 'rw-test-5-q1',
    section: 'reading_writing',
    passage: "Handball is a unique sport that combines elements of basketball, soccer, and rugby. It\noriginated in Northern Europe in the late 19th century, and over time, the sport has\nevolved to become faster-paced and more dynamic. Professional handball players display\nincredible athleticism, dexterity, and agility, while the team-oriented nature of the sport\nfosters camaraderie and cooperation. Handball has gained global recognition, with the\nInternational Handball Federation hosting championships and the sport being included\nin the Olympic Games.",
    prompt: "Which choice best states the main purpose of the text?",
    options: [
      { id: 'A', text: "To argue that handball should be considered a more popular sport than basketball,\nsoccer, or rugby due to its unique qualities" },
      { id: 'B', text: "To explore the various strategies employed by professional handball players during\nhigh-stakes championship matches" },
      { id: 'C', text: "To provide an overview of handball, touching on its origins, unique characteristics,\nand international recognition" },
      { id: 'D', text: "To detail the specific training regimens and techniques used by handball players to\nimprove their athleticism and dexterity" }
    ],
    correctAnswer: 'C',
    explanation: "\"To provide an overview of handball, touching on its origins, unique\ncharacteristics, and international recognition\u2019 is the correct answer because the passage\noffers a brief introduction to handball, discussing its roots, the qualities that set it apart\nfrom other sports, and its global presence.\n\n2.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-5-q2',
    section: 'reading_writing',
    passage: "Biomedical engineering combines engineering principles with medical sciences to design\nand create equipment, devices, and software used in healthcare. From artificial organs to\nadvanced imaging systems, biomedical engineering has revolutionized the medical field.\nThis interdisciplinary approach has not only improved patient care but also led to signif-\nicant discoveries in disease diagnosis and prevention.",
    prompt: "Which choice best states the main purpose of the text?",
    options: [
      { id: 'A', text: "To discuss the specific techniques and principles used in biomedical engineering" },
      { id: 'B', text: "To argue that biomedical engineering is the most important field in modern medicine" },
      { id: 'C', text: "To highlight the importance of biomedical engineering in revolutionizing healthcare\nand medical research" },
      { id: 'D', text: "To provide a comprehensive history of the development of biomedical engineering" }
    ],
    correctAnswer: 'C',
    explanation: "\u2019To highlight the importance of biomedical engineering in revolutioniz-\ning healthcare and medical research\u2019 is the correct answer because the text focuses on\nthe positive impact of biomedical engineering on healthcare, patient care, and medical\ndiscoveries.\n\n3.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-5-q3',
    section: 'reading_writing',
    passage: "Text 1: Environmental economist Dr. Julia Stewart argues that placing a higher value on\necosystem services, such as clean air and water, will lead to better conservation practices\nand economic incentives for individuals and businesses. She believes that recognizing the\ntrue worth of these services can help governments create effective policies to protect the\nenvironment.\n\nText 2: Dr. Michael Green, another environmental economist, suggests that while valu-\ning ecosystem services is essential, it may not be enough to drive significant change. He\nemphasizes the importance of also considering the costs of transitioning to more sustain-\nable practices and investing in the development of innovative technologies to reduce the\nenvironmental impact.",
    prompt: "Based on the texts, how would Dr. Michael Green (Text 2) most likely respond to the\n\u201cplacing a higher value on ecosystem services\u201d discussed in Text 1?",
    options: [
      { id: 'A', text: "By arguing that placing higher value on ecosystem services is unnecessary and coun-\nterproductive to conservation efforts" },
      { id: 'B', text: "By acknowledging the importance of valuing ecosystem services, but emphasizing the\nneed to also consider the costs of transitioning to sustainable practices" },
      { id: 'C', text: "By agreeing with Dr. Julia Stewart\u2019s approach and suggesting that this is the only\nway to protect the environment effectively" },
      { id: 'D', text: "By suggesting that focusing on ecosystem services diverts attention from the more\nurgent issue of developing innovative technologies" }
    ],
    correctAnswer: 'B',
    explanation: "\u2019By acknowledging the importance of valuing ecosystem services, but\nemphasizing the need to also consider the costs of transitioning to sustainable practices\u2019\nis the correct answer because Text 2 suggests that Dr. Michael Green agrees with valuing\necosystem services but also emphasizes the importance of considering other factors, such as\nthe costs of transitioning to sustainable practices and investing in innovative technologies.\n\n4,",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-5-q4',
    section: 'reading_writing',
    passage: "In the field of computer engineering, cache memory plays a crucial role in improving the\nperformance of a computer system. It is a small, high-speed memory block that stores\ncopies of frequently used data, allowing the computer to the data more quickly\nthan if it had to access the main memory.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard\nEnglish?",
    options: [
      { id: 'A', text: "retrieve" },
      { id: 'B', text: "to retrieve" },
      { id: 'C', text: "retrieving" },
      { id: 'D', text: "retrieved" }
    ],
    correctAnswer: 'A',
    explanation: "\u2019retrieve\u2019 is the correct answer because it is a finite present tense verb that\nindicates the action of the computer in accessing the data, conforming to the conventions\nof Standard English.\n\n10.\n\n11.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-5-q5',
    section: 'reading_writing',
    passage: "The assassination of Archduke Franz Ferdinand in 1914 led to a domino effect of events\nthat eventually World War I. The escalating tensions between the major powers\nof Europe culminated in a global conflict that would last for over four years.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard\nEnglish?",
    options: [
      { id: 'A', text: "to trigger" },
      { id: 'B', text: "triggered" },
      { id: 'C', text: "triggering" },
      { id: 'D', text: "having triggered" }
    ],
    correctAnswer: 'B',
    explanation: "\u2019triggered\u2019 is the correct answer because it provides a finite past tense\nverb, indicating that the assassination led to the start of World War I.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-5-q6',
    section: 'reading_writing',
    passage: "Edith Wharton, a Pulitzer Prize-winning author, was known for her keen observation of\nsocial life. Her novel The Age of Innocence, set in the 1870s, explores the challenges\nfaced by individuals as they navigate the societal norms and expectations of their time.\nIn the story, the protagonist Newland Archer the love of his life, Countess Ellen\nOlenska.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard\nEnglish?",
    options: [
      { id: 'A', text: "encountered" },
      { id: 'B', text: "encounters" },
      { id: 'C', text: "to encounter" },
      { id: 'D', text: "encountering" }
    ],
    correctAnswer: 'B',
    explanation: "\u2019encounters\u2019 is the correct answer because it provides the finite present\ntense verb to perform the action of the subject (Newland Archer) and is consistent with\nthe other present tense verbs used to describe the events in the novel.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-5-q7',
    section: 'reading_writing',
    passage: "Throughout his political career, Winston Churchill was known for his powerful speeches.\nIn 1940, during the early years of World War II, he delivered a speech to the House of\nCommons, stating that Britain to fight the enemy on multiple fronts.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard\nEnglish?",
    options: [
      { id: 'A', text: "would continue" },
      { id: 'B', text: "continuing" },
      { id: 'C', text: "to continue" },
      { id: 'D', text: "had continued" }
    ],
    correctAnswer: 'A',
    explanation: "\u2019would continue\u2019 is the correct answer because it provides a finite verb\nin the future tense that is consistent with the context of the passage.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-5-q8',
    section: 'reading_writing',
    passage: "While researching a topic, a student has taken the following notes:\ne George Eliot, a pseudonym for Mary Ann Evans, was a prominent 19th-century\nBritish novelist.\ne Eliot\u2019s works often focused on rural life and explored complex human relationships.\ne Her novel Middlemarch is considered one of the greatest works of English literature.\n\ne Middlemarch earned critical acclaim for its intricate character development and nar-\ntrative structure.",
    prompt: "Which choice most effectively uses relevant information from the notes to discuss the\nsignificance of George Eliot\u2019s Middlemarch?",
    options: [
      { id: 'A', text: "George Eliot, also known as Mary Ann Evans, was a British novelist who wrote\nMiddlemarch." },
      { id: 'B', text: "Mary Ann Evans, who used the pseudonym George Eliot, was a 19th-century British\nnovelist." },
      { id: 'C', text: "George Eliot\u2019s works, including Middlemarch, often focused on rural life and human\nrelationships." },
      { id: 'D', text: "Middlemarch, written by George Eliot, is highly regarded for its complex characters\nand narrative structure, earning its place as one of the greatest works of English\nliterature.\n\n9, While researching a topic, a student has taken the following notes:\n\ne Property tax is a primary source of revenue for local governments.\n\ne Property tax rates vary by jurisdiction, often determined by local needs and priori-\nties.\n\ne Some argue that property taxes are regressive, disproportionately affecting lower-\nincome homeowners.\n\ne Tax relief programs for seniors, disabled individuals, and low-income households exist\nin some areas to mitigate the burden.\n\nWhich choice most effectively uses relevant information from the notes to discuss the\nrelationship between property tax and local government funding?" }
    ],
    correctAnswer: 'D',
    explanation: "\u2019Middlemarch, written by George Eliot, is highly regarded for its com-\nplex characters and narrative structure, earning its place as one of the greatest works of\nEnglish literature.\u2019 is the correct answer because it effectively discusses the significance\nof Middlemarch by highlighting its critical acclaim and the reasons for its praise.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-5-q9',
    section: 'reading_writing',
    passage: "Middlemarch, written by George Eliot, is highly regarded for its complex characters\nand narrative structure, earning its place as one of the greatest works of English\nliterature.\n\n9, While researching a topic, a student has taken the following notes:\n\ne Property tax is a primary source of revenue for local governments.\n\ne Property tax rates vary by jurisdiction, often determined by local needs and priori-\nties.\n\ne Some argue that property taxes are regressive, disproportionately affecting lower-\nincome homeowners.\n\ne Tax relief programs for seniors, disabled individuals, and low-income households exist\nin some areas to mitigate the burden.",
    prompt: "Which choice most effectively uses relevant information from the notes to discuss the\nrelationship between property tax and local government funding?",
    options: [
      { id: 'A', text: "Property tax, a primary revenue source for local governments, has rates that vary by\njurisdiction based on local needs and priorities." },
      { id: 'B', text: "Property tax rates are regressive, negatively impacting lower-income homeowners." },
      { id: 'C', text: "Tax relief programs exist for seniors, disabled individuals, and low-income households\nto provide financial support." },
      { id: 'D', text: "Property taxes are determined by the value of real estate and personal property,\ninfluencing local government revenue." }
    ],
    correctAnswer: 'A',
    explanation: "Property tax, a primary revenue source for local governments, has rates\nthat vary by jurisdiction based on local needs and priorities.\u2019 is the correct answer because\nit effectively uses information from the notes to discuss the relationship between property\ntax and local government funding.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-5-q10',
    section: 'reading_writing',
    passage: "While researching a topic, a student has taken the following notes:\ne Ghostbusters is a 1984 American supernatural comedy film directed by Ivan Reit-\nman.\n\ne The film stars Bill Murray, Dan Aykroyd, and Harold Ramis as a group of eccentric\nparapsychologists who start a ghost-catching business in New York City.\n\ne Ghostbusters was a critical and commercial success, grossing $295.2 million world-\nwide.\n\ne The film\u2019s theme song, \u2019Ghostbusters\u2019 by Ray Parker Jr., became a popular hit and\nreceived an Academy Award nomination for Best Original Song.",
    prompt: "Which choice most effectively uses relevant information from the notes to emphasize the\nimpact of Ghostbusters on the film industry and popular culture?",
    options: [
      { id: 'A', text: "Ghostbusters, directed by Ivan Reitman, is a supernatural comedy film released in\n1984." },
      { id: 'B', text: "Ghostbusters was a critical and commercial success, grossing $295.2 million world-\nwide, and its theme song by Ray Parker Jr. received an Academy Award nomination." },
      { id: 'C', text: "Bill Murray, Dan Aykroyd, and Harold Ramis starred as eccentric parapsychologists\nin Ghostbusters." },
      { id: 'D', text: "The film Ghostbusters focused on a group of parapsychologists who started a ghost-\ncatching business in New York City." }
    ],
    correctAnswer: 'B',
    explanation: "\u2019Ghostbusters was a critical and commercial success, grossing $295.2\nmillion worldwide, and its theme song by Ray Parker Jr. received an Academy Award\nnomination.\u2019 is the correct answer because it highlights both the financial success of the\nfilm and the impact of its theme song on popular culture.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-5-q11',
    section: 'reading_writing',
    passage: "12.\n\nNeil deGrasse Tyson, an astrophysicist, author, and science communicator, has inspired\nmillions through his books, lectures, and television appearances. Despite his tremendous\nsuccess, Tyson remains humble and dedicated to his work, focusing on the of\nscientific knowledge.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard\nEnglish?",
    options: [
      { id: 'A', text: "dissemination\u2019s" },
      { id: 'B', text: "disseminations" },
      { id: 'C', text: "dissemination" },
      { id: 'D', text: "disseminations\u2019\n\nSmart homes can greatly increase energy efficiency and comfort, thanks to their ability\n\nto communicate with appliances and adapt to changes in daily routines. For example, a\n\nsmart thermostat can learn a homeowner\u2019s preferences and adjust the home\u2019s temperature\nthe homeowner\u2019s arrival.\n\nWhich choice completes the text so that it conforms to the conventions of Standard\nEnglish?" }
    ],
    correctAnswer: 'C',
    explanation: "\u2019dissemination\u2019 is the correct. answer because it is a singular noun and\nfits the context of the sentence, indicating the act of spreading scientific knowledge.\n\n12.\n\n13.\n\n14.\n\n15.\n\n16.\n\n17.\n\n18.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-5-q12',
    section: 'reading_writing',
    passage: "disseminations\u2019\n\nSmart homes can greatly increase energy efficiency and comfort, thanks to their ability\n\nto communicate with appliances and adapt to changes in daily routines. For example, a\n\nsmart thermostat can learn a homeowner\u2019s preferences and adjust the home\u2019s temperature\nthe homeowner\u2019s arrival.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard\nEnglish?",
    options: [
      { id: 'A', text: "prior;" },
      { id: 'B', text: "prior to" },
      { id: 'C', text: "prior," },
      { id: 'D', text: "prior at" }
    ],
    correctAnswer: 'B',
    explanation: "\u2019prior to\u2019 is the correct answer because it properly connects the two\n\nphrases and maintains the flow of the sentence, while adhering to the conventions of\nStandard English.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-5-q13',
    section: 'reading_writing',
    passage: "14.\n\nPablo Neruda, a renowned Chilean poet, wrote numerous works throughout his lifetime\nthat captured his love for the natural world. In one of his celebrated collections, \"Elemental\nOdes,\u2019 Neruda explores his fascination with everyday objects, such as a lemon, an onion,\nand a in a distinctively lyrical style.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard\nEnglish?",
    options: [
      { id: 'A', text: "a pair of shoe" },
      { id: 'B', text: "pair of shoes" },
      { id: 'C', text: "pairs of shoes" },
      { id: 'D', text: "pair of shoe\n\nIn economics, the concept of marginal revenue refers to the increase in revenue that results\nfrom the sale of one additional unit of a product or service. Marginal revenue is a crucial\nfactor in determining the most level of production for a firm.\n\nWhich choice completes the text with the most logical and precise word or phrase?" }
    ],
    correctAnswer: 'B',
    explanation: "\u2019pair of shoes\u2019 is the correct answer because it correctly uses the singular\nnoun \u2019pair\u2019 and the plural noun \u2019shoes\u2019 to describe one set of two shoes.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-5-q14',
    section: 'reading_writing',
    passage: "pair of shoe\n\nIn economics, the concept of marginal revenue refers to the increase in revenue that results\nfrom the sale of one additional unit of a product or service. Marginal revenue is a crucial\nfactor in determining the most level of production for a firm.",
    prompt: "Which choice completes the text with the most logical and precise word or phrase?",
    options: [
      { id: 'A', text: "intuitive" },
      { id: 'B', text: "consistent" },
      { id: 'C', text: "profitable" },
      { id: 'D', text: "enjoyable" }
    ],
    correctAnswer: 'C',
    explanation: "\u2019profitable\u2019 is the correct answer because it describes the level of produc-\ntion that maximizes a firm\u2019s revenue.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-5-q15',
    section: 'reading_writing',
    passage: "16.\n\nDuring Barack Obama\u2019s presidency, he emphasized the importance of diplomacy and in-\nternational cooperation, leading to the signing of the Paris Agreement on climate change.\nDespite facing significant opposition, Obama\u2019s efforts to global relations were\nlargely successful.",
    prompt: "Which choice completes the text with the most logical and precise word or phrase?",
    options: [
      { id: 'A', text: "overlook" },
      { id: 'B', text: "disregard" },
      { id: 'C', text: "strengthen" },
      { id: 'D', text: "disrupt\n\nSocial robots, designed to assist and interact with humans, have been increasingly used\nin various settings, including healthcare and education. Despite their potential benefits,\nsome critics argue that these robots could human interaction and lead to negative\nconsequences.\n\nWhich choice completes the text with the most logical and precise word or phrase?" }
    ],
    correctAnswer: 'C',
    explanation: "\u2019strengthen\u2019 is the correct answer because it accurately describes Obama\u2019s\nefforts to improve global relations through diplomacy and international cooperation.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-5-q16',
    section: 'reading_writing',
    passage: "disrupt\n\nSocial robots, designed to assist and interact with humans, have been increasingly used\nin various settings, including healthcare and education. Despite their potential benefits,\nsome critics argue that these robots could human interaction and lead to negative\nconsequences.",
    prompt: "Which choice completes the text with the most logical and precise word or phrase?",
    options: [
      { id: 'A', text: "supplant" },
      { id: 'B', text: "catalog" },
      { id: 'C', text: "promote" },
      { id: 'D', text: "intensify" }
    ],
    correctAnswer: 'A',
    explanation: "\u2019supplant\u2019 is the correct answer because it accurately describes the con-\ncern of critics that social robots may replace human interaction, leading to negative\nconsequences.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-5-q17',
    section: 'reading_writing',
    passage: "18.\n\nBioremediation, a process that uses microorganisms to break down harmful substances, is\nan eco-friendly alternative to traditional cleanup methods. This approach effectively deals\nwith pollution in soil, water, and air by utilizing microbes that can digest contaminants\nand transform them into harmless byproducts. Bioremediation has been successful in\ntreating oil spills, industrial waste, and agricultural runoff, demonstrating its versatility\nin addressing various environmental issues.",
    prompt: "Which choice best states the main idea of the text?",
    options: [
      { id: 'A', text: "Bioremediation\u2019s ability to tackle multiple forms of pollution is limited by its reliance\non microorganisms." },
      { id: 'B', text: "Bioremediation primarily focuses on addressing pollution in the air, as it is more\ndifficult to treat than soil and water." },
      { id: 'C', text: "Bioremediation is an eco-friendly method for addressing various environmental issues\nby using microbes to break down contaminants." },
      { id: 'D', text: "Bioremediation has not yet proven effective in treating major environmental issues,\ndespite its potential applications.\n\nElizabeth Barrett Browning was a distinguished 19th-century poet who gained notori-\nety for her unique style, which blended traditional and innovative techniques. She was\nadmired for her use of intricate rhyme schemes, as well as her thematic exploration of\nlove, political change, and social injustice. Despite facing numerous obstacles, including\nill health and societal expectations for women, Browning persevered and produced a, vast\nand influential body of work.\n\nWhich choice best states the main idea of the text?" }
    ],
    correctAnswer: 'C',
    explanation: "\u2019Bioremediation is an eco-friendly method for addressing various envi-\nronmental issues by using microbes to break down contaminants\u2019 is the correct answer\nbecause the passage explains the process of bioremediation and emphasizes its effective-\nness and versatility in dealing with pollution in soil, water, and air.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-5-q18',
    section: 'reading_writing',
    passage: "Bioremediation has not yet proven effective in treating major environmental issues,\ndespite its potential applications.\n\nElizabeth Barrett Browning was a distinguished 19th-century poet who gained notori-\nety for her unique style, which blended traditional and innovative techniques. She was\nadmired for her use of intricate rhyme schemes, as well as her thematic exploration of\nlove, political change, and social injustice. Despite facing numerous obstacles, including\nill health and societal expectations for women, Browning persevered and produced a, vast\nand influential body of work.",
    prompt: "Which choice best states the main idea of the text?",
    options: [
      { id: 'A', text: "Elizabeth Barrett Browning\u2019s poetry focuses primarily on the theme of love." },
      { id: 'B', text: "Elizabeth Barrett Browning faced many challenges due to societal expectations for\nwomen." },
      { id: 'C', text: "Elizabeth Barrett Browning was an influential poet known for her unique style and\nthematic exploration." },
      { id: 'D', text: "Elizabeth Barrett Browning\u2019s work is characterized solely by its innovative techniques." }
    ],
    correctAnswer: 'C',
    explanation: "\u2019Elizabeth Barrett Browning was an influential poet known for her unique\nstyle and thematic exploration.\u2019 is the correct answer because it captures the essence of\nthe passage, mentioning her unique style, thematic exploration, and her influence as a\npoet.\n\n19.\n\n20.\n\n21.\n\n22.\n\n23.\n\n24.\n\n25.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-5-q19',
    section: 'reading_writing',
    passage: "20.\n\nThe passage highlights Niels Bohr\u2019s groundbreaking model of the hydrogen atom. Bohr\nproposed that electrons orbit the nucleus in discrete energy levels, and they can only\ntransition between these levels by emitting or absorbing a specific amount of energy. His\nmodel helped explain the previously inexplicable patterns of atomic spectra and laid the\nfoundation for the development of quantum mechanics.",
    prompt: "Which choice best states the main idea of the text?",
    options: [
      { id: 'A', text: "The passage discusses Niels Bohr\u2019s model of the hydrogen atom and its significance\nin explaining atomic spectra and paving the way for quantum mechanics." },
      { id: 'B', text: "The passage emphasizes the importance of Niels Bobr\u2019s model in addressing the\nlimitations of classical physics." },
      { id: 'C', text: "The passage focuses on Niels Bohr\u2019s contribution to the understanding of atomic\nstructure and its influence on quantum mechanics." },
      { id: 'D', text: "The passage primarily examines Niels Bohr\u2019s discovery of energy levels and the role\nof electrons in determining the properties of atoms.\n\nIn geotechnical engineering, soil classification is essential for determining the suitability\nof soil for construction projects. A recent study investigated the accuracy of various\nclassification methods across diverse soil types and regions.\n\nWhich finding, if true, would most strongly support the claim that a specific soil classifi-\ncation method is highly accurate?" }
    ],
    correctAnswer: 'A',
    explanation: "\"The passage discusses Niels Bohr\u2019s model of the hydrogen atom and its\nsignificance in explaining atomic spectra and paving the way for quantum mechanics.\u2019 is\nthe correct answer because it accurately captures the main idea of the passage, which\nfocuses on Bohr\u2019s model and its importance in understanding atomic spectra and the\ndevelopment of quantum mechanics.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-5-q20',
    section: 'reading_writing',
    passage: "The passage primarily examines Niels Bohr\u2019s discovery of energy levels and the role\nof electrons in determining the properties of atoms.\n\nIn geotechnical engineering, soil classification is essential for determining the suitability\nof soil for construction projects. A recent study investigated the accuracy of various\nclassification methods across diverse soil types and regions.",
    prompt: "Which finding, if true, would most strongly support the claim that a specific soil classifi-\ncation method is highly accurate?",
    options: [
      { id: 'A', text: "The method consistently produces correct classifications for a wide range of soil types\nand regions." },
      { id: 'B', text: "The method is widely used by geotechnical engineers and has been endorsed by a\nprofessional organization." },
      { id: 'C', text: "The method is based on a combination of physical and chemical properties of soil\nsamples." },
      { id: 'D', text: "The method was developed by a renowned geotechnical engineer with extensive ex-\nperience in the field." }
    ],
    correctAnswer: 'A',
    explanation: "\"The method consistently produces correct classifications for a wide range\nof soil types and regions.\u2019 is the correct answer because this finding directly supports the\nclaim that the specific soil classification method is highly accurate, as it demonstrates its\neffectiveness across diverse soil types and regions.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-5-q21',
    section: 'reading_writing',
    passage: "22.\n\nCountry X has experienced a significant trade surplus in recent years, primarily due to\nthe rapid growth of its manufacturing sector. This sector\u2019s expansion has been fueled by\nincreased foreign investments and advancements in technology.",
    prompt: "Which finding, if true, would most directly support the assertion that the growth of\nCountry X\u2019s manufacturing sector is the primary reason for its trade surplus?",
    options: [
      { id: 'A', text: "Country X has a well-established education system that emphasizes the importance\nof technological innovation." },
      { id: 'B', text: "The increase in foreign investments and technological advancements in Country X\u2019s\nmanufacturing sector aligns with the timeline of the trade surplus." },
      { id: 'C', text: "Country X\u2019s trade surplus has been consistent over the past decade, with no significant\nfluctuations." },
      { id: 'D', text: "Other sectors in Country X\u2019s economy, such as agriculture and services, have remained\nrelatively stable during the trade surplus period.\n\nModern sailboats often feature a keel, a structure that extends into the water to provide\nstability and prevent capsizing. Some sailboat designers argue that a heavier keel improves\na sailboat\u2019s overall performance.\n\nWhich finding, if true, would most directly undermine the designers\u2019 argument?" }
    ],
    correctAnswer: 'B',
    explanation: "\u2019The increase in foreign investments and technological advancements in\nCountry X\u2019s manufacturing sector aligns with the timeline of the trade surplus.\u2019 is the\ncorrect answer because it directly connects the growth of the manufacturing sector with\nthe trade surplus by showing a correlation in their timelines.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-5-q22',
    section: 'reading_writing',
    passage: "Other sectors in Country X\u2019s economy, such as agriculture and services, have remained\nrelatively stable during the trade surplus period.\n\nModern sailboats often feature a keel, a structure that extends into the water to provide\nstability and prevent capsizing. Some sailboat designers argue that a heavier keel improves\na sailboat\u2019s overall performance.",
    prompt: "Which finding, if true, would most directly undermine the designers\u2019 argument?",
    options: [
      { id: 'A', text: "Sailboats with lighter keels consistently have higher top speeds but lower stability." },
      { id: 'B', text: "A sailboat\u2019s keel weight has no significant impact on its ability to sail in rough waters." },
      { id: 'C', text: "Sailboats with heavier keels exhibit reduced maneuverability and slower average\nspeeds." },
      { id: 'D', text: "The materials used in constructing a keel can greatly influence the sailboat\u2019s perfor-\nmance." }
    ],
    correctAnswer: 'C',
    explanation: "Sailboats with heavier keels exhibit reduced maneuverability and slower\naverage speeds.\u2019 is the correct answer because it directly contradicts the argument that\na heavier keel improves a sailboat\u2019s overall performance.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-5-q23',
    section: 'reading_writing',
    passage: "24.\n\nW.H. Auden was a renowned poet known for his stylistic and technical achievements.\nHis work ranged from political and social commentary to love poems. Critics argue\nthat his early work was more innovative and daring, whereas his later work became more\nintrospective and traditional. This shift in Auden\u2019s poetry may be attributed to",
    prompt: "Which choice most logically completes the text?",
    options: [
      { id: 'A', text: "a lack of inspiration during the later years of his career" },
      { id: 'B', text: "changes in his personal life and experiences that influenced his writing" },
      { id: 'C', text: "external pressures to conform to a specific writing style" },
      { id: 'D', text: "his dissatisfaction with the impact of his earlier works\n\nFidel Castro was a controversial figure in Cuban history. While some people praise him\nfor his role in the Cuban Revolution and the establishment of socialism in Cuba, others\ncriticize him for his authoritarian rule and human rights abuses. His legacy remains\n\nWhich choice most logically completes the text?" }
    ],
    correctAnswer: 'B',
    explanation: "\u2019changes in his personal life and experiences that influenced his writing\u2019\nis the correct answer because the passage implies that a shift occurred in Auden\u2019s poetry,\nand personal experiences can significantly impact an artist\u2019s work.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-5-q24',
    section: 'reading_writing',
    passage: "his dissatisfaction with the impact of his earlier works\n\nFidel Castro was a controversial figure in Cuban history. While some people praise him\nfor his role in the Cuban Revolution and the establishment of socialism in Cuba, others\ncriticize him for his authoritarian rule and human rights abuses. His legacy remains",
    prompt: "Which choice most logically completes the text?",
    options: [
      { id: 'A', text: "universally celebrated for his resilience" },
      { id: 'B', text: "completely disregarded by the international community" },
      { id: 'C', text: "solely focused on his economic achievements" },
      { id: 'D', text: "a subject of intense debate and varying perspectives" }
    ],
    correctAnswer: 'D',
    explanation: "\u2019a subject of intense debate and varying perspectives\u2019 is the correct\nanswer because it acknowledges the differing opinions on Fidel Castro\u2019s role in Cuban\nhistory.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-5-q25',
    section: 'reading_writing',
    passage: "26.\n\nThe Challenger disaster occurred on January 28, 1986, when the Space Shuttle Chal-\nlenger exploded shortly after liftoff, resulting in the death of all seven crew members. A\nmajor cause of this tragedy was the failure of an O-ring seal in the shuttle\u2019s solid rocket\nbooster. Engineers had expressed concerns about the performance of these O-rings in\ncold temperatures, and the launch occurred on an unusually cold day. an inves-\ntigation revealed that communication breakdowns and management issues within NASA\ncontributed to the decision to proceed with the launch despite these concerns.",
    prompt: "Which choice completes the text with the most logical transition?",
    options: [
      { id: 'A', text: "Furthermore" },
      { id: 'B', text: "In addition" },
      { id: 'C', text: "However" },
      { id: 'D', text: "On the other hand\n\nPrincess Diana was not only known for her humanitarian work and her iconic fashion\nsense, but also for her tumultuous relationship with the media. Diana was often hounded\nby paparazzi, which led to her feeling overwhelmed and invaded. in 1998, she\ndecided to withdraw from public life temporarily to protect her own well-being and her\nsons\u2019 privacy.\n\nWhich choice completes the text with the most logical transition?" }
    ],
    correctAnswer: 'A',
    explanation: "\u2019Furthermore\u2019 is the correct answer because it logically signals that\nthe investigation\u2019s findings of communication breakdowns and management issues within\n\n26.\n\n27.\n\nNASA are additional contributing factors to the disaster, beyond the O-ring failure and\ncold temperatures.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-5-q26',
    section: 'reading_writing',
    passage: "On the other hand\n\nPrincess Diana was not only known for her humanitarian work and her iconic fashion\nsense, but also for her tumultuous relationship with the media. Diana was often hounded\nby paparazzi, which led to her feeling overwhelmed and invaded. in 1998, she\ndecided to withdraw from public life temporarily to protect her own well-being and her\nsons\u2019 privacy.",
    prompt: "Which choice completes the text with the most logical transition?",
    options: [
      { id: 'A', text: "Similarly," },
      { id: 'B', text: "As a result," },
      { id: 'C', text: "On the other hand," },
      { id: 'D', text: "In contrast," }
    ],
    correctAnswer: 'B',
    explanation: "\u2019As a result\u2019 is the correct answer because it shows the consequence of\nPrincess Diana\u2019s troubled relationship with the media and why she chose to withdraw\nfrom public life.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-5-q27',
    section: 'reading_writing',
    passage: "A market economy is an economic system in which the production and distribution of\ngoods and services are determined by supply and demand. This type of economy allows\nbusinesses to thrive and encourages innovation, as competition drives companies to create\nnew products and improve existing ones. despite the numerous advantages, a\nmarket economy also has its share of drawbacks, such as income inequality and potential\nenvironmental degradation.",
    prompt: "Which choice completes the text with the most logical transition?",
    options: [
      { id: 'A', text: "Moreover" },
      { id: 'B', text: "However" },
      { id: 'C', text: "In addition" },
      { id: 'D', text: "On the contrary" }
    ],
    correctAnswer: 'B',
    explanation: "\u2019However\u2019 is the correct answer because it logically signals that the\nsentence following it presents a contrast to the previous sentence, which discusses the\nadvantages of a market economy.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
];

export const MOCK_RW_TEST_6: Question[] = [
  {
    id: 'rw-test-6-q1',
    section: 'reading_writing',
    passage: "In recent years, international trade agreements have become a point of contention among\nvarious nations. Some argue that these agreements are detrimental to domestic industries,\nleading to job losses and wage stagnation. Others contend that such agreements promote\nglobal economic growth and foster international cooperation. By analyzing the pros and\ncons of these agreements, policymakers are better equipped to make informed decisions\nthat benefit their respective countries.",
    prompt: "Which choice best states the main purpose of the text?",
    options: [
      { id: 'A', text: "To present the differing perspectives on international trade agreements and their\neffects on global economy" },
      { id: 'B', text: "To argue in favor of international trade agreements as a means of promoting economic\ngrowth" },
      { id: 'C', text: "To criticize international trade agreements for causing job losses and wage stagnation" },
      { id: 'D', text: "To provide an in-depth analysis of a specific international trade agreement and its\nimplications" }
    ],
    correctAnswer: 'A',
    explanation: "\u2019To present the differing perspectives on international trade agreements\nand their effects on global economy\u2019 is the correct answer because the passage mentions\nboth the positive and negative views on international trade agreements and how they\nimpact the global economy.\n\n2.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-6-q2',
    section: 'reading_writing',
    passage: "Ultimate Frisbee, a team sport played with a flying disc, has gained popularity worldwide\nsince its inception in the late 1960s. The sport emphasizes fair play and sportsmanship\nthrough its unique feature, the \u2018Spirit of the Game.\u2019 This principle encourages players to\ncompete with integrity and respect, relying on self-officiating and mutual trust between\nopponents. Ultimate Frisbee\u2019s non-contact nature and self-regulated gameplay foster a\npositive environment that transcends winning and losing, making the sport appealing to\ndiverse communities.",
    prompt: "Which choice best states the main purpose of the text?",
    options: [
      { id: 'A', text: "To provide a detailed description of the rules and gameplay elements of Ultimate\nFrisbee as a sport" },
      { id: 'B', text: "To discuss the history of Ultimate Frisbee and its growth in popularity since the late\n1960s" },
      { id: 'C', text: "To compare and contrast Ultimate Frisbee with other team sports and their respective\ngameplay features" },
      { id: 'D', text: "To highlight Ultimate Frisbee\u2019s unique emphasis on sportsmanship and self-regulation\nthrough the \u2019Spirit of the Game\u2019" }
    ],
    correctAnswer: 'D',
    explanation: "\u2019To highlight Ultimate Frisbee\u2019s unique emphasis on sportsmanship and\nself-regulation through the \u2019Spirit of the Game\u201d is the correct answer because the text\nfocuses on the \u2019Spirit of the Game\u2019 as the defining feature of Ultimate Frisbee, emphasizing\nits impact on fair play and positive environment.\n\n3.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-6-q3',
    section: 'reading_writing',
    passage: "Text 1: Napoleon Bonaparte, a military genius, was known for his brilliant strategies and\ntactics in warfare. His army\u2019s success was largely due to his ability to analyze complex\nsituations quickly and make effective decisions.\n\nText 2: Napoleon\u2019s leadership style was also marked by a relentless ambition and a thirst\nfor personal glory. Some historians argue that his desire for conquest and power often\novershadowed his military acumen, leading to costly mistakes and ultimately his downfall.",
    prompt: "Based on the texts, how would the historians mentioned in Text 2 most likely respond to\nthe military genius discussed in Text 1?",
    options: [
      { id: 'A', text: "By arguing that the historians in Text 2 are biased against Napoleon and are down-\nplaying his military accomplishments to discredit his legacy" },
      { id: 'B', text: "By asserting that Napoleon\u2019s military genius was exaggerated, and that his victories\nwere primarily due to the superior strength of the French army" },
      { id: 'C', text: "By suggesting that Napoleon\u2019s military genius was a myth and that his successes\nwere simply a result of luck and favorable circumstances" },
      { id: 'D', text: "By acknowledging Napoleon\u2019s strategic abilities, but emphasizing that his ambition\nand quest for personal glory were detrimental to his long-term success" }
    ],
    correctAnswer: 'D',
    explanation: "\u2019By acknowledging Napoleon\u2019s strategic abilities, but emphasizing that\nhis ambition and quest for personal glory were detrimental to his long-term success\u2019 is the\ncorrect answer because Text 2 highlights that some historians believe Napoleon\u2019s ambition\nand thirst for personal glory were significant factors in his downfall, despite his military\ngenius.\n\n4,",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-6-q4',
    section: 'reading_writing',
    passage: "The Brazilian economic miracle, a period of rapid economic growth and industrialization,\noccurred from the late 1960s to the early 1980s. During this time, Brazil\u2019s GDP at\na remarkable rate, averaging around 8.5% per year, transforming the country into a major\nglobal economic power.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard\nEnglish?",
    options: [
      { id: 'A', text: "will grow" },
      { id: 'B', text: "has grown" },
      { id: 'C', text: "grew" },
      { id: 'D', text: "growing" }
    ],
    correctAnswer: 'C',
    explanation: "\u2019grew\u2019 is the correct answer because it uses the simple past tense verb to\ndescribe the growth of Brazil\u2019s GDP during the specific period of the Brazilian economic\nmiracle, which occurred in the past.\n\n10.\n\n11.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-6-q5',
    section: 'reading_writing',
    passage: "In quality engineering, a process capability index is a statistical measure that evaluates\nhow well a manufacturing process can produce output within specified tolerance limits.\nA process with a high capability index a lower defect rate, ensuring consistent\nproduct quality.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard\nEnglish?",
    options: [
      { id: 'A', text: "has" },
      { id: 'B', text: "having" },
      { id: 'C', text: "to have" },
      { id: 'D', text: "had" }
    ],
    correctAnswer: 'A',
    explanation: "\u2019has\u2019 is the correct answer because it provides the appropriate present\ntense verb to indicate the relationship between the high capability index and a lower\ndefect rate.\n\n.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-6-q6',
    section: 'reading_writing',
    passage: "In geological engineering, the study of rock mechanics is essential for analyzing the sta-\nbility of tunnels and caverns. Engineers must consider the rock\u2019s initial state, including\nfactors such as the presence of fractures, before they any excavation projects to\nensure safety and effectiveness.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard\nEnglish?",
    options: [
      { id: 'A', text: "undertaking" },
      { id: 'B', text: "to undertake" },
      { id: 'C', text: "undertake" },
      { id: 'D', text: "undertook" }
    ],
    correctAnswer: 'C',
    explanation: "\u2019undertake\u2019 is the correct answer because it provides the main clause\nwith a finite present tense verb to indicate the action performed by engineers.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-6-q7',
    section: 'reading_writing',
    passage: "The Andean Community, established in 1969, aimed to promote the economic integration\nand political cooperation of its member countries. Initially, the organization began with\nfour countries\u2014Bolivia, Colombia, Ecuador, and Peru\u2014but in 1973, Chile the\ncommunity.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard\nEnglish?",
    options: [
      { id: 'A', text: "joining" },
      { id: 'B', text: "to join" },
      { id: 'C', text: "joined" },
      { id: 'D', text: "will join" }
    ],
    correctAnswer: 'C',
    explanation: "joined\u2019 is the correct answer because it provides the finite past tense\nverb needed to properly express the action of Chile becoming a member of the Andean\nCommunity.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-6-q8',
    section: 'reading_writing',
    passage: "While researching a topic, a student has taken the following notes:\ne Murray Gell-Mann was an American physicist who won the 1969 Nobel Prize in\nPhysics.\ne Gell-Mann helped develop the theory of quantum chromodynamics.\n\ne He introduced the concept of quarks, which are elementary particles and a funda-\nmental constituent of matter.\n\ne Gell-Mann also co-founded the Santa Fe Institute, a research center dedicated to the\nstudy of complex systems.",
    prompt: "Which choice most effectively uses relevant information from the notes to emphasize Gell-\nMann\u2019s most notable achievement?",
    options: [
      { id: 'A', text: "Murray Gell-Mann was an American physicist known for his work in quantum chro-\nmodynamics and co-founding the Santa Fe Institute." },
      { id: 'B', text: "Gell-Mann\u2019s work in quantum chromodynamics and his introduction of quarks revo-\nlutionized the study of physics." },
      { id: 'C', text: "As a physicist and a founder of the Santa Fe Institute, Murray Gell-Mann was influ-\nential in a variety of scientific fields." },
      { id: 'D', text: "Murray Gell-Mann, who introduced the concept of quarks and won the 1969 Nobel\nPrize in Physics, made groundbreaking contributions to our understanding of matter." }
    ],
    correctAnswer: 'D',
    explanation: "Murray Gell-Mann, who introduced the concept of quarks and won the\n1969 Nobel Prize in Physics, made groundbreaking contributions to our understanding of\nmatter.\u2019 is the correct answer because it effectively combines the notes about Gell-Mann\u2019s\nNobel Prize and the concept of quarks to emphasize his most notable achievement.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-6-q9',
    section: 'reading_writing',
    passage: "While researching a topic, a student has taken the following notes:\ne Superman, a fictional character created by Jerry Siegel and Joe Shuster, first ap-\npeared in Action Comics #1.\n\ne Superman\u2019s secret identity is Clark Kent, a mild-mannered reporter for the Daily\nPlanet.\n\ne The character represents the ultimate good, defending humanity and upholding jus-\ntice.\n\ne One of Superman\u2019s key abilities is his invulnerability, allowing him to withstand\nextreme forces and conditions.",
    prompt: "Which choice most effectively uses relevant information from the notes to explain how\nSuperman embodies the ultimate good?",
    options: [
      { id: 'A', text: "Superman represents the ultimate good by defending humanity and upholding justice\nwith his incredible abilities, such as invulnerability." },
      { id: 'B', text: "As Clark Kent, Superman works as a reporter for the Daily Planet." },
      { id: 'C', text: "Superman was created by Jerry Siegel and Joe Shuster and made his first appearance\nin Action Comics #1." },
      { id: 'D', text: "Superman\u2019s invulnerability allows him to withstand extreme forces and conditions,\nmaking him an iconic character." }
    ],
    correctAnswer: 'A',
    explanation: "\"Superman represents the ultimate good by defending humanity and\nupholding justice with his incredible abilities, such as invulnerability.\u2019 is the correct\nanswer because it effectively uses information from the notes to explain how Superman\nembodies the ultimate good.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-6-q10',
    section: 'reading_writing',
    passage: "While researching a topic, a student has taken the following notes:\n\ne Plant-based meat substitutes are gaining popularity as an alternative to traditional\nmeat.\n\ne Companies such as Beyond Meat and Impossible Foods have developed plant-based\nburger products.\n\ne These plant-based meats utilize proteins from peas, soy, and other plants.\n\ne Environmental benefits of plant-based meat substitutes include reduced greenhouse\ngas emissions and lower water usage.",
    prompt: "Which choice most effectively highlights a key advantage of plant-based meat substitutes\ncompared to traditional meat?",
    options: [
      { id: 'A', text: "Beyond Meat and Impossible Foods are well-known companies producing plant-based\nburger products." },
      { id: 'B', text: "Plant-based meat substitutes utilize proteins from peas, soy, and other plant sources." },
      { id: 'C', text: "Plant-based meat substitutes have environmental benefits, such as reduced green-\nhouse gas emissions and lower water usage." },
      { id: 'D', text: "The popularity of plant-based meat substitutes has increased as more people search\nfor alternatives to traditional meat." }
    ],
    correctAnswer: 'C',
    explanation: "\u2019Plant-based meat substitutes have environmental benefits, such as re-\nduced greenhouse gas emissions and lower water usage.\u2019 is the correct answer because it\nhighlights a key advantage of plant-based meat substitutes compared to traditional meat.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-6-q11',
    section: 'reading_writing',
    passage: "12.\n\nAlice Walker, a prolific author, is best known for her novel, \"The Color Purple.\u2019 The novel\nis set in the rural American South and explores the life of African American women during\nthe early 20th century. Walker\u2019s writing style combines elements of African American\ndialect with , giving her work a unique and authentic voice.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard\nEnglish?",
    options: [
      { id: 'A', text: "Standard English\u2019s conventions" },
      { id: 'B', text: "Standard English conventions" },
      { id: 'C', text: "conventions of standard English\u2019s" },
      { id: 'D', text: "Standard English, conventions\n\nDuring the Battle of Hogwarts, Professor McGonagall, head of Gryffindor House, demon-\n\nstrated her powerful Transfiguration abilities by animating the stone statues in the cas-\n\ntle to defend Hogwarts. She cast the spell Piertotum Locomotor, which brought the\nto life and commanded them to protect the school.\n\nWhich choice completes the text so that it conforms to the conventions of Standard\nEnglish?" }
    ],
    correctAnswer: 'B',
    explanation: "Standard English conventions\u2019 is the correct answer because it properly\nconveys that the writing style combines elements of African American dialect with the\nconventions of Standard English.\n\n12.\n\n13.\n\n14,\n\n15.\n\n16.\n\n17.\n\n18.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-6-q12',
    section: 'reading_writing',
    passage: "Standard English, conventions\n\nDuring the Battle of Hogwarts, Professor McGonagall, head of Gryffindor House, demon-\n\nstrated her powerful Transfiguration abilities by animating the stone statues in the cas-\n\ntle to defend Hogwarts. She cast the spell Piertotum Locomotor, which brought the\nto life and commanded them to protect the school.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard\nEnglish?",
    options: [
      { id: 'A', text: "statues to life" },
      { id: 'B', text: "statues life" },
      { id: 'C', text: "statues\u2019s life" },
      { id: 'D', text: "statues\u2019 life" }
    ],
    correctAnswer: 'A',
    explanation: "\u2019statues to life\u2019 is the correct answer because it properly utilizes the\npreposition \u2018to\u2019 in order to indicate the transition of the statues from being inanimate to\nanimate.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-6-q13',
    section: 'reading_writing',
    passage: "Bill Gates, the co-founder of Microsoft, has made significant contributions to global health\nthrough the Bill and Melinda Gates Foundation. The foundation\u2019s work includes funding\nprojects that focus on improving access to clean water in developing countries, as well as\n\nto eradicate diseases such as malaria and polio.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard\nEnglish?",
    options: [
      { id: 'A', text: "efforts to" },
      { id: 'B', text: "effort\u2019s to" },
      { id: 'C', text: "efforts too" },
      { id: 'D', text: "effort to" }
    ],
    correctAnswer: 'A',
    explanation: "\u2018efforts to\u2019 is the correct answer because it uses the plural form \u2019efforts\u2019\nto match the plural subject of the sentence, and it correctly uses \u2019to\u2019 to introduce the\ninfinitive verb eradicate\u2019.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-6-q14',
    section: 'reading_writing',
    passage: "Variable costs are those that vary directly with the level of production or sales. Examples\ninclude raw materials, labor, and shipping expenses. When companies experience signifi-\ncant fluctuations in demand, their total costs can become , making it challenging\nto plan and manage their resources effectively.",
    prompt: "Which choice completes the text with the most logical and precise word or phrase?",
    options: [
      { id: 'A', text: "negligible" },
      { id: 'B', text: "unstable" },
      { id: 'C', text: "sustainable" },
      { id: 'D', text: "systematic" }
    ],
    correctAnswer: 'B',
    explanation: "\u2019unstable\u2019 is the correct answer because it accurately describes a situation\nwhere costs are difficult to predict due to fluctuations in demand.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-6-q15',
    section: 'reading_writing',
    passage: "16.\n\nDuring the Napoleonic Wars, the British naval blockade of French ports led to extensive\nsmuggling operations. Due to the nature of their activities, smugglers would\noften use small, fast vessels to avoid detection by the British Royal Navy.",
    prompt: "Which choice completes the text with the most logical and precise word or phrase?",
    options: [
      { id: 'A', text: "charitable" },
      { id: 'B', text: "clandestine" },
      { id: 'C', text: "ceremonial" },
      { id: 'D', text: "conventional\n\nGeothermal energy, a renewable energy source, is derived from the Earth\u2019s internal heat.\nThis heat is in underground reservoirs, where it can be extracted and converted\ninto electricity by geothermal power plants.\n\nWhich choice completes the text with the most logical and precise word or phrase?" }
    ],
    correctAnswer: 'B',
    explanation: "\u2019Clandestine\u2019 is the correct answer because it accurately describes the\nsecretive and illicit nature of the smuggling operations during the Napoleonic Wars.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-6-q16',
    section: 'reading_writing',
    passage: "conventional\n\nGeothermal energy, a renewable energy source, is derived from the Earth\u2019s internal heat.\nThis heat is in underground reservoirs, where it can be extracted and converted\ninto electricity by geothermal power plants.",
    prompt: "Which choice completes the text with the most logical and precise word or phrase?",
    options: [
      { id: 'A', text: "depleted" },
      { id: 'B', text: "hidden" },
      { id: 'C', text: "stored" },
      { id: 'D', text: "ignored" }
    ],
    correctAnswer: 'C',
    explanation: "\u2019stored\u2019 is the correct answer because it accurately describes how the\nEarth\u2019s internal heat is contained in underground reservoirs, making it available for ex-\ntraction and conversion into electricity.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-6-q17',
    section: 'reading_writing',
    passage: "18.\n\nExcise tax, a tax on specific goods or services, is levied by the government to generate\nrevenue and discourage harmful consumption. While some argue that it unfairly targets\nlow-income individuals, others believe that it serves public health by decreasing tobacco\nand alcohol consumption. Ultimately, excise tax has both economic and social implica-\ntions.",
    prompt: "Which choice best states the main idea of the text?",
    options: [
      { id: 'A', text: "Excise tax primarily aims to target low-income individuals in society." },
      { id: 'B', text: "Excise tax has both economic and social implications, generating revenue while in-\nfluencing consumption behavior." },
      { id: 'C', text: "Excise tax generates revenue for the government without any social implications." },
      { id: 'D', text: "The main purpose of excise tax is to decrease tobacco and alcohol consumption.\n\nForensic engineering is a specialized field within engineering that involves investigating\nand analyzing failures in structures, systems, or components. This process often requires\nexamining materials, products, and structures to determine the cause of a failure and\nidentify ways to prevent similar failures in the future. Forensic engineers work closely\nwith other professionals such as architects, safety experts, and insurance investigators\nto provide comprehensive insights into the factors contributing to structural or material\nfailures.\n\nWhich choice best states the main idea of the text?" }
    ],
    correctAnswer: 'B',
    explanation: "\u2019Excise tax has both economic and social implications, generating revenue\nwhile influencing consumption behavior.\u2019 is the correct answer because it covers the main\npoints mentioned in the passage: revenue generation and the impact on consumption\nhabits.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-6-q18',
    section: 'reading_writing',
    passage: "The main purpose of excise tax is to decrease tobacco and alcohol consumption.\n\nForensic engineering is a specialized field within engineering that involves investigating\nand analyzing failures in structures, systems, or components. This process often requires\nexamining materials, products, and structures to determine the cause of a failure and\nidentify ways to prevent similar failures in the future. Forensic engineers work closely\nwith other professionals such as architects, safety experts, and insurance investigators\nto provide comprehensive insights into the factors contributing to structural or material\nfailures.",
    prompt: "Which choice best states the main idea of the text?",
    options: [
      { id: 'A', text: "Forensic engineering investigates failures in structures, systems, or components and\nworks to prevent future failures." },
      { id: 'B', text: "Forensic engineers work exclusively with insurance companies to investigate failures." },
      { id: 'C', text: "The primary goal of forensic engineering is to understand and improve materials." },
      { id: 'D', text: "Forensic engineering solely focuses on the analysis of failed structures." }
    ],
    correctAnswer: 'A',
    explanation: "\u2019Forensic engineering investigates failures in structures, systems, or com-\nponents and works to prevent future failures.\u2019 is the correct answer because it accurately\nsummarizes the main idea of the passage, which discusses the role of forensic engineering\nin analyzing failures and finding ways to prevent them.\n\n19.\n\n20.\n\n21.\n\n22.\n\n23.\n\n24.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-6-q19',
    section: 'reading_writing',
    passage: "20.\n\nIn quality engineering, organizations must focus on both process improvement and prod-\nuct development to achieve the highest standards. Process improvement involves refining\nthe methods used to create products, while product development focuses on designing\nand building high-quality products. By balancing these two approaches, companies can\nefficiently deliver products that meet customer expectations and comply with industry\nregulations.",
    prompt: "Which choice best states the main idea of the text?",
    options: [
      { id: 'A', text: "The importance of process improvement in quality engineering" },
      { id: 'B', text: "The necessity of product development for achieving high-quality products" },
      { id: 'C', text: "The role of customer expectations and industry regulations in quality engineering" },
      { id: 'D', text: "Balancing process improvement and product development in quality engineering\n\nDuring the Napoleonic Wars, French forces under Napoleon Bonaparte faced difficulties\nin maintaining supply lines. The British Royal Navy\u2019s dominance of the seas hindered the\nFrench army\u2019s ability to transport goods and resources, ultimately affecting their military\ncampaigns.\n\nWhich finding, if true, would most strongly support the argument that the British Royal\nNavy significantly impacted the French army\u2019s campaigns?" }
    ],
    correctAnswer: 'D',
    explanation: "\u2019Balancing process improvement and product development in quality\nengineering\u2019 is the correct answer because the passage discusses the significance of both\nprocess improvement and product development in achieving high standards in quality\nengineering.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-6-q20',
    section: 'reading_writing',
    passage: "Balancing process improvement and product development in quality engineering\n\nDuring the Napoleonic Wars, French forces under Napoleon Bonaparte faced difficulties\nin maintaining supply lines. The British Royal Navy\u2019s dominance of the seas hindered the\nFrench army\u2019s ability to transport goods and resources, ultimately affecting their military\ncampaigns.",
    prompt: "Which finding, if true, would most strongly support the argument that the British Royal\nNavy significantly impacted the French army\u2019s campaigns?",
    options: [
      { id: 'A', text: "The French army had a larger number of soldiers compared to the British army." },
      { id: 'B', text: "Napoleon Bonaparte often adopted a scorched-earth policy to deny resources to his\nenemies." },
      { id: 'C', text: "The British Royal Navy was unable to defeat the French fleet in every naval engage-\nment." },
      { id: 'D', text: "The French army experienced consistent shortages of ammunition and food during\nmajor battles." }
    ],
    correctAnswer: 'D',
    explanation: "\"The French army experienced consistent shortages of ammunition and\nfood during major battles.\u2019 is the correct answer because it directly demonstrates the\nimpact of the British Royal Navy\u2019s dominance on the French army\u2019s ability to maintain\nsupply lines and conduct successful military campaigns.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-6-q21',
    section: 'reading_writing',
    passage: "22.\n\nA recent study found that runners who incorporated interval training into their routine\nimproved their overall performance more than those who only focused on distance running.\nThe researchers concluded that the variety in training routines played a significant role\nin the observed improvements.",
    prompt: "Which finding, if true, would most directly undermine the researcher\u2019s conclusion?",
    options: [
      { id: 'A', text: "A separate study found that athletes who exclusively practiced interval training did\nnot show significant performance improvements." },
      { id: 'B', text: "Top long-distance runners in the world often incorporate interval training into their\nroutines." },
      { id: 'C', text: "Another study found that runners who focused solely on distance running experienced\nfewer injuries than those who incorporated interval training." },
      { id: 'D', text: "A follow-up study revealed that participants who improved their performance also\nmade significant changes to their diet and sleep patterns.\n\nSylvia Townsend Warner, a British novelist and poet, was known for her strong political\nbeliefs. She joined the Communist Party in 1935 and actively participated in the Spanish\nCivil War. Her literary works often reflected her political views, making her a prominent\nfigure in leftist circles.\n\nWhich finding, if true, would most strongly support the claim that Sylvia Townsend\nWarner\u2019s political beliefs significantly impacted her literary works?" }
    ],
    correctAnswer: 'D',
    explanation: "\u2019A follow-up study revealed that participants who improved their per-\nformance also made significant changes to their diet and sleep patterns.\u2019 is the correct\nanswer because it introduces another factor that could be responsible for the observed\nperformance improvements, thus undermining the researcher\u2019s conclusion that the variety\nin training routines played a significant role in the improvements.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-6-q22',
    section: 'reading_writing',
    passage: "A follow-up study revealed that participants who improved their performance also\nmade significant changes to their diet and sleep patterns.\n\nSylvia Townsend Warner, a British novelist and poet, was known for her strong political\nbeliefs. She joined the Communist Party in 1935 and actively participated in the Spanish\nCivil War. Her literary works often reflected her political views, making her a prominent\nfigure in leftist circles.",
    prompt: "Which finding, if true, would most strongly support the claim that Sylvia Townsend\nWarner\u2019s political beliefs significantly impacted her literary works?",
    options: [
      { id: 'A', text: "A detailed analysis of Warner\u2019s works reveals frequent themes of social justice, class\nstruggle, and anti-fascism." },
      { id: 'B', text: "Sylvia Townsend Warner had a personal library containing numerous books on poli-\ntics, history, and social issues." },
      { id: 'C', text: "Several of Warner\u2019s friends and acquaintances were also members of the Communist\nParty or held leftist political beliefs." },
      { id: 'D', text: "Warner\u2019s works were often criticized for their unconventional narrative style and\nunique character development." }
    ],
    correctAnswer: 'A',
    explanation: "\u2019A detailed analysis of Warner\u2019s works reveals frequent themes of so-\ncial justice, class struggle, and anti-fascism.\u2019 is the correct answer because it directly\ndemonstrates that her political beliefs were significantly reflected in her literary works,\nsupporting the claim.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-6-q23',
    section: 'reading_writing',
    passage: "24.\n\nRenewable energy sources, such as solar and wind power, have gained significant traction\nin recent years. However, these sources are not without their challenges, including in-\ntermittency and storage issues. Researchers are exploring innovative solutions to address\nthese obstacles, with the goal of",
    prompt: "Which choice most logically completes the text?",
    options: [
      { id: 'A', text: "convincing skeptics that renewable energy sources are the only viable options for the\nfuture" },
      { id: 'B', text: "completely replacing traditional energy sources with renewable ones" },
      { id: 'C', text: "disproving the notion that renewable energy sources have inherent shortcomings" },
      { id: 'D', text: "achieving a more reliable, sustainable, and efficient energy system\n\nDevelopment economists argue that investing in education is crucial for economic growth.\nHowever, they also acknowledge that the quality of education plays a significant role\nin this growth. Thus, a mere increase in the number of schools and students may not\n\nnecessarily lead to\n\nWhich choice most logically completes the text?" }
    ],
    correctAnswer: 'D',
    explanation: "\u2019achieving a more reliable, sustainable, and efficient energy system\u2019 is\nthe correct answer because it aligns with the researchers\u2019 efforts to address the challenges\nof renewable energy sources.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-6-q24',
    section: 'reading_writing',
    passage: "achieving a more reliable, sustainable, and efficient energy system\n\nDevelopment economists argue that investing in education is crucial for economic growth.\nHowever, they also acknowledge that the quality of education plays a significant role\nin this growth. Thus, a mere increase in the number of schools and students may not\n\nnecessarily lead to",
    prompt: "Which choice most logically completes the text?",
    options: [
      { id: 'A', text: "significant positive impacts on a country\u2019s economic growth and development" },
      { id: 'B', text: "a decrease in the overall quality of education provided in the country" },
      { id: 'C', text: "an increase in the number of highly skilled workers needed for the economy" },
      { id: 'D', text: "a direct correlation between the amount of investment in education and economic\ngrowth" }
    ],
    correctAnswer: 'A',
    explanation: "\u2019significant positive impacts on a country\u2019s economic growth and develop-\nment\u2019 is the correct answer because the passage acknowledges that the quality of education\nis important for economic growth, not just the quantity of schools and students.\n\n20.\n\n26.\n\n27.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-6-q25',
    section: 'reading_writing',
    passage: "26.\n\nGPS technology has revolutionized the way we navigate and track our movements. It\nhas enabled accurate positioning and improved the efficiency of transportation systems\nworldwide. recent advancements in GPS technology have allowed for even more\nprecise measurements, sometimes within centimeters of the actual location.",
    prompt: "Which choice completes the text with the most logical transition?",
    options: [
      { id: 'A', text: "In contrast" },
      { id: 'B', text: "Nevertheless" },
      { id: 'C', text: "Moreover" },
      { id: 'D', text: "On the other hand\n\nZadie Smith, a renowned British author known for her novels and essays, started her\nwriting career in her twenties. Smith\u2019s first novel, White Teeth, was published when she\nwas just 24 years old and quickly gained critical acclaim. throughout her career,\nSmith has continued to explore themes such as race, identity, and the complexities of\nmodern life in her works.\n\nWhich choice completes the text with the most logical transition?" }
    ],
    correctAnswer: 'C',
    explanation: "\u2019Moreover\u2019 is the correct answer because it logically signals that the\nsentence adds to the information about the benefits of GPS technology by discussing\nrecent advancements that allow for even more precise measurements.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-6-q26',
    section: 'reading_writing',
    passage: "On the other hand\n\nZadie Smith, a renowned British author known for her novels and essays, started her\nwriting career in her twenties. Smith\u2019s first novel, White Teeth, was published when she\nwas just 24 years old and quickly gained critical acclaim. throughout her career,\nSmith has continued to explore themes such as race, identity, and the complexities of\nmodern life in her works.",
    prompt: "Which choice completes the text with the most logical transition?",
    options: [
      { id: 'A', text: "Nevertheless" },
      { id: 'B', text: "On the other hand" },
      { id: 'C', text: "Moreover" },
      { id: 'D', text: "In contrast" }
    ],
    correctAnswer: 'C',
    explanation: "Moreover\u2019 is the correct answer because it indicates that the information\nabout Smith exploring various themes in her works is an additional point that supports\nher successful writing career.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-6-q27',
    section: 'reading_writing',
    passage: "In the field of process engineering, the design of chemical processes is crucial to ensure\nefficiency and safety. One common approach to achieve this is through the use of process\nflow diagrams, which visually represent the steps in a process and the flow of materials\nbetween them. another important tool in process engineering is the use of\npiping and instrumentation diagrams, which provide more detailed information about the\nequipment, piping, and control systems involved in a process.",
    prompt: "Which choice completes the text with the most logical transition?",
    options: [
      { id: 'A', text: "As a result," },
      { id: 'B', text: "On the other hand," },
      { id: 'C', text: "Conversely," },
      { id: 'D', text: "Similarly," }
    ],
    correctAnswer: 'D',
    explanation: "Similarly\u2019 is the correct answer because it shows that both process flow\ndiagrams and piping and instrumentation diagrams are tools used in process engineering\nfor designing chemical processes.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
];

export const MOCK_RW_TEST_7: Question[] = [
  {
    id: 'rw-test-7-q1',
    section: 'reading_writing',
    passage: "Capital gains tax is a levy imposed on the profit made from selling an asset, including\nstocks, bonds, or real estate. It is designed to encourage long-term investments by tax-\ning short-term gains at a higher rate. This tax structure incentivizes investors to hold\nonto their assets for more extended periods, contributing to overall economic stability.\nHowever, critics argue that capital gains tax can hinder economic growth by discouraging\ninvestment and reducing liquidity in the market.",
    prompt: "Which choice best states the main purpose of the text?",
    options: [
      { id: 'A', text: "To explain the various assets that can be subjected to capital gains tax, such as\nstocks, bonds, and real estate" },
      { id: 'B', text: "To argue in favor of a higher capital gains tax rate for short-term investments as a\nmeans of promoting economic stability" },
      { id: 'C', text: "To advocate for the abolishment of capital gains tax to encourage investments and\nincrease market liquidity" },
      { id: 'D', text: "To provide an overview of capital gains tax and its intended effects on investment\nbehavior and the economy" }
    ],
    correctAnswer: 'D',
    explanation: "\"To provide an overview of capital gains tax and its intended effects on\ninvestment behavior and the economy\u2019 is the correct answer because the passage explains\nwhat capital gains tax is and its purpose in influencing investment behavior and the\neconomy.\n\n2.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-7-q2',
    section: 'reading_writing',
    passage: "Synthetic biology engineering combines principles from engineering, biology, and com-\nputer science to design and construct biological systems. These systems can have various\napplications, such as producing biofuels or developing new medical treatments. One of\nthe key techniques in synthetic biology is the use of standardized genetic parts, known\nas BioBricks, which can be easily assembled to create complex biological systems. This\napproach allows researchers to rapidly prototype and test new ideas, similar to assembling\nelectronic circuits.",
    prompt: "Which choice best states the main purpose of the text?",
    options: [
      { id: 'A', text: "To provide a comprehensive history of synthetic biology engineering, including its\norigins and major breakthroughs" },
      { id: 'B', text: "To argue that synthetic biology engineering should prioritize the development of\nbiofuels over medical treatments" },
      { id: 'C', text: "To explore the ethical implications of synthetic biology engineering and the potential\nconsequences of manipulating genetic material" },
      { id: 'D', text: "To introduce synthetic biology engineering and emphasize its interdisciplinary nature\nand the significance of standardized genetic parts" }
    ],
    correctAnswer: 'D',
    explanation: "\u2019To introduce synthetic biology engineering and emphasize its interdis-\nciplinary nature and the significance of standardized genetic parts\u2019 is the correct answer\nbecause the passage mainly focuses on providing an overview of synthetic biology engi-\nneering and highlights the importance of BioBricks in the field.\n\n3.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-7-q3',
    section: 'reading_writing',
    passage: "Text 1: Bionic technology has made significant advancements in recent years. These\nadvancements have led to the development of prosthetic limbs that can be controlled by\nthe user\u2019s thoughts, providing a much more natural movement.\n\nText 2: In a recent study, researchers found that bionic limbs can sometimes cause phan-\ntom limb pain in users. This is because the brain may struggle to adapt to the new limb\nand can send mixed signals, resulting in pain or discomfort.",
    prompt: "Based on the texts, how would the researchers in Text 2 most likely respond to the\nadvancements in bionic technology discussed in Text 1?",
    options: [
      { id: 'A', text: "By acknowledging the advancements in bionic technology, but also pointing out the\npotential issue of phantom limb pain" },
      { id: 'B', text: "By suggesting that the advancements in bionic technology should focus more on\naesthetics rather than functionality" },
      { id: 'C', text: "By asserting that the advancements in bionic technology are not significant enough\nto warrant further research" },
      { id: 'D', text: "By recommending that bionic technology advancements should prioritize the devel-\nopment of other types of prosthetics, such as sensory feedback devices" }
    ],
    correctAnswer: 'A',
    explanation: "\u2019By acknowledging the advancements in bionic technology, but also point-\ning out the potential issue of phantom limb pain\u2019 is the correct answer because Text 2\ndiscusses a recent study which found that phantom limb pain can be caused by the brain\u2019s\nstruggle to adapt to bionic limbs.\n\n4.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-7-q4',
    section: 'reading_writing',
    passage: "In paper engineering, the process of folding a flat sheet of paper into a three-dimensional\nobject is called origami. During the folding process, the paper\u2019s structural integrity is\nmaintained by the , which support the object\u2019s final shape.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard\nEnglish?",
    options: [
      { id: 'A', text: "creasing" },
      { id: 'B', text: "crease\u2019s" },
      { id: 'C', text: "creases\u2019" },
      { id: 'D', text: "creases" }
    ],
    correctAnswer: 'D',
    explanation: "\u2019creases\u2019 is the correct answer because it provides the plural form of the\nnoun. \u2019crease,\u2019 which appropriately describes the multiple folds that support the object\u2019s\nfinal shape.\n\n5.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-7-q5',
    section: 'reading_writing',
    passage: "Sylvia Plath, a renowned American poet and novelist, struggled with depression through-\nout her life. In her semi-autobiographical novel, The Bell Jar, the protagonist, Esther\nGreenwood, a similar emotional turmoil, reflecting Plath\u2019s personal experiences.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard\nEnglish?",
    options: [
      { id: 'A', text: "will undergo" },
      { id: 'B', text: "undergone" },
      { id: 'C', text: "undergoes" },
      { id: 'D', text: "had undergone" }
    ],
    correctAnswer: 'C',
    explanation: "\u2019undergoes\u2019 is the correct answer because it maintains the consistency of\nthe present tense used throughout the passage to describe the events in the novel.\n\n10.\n\n11.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-7-q6',
    section: 'reading_writing',
    passage: "Thomas Hardy\u2019s novels often explore the plight of individuals caught in the constraints\nof social expectations. In Tess of the d\u2019Urbervilles, for instance, Tess\u2019s life is tragically\nshaped by the double standards of her society, which her limited options and\nultimately leads to her downfall.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard\nEnglish?",
    options: [
      { id: 'A', text: "to restrict" },
      { id: 'B', text: "restricting" },
      { id: 'C', text: "restricted" },
      { id: 'D', text: "restrict" }
    ],
    correctAnswer: 'D',
    explanation: "\u2019restrict\u2019 is the correct answer because it supplies the main clause with\nthe finite present tense verb that is consistent with the other present tense verbs used to\ndescribe the events in Hardy\u2019s novels. Furthermore, it\u2019s conventional to use the present\ntense when discussing a literary work.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-7-q7',
    section: 'reading_writing',
    passage: "During the American Revolutionary War, the Continental Army faced numerous chal-\nlenges, such as limited resources and inexperienced soldiers. However, despite these set-\nbacks, the army under the leadership of General George Washington, ultimately\nsecuring independence for the United States.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard\nEnglish?",
    options: [
      { id: 'A', text: "persevered" },
      { id: 'B', text: "persevered" },
      { id: 'C', text: "persevering" },
      { id: 'D', text: "to persevere" }
    ],
    correctAnswer: 'B',
    explanation: "\u2018persevered\u2019 is the correct answer because it provides the finite past tense\nverb to indicate the action of the Continental Army during the American Revolutionary\nWar under General George Washington\u2019s leadership.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-7-q8',
    section: 'reading_writing',
    passage: "While researching a topic, a student has taken the following notes:\ne Diseconomies of scale occur when a company grows too large and experiences dimin-\nishing returns.\n\ne As a firm expands, its per-unit costs may increase due to coordination and commu-\nnication challenges.\n\ne The optimal firm size depends on the balance between economies and diseconomies\nof scale.\n\ne In some industries, such as software development, diseconomies of scale can appear\nmore quickly than in others.",
    prompt: "Which choice most effectively uses relevant information from the notes to explain the\nconcept of diseconomies of scale?",
    options: [
      { id: 'A', text: "Diseconomies of scale occur when a firm\u2019s growth leads to increased per-unit costs\ndue to coordination and communication difficulties." },
      { id: 'B', text: "Diseconomies of scale happen when a company grows too large and faces communi-\ncation challenges." },
      { id: 'C', text: "The optimal firm size depends on the balance between economies and diseconomies\nof scale in various industries." },
      { id: 'D', text: "In some industries, diseconomies of scale appear more quickly than in others, such\nas software development." }
    ],
    correctAnswer: 'A',
    explanation: "\u2019Diseconomies of scale occur when a firm\u2019s growth leads to increased\nper-unit costs due to coordination and communication difficulties.\u2019 is the correct answer\nbecause it effectively uses relevant information from the notes to explain the concept of\ndiseconomies of scale.\n\n.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-7-q9',
    section: 'reading_writing',
    passage: "While researching a topic, a student has taken the following notes:\n\ne The Ecuadorian pasillo is a genre of music originating from Ecuador.\ne It is characterized by its waltz-like rhythm and emotional lyrical content.\ne The pasillo evolved from European and Indigenous musical influences.\n\ne Notable Ecuadorian pasillo composers include Julio Jaramillo and Francisco Paredes\nHerrera.",
    prompt: "Which choice most effectively uses relevant information from the notes to explain the\ndistinct characteristics of the Ecuadorian pasillo?",
    options: [
      { id: 'A', text: "The Ecuadorian pasillo originated from Ecuador and is a form of waltz." },
      { id: 'B', text: "The Ecuadorian pasillo is a unique music genre with waltz-like rhythm and emotional\nlyrics, influenced by European and Indigenous elements." },
      { id: 'C', text: "Julio Jaramillo and Francisco Paredes Herrera are famous for their contributions to\nthe Ecuadorian pasillo." },
      { id: 'D', text: "European and Indigenous musical influences shaped the Ecuadorian pasillo, which is\npopular in Ecuador." }
    ],
    correctAnswer: 'B',
    explanation: "\u2019The Ecuadorian pasillo is a unique music genre with waltz-like rhythm\nand emotional lyrics, influenced by European and Indigenous elements.\u2019 is the correct\nanswer because it effectively summarizes the distinct characteristics of the Ecuadorian\npasillo mentioned in the notes.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-7-q10',
    section: 'reading_writing',
    passage: "While researching a topic, a student has taken the following notes:\n\ne Nelson Mandela was the first black President of South Africa.\ne Mandela spent 27 years in prison for his anti-apartheid activism.\ne Mandela\u2019s presidency focused on reconciliation between the country\u2019s racial groups.\n\ne The Truth and Reconciliation Commission was established during Mandela\u2019s term.",
    prompt: "Which choice most effectively uses relevant information from the notes to highlight Man-\ndela\u2019s approach to addressing racial issues during his presidency?",
    options: [
      { id: 'A', text: "Nelson Mandela was the first black President of South Africa and was imprisoned for\n27 years." },
      { id: 'B', text: "Mandela focused on reconciliation between racial groups and established the Truth\nand Reconciliation Commission." },
      { id: 'C', text: "During Mandela\u2019s presidency, the Truth and Reconciliation Commission was estab-\nlished." },
      { id: 'D', text: "Nelson Mandela was known for his anti-apartheid activism before becoming South\nAfrica\u2019s president." }
    ],
    correctAnswer: 'B',
    explanation: "\u2019Mandela focused on reconciliation between racial groups and estab-\nlished the Truth and Reconciliation Commission.\u2019 is the correct answer because it ef\nfectively highlights Mandela\u2019s approach to addressing racial issues during his presidency\nby mentioning both his focus on reconciliation and the establishment of the Truth and\nReconciliation Commission.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-7-q11',
    section: 'reading_writing',
    passage: "12.\n\nJoseph Conrad, a Polish-British writer, was born in 1857 in present-day Ukraine. Often\nclassified as a modernist, Conrad is best known for his novels, such as Heart of Darkness\nand Lord Jim. His writing style is noted for its intricate, multi-layered narratives and",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard\nEnglish?",
    options: [
      { id: 'A', text: "its psychological depth" },
      { id: 'B', text: "its psychological depths" },
      { id: 'C', text: "its psychological depths\u2019" },
      { id: 'D', text: "its psychological depth\u2019s\n\nGeomatics Engineering involves the use of specialized equipment to collect, analyze, and\ninterpret spatial data. One such device is the total station, which combines the capabilities\nof a theodolite and an electronic distance meter to measure both angles and distances with\nhigh accuracy. These measurements can then be used to calculate the of various\npoints on a site.\n\nWhich choice completes the text so that it conforms to the conventions of Standard\nEnglish?" }
    ],
    correctAnswer: 'B',
    explanation: "\u2019its psychological depths\u2019 is the correct answer because the passage refers\nto the multiple layers of psychological complexity in Conrad\u2019s work, requiring the use of\nthe plural form \u2019depths\u2019 without the need for possessive forms.\n\n12.\n\n13.\n\n14.\n\n15.\n\n16.\n\n17.\n\n18.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-7-q12',
    section: 'reading_writing',
    passage: "its psychological depth\u2019s\n\nGeomatics Engineering involves the use of specialized equipment to collect, analyze, and\ninterpret spatial data. One such device is the total station, which combines the capabilities\nof a theodolite and an electronic distance meter to measure both angles and distances with\nhigh accuracy. These measurements can then be used to calculate the of various\npoints on a site.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard\nEnglish?",
    options: [
      { id: 'A', text: "coordinates\u2019" },
      { id: 'B', text: "coordinate\u2019s" },
      { id: 'C', text: "coordinate" },
      { id: 'D', text: "coordinates" }
    ],
    correctAnswer: 'D',
    explanation: "\u2019coordinates\u2019 is the correct answer because it is the plural form of the\nnoun, indicating that multiple points and their respective positions are being calculated\nusing the collected data.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-7-q13',
    section: 'reading_writing',
    passage: "14.\n\nDuring the 19th century, thousands of pioneers embarked on the Oregon Trail in search of\na better life. The journey was treacherous, with the travelers facing numerous challenges\nsuch as crossing rivers, enduring extreme weather conditions, and supplies of\nfood and water.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard\nEnglish?",
    options: [
      { id: 'A', text: "managing scarce" },
      { id: 'B', text: "scarce, managing" },
      { id: 'C', text: "managing, scarce" },
      { id: 'D', text: "scarce managing\n\nAndrew Wiles, a British mathematician, ultimately solved Fermat\u2019s Last Theorem in\n\n1994, nearly 358 years after it was first proposed. His groundbreaking proof, which\n\ninvolved an unexpected link between elliptic curves and modular forms, was initially\nby the mathematical community.\n\nWhich choice completes the text with the most logical and precise word or phrase?" }
    ],
    correctAnswer: 'C',
    explanation: "\u2019managing, scarce\u2019 is the correct answer because it properly uses a comma\nto separate the two adjectives and maintain the flow of the sentence.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-7-q14',
    section: 'reading_writing',
    passage: "scarce managing\n\nAndrew Wiles, a British mathematician, ultimately solved Fermat\u2019s Last Theorem in\n\n1994, nearly 358 years after it was first proposed. His groundbreaking proof, which\n\ninvolved an unexpected link between elliptic curves and modular forms, was initially\nby the mathematical community.",
    prompt: "Which choice completes the text with the most logical and precise word or phrase?",
    options: [
      { id: 'A', text: "disregarded" },
      { id: 'B', text: "embraced" },
      { id: 'C', text: "astonished" },
      { id: 'D', text: "repelled" }
    ],
    correctAnswer: 'C',
    explanation: "\u2019astonished\u2019 is the correct answer because it accurately describes the\nreaction of the mathematical community to the unexpected link found by Wiles in his\nproof.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-7-q15',
    section: 'reading_writing',
    passage: "16.\n\n3D printing has revolutionized the manufacturing industry by allowing for the rapid pro-\nduction of complex objects. However, the technology has also led to increased concerns\nabout intellectual property theft, as it makes it easier to replicate and distribute copy-\nrighted designs without the creator\u2019s",
    prompt: "Which choice completes the text with the most logical and precise word or phrase?",
    options: [
      { id: 'A', text: "consent" },
      { id: 'B', text: "intuition" },
      { id: 'C', text: "presence" },
      { id: 'D', text: "knowledge\n\nFiscal transparency is crucial for public sector accountability, as it enables citizens and\nmarkets to assess the government\u2019s financial decisions. However, in some countries, the\nlack of in public financial management can lead to misallocations of resources\nand corruption.\n\nWhich choice completes the text with the most logical and precise word or phrase?" }
    ],
    correctAnswer: 'A',
    explanation: "\u2019consent\u2019 is the correct answer because it accurately describes the lack\nof permission from the creator when copyrighted designs are replicated and distributed\nusing 3D printing technology.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-7-q16',
    section: 'reading_writing',
    passage: "knowledge\n\nFiscal transparency is crucial for public sector accountability, as it enables citizens and\nmarkets to assess the government\u2019s financial decisions. However, in some countries, the\nlack of in public financial management can lead to misallocations of resources\nand corruption.",
    prompt: "Which choice completes the text with the most logical and precise word or phrase?",
    options: [
      { id: 'A', text: "uniformity" },
      { id: 'B', text: "efficiency" },
      { id: 'C', text: "transparency" },
      { id: 'D', text: "creativity" }
    ],
    correctAnswer: 'C',
    explanation: "transparency\u2019 is the correct answer because the passage discusses the\nimportance of fiscal transparency for public sector accountability, and the lack of it can\nlead to negative consequences.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-7-q17',
    section: 'reading_writing',
    passage: "Water skiing is a thrilling sport that not only requires physical strength but also mental\n\n18.\n\nagility. A water skier must maintain balance and control while being pulled by a boat\nat high speeds. The skier\u2019s body position, rope handling, and choice of equipment play\ncrucial roles in their performance. Experienced water skiers often develop their techniques\nand preferences, making them better prepared to face the challenges of the sport.",
    prompt: "Which choice best states the main idea of the text?",
    options: [
      { id: 'A', text: "The text emphasizes the significance of the boat\u2019s speed in determining the success\nof a water skier." },
      { id: 'B', text: "The text highlights the importance of both physical and mental aspects in water\nskiing and how experience improves performance." },
      { id: 'C', text: "The text elaborates on the process of choosing the right equipment for an effective\nwater skiing experience." },
      { id: 'D', text: "The text discusses the negative consequences of not maintaining proper balance and\ncontrol during water skiing.\n\nAdvancements in artificial intelligence have led to the development of highly sophisticated\nsystems that can perform complex tasks. While these Al-powered machines have the\npotential to revolutionize various industries, the ethical implications of such advancements\nare often debated. Some argue that the rapid growth of AI might eventually lead to job\ndisplacement and increased reliance on machines, while others believe that AI can enhance\nhuman capabilities and create new opportunities.\n\nWhich choice best states the main idea of the text?" }
    ],
    correctAnswer: 'B',
    explanation: "\"The text highlights the importance of both physical and mental aspects\nin water skiing and how experience improves performance.\u2019 is the correct answer because\nthe passage emphasizes the need for balance, control, and experience in water skiing.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-7-q18',
    section: 'reading_writing',
    passage: "The text discusses the negative consequences of not maintaining proper balance and\ncontrol during water skiing.\n\nAdvancements in artificial intelligence have led to the development of highly sophisticated\nsystems that can perform complex tasks. While these Al-powered machines have the\npotential to revolutionize various industries, the ethical implications of such advancements\nare often debated. Some argue that the rapid growth of AI might eventually lead to job\ndisplacement and increased reliance on machines, while others believe that AI can enhance\nhuman capabilities and create new opportunities.",
    prompt: "Which choice best states the main idea of the text?",
    options: [
      { id: 'A', text: "The text discusses the advancements in AI and the debate surrounding its potential\nimpact." },
      { id: 'B', text: "The ethical implications of AI are universally agreed upon and well-understood." },
      { id: 'C', text: "Artificial intelligence is solely responsible for the loss of jobs in the modern world." },
      { id: 'D', text: "AI is a detrimental force that will lead to the downfall of human society." }
    ],
    correctAnswer: 'A',
    explanation: "\"The text discusses the advancements in AI and the debate surrounding\nits potential impact.\u2019 is the correct answer because it accurately captures the main idea\nof the passage, which presents both the potential benefits and concerns related to AI\nadvancements.\n\n19.\n\n20.\n\n21.\n\n22.\n\n23.\n\n24.\n\n295.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-7-q19',
    section: 'reading_writing',
    passage: "20.\n\nHedy Lamarr, a Hollywood actress in the 1940s, was also a brilliant inventor. During\nWorld War II, she co-developed a frequency-hopping communication system to prevent\nenemies from jamming radio signals. Although her invention was not used in the war, it\nlater became the foundation for modern technologies such as Wi-Fi, Bluetooth, and GPS.\nHedy\u2019s intelligence and innovative spirit were often overshadowed by her beauty, but her\ncontributions have left a lasting impact on the world.",
    prompt: "Which choice best states the main idea of the text?",
    options: [
      { id: 'A', text: "Hedy Lamarr\u2019s beauty led to her success as an inventor and actress." },
      { id: 'B', text: "Hedy Lamarr\u2019s inventions were widely used during World War II." },
      { id: 'C', text: "Hedy Lamarr was a talented inventor whose work laid the groundwork for modern\ncommunication technologies." },
      { id: 'D', text: "Hedy Lamarr\u2019s career as an actress was negatively affected by her interest in inven-\ntions.\n\nThe Lion King musical, directed by Julie Taymor, has been praised for its innovative\nuse of puppetry and costumes. Taymor\u2019s creative direction is said to have contributed\nsignificantly to the show\u2019s success and longevity, making it one of the longest-running\nBroadway shows in history.\n\nWhich finding, if true, would most strongly support the claim that Julie Taymor\u2019s direc-\ntion played a significant role in the success of The Lion King musical?" }
    ],
    correctAnswer: 'C',
    explanation: "\"Hedy Lamarr was a talented inventor whose work laid the groundwork\nfor modern communication technologies\u2019 is the correct answer because the passage focuses\non her inventive contributions and their impact on current technology.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-7-q20',
    section: 'reading_writing',
    passage: "Hedy Lamarr\u2019s career as an actress was negatively affected by her interest in inven-\ntions.\n\nThe Lion King musical, directed by Julie Taymor, has been praised for its innovative\nuse of puppetry and costumes. Taymor\u2019s creative direction is said to have contributed\nsignificantly to the show\u2019s success and longevity, making it one of the longest-running\nBroadway shows in history.",
    prompt: "Which finding, if true, would most strongly support the claim that Julie Taymor\u2019s direc-\ntion played a significant role in the success of The Lion King musical?",
    options: [
      { id: 'A', text: "The show\u2019s ticket sales and positive reviews increased dramatically after Taymor\u2019s\ninvolvement was announced." },
      { id: 'B', text: "Many other Broadway shows have also used puppetry and costumes in innovative\nways." },
      { id: 'C', text: "The Lion King musical has faced criticism for not staying true to the original Disney\nfilm." },
      { id: 'D', text: "Some other long-running Broadway shows have had similar creative direction." }
    ],
    correctAnswer: 'A',
    explanation: "\u2019The show\u2019s ticket sales and positive reviews increased dramatically after\nTaymor\u2019s involvement was announced.\u2019 is the correct answer because it demonstrates a\ndirect correlation between Taymor\u2019s involvement and the success of the musical.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-7-q21',
    section: 'reading_writing',
    passage: "22.\n\nSnowboarding\u2019s popularity has surged since the 1980s. Recently, studies have suggested\nthat the increase in the number of snowboarders has led to a decline in ski resort profits. A\nresearcher argues that snowboarders\u2019 spending habits may be contributing to this trend.",
    prompt: "Which finding, if true, would most directly support the researcher\u2019s claim?",
    options: [
      { id: 'A', text: "Ski resorts that exclusively cater to skiers report higher profits than resorts that cater\nto both skiers and snowboarders." },
      { id: 'B', text: "Skiers tend to purchase more expensive snowboarding equipment than snowboarders." },
      { id: 'C', text: "Snowboarders tend to spend less on accommodations and amenities at ski resorts\ncompared to skiers." },
      { id: 'D', text: "The number of skiers has remained relatively stable despite the increase in the number\nof snowboarders.\n\nGeorge Orwell\u2019s novel, 1984, portrays a dystopian society in which the government sup-\npresses individualism and free thinking. Critics suggest Orwell wrote the novel as a\ncautionary tale about the potential consequences of totalitarianism.\n\nWhich finding, if true, would most directly support the claim that Orwell intended 1984\nas a cautionary tale about totalitarianism?" }
    ],
    correctAnswer: 'C',
    explanation: "\"Snowboarders tend to spend less on accommodations and amenities at\nski resorts compared to skiers.\u2019 is the correct answer because this finding directly supports\nthe researcher\u2019s claim that snowboarders\u2019 spending habits are contributing to the decline\nin ski resort profits.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-7-q22',
    section: 'reading_writing',
    passage: "The number of skiers has remained relatively stable despite the increase in the number\nof snowboarders.\n\nGeorge Orwell\u2019s novel, 1984, portrays a dystopian society in which the government sup-\npresses individualism and free thinking. Critics suggest Orwell wrote the novel as a\ncautionary tale about the potential consequences of totalitarianism.",
    prompt: "Which finding, if true, would most directly support the claim that Orwell intended 1984\nas a cautionary tale about totalitarianism?",
    options: [
      { id: 'A', text: "Many readers consider 1984 to be a compelling and thought-provoking work of fiction." },
      { id: 'B', text: "1984 has frequently been compared to other dystopian novels, such as Aldous Huxley\u2019s\nBrave New World." },
      { id: 'C', text: "Orwell\u2019s novel has been adapted into several films, television shows, and stage pro-\nductions." },
      { id: 'D', text: "Orwell had previously expressed concerns about the dangers of totalitarian regimes\nin his essays and letters." }
    ],
    correctAnswer: 'D',
    explanation: "\u2019Orwell had previously expressed concerns about the dangers of totali-\ntarian regimes in his essays and letters.\u2019 is the correct answer because it directly points\nto the author\u2019s intentions and beliefs on the topic, suggesting that 1984 was written with\nthe purpose of warning readers about the potential consequences of totalitarianism.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-7-q23',
    section: 'reading_writing',
    passage: "24.\n\nConfucius, a renowned Chinese philosopher, focused on personal and governmental moral-\nity, proper social relationships, and justice. His teachings have greatly influenced various\naspects of Chinese society, and his ideas have been passed down through generations,\nleaving a lasting impact on",
    prompt: "Which choice most logically completes the text?",
    options: [
      { id: 'A', text: "the scientific revolution and the advancements in technology in the western world" },
      { id: 'B', text: "the development of modern democracy and the promotion of individual rights" },
      { id: 'C', text: "East Asian culture and the philosophical foundations of many regional governments" },
      { id: 'D', text: "the establishment of economic systems and trade regulations across the globe\n\nRalph Ellison, an influential African American writer, is best known for his novel In-\nvisible Man. Ellison\u2019s work often explores themes of identity and invisibility, reflecting\nthe experiences of Black Americans in a racially divided society. By doing so, Ellison\n\nWhich choice most logically completes the text?" }
    ],
    correctAnswer: 'C',
    explanation: "East Asian culture and the philosophical foundations of many regional\ngovernments\u2019 is the correct answer because it logically follows the focus of Confucius\u2019\nteachings and their influence on Chinese society.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-7-q24',
    section: 'reading_writing',
    passage: "the establishment of economic systems and trade regulations across the globe\n\nRalph Ellison, an influential African American writer, is best known for his novel In-\nvisible Man. Ellison\u2019s work often explores themes of identity and invisibility, reflecting\nthe experiences of Black Americans in a racially divided society. By doing so, Ellison",
    prompt: "Which choice most logically completes the text?",
    options: [
      { id: 'A', text: "criticizes the African American community for not being more active in fighting for\ntheir rights." },
      { id: 'B', text: "argues that invisibility is the only way for Black Americans to survive in a racially\ndivided society." },
      { id: 'C', text: "suggests that identity and invisibility are innate characteristics of all individuals,\nregardless of race." },
      { id: 'D', text: "effectively raises awareness about the struggles and complexities faced by Black Amer-\nicans." }
    ],
    correctAnswer: 'D',
    explanation: "\u2019effectively raises awareness about the struggles and complexities faced\nby Black Americans.\u2019 is the correct answer because it follows logically from the discussion\nof Ellison exploring themes of identity and invisibility in a racially divided society.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-7-q25',
    section: 'reading_writing',
    passage: "26.\n\nThe Persian Gulf War, which began in 1990, was a conflict between Iraq, led by President\nSaddam Hussein, and a coalition of 35 countries led by the United States. The war\nwas triggered by Iraq\u2019s invasion of Kuwait, which was condemned by the international\ncommunity. the coalition forces launched a military offensive, Operation Desert\nStorm, to expel Iraqi forces from Kuwait.",
    prompt: "Which choice completes the text with the most logical transition?",
    options: [
      { id: 'A', text: "In response," },
      { id: 'B', text: "Similarly," },
      { id: 'C', text: "However," },
      { id: 'D', text: "For example,\n\nMany corporations have been known to use loopholes in the tax system to reduce their\noverall tax burden. For example, some companies may shift their profits to countries\nwith lower tax rates. a study conducted by Harvard Business School researchers\nfound that 15% of US corporations moved their profits to tax havens between 2004 and" }
    ],
    correctAnswer: 'A',
    explanation: "\u2019In response\u2019 is the correct answer because it shows the causal relationship\nbetween Iraq\u2019s invasion of Kuwait and the coalition forces\u2019 actions.\n\n26.\n\n27.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-7-q26',
    section: 'reading_writing',
    prompt: "Which choice completes the text with the most logical transition?",
    options: [
      { id: 'A', text: "In contrast" },
      { id: 'B', text: "On the other hand" },
      { id: 'C', text: "Alternatively" },
      { id: 'D', text: "In fact" }
    ],
    correctAnswer: 'D',
    explanation: "\u2018In fact\u2019 is the correct answer because it adds emphasis to the provided\nexample, indicating that the study by Harvard Business School researchers supports the\nclaim made in the first sentence about corporations using tax loopholes.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-7-q27',
    section: 'reading_writing',
    passage: "Stem cell research has the potential to revolutionize medicine by providing therapies for\na wide range of diseases and conditions. Scientists have been able to create specialized\n\ncells, such as nerve and muscle cells, from stem cells. this breakthrough en-\nables researchers to study diseases in the lab more accurately and develop more targeted\ntreatments.",
    prompt: "Which choice completes the text with the most logical transition?",
    options: [
      { id: 'A', text: "In contrast" },
      { id: 'B', text: "Nevertheless" },
      { id: 'C', text: "Consequently" },
      { id: 'D', text: "On the other hand" }
    ],
    correctAnswer: 'C',
    explanation: "Consequently\u2019 is the correct answer because it logically signals that the\ndevelopment of specialized cells from stem cells leads to the ability to study diseases more\naccurately and develop targeted treatments.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
];

export const MOCK_RW_TEST_8: Question[] = [
  {
    id: 'rw-test-8-q1',
    section: 'reading_writing',
    passage: "In 1997, biotechnologist Dr. Jane Collins developed a groundbreaking technique for edit-\ning plant genomes. By precisely targeting specific genes, Collins\u2019s method enabled sci-\nentists to modify crop traits such as pest resistance, drought tolerance, and nutritional\ncontent. This innovation revolutionized agriculture, leading to increased food production\nand reduced environmental impact. Today, her technique continues to shape the future\nof sustainable farming practices.",
    prompt: "Which choice best states the main purpose of the text?",
    options: [
      { id: 'A', text: "To discuss the ethical implications of gene editing in plants and their potential con-\nsequences" },
      { id: 'B', text: "To highlight Dr. Jane Collins\u2019s significant contribution to the field of biotechnology\nand its impact on agriculture" },
      { id: 'C', text: "To argue that other biotechnological advancements are overshadowing Dr. Collins\u2019s\nwork" },
      { id: 'D', text: "To describe the process of editing plant genomes in detail and its various applications" }
    ],
    correctAnswer: 'B',
    explanation: "\u2019To highlight Dr. Jane Collins\u2019s significant contribution to the field of\nbiotechnology and its impact on agriculture\u2019 is the correct answer because the passage\nfocuses on Dr. Collins\u2019s development of a gene-editing technique and its influence on\nagriculture and sustainable farming practices.\n\n2.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-8-q2',
    section: 'reading_writing',
    passage: "In the 1985 science fiction film \u2019Back to the Future,\u2019 teenager Marty McFly accidentally\ntravels back in time to the year 1955 using a time machine created by eccentric scientist\nDoc Brown. Marty\u2019s presence in the past jeopardizes his own existence as he interferes\nwith his parents\u2019 meeting, and he must ensure they fall in love to secure his future.\nThroughout the film, Marty and Doc work together to restore the timeline and find a way\nfor Marty to return to 1985.",
    prompt: "Which choice best states the main purpose of the text?",
    options: [
      { id: 'A', text: "To summarize the central plot and conflicts of the film \u2019Back to the Future\u2019" },
      { id: 'B', text: "To analyze the scientific accuracy of the time travel concepts in Back to the Future\u2019" },
      { id: 'C', text: "To compare the cultural differences between 1955 and 1985 as portrayed in \u2019Back to\nthe Future\u2019" },
      { id: 'D', text: "To discuss the impact of \u2019Back to the Future\u2019 on the careers of its lead actors" }
    ],
    correctAnswer: 'A',
    explanation: "\"To summarize the central plot and conflicts of the film \"Back to the\nFuture\u201d is the correct answer because the passage provides a brief overview of the storyline,\nhighlighting Marty\u2019s accidental time travel, the threat to his existence, and the efforts to\nrestore the timeline.\n\n3.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-8-q3',
    section: 'reading_writing',
    passage: "Text 1: Motocross racer Alice Jamison is renowned for her unconventional racing style,\nwhich allows her to gain an edge over opponents. Many racers strictly adhere to traditional\ntechniques, but Jamison\u2019s innovative approach has opened up possibilities for new racing\nstrategies.\n\nText 2: In a recent interview, motocross coach and former racer Tom Harrison discussed\nthe evolution of racing strategies. Harrison emphasized the importance of adapting to\nchanging conditions and exploring alternative techniques, arguing that racers who stick\nto conventional methods may struggle to keep up with the sport\u2019s advancements.",
    prompt: "Based on the texts, how would Tom Harrison (Text 2) most likely respond to the racing\nstyle of Alice Jamison (Text 1)?",
    options: [
      { id: 'A', text: "By asserting that her unconventional style is detrimental to her overall performance" },
      { id: 'B', text: "By appreciating her willingness to explore new strategies and adapt to the sport\u2019s\nevolution" },
      { id: 'C', text: "By questioning her ability to maintain consistent results with an innovative approach" },
      { id: 'D', text: "By expressing concerns about the potential risks associated with deviating from\ntraditional techniques" }
    ],
    correctAnswer: 'B',
    explanation: "\u2019By appreciating her willingness to explore new strategies and adapt to\nthe sport\u2019s evolution\u2019 is the correct answer because Tom Harrison (Text 2) emphasizes\nthe importance of adapting to changing conditions and exploring alternative techniques,\nwhich aligns with Alice Jamison\u2019s innovative approach (Text 1).\n\n4,",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-8-q4',
    section: 'reading_writing',
    passage: "Before becoming the 44th President of the United States, Barack Obama worked as a\ncommunity organizer, a civil rights attorney, and a law professor. In 1996, he to\nthe Illinois State Senate, where he served for eight years.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard\nEnglish?",
    options: [
      { id: 'A', text: "was elected" },
      { id: 'B', text: "being elected" },
      { id: 'C', text: "to be elected" },
      { id: 'D', text: "electing" }
    ],
    correctAnswer: 'A',
    explanation: "\u2019was elected\u2019 is the correct answer because it uses the passive voice in\nthe past tense, which is consistent with the other past tense verbs in the passage and\ncorrectly describes the event that took place in 1996.\n\n5.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-8-q5',
    section: 'reading_writing',
    passage: "Remote sensing is a valuable tool for monitoring the Earth\u2019s surface. Using satellite im-\nagery, researchers can gather data on various environmental factors such as temperature,\nvegetation, and precipitation. By analyzing this data, scientists can models to\npredict climate change and assess the impact of human activities on the environment.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard\nEnglish?",
    options: [
      { id: 'A', text: "utilized" },
      { id: 'B', text: "having utilized" },
      { id: 'C', text: "utilizing" },
      { id: 'D', text: "utilize" }
    ],
    correctAnswer: 'D',
    explanation: "\u2019utilize\u2019 is the correct answer because it provides a finite verb that agrees\nwith the subject \u2019scientists\u2019 and is consistent with the tense used in the rest of the passage.\n\n10.\n\n11.\n\n12.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-8-q6',
    section: 'reading_writing',
    passage: "Marie Curie, a physicist and chemist, conducted groundbreaking research on radioactivity.\nShe the first woman to win a Nobel Prize and remains the only person to have\nwon Nobel Prizes in two different scientific fields: physics and chemistry.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard\nEnglish?",
    options: [
      { id: 'A', text: "became" },
      { id: 'B', text: "becoming" },
      { id: 'C', text: "to become" },
      { id: 'D', text: "would become" }
    ],
    correctAnswer: 'A',
    explanation: "\u2019became\u2019 is the correct answer because it provides a finite past tense\nverb that is consistent with the other verbs in the passage and correctly describes Marie\nCurie\u2019s accomplishment.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-8-q7',
    section: 'reading_writing',
    passage: "Inthe 1980s, the Boston Celtics and the Los Angeles Lakers were two of the most dominant\nteams in the NBA. Their intense rivalry to a series of memorable championship\nclashes, featuring legendary players like Larry Bird and Magic Johnson.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard\nEnglish?",
    options: [
      { id: 'A', text: "to lead" },
      { id: 'B', text: "leading" },
      { id: 'C', text: "led" },
      { id: 'D', text: "leads" }
    ],
    correctAnswer: 'C',
    explanation: "\u2019led\u2019 is the correct answer because it provides the appropriate past tense\nverb to describe the rivalry that occurred in the 1980s.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-8-q8',
    section: 'reading_writing',
    passage: "While researching a topic, a student has taken the following notes:\n\ne Alan Turing was a British mathematician and computer scientist.\n\ne Turing developed the concept of the Turing machine, a theoretical device that laid\nthe foundation for modern computers.\n\ne During World War II, Turing played a crucial role in breaking the German Enigma\ncode.\n\ne Turing\u2019s work in artificial intelligence led to the creation of the Turing Test, which\nevaluates a machine\u2019s ability to exhibit intelligent behavior.",
    prompt: "Which choice most effectively uses relevant information from the notes to emphasize\nTuring\u2019s contributions to the field of computer science?",
    options: [
      { id: 'A', text: "Alan Turing, a pioneer in computer science, developed the Turing machine concept\nand laid the groundwork for artificial intelligence with the Turing Test." },
      { id: 'B', text: "Turing was a British scientist whose work in artificial intelligence led to the Turing\nTest." },
      { id: 'C', text: "Alan Turing, a British mathematician, developed the theoretical concept of the Turing\nmachine." },
      { id: 'D', text: "Alan Turing was a mathematician who helped break the Enigma code during World\nWar II." }
    ],
    correctAnswer: 'A',
    explanation: "\u2019Alan Turing, a pioneer in computer science, developed the Turing ma-\nchine concept and laid the groundwork for artificial intelligence with the Turing Test.\u2019 is\nthe correct answer because it effectively emphasizes Turing\u2019s contributions to the field of\ncomputer science by mentioning both the Turing machine and the Turing Test.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-8-q9',
    section: 'reading_writing',
    passage: "While researching a topic, a student has taken the following notes:\n\ne Lacrosse is a fast-paced sport with Native American origins.\ne The game is played using a small rubber ball and a long-handled stick called a crosse.\ne There are two main versions of lacrosse: field lacrosse and box lacrosse.\n\ne In both versions, the objective is to score goals by shooting the ball into the opposing\nteam\u2019s net.",
    prompt: "Which choice most effectively uses relevant information from the notes to explain the\nmain objective in Lacrosse?",
    options: [
      { id: 'A', text: "Lacrosse is a fast-paced sport with an objective to run faster than the opposing team." },
      { id: 'B', text: "The primary objective in both field and box lacrosse is to score goals by propelling\nthe ball into the opposing team\u2019s net using a crosse." },
      { id: 'C', text: "The objective of lacrosse is to have the most players on the field at the end of the\ngame." },
      { id: 'D', text: "The goal of lacrosse is to pass the ball between players using their crosses without\ndropping the ball." }
    ],
    correctAnswer: 'B',
    explanation: "\u2019The primary objective in both field and box lacrosse is to score goals\nby propelling the ball into the opposing team\u2019s net using a crosse.\u2019 is the correct answer\nbecause it effectively summarizes the main objective of the game using information from\nthe notes.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-8-q10',
    section: 'reading_writing',
    passage: "While researching a topic, a student has taken the following notes:\n\ne Perfect competition is a market structure with many buyers and sellers.\n\nIn perfect competition, firms produce homogeneous products.\n\nBarriers to entry and exit are minimal in perfect competition.\n\nFirms in perfect. competition are price takers.",
    prompt: "Which choice most effectively uses relevant information from the notes to describe the\ncharacteristics of perfect competition?",
    options: [
      { id: 'A', text: "Perfect competition is a market structure with many buyers and sellers, homogeneous\nproducts, and minimal barriers to entry and exit, making firms price takers." },
      { id: 'B', text: "Perfect competition involves many buyers and sellers, but the products are not ho-\nmogeneous." },
      { id: 'C', text: "In perfect competition, firms produce homogeneous products, but there are significant\nbarriers to entry and exit." },
      { id: 'D', text: "Firms in perfect competition are price takers, but the market structure does not\ninvolve many buyers and sellers." }
    ],
    correctAnswer: 'A',
    explanation: "Perfect competition is a market structure with many buyers and sellers,\nhomogeneous products, and minimal barriers to entry and exit, making firms price tak-\ners.\u2019 is the correct answer because it effectively summarizes the characteristics of perfect\n\ncompetition from the notes.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-8-q11',
    section: 'reading_writing',
    passage: "12.\n\nThe Good Friday Agreement, signed in 1998, brought an end to decades of conflict in\nNorthern Ireland. It created power-sharing arrangements between political parties and\nestablished a between the governments of Ireland and the United Kingdom,\nfostering cooperation and dialogue.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard\nEnglish?",
    options: [
      { id: 'A', text: "relation\u2019s" },
      { id: 'B', text: "relations\u2019" },
      { id: 'C', text: "relationships\u2019" },
      { id: 'D', text: "relationship\n\nDuring their time at the university, best friends Jessica and Rebecca became inseparable.\nThey shared not only their love for studying literature, but also their passion for hiking\nand exploring nature. After graduation, they decided to embark on a six-month journey,\nwhere they would visit various national parks and hike through the trails.\n\nWhich choice completes the text so that it conforms to the conventions of Standard\nEnglish?" }
    ],
    correctAnswer: 'D',
    explanation: "\u2019relationship\u2019 is the correct answer because it correctly completes the\nsentence and maintains the singular form of the noun, indicating a single relationship\nbetween the two governments.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-8-q12',
    section: 'reading_writing',
    passage: "relationship\n\nDuring their time at the university, best friends Jessica and Rebecca became inseparable.\nThey shared not only their love for studying literature, but also their passion for hiking\nand exploring nature. After graduation, they decided to embark on a six-month journey,\nwhere they would visit various national parks and hike through the trails.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard\nEnglish?",
    options: [
      { id: 'A', text: "countrys\u2019" },
      { id: 'B', text: "country\u2019s" },
      { id: 'C', text: "countries" },
      { id: 'D', text: "countries\u2019" }
    ],
    correctAnswer: 'D',
    explanation: "\u2019countries\u201d is the correct answer because it indicates that they will be\nvisiting national parks and hiking trails in multiple countries, which requires the plural\npossessive form \u2019countries\u201d to show that the trails belong to more than one country.\n\n13.\n\n14.\n\n15.\n\n16.\n\n17.\n\n18.\n\n19.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-8-q13',
    section: 'reading_writing',
    passage: "14.\n\nAlexander Graham Bell, the inventor of the telephone, also made significant contributions\n\nto the field of aviation. Bell\u2019s interest in flight led him to establish the Aerial Experiment\n\nAssociation (AEA) in 1907, which aimed to develop heavier-than-air flying machines.\n\nThe AEA created several successful aircraft, with Bell playing a crucial role in their\nand engineering.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard\nEnglish?",
    options: [
      { id: 'A', text: "designed" },
      { id: 'B', text: "designs," },
      { id: 'C', text: "design\u2019s" },
      { id: 'D', text: "design\n\nCleopatra was a skilled diplomat, a brilliant military strategist, and the last Pharaoh of\nAncient Egypt. Her reign was marked by a series of tumultuous events, including wars,\nassassinations, and political intrigue. Despite her many accomplishments, Cleopatra\u2019s life\nended in tragedy when she was captured and forced to commit by her Roman\ncaptors.\n\nWhich choice completes the text with the most logical and precise word or phrase?" }
    ],
    correctAnswer: 'D',
    explanation: "\u2019design\u2019 is the correct answer because it is the most appropriate term\nto describe Bell\u2019s role in the creation of the aircraft, making the sentence grammatically\ncorrect and coherent.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-8-q14',
    section: 'reading_writing',
    passage: "design\n\nCleopatra was a skilled diplomat, a brilliant military strategist, and the last Pharaoh of\nAncient Egypt. Her reign was marked by a series of tumultuous events, including wars,\nassassinations, and political intrigue. Despite her many accomplishments, Cleopatra\u2019s life\nended in tragedy when she was captured and forced to commit by her Roman\ncaptors.",
    prompt: "Which choice completes the text with the most logical and precise word or phrase?",
    options: [
      { id: 'A', text: "celebration" },
      { id: 'B', text: "resignation" },
      { id: 'C', text: "espionage" },
      { id: 'D', text: "suicide" }
    ],
    correctAnswer: 'D',
    explanation: "\u2019suicide\u2019 is the correct; answer because it accurately describes the tragic\nend of Cleopatra\u2019s life after she was captured by the Romans.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-8-q15',
    section: 'reading_writing',
    passage: "16.\n\nHedy Lamarr, an actress and inventor, co-developed a frequency-hopping technology\n\nduring World War II. This invention later became the foundation for modern spread-\n\nspectrum communication technologies, such as Bluetooth and Wi-Fi. Lamarr\u2019s work was\nfor years, until her contributions were finally recognized in the 1990s.",
    prompt: "Which choice completes the text with the most logical and precise word or phrase?",
    options: [
      { id: 'A', text: "publicized" },
      { id: 'B', text: "unrivaled" },
      { id: 'C', text: "overlooked" },
      { id: 'D', text: "copied\n\nThe Uruguayan milonga, a precursor to the tango, is a lively dance characterized by its\nsyncopated rhythms and intricate footwork. It has its roots in African musical traditions\nand was developed in the 19th century by the Afro-Uruguayan community. Over time,\nthe milonga has evolved into a social event, attracting dancers and musicians\nfrom all walks of life.\n\nWhich choice completes the text with the most logical and precise word or phrase?" }
    ],
    correctAnswer: 'C',
    explanation: "\u2019overlooked\u2019 is the correct answer because it shows that Hedy Lamarr\u2019s\nwork was not recognized for a long time, despite its significance.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-8-q16',
    section: 'reading_writing',
    passage: "copied\n\nThe Uruguayan milonga, a precursor to the tango, is a lively dance characterized by its\nsyncopated rhythms and intricate footwork. It has its roots in African musical traditions\nand was developed in the 19th century by the Afro-Uruguayan community. Over time,\nthe milonga has evolved into a social event, attracting dancers and musicians\nfrom all walks of life.",
    prompt: "Which choice completes the text with the most logical and precise word or phrase?",
    options: [
      { id: 'A', text: "vibrant" },
      { id: 'B', text: "secluded" },
      { id: 'C', text: "monotonous" },
      { id: 'D', text: "predictable" }
    ],
    correctAnswer: 'A',
    explanation: "\u2019vibrant\u2019 is the correct answer because it accurately describes the lively\nand engaging atmosphere associated with the milonga, which is a social event that attracts\ndiverse participants.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-8-q17',
    section: 'reading_writing',
    passage: "18.\n\nIn the world of powerlifting, three primary exercises are vital for success: the squat, the\nbench press, and the deadlift. These exercises involve compound movements that engage\nmultiple muscle groups, providing a comprehensive strength-building workout. Athletes\noften dedicate specific days to each of these exercises, ensuring they have ample time to\nperfect their form and build the necessary strength. A well-rounded powerlifting program\nincorporates these exercises, along with accessory movements, to maximize the athlete\u2019s\npotential.",
    prompt: "Which choice best states the main idea of the text?",
    options: [
      { id: 'A', text: "The three primary exercises in powerlifting and their role in a well-rounded program" },
      { id: 'B', text: "How powerlifting exercises focus on isolating individual muscle groups" },
      { id: 'C', text: "The importance of perfecting form to prevent injury in powerlifting" },
      { id: 'D', text: "The benefits of incorporating accessory movements in a powerlifting routine\n\nDuring the French Revolution, the radical Jacobin party, led by Robespierre, sought to\ncreate a new society based on reason and equality. In their pursuit of these ideals, they\ninstituted the Reign of Terror, executing thousands of perceived enemies. The revolution\nultimately led to the rise of Napoleon Bonaparte, a military leader who seized power and\ndeclared himself Emperor.\n\nWhich choice best states the main idea of the text?" }
    ],
    correctAnswer: 'A',
    explanation: "\u2019The three primary exercises in powerlifting and their role in a well-\nrounded program\u2019 is the correct. answer because the passage discusses the squat, bench\npress, and deadlift as essential exercises and how a comprehensive powerlifting program\nincludes these exercises.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-8-q18',
    section: 'reading_writing',
    passage: "The benefits of incorporating accessory movements in a powerlifting routine\n\nDuring the French Revolution, the radical Jacobin party, led by Robespierre, sought to\ncreate a new society based on reason and equality. In their pursuit of these ideals, they\ninstituted the Reign of Terror, executing thousands of perceived enemies. The revolution\nultimately led to the rise of Napoleon Bonaparte, a military leader who seized power and\ndeclared himself Emperor.",
    prompt: "Which choice best states the main idea of the text?",
    options: [
      { id: 'A', text: "The French Revolution, driven by radical ideals, led to the Reign of Terror and the\nrise of Napoleon." },
      { id: 'B', text: "Napoleon Bonaparte\u2019s rise to power was unrelated to the French Revolution." },
      { id: 'C', text: "The Reign of Terror was a necessary step for the French Revolution to succeed." },
      { id: 'D', text: "Robespierre\u2019s leadership during the French Revolution prevented the establishment\nof a democratic government." }
    ],
    correctAnswer: 'A',
    explanation: "\"The French Revolution, driven by radical ideals, led to the Reign of\nTerror and the rise of Napoleon.\u2019 is the correct answer because it summarizes the main\nideas of the passage, which are the radical Jacobin party\u2019s goals, the Reign of Terror, and\nthe eventual rise of Napoleon Bonaparte.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-8-q19',
    section: 'reading_writing',
    passage: "20.\n\nDuring the Russian Revolution, the power struggle between the Bolsheviks and the Pro-\nvisional Government intensified. The Bolsheviks, led by Vladimir Lenin, advocated for a\nsocialist government, while the Provisional Government aimed to restore a constitutional\nmonarchy. As the revolution unfolded, the Bolsheviks gained popular support, ultimately\nleading to their victory and the establishment of the Soviet Union.",
    prompt: "Which choice best states the main idea of the text?",
    options: [
      { id: 'A', text: "The Bolsheviks\u2019 rise to power was primarily due to their charismatic leader, Vladimir\nLenin." },
      { id: 'B', text: "The Provisional Government\u2019s attempt to restore the monarchy was the main cause\nof the Russian Revolution." },
      { id: 'C', text: "The Russian Revolution was a minor conflict between various factions, with little\nlasting impact on Russia\u2019s political landscape." },
      { id: 'D', text: "The power struggle between the Bolsheviks and Provisional Government during the\nRussian Revolution resulted in the Bolsheviks\u2019 victory and the Soviet Union\u2019s estab-\nlishment.\n\nPaper engineers have developed a new technique to enhance the strength of paper products\nby adding a specialized polymer. This method not only improves the durability of paper\nitems but also reduces environmental impact, as the modified paper can be recycled\nwithout compromising quality.\n\nWhich finding, if true, would most directly support the effectiveness of the new technique?" }
    ],
    correctAnswer: 'D',
    explanation: "\"The power struggle between the Bolsheviks and Provisional Government\nduring the Russian Revolution resulted in the Bolsheviks\u2019 victory and the Soviet Union\u2019s\nestablishment.\u2019 is the correct answer because it accurately summarizes the main idea of\nthe text, which focuses on the conflict between the two factions and its outcome.\n\n20.\n\n21.\n\n22.\n\n23.\n\n24.\n\n25.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-8-q20',
    section: 'reading_writing',
    passage: "The power struggle between the Bolsheviks and Provisional Government during the\nRussian Revolution resulted in the Bolsheviks\u2019 victory and the Soviet Union\u2019s estab-\nlishment.\n\nPaper engineers have developed a new technique to enhance the strength of paper products\nby adding a specialized polymer. This method not only improves the durability of paper\nitems but also reduces environmental impact, as the modified paper can be recycled\nwithout compromising quality.",
    prompt: "Which finding, if true, would most directly support the effectiveness of the new technique?",
    options: [
      { id: 'A', text: "Some paper engineers have expressed concerns about the long-term viability of the\npolymer used in the new technique." },
      { id: 'B', text: "Products made with the new technique show a 50% increase in strength and a higher\nrecycling rate compared to conventional paper products." },
      { id: 'C', text: "The new technique has been adopted by a few companies as an alternative to tradi-\ntional paper manufacturing processes." },
      { id: 'D', text: "A different technique involving nanocellulose fibers has also been proposed to increase\nthe strength of paper products." }
    ],
    correctAnswer: 'B',
    explanation: "\"Products made with the new technique show a 50% increase in strength\nand a higher recycling rate compared to conventional paper products.\u2019 is the correct\nanswer because this finding directly supports the effectiveness of the new technique by\nshowing a significant improvement in strength and recyclability.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-8-q21',
    section: 'reading_writing',
    passage: "22.\n\nIn the aftermath of Brexit, many UK-based companies shifted their operations to other\nEU countries. A study examined the impact of this relocation on the economies of the\ncountries where these companies moved.",
    prompt: "Which finding, if true, would most strongly support the claim that Brexit has positively\nimpacted the economies of other EU countries?",
    options: [
      { id: 'A', text: "Several EU countries that did not receive a significant number of UK-based companies\nalso experienced economic growth post-Brexit." },
      { id: 'B', text: "A few EU countries experienced a decline in economic growth following Brexit despite\nan increase in UK-based companies relocating there." },
      { id: 'C', text: "Countries that received a significant number of relocating UK-based companies ex-\nperienced higher economic growth post-Brexit." },
      { id: 'D', text: "Some UK-based companies that relocated to EU countries faced challenges in adapt-\ning to new regulations and market conditions.\n\nZadie Smith, a renowned British author, is known for exploring themes of cultural, racial,\nand social identity in her novels. Her first novel, White Teeth, was published in 2000 and\nhas since garnered critical acclaim and numerous awards.\n\nWhich finding, if true, would most strongly support the claim that Zadie Smith\u2019s novels\nhave had a significant impact on contemporary literature?" }
    ],
    correctAnswer: 'C',
    explanation: "\u2019Countries that received a significant number of relocating UK-based\ncompanies experienced higher economic growth post-Brexit.\u2019 is the correct answer because\nit directly supports the claim that Brexit has positively impacted the economies of other\nEU countries by showing a correlation between the relocation of UK-based companies and\neconomic growth in those countries.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-8-q22',
    section: 'reading_writing',
    passage: "Some UK-based companies that relocated to EU countries faced challenges in adapt-\ning to new regulations and market conditions.\n\nZadie Smith, a renowned British author, is known for exploring themes of cultural, racial,\nand social identity in her novels. Her first novel, White Teeth, was published in 2000 and\nhas since garnered critical acclaim and numerous awards.",
    prompt: "Which finding, if true, would most strongly support the claim that Zadie Smith\u2019s novels\nhave had a significant impact on contemporary literature?",
    options: [
      { id: 'A', text: "The number of novels exploring cultural, racial, and social identity themes has in-\ncreased since the release of White Teeth." },
      { id: 'B', text: "Zadie Smith\u2019s novels have been adapted into successful film and television produc-\ntions." },
      { id: 'C', text: "Zadie Smith has received prestigious literary awards for her novels, including the Man\nBooker Prize." },
      { id: 'D', text: "Zadie Smith\u2019s novels have been translated into multiple languages and are available\nworldwide." }
    ],
    correctAnswer: 'A',
    explanation: "\u2019The number of novels exploring cultural, racial, and social identity\nthemes has increased since the release of White Teeth.\u2019 is the correct answer because it\ndirectly shows that her novels have influenced other writers and the themes they choose\nto explore, thereby impacting contemporary literature.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-8-q23',
    section: 'reading_writing',
    passage: "24.\n\nThe Organization of American States (OAS) fosters cooperation among its member states,\naiming to promote democracy, human rights, and economic development within the West-\nern Hemisphere. However, critics argue that the OAS has been biased towards certain\npolitical ideologies, which may have resulted in",
    prompt: "Which choice most logically completes the text?",
    options: [
      { id: 'A', text: "a complete disregard for the economic development of the Western Hemisphere" },
      { id: 'B', text: "the organization\u2019s actions and decisions being influenced by specific political interests" },
      { id: 'C', text: "an increased focus on improving cultural ties among member states" },
      { id: 'D', text: "a decline in the overall effectiveness of the OAS in promoting democracy and human\nrights\n\nA command economy is an economic system in which the government controls the produc-\ntion, allocation, and prices of goods and services. While it can lead to a stable economic\nenvironment, critics argue that the lack of market competition may result in inefficient\nproduction and allocation of resources, ultimately leading to\n\nWhich choice most logically completes the text?" }
    ],
    correctAnswer: 'B',
    explanation: "\u2019the organization\u2019s actions and decisions being influenced by specific\npolitical interests\u2019 is the correct answer because it directly relates to the criticism of the\nOAS being biased towards certain political ideologies.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-8-q24',
    section: 'reading_writing',
    passage: "a decline in the overall effectiveness of the OAS in promoting democracy and human\nrights\n\nA command economy is an economic system in which the government controls the produc-\ntion, allocation, and prices of goods and services. While it can lead to a stable economic\nenvironment, critics argue that the lack of market competition may result in inefficient\nproduction and allocation of resources, ultimately leading to",
    prompt: "Which choice most logically completes the text?",
    options: [
      { id: 'A', text: "increased individual freedom for citizens" },
      { id: 'B', text: "stagnation and limited innovation in the long run" },
      { id: 'C', text: "higher levels of income inequality among the population" },
      { id: 'D', text: "greater incentives for entrepreneurship and private investment" }
    ],
    correctAnswer: 'B',
    explanation: "\u2019stagnation and limited innovation in the long run\u2019 is the correct answer\nbecause the passage indicates that the lack of market competition in a command economy\nmay lead to inefficient production and resource allocation, which could stifle growth and\ninnovation.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-8-q25',
    section: 'reading_writing',
    passage: "26.\n\nThe Trail of Tears was a series of forced relocations of Native American tribes from their\nancestral homelands in the southeastern United States to areas west of the Mississippi\nRiver. Thousands of Native Americans suffered and died during the forced marches.\n\nthis tragic event had a lasting impact on the tribes involved, causing cultural\n\ndisruption and loss of traditional lands.",
    prompt: "Which choice completes the text with the most logical transition?",
    options: [
      { id: 'A', text: "On the other hand" },
      { id: 'B', text: "Similarly" },
      { id: 'C', text: "Consequently" },
      { id: 'D', text: "Alternatively\n\nFly fishing is a popular angling method that uses an artificial \u2018fly\u2019 to catch fish. The\nfly is cast using a specialized weighted line, and the method requires a great deal of\nskill and practice to master. fly fishing is often considered a more challenging\nand rewarding form of angling compared to traditional bait fishing. Enthusiasts enjoy\nthe artistry involved in casting the fly and the connection with nature that comes from\nstanding waist-deep in a river or stream.\n\nWhich choice completes the text with the most logical transition?" }
    ],
    correctAnswer: 'C',
    explanation: "\u2019Consequently\u2019 is the correct answer because it logically signals that\nthe lasting impact on the tribes is a result or consequence of the forced relocations and\nsuffering during the Trail of Tears.\n\n26.\n\n27.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-8-q26',
    section: 'reading_writing',
    passage: "Alternatively\n\nFly fishing is a popular angling method that uses an artificial \u2018fly\u2019 to catch fish. The\nfly is cast using a specialized weighted line, and the method requires a great deal of\nskill and practice to master. fly fishing is often considered a more challenging\nand rewarding form of angling compared to traditional bait fishing. Enthusiasts enjoy\nthe artistry involved in casting the fly and the connection with nature that comes from\nstanding waist-deep in a river or stream.",
    prompt: "Which choice completes the text with the most logical transition?",
    options: [
      { id: 'A', text: "On the other hand" },
      { id: 'B', text: "In contrast" },
      { id: 'C', text: "Consequently" },
      { id: 'D', text: "Alternatively" }
    ],
    correctAnswer: 'C',
    explanation: "Consequently\u2019 is the correct answer because it logically signals a con-\nclusion or consequence based on the previous statement, emphasizing the challenge and\nreward associated with fly fishing as a result of the skill and practice required.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
  {
    id: 'rw-test-8-q27',
    section: 'reading_writing',
    passage: "James Watson, an American molecular biologist, is best known for his discovery of the\nstructure of DNA, along with Francis Crick and Rosalind Franklin. This groundbreaking\nwork earned them the Nobel Prize in 1962. Watson went on to write a contro-\nversial memoir called \"The Double Helix,\u2019 in which he chronicled the discovery and the\nscientific community\u2019s reactions.",
    prompt: "Which choice completes the text with the most logical transition?",
    options: [
      { id: 'A', text: "However" },
      { id: 'B', text: "In addition" },
      { id: 'C', text: "Subsequently" },
      { id: 'D', text: "Alternatively" }
    ],
    correctAnswer: 'C',
    explanation: "Subsequently\u2019 is the correct answer because it logically signals that the\nevent of Watson writing the memoir followed the event of earning the Nobel Prize.",
    domain: 'craft_and_structure',
    domainTitle: 'Craft and Structure',
    skill: 'Information and Ideas',
    difficulty: 'Medium',
    type: 'mcq',
    template: 'rw_passage'
  },
];

