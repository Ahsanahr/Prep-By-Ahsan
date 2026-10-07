import { Question } from '../types/sat';
import { MOCK_11_DATA } from './mock11Questions';
import { MOCK_05_DATA } from './mock05Questions';
import { MOCK_06_DATA } from './mock06Questions';
import { MOCK_05_NEW_DATA } from './mock05NewQuestions';
import { MOCK_RW_TEST_1, MOCK_RW_TEST_2, MOCK_RW_TEST_3, MOCK_RW_TEST_4 } from './mockRwQuestions';
import { MOCK_RW_TEST_5, MOCK_RW_TEST_6, MOCK_RW_TEST_7, MOCK_RW_TEST_8 } from './mockRwQuestions_2';

export type MockFilterCategory = 'all' | 'old_sat' | 'new_sat' | 'english_writing';

export interface MockTestModule {
  id: string;
  section: 'reading_writing' | 'math';
  moduleNumber: 1 | 2;
  title: string;
  questionCount: number;
  timeSeconds: number;
  time_seconds?: number;
  questions: Question[];
}

export interface MockTestStructure {
  id: string;
  title: string;
  description: string;
  setType: 'old_sat' | 'new_sat';
  isEnglishWritingOnly?: boolean;
  totalQuestions: number;
  totalTimeMinutes: number;
  modules: MockTestModule[];
}

export const MOCK_TESTS: MockTestStructure[] = [
  {
    id: 'mock-01',
    title: 'Mock Test 1',
    description: 'The SAT Practice Test #11 (Form 6XSL01). Complete 4-module test with Reading & Writing and Math.',
    setType: 'old_sat',
    isEnglishWritingOnly: false,
    totalQuestions: 120,
    totalTimeMinutes: 164,
    modules: MOCK_11_DATA.modules as unknown as MockTestModule[],
  },
  {
    id: 'mock-02',
    title: 'Mock Test 2',
    description: 'The SAT Practice Test #5 (Form 6VSL01). Complete 4-module test with Reading & Writing and Math.',
    setType: 'old_sat',
    isEnglishWritingOnly: false,
    totalQuestions: 120,
    totalTimeMinutes: 164,
    modules: MOCK_05_DATA.modules as unknown as MockTestModule[],
  },
  {
    id: 'mock-03',
    title: 'Mock Test 3',
    description: 'The SAT Practice Test #6 (Form 6VSL02). Complete 4-module test with Reading & Writing and Math.',
    setType: 'old_sat',
    isEnglishWritingOnly: false,
    totalQuestions: 120,
    totalTimeMinutes: 164,
    modules: MOCK_06_DATA.modules as unknown as MockTestModule[],
  },
  {
    id: 'mock-05',
    title: 'Mock Test 4',
    description: 'Test Ninjas SATÂ® Full Practice Exam (Digital Format). Complete 4-module test with Reading & Writing (54 questions) and Math (44 questions).',
    setType: 'new_sat',
    isEnglishWritingOnly: false,
    totalQuestions: 98,
    totalTimeMinutes: 134,
    modules: MOCK_05_NEW_DATA.modules as unknown as MockTestModule[],
  },
  {
    id: 'rw-test-1',
    title: 'Reading and Writing Test 1',
    description: 'Reading and Writing Practice Test 1. 27 questions, 32 minutes.',
    setType: 'new_sat',
    isEnglishWritingOnly: true,
    totalQuestions: 27,
    totalTimeMinutes: 32,
    modules: [
      {
        id: 'rw-test-1-m1',
        section: 'reading_writing',
        moduleNumber: 1,
        title: 'Reading and Writing Module',
        questionCount: 27,
        timeSeconds: 1920,
        questions: MOCK_RW_TEST_1,
      }
    ],
  },
  {
    id: 'rw-test-2',
    title: 'Reading and Writing Test 2',
    description: 'Reading and Writing Practice Test 2. 27 questions, 32 minutes.',
    setType: 'new_sat',
    isEnglishWritingOnly: true,
    totalQuestions: 27,
    totalTimeMinutes: 32,
    modules: [
      {
        id: 'rw-test-2-m1',
        section: 'reading_writing',
        moduleNumber: 1,
        title: 'Reading and Writing Module',
        questionCount: 27,
        timeSeconds: 1920,
        questions: MOCK_RW_TEST_2,
      }
    ],
  },
  {
    id: 'rw-test-3',
    title: 'Reading and Writing Test 3',
    description: 'Reading and Writing Practice Test 3. 27 questions, 32 minutes.',
    setType: 'new_sat',
    isEnglishWritingOnly: true,
    totalQuestions: 27,
    totalTimeMinutes: 32,
    modules: [
      {
        id: 'rw-test-3-m1',
        section: 'reading_writing',
        moduleNumber: 1,
        title: 'Reading and Writing Module',
        questionCount: 27,
        timeSeconds: 1920,
        questions: MOCK_RW_TEST_3,
      }
    ],
  },
  {
    id: 'rw-test-4',
    title: 'Reading and Writing Test 4',
    description: 'Reading and Writing Practice Test 4. 27 questions, 32 minutes.',
    setType: 'new_sat',
    isEnglishWritingOnly: true,
    totalQuestions: 27,
    totalTimeMinutes: 32,
    modules: [
      {
        id: 'rw-test-4-m1',
        section: 'reading_writing',
        moduleNumber: 1,
        title: 'Reading and Writing Module',
        questionCount: 27,
        timeSeconds: 1920,
        questions: MOCK_RW_TEST_4,
      }
    ],
  },
  {
    id: 'rw-test-5',
    title: 'Reading and Writing Test 5',
    description: 'Reading and Writing Practice Test 5. 27 questions, 32 minutes.',
    setType: 'new_sat',
    isEnglishWritingOnly: true,
    totalQuestions: 27,
    totalTimeMinutes: 32,
    modules: [
      {
        id: 'rw-test-5-m1',
        section: 'reading_writing',
        moduleNumber: 1,
        title: 'Reading and Writing Module',
        questionCount: 27,
        timeSeconds: 1920,
        questions: MOCK_RW_TEST_5,
      }
    ],
  },
  {
    id: 'rw-test-6',
    title: 'Reading and Writing Test 6',
    description: 'Reading and Writing Practice Test 6. 27 questions, 32 minutes.',
    setType: 'new_sat',
    isEnglishWritingOnly: true,
    totalQuestions: 27,
    totalTimeMinutes: 32,
    modules: [
      {
        id: 'rw-test-6-m1',
        section: 'reading_writing',
        moduleNumber: 1,
        title: 'Reading and Writing Module',
        questionCount: 27,
        timeSeconds: 1920,
        questions: MOCK_RW_TEST_6,
      }
    ],
  },
  {
    id: 'rw-test-7',
    title: 'Reading and Writing Test 7',
    description: 'Reading and Writing Practice Test 7. 27 questions, 32 minutes.',
    setType: 'new_sat',
    isEnglishWritingOnly: true,
    totalQuestions: 27,
    totalTimeMinutes: 32,
    modules: [
      {
        id: 'rw-test-7-m1',
        section: 'reading_writing',
        moduleNumber: 1,
        title: 'Reading and Writing Module',
        questionCount: 27,
        timeSeconds: 1920,
        questions: MOCK_RW_TEST_7,
      }
    ],
  },
  {
    id: 'rw-test-8',
    title: 'Reading and Writing Test 8',
    description: 'Reading and Writing Practice Test 8. 27 questions, 32 minutes.',
    setType: 'new_sat',
    isEnglishWritingOnly: true,
    totalQuestions: 27,
    totalTimeMinutes: 32,
    modules: [
      {
        id: 'rw-test-8-m1',
        section: 'reading_writing',
        moduleNumber: 1,
        title: 'Reading and Writing Module',
        questionCount: 27,
        timeSeconds: 1920,
        questions: MOCK_RW_TEST_8,
      }
    ],
  },
];
