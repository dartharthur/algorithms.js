import { findSingleIntegerM } from '../problems/findSingleInteger';

describe('An implementation of findSingleInteger that uses extra memory', () => {
  test('should find the integer that occurs once in the array.', () => {
    const arrayOfIntegers = [2, 5, 7, 3, 4, 9, 4, 9, 3, 1, 7, 5, 2];
    const result = findSingleIntegerM(arrayOfIntegers);
    expect(result).toBe(1);
  });
});
