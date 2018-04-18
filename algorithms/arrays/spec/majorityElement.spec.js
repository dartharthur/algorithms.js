import {
  majorityElementHashTable,
  majorityElementBoyerMoore,
} from '../problems/majorityElement';


describe('An implementation of majorityElement using a Hash Table for memory', () => {
  test('should return the majorityElement if given an array containing only one value.', () => {
    const input = [1];
    const result = majorityElementHashTable(input);
    const expectedValue = 1;
    expect(result).toBe(expectedValue);
  });
  test('should return the majorityElement if given an array containing three values.', () => {
    const input = [2, 1, 2];
    const result = majorityElementHashTable(input);
    const expectedValue = 2;
    expect(result).toBe(expectedValue);
  });
  test('should return the majorityElement if given an array containing more than ten values.', () => {
    const input = [3, 5, 5, 4, 6, 5, 7, 5, 5, 4, 2, 5, 2, 5, 4, 5, 4, 5, 5];
    const result = majorityElementHashTable(input);
    const expectedValue = 5;
    expect(result).toBe(expectedValue);
  });
});

describe('An implementation of majorityElement using the Boyer-Moore algorithm and no extra memory', () => {
  test('should return the majorityElement if given an array containing only one value.', () => {
    const input = [1];
    const result = majorityElementBoyerMoore(input);
    const expectedValue = 1;
    expect(result).toBe(expectedValue);
  });
  test('should return the majorityElement if given an array containing three values.', () => {
    const input = [2, 1, 2];
    const result = majorityElementBoyerMoore(input);
    const expectedValue = 2;
    expect(result).toBe(expectedValue);
  });
  test('should return the majorityElement if given an array containing more than ten values.', () => {
    const input = [3, 5, 5, 4, 6, 5, 7, 5, 5, 4, 2, 5, 2, 5, 4, 5, 4, 5, 5];
    const result = majorityElementBoyerMoore(input);
    const expectedValue = 5;
    expect(result).toBe(expectedValue);
  });
});
