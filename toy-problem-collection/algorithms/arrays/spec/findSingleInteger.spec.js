import { findSingleIntegerM } from '../problems/findSingleInteger';

const arrayOfIntegers = [2, 5, 7, 3, 4, 9, 4, 9, 3, 1, 7, 5, 2];

describe('An implementation of findSingleInteger that uses extra memory', () => {
  test('should find the integer that occurs once in the array.', () => {
    expect(findSingleIntegerM(arrayOfIntegers)).toBe(1);
  });
});
