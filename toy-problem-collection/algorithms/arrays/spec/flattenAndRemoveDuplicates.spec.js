import flattenAndRemoveDuplicates from '../problems/flattenAndRemoveDuplicates';

describe('flattenAndRemoveDuplicates', () => {
  test('should flatten and remove duplicates from a singly nested array.', () => {
    const singlyNestedArray = [4, 2, 3, 4, [7, 9, 8, 7]];
    const expected = [4, 2, 3, 7, 9, 8];
    const result = flattenAndRemoveDuplicates(singlyNestedArray);
    expect(result).toEqual(expected);
  });
  test('should flatten and remove duplicates from any number of nested arrays.', () => {
    const multiNestedArray = [2, 5, 6, 5, 57, [1, [3, 4, 3, 4, [1]]], [10]];
    const expected = [2, 5, 6, 57, 1, 3, 4, 10];
    const result = flattenAndRemoveDuplicates(multiNestedArray);
    expect(result).toEqual(expected);
  });
});
