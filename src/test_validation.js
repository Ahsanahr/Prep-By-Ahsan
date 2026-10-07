"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mockRwQuestions_1 = require("./data/mockRwQuestions");
var questionValidator_1 = require("./lib/questionValidator");
var total = 0;
var invalid = 0;
for (var _i = 0, MOCK_RW_TEST_1_1 = mockRwQuestions_1.MOCK_RW_TEST_1; _i < MOCK_RW_TEST_1_1.length; _i++) {
    var q = MOCK_RW_TEST_1_1[_i];
    total++;
    var errs = (0, questionValidator_1.validateQuestion)(q);
    if (errs.length > 0) {
        invalid++;
        console.log(q.id, errs);
    }
}
console.log("Total: ".concat(total, ", Invalid: ").concat(invalid));
