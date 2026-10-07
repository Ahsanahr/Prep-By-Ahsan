// Official College Board Paper/Linear SAT Scoring Conversion Scale
// Standard for the 5 linear practice test sets (Form 6VSL01 / 6XSL01)

export interface ScoreRange {
  lower: number;
  upper: number;
  midpoint: number;
}

export const RW_RAW_TO_SCALED: Record<number, { lower: number; upper: number }> = {
  0: { lower: 200, upper: 200 },
  1: { lower: 200, upper: 200 },
  2: { lower: 200, upper: 200 },
  3: { lower: 200, upper: 200 },
  4: { lower: 200, upper: 200 },
  5: { lower: 200, upper: 210 },
  6: { lower: 200, upper: 230 },
  7: { lower: 200, upper: 240 },
  8: { lower: 200, upper: 250 },
  9: { lower: 200, upper: 260 },
  10: { lower: 220, upper: 280 },
  11: { lower: 230, upper: 290 },
  12: { lower: 240, upper: 300 },
  13: { lower: 250, upper: 310 },
  14: { lower: 260, upper: 320 },
  15: { lower: 270, upper: 330 },
  16: { lower: 290, upper: 350 },
  17: { lower: 310, upper: 370 },
  18: { lower: 330, upper: 370 },
  19: { lower: 340, upper: 380 },
  20: { lower: 350, upper: 390 },
  21: { lower: 360, upper: 400 },
  22: { lower: 360, upper: 400 },
  23: { lower: 370, upper: 410 },
  24: { lower: 380, upper: 420 },
  25: { lower: 390, upper: 430 },
  26: { lower: 390, upper: 430 },
  27: { lower: 400, upper: 440 },
  28: { lower: 410, upper: 450 },
  29: { lower: 420, upper: 460 },
  30: { lower: 430, upper: 470 },
  31: { lower: 440, upper: 480 },
  32: { lower: 450, upper: 490 },
  33: { lower: 450, upper: 490 },
  34: { lower: 460, upper: 500 },
  35: { lower: 470, upper: 510 },
  36: { lower: 480, upper: 520 },
  37: { lower: 490, upper: 530 },
  38: { lower: 500, upper: 540 },
  39: { lower: 500, upper: 540 },
  40: { lower: 510, upper: 550 },
  41: { lower: 520, upper: 560 },
  42: { lower: 530, upper: 570 },
  43: { lower: 530, upper: 590 },
  44: { lower: 540, upper: 600 },
  45: { lower: 550, upper: 610 },
  46: { lower: 560, upper: 620 },
  47: { lower: 570, upper: 630 },
  48: { lower: 580, upper: 640 },
  49: { lower: 590, upper: 650 },
  50: { lower: 600, upper: 660 },
  51: { lower: 620, upper: 660 },
  52: { lower: 630, upper: 670 },
  53: { lower: 640, upper: 680 },
  54: { lower: 650, upper: 690 },
  55: { lower: 660, upper: 700 },
  56: { lower: 680, upper: 720 },
  57: { lower: 690, upper: 730 },
  58: { lower: 700, upper: 740 },
  59: { lower: 710, upper: 750 },
  60: { lower: 720, upper: 760 },
  61: { lower: 730, upper: 770 },
  62: { lower: 750, upper: 770 },
  63: { lower: 760, upper: 780 },
  64: { lower: 770, upper: 790 },
  65: { lower: 780, upper: 800 },
  66: { lower: 790, upper: 800 },
};

export const MATH_RAW_TO_SCALED: Record<number, { lower: number; upper: number }> = {
  0: { lower: 200, upper: 200 },
  1: { lower: 200, upper: 200 },
  2: { lower: 200, upper: 200 },
  3: { lower: 200, upper: 210 },
  4: { lower: 200, upper: 220 },
  5: { lower: 200, upper: 240 },
  6: { lower: 210, upper: 260 },
  7: { lower: 220, upper: 270 },
  8: { lower: 230, upper: 290 },
  9: { lower: 270, upper: 330 },
  10: { lower: 290, upper: 330 },
  11: { lower: 300, upper: 340 },
  12: { lower: 310, upper: 350 },
  13: { lower: 320, upper: 360 },
  14: { lower: 330, upper: 370 },
  15: { lower: 340, upper: 380 },
  16: { lower: 340, upper: 380 },
  17: { lower: 350, upper: 390 },
  18: { lower: 350, upper: 390 },
  19: { lower: 360, upper: 400 },
  20: { lower: 370, upper: 410 },
  21: { lower: 380, upper: 420 },
  22: { lower: 380, upper: 420 },
  23: { lower: 390, upper: 430 },
  24: { lower: 400, upper: 440 },
  25: { lower: 410, upper: 450 },
  26: { lower: 420, upper: 460 },
  27: { lower: 430, upper: 470 },
  28: { lower: 440, upper: 480 },
  29: { lower: 450, upper: 510 },
  30: { lower: 460, upper: 520 },
  31: { lower: 470, upper: 530 },
  32: { lower: 480, upper: 540 },
  33: { lower: 490, upper: 550 },
  34: { lower: 510, upper: 570 },
  35: { lower: 520, upper: 580 },
  36: { lower: 530, upper: 590 },
  37: { lower: 540, upper: 600 },
  38: { lower: 550, upper: 610 },
  39: { lower: 560, upper: 620 },
  40: { lower: 570, upper: 630 },
  41: { lower: 580, upper: 640 },
  42: { lower: 600, upper: 660 },
  43: { lower: 610, upper: 670 },
  44: { lower: 630, upper: 690 },
  45: { lower: 640, upper: 700 },
  46: { lower: 660, upper: 720 },
  47: { lower: 680, upper: 740 },
  48: { lower: 700, upper: 760 },
  49: { lower: 720, upper: 780 },
  50: { lower: 750, upper: 790 },
  51: { lower: 760, upper: 800 },
  52: { lower: 780, upper: 800 },
  53: { lower: 790, upper: 800 },
  54: { lower: 790, upper: 800 },
};

// Digital SAT (54 R&W, 44 Math) Scale from Test Ninjas Official Table
export const DIGITAL_RW_SCALE: { minRaw: number; maxRaw: number; lower: number; upper: number }[] = [
  { minRaw: 52, maxRaw: 54, lower: 780, upper: 800 },
  { minRaw: 48, maxRaw: 51, lower: 720, upper: 770 },
  { minRaw: 44, maxRaw: 47, lower: 660, upper: 710 },
  { minRaw: 40, maxRaw: 43, lower: 600, upper: 650 },
  { minRaw: 35, maxRaw: 39, lower: 540, upper: 590 },
  { minRaw: 30, maxRaw: 34, lower: 480, upper: 530 },
  { minRaw: 24, maxRaw: 29, lower: 420, upper: 470 },
  { minRaw: 18, maxRaw: 23, lower: 360, upper: 410 },
  { minRaw: 12, maxRaw: 17, lower: 300, upper: 350 },
  { minRaw: 6, maxRaw: 11, lower: 250, upper: 290 },
  { minRaw: 0, maxRaw: 5, lower: 200, upper: 240 },
];

export const DIGITAL_MATH_SCALE: { minRaw: number; maxRaw: number; lower: number; upper: number }[] = [
  { minRaw: 43, maxRaw: 44, lower: 780, upper: 800 },
  { minRaw: 40, maxRaw: 42, lower: 720, upper: 770 },
  { minRaw: 36, maxRaw: 39, lower: 660, upper: 710 },
  { minRaw: 32, maxRaw: 35, lower: 600, upper: 650 },
  { minRaw: 28, maxRaw: 31, lower: 540, upper: 590 },
  { minRaw: 23, maxRaw: 27, lower: 480, upper: 530 },
  { minRaw: 18, maxRaw: 22, lower: 420, upper: 470 },
  { minRaw: 13, maxRaw: 17, lower: 360, upper: 410 },
  { minRaw: 8, maxRaw: 12, lower: 300, upper: 350 },
  { minRaw: 4, maxRaw: 7, lower: 250, upper: 290 },
  { minRaw: 0, maxRaw: 3, lower: 200, upper: 240 },
];

export function getRwScaledScore(rawScore: number, totalPossible: number = 66): ScoreRange {
  const bounded = Math.max(0, Math.round(rawScore));
  if (totalPossible <= 54) {
    const band = DIGITAL_RW_SCALE.find((b) => bounded >= b.minRaw && bounded <= b.maxRaw) || DIGITAL_RW_SCALE[DIGITAL_RW_SCALE.length - 1];
    const midpoint = Math.round((band.lower + band.upper) / 20) * 10;
    return { lower: band.lower, upper: band.upper, midpoint };
  }
  const normBounded = Math.min(66, bounded);
  const range = RW_RAW_TO_SCALED[normBounded] || { lower: 200, upper: 200 };
  const midpoint = Math.round((range.lower + range.upper) / 20) * 10;
  return { lower: range.lower, upper: range.upper, midpoint };
}

export function getMathScaledScore(rawScore: number, totalPossible: number = 54): ScoreRange {
  const bounded = Math.max(0, Math.round(rawScore));
  if (totalPossible <= 44) {
    const band = DIGITAL_MATH_SCALE.find((b) => bounded >= b.minRaw && bounded <= b.maxRaw) || DIGITAL_MATH_SCALE[DIGITAL_MATH_SCALE.length - 1];
    const midpoint = Math.round((band.lower + band.upper) / 20) * 10;
    return { lower: band.lower, upper: band.upper, midpoint };
  }
  const normBounded = Math.min(54, bounded);
  const range = MATH_RAW_TO_SCALED[normBounded] || { lower: 200, upper: 200 };
  const midpoint = Math.round((range.lower + range.upper) / 20) * 10;
  return { lower: range.lower, upper: range.upper, midpoint };
}

export function calculateCompositeScore(rwRaw: number, mathRaw: number, rwTotal: number = 66, mathTotal: number = 54) {
  const rw = getRwScaledScore(rwRaw, rwTotal);
  const math = getMathScaledScore(mathRaw, mathTotal);

  const compositeLower = rw.lower + math.lower;
  const compositeUpper = rw.upper + math.upper;
  const compositeMidpoint = rw.midpoint + math.midpoint;

  return {
    rw,
    math,
    composite: {
      lower: compositeLower,
      upper: compositeUpper,
      midpoint: compositeMidpoint,
      rangeString: `${compositeLower} – ${compositeUpper}`,
    },
  };
}
