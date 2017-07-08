import flattenAndRemoveDuplicates from '../problems/flattenAndRemoveDuplicates';

const singlyNestedArray = [4, 2, 3, 4, [7, 9, 8, 7]];
const multiNestedArray = [2, 5, 6, 5, 57, [1, [3, 4, 3, 4, [1]]], [10]];

describe('flattenAndRemoveDuplicates', () => {
  test('should flatten and remove duplicates from a singly nested array.', () => {
    expect(flattenAndRemoveDuplicates(singlyNestedArray)).toEqual([4, 2, 3, 7, 9, 8]);
  });
  test('should flatten and remove duplicates from any number of nested arrays.', () => {
    expect(flattenAndRemoveDuplicates(multiNestedArray)).toEqual([2, 5, 6, 57, 1, 3, 4, 10])
  });
});
