import { MOCK_RW_TEST_1 } from './data/mockRwQuestions';
import { validateQuestion } from './lib/questionValidator';

let total = 0;
let invalid = 0;
for (const q of MOCK_RW_TEST_1) {
  total++;
  const errs = validateQuestion(q);
  if (errs.length > 0) {
    invalid++;
    console.log(q.id, errs);
  }
}
console.log(`Total: ${total}, Invalid: ${invalid}`);
