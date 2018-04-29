const bubbleSort = require('../problems/bubbleSort');
const insertionSort = require('../problems/insertionSort');
const selectionSort = require('../problems/selectionSort');

const simpleInput = [2, 6, 8, 3, 4];
const simpleOutput = [2, 3, 4, 6, 8];

describe('bubbleSort', () => {
  test('should sort a small array of numbers.', () => {
    expect(bubbleSort(simpleInput)).toEqual(simpleOutput);
  });
});

describe('insertionSort', () => {
  test('should sort a small array of numbers.', () => {
    expect(insertionSort(simpleInput)).toEqual(simpleOutput);
  });
});

describe('selectionSort', () => {
  test('should sort a small array of numbers.', () => {
    expect(selectionSort(simpleInput)).toEqual(simpleOutput);
  });
});
