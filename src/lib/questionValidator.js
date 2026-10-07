"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferTemplate = inferTemplate;
exports.validateQuestion = validateQuestion;
exports.filterValidQuestions = filterValidQuestions;
/**
 * Client-side gatekeeper. Mirrors the rules in export_bank.py so that a broken
 * question can never reach the exam screen, even if it is added by hand or
 * imported from another source.
 */
var AXIS_DUMP = /(?:^\s*[\d,.%$-]+\s*$\n?){4,}/m;
var MISSING_MATH = /\bof\s+\?|\s{2,}(?:times|is|and|where|,|\.)\s|\(\s*\)|=\s*[,.?]/;
function inferTemplate(q) {
    if (q.template)
        return q.template;
    if (q.section === 'math') {
        if (q.figure || q.table)
            return 'math_figure';
        return q.type === 'spr' ? 'math_spr' : 'math_mcq';
    }
    var passage = q.passage || '';
    if (q.figure || q.table || /Quantitative/.test(q.skill))
        return 'rw_quantitative';
    if (/^\s*T\s?ext 1\b/m.test(passage) && /T\s?ext 2\b/.test(passage))
        return 'rw_paired';
    if (/following notes/.test(passage + q.prompt) || q.skill === 'Rhetorical Synthesis')
        return 'rw_notes';
    return 'rw_passage';
}
function validateQuestion(q) {
    var _a, _b;
    var errs = [];
    var template = inferTemplate(q);
    var body = "".concat(q.passage || '', "\n").concat(q.prompt || '');
    if (!q.id)
        errs.push('missing_id');
    if (!((_a = q.prompt) === null || _a === void 0 ? void 0 : _a.trim()) && !(q.section === 'math' && q.figure))
        errs.push('empty_prompt');
    // explanation is optional for mock tests where user chose not to include explanations
    if (q.type === 'mcq') {
        var opts = q.options || [];
        if (opts.length !== 4 || opts.some(function (o) { var _a; return !((_a = o.text) === null || _a === void 0 ? void 0 : _a.trim()); }))
            errs.push('missing_option_text');
        if (!['A', 'B', 'C', 'D'].includes(q.correctAnswer))
            errs.push('invalid_answer_key');
    }
    else if (!((_b = q.correctAnswer) === null || _b === void 0 ? void 0 : _b.trim())) {
        errs.push('missing_spr_answer');
    }
    if (AXIS_DUMP.test(body))
        errs.push('graph_labels_in_text');
    if ((template === 'rw_quantitative' || template === 'math_figure') && !q.figure && !q.table) {
        errs.push('figure_or_table_required_but_missing');
    }
    if (template.startsWith('rw_') && q.section !== 'reading_writing')
        errs.push('template_section_mismatch');
    if (template.startsWith('math_') && q.section !== 'math')
        errs.push('template_section_mismatch');
    if (q.section === 'math') {
        var optText = (q.options || []).map(function (o) { return o.text; }).join(' ');
        if (MISSING_MATH.test("".concat(body, " ").concat(optText)))
            errs.push('equation_missing_from_text');
    }
    return errs;
}
/** Returns only questions that pass, with template filled in. Logs rejects in dev. */
function filterValidQuestions(list) {
    var valid = [];
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var q = list_1[_i];
        var errs = validateQuestion(q);
        if (errs.length === 0) {
            valid.push(__assign(__assign({}, q), { template: inferTemplate(q) }));
        }
        else if (process.env.NODE_ENV !== 'production') {
            console.warn("[question-bank] rejected ".concat(q.id, ":"), errs.join(', '));
        }
    }
    return valid;
}
