export interface VocabWord {
  word: string;
  pronunciation: string;
  part_of_speech: string;
  definitions: string[];
  definitions_list?: string[];
  urdu_meaning?: string;
  sentences: string[];
  synonyms: string[];
  matching_definition: string;
  review_id: number;
}

export interface QuickReview {
  review_id: number;
  title: string;
  word_count: number;
  words: VocabWord[];
  col1_words: Record<string, string>;
  col2_definitions: Record<string, string>;
  answer_key: Record<string, string>;
}

export interface AffixEntry {
  affix: string;
  affix_type: string;
  meaning: string;
  examples: string[];
}
