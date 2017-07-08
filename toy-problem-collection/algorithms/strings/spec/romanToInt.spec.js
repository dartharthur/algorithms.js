import romanToInt from '../problems/romanToInt';

const firstNumeral = 'XVI';
const secondNumeral = 'MXXIV';
const thirdNumeral = 'MDXLIV';

const firstInt = 16;
const secondInt = 1024;
const thirdInt = 1544;

describe('An implementation of romanToInt', () => {
  test('should convert a roman numeral to an integer.', () => {
    expect(romanToInt(firstNumeral)).toBe(firstInt);
  });
  test('should convert a roman numeral to an integer.', () => {
    expect(romanToInt(secondNumeral)).toBe(secondInt);
  });
  test('should convert a roman numeral to an integer.', () => {
    expect(romanToInt(thirdNumeral)).toBe(thirdInt);
  });
});
