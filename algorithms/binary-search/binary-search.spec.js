const iterBinarySearch = require('./iterative');
const recurBinarySearch = require('./recursive');

const a = [2, 3, 4, 6, 9];
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe('Iterative version of binary-search algorithm', () => {
  test('should return the target value index if it exists in the right half of the given array.', () => {
    expect(iterBinarySearch(a, 6)).toBe(3);
  });

  test('should return the target value index if it exists in the right half of the given array.', () => {
    expect(iterBinarySearch(b, 6)).toBe(5);
  });

  test('should return the target value index if it exists at the end of the given array.', () => {
    expect(iterBinarySearch(a, 9)).toBe(4);
  });

  test('should return the target value index if it exists at the end of the given array.', () => {
    expect(iterBinarySearch(b, 10)).toBe(9);
  });

  test('should return the target value index if it exists in the left half of the given array.', () => {
    expect(iterBinarySearch(a, 3)).toBe(1);
  });

  test('should return the target value index if it exists in the left half of the given array.', () => {
    expect(iterBinarySearch(b, 2)).toBe(1);
  });

  test('should return the target value index if it exists at the beginning of the given array.', () => {
    expect(iterBinarySearch(a, 2)).toBe(0);
  });

  test('should return the target value index if it exists at the beginning of the given array.', () => {
    expect(iterBinarySearch(b, 1)).toBe(0);
  });

  test('should return null if the target value does not exist in the given array.', () => {
    expect(iterBinarySearch(a, 1)).toBe(null);
  });

  test('should return null if the target value does not exist in the given array.', () => {
    expect(iterBinarySearch(b, 0)).toBe(null);
  });

  test('should return null if the target value does not exist in the given array.', () => {
    expect(iterBinarySearch(a, 10)).toBe(null);
  });

  test('should return null if the target value does not exist in the given array.', () => {
    expect(iterBinarySearch(b, 11)).toBe(null);
  });
});

describe('Recursive version of binary-search algorithm', () => {
  test('should return the target value index if it exists in the right half of the given array.', () => {
    expect(recurBinarySearch(a, 0, a.length - 1, 6)).toBe(3);
  });

  test('should return the target value index if it exists in the right half of the given array.', () => {
    expect(recurBinarySearch(b, 0, b.length - 1, 6)).toBe(5);
  });

  test('should return the target value index if it exists at the end of the given array.', () => {
    expect(recurBinarySearch(a, 0, a.length - 1, 9)).toBe(4);
  });

  test('should return the target value index if it exists at the end of the given array.', () => {
    expect(recurBinarySearch(b, 0, b.length - 1, 10)).toBe(9);
  });

  test('should return the target value index if it exists in the left half of the given array.', () => {
    expect(recurBinarySearch(a, 0, a.length - 1, 3)).toBe(1);
  });

  test('should return the target value index if it exists in the left half of the given array.', () => {
    expect(recurBinarySearch(b, 0, b.length - 1, 2)).toBe(1);
  });

  test('should return the target value index if it exists at the beginning of the given array.', () => {
    expect(recurBinarySearch(a, 0, a.length - 1, 2)).toBe(0);
  });

  test('should return the target value index if it exists at the beginning of the given array.', () => {
    expect(recurBinarySearch(b, 0, b.length - 1, 1)).toBe(0);
  });

  test('should return null if the target value does not exist in the given array.', () => {
    expect(recurBinarySearch(a, 0, a.length - 1, 1)).toBe(null);
  });

  test('should return null if the target value does not exist in the given array.', () => {
    expect(recurBinarySearch(b, 0, b.length - 1, 0)).toBe(null);
  });

  test('should return null if the target value does not exist in the given array.', () => {
    expect(recurBinarySearch(a, 0, a.length - 1, 10)).toBe(null);
  });

  test('should return null if the target value does not exist in the given array.', () => {
    expect(recurBinarySearch(b, 0, b.length - 1, 11)).toBe(null);
  });
});
