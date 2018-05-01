const bubbleSort = require('../problems/bubbleSort');
const insertionSort = require('../problems/insertionSort');
const selectionSort = require('../problems/selectionSort');
const shellSort = require('../problems/shellSort');
const mergeSort = require('../problems/mergeSort');
const quickSort = require('../problems/quickSort');

const aIn = [6, 2];
const aOut = [2, 6];

const bIn = [2, 6, 8, 3, 4];
const bOut = [2, 3, 4, 6, 8];

const cIn = [6, 2, 4, 9];
const cOut = [2, 4, 6, 9];

const dIn = [34, 7, 23, 32, 5, 62];
const dOut = [5, 7, 23, 32, 34, 62];

const eIn = [34, 7, 23, 32, 5, 62, 49, 78, 42];
const eOut = [5, 7, 23, 32, 34, 42, 49, 62, 78];

const fIn = [
  'K',
  'R',
  'A',
  'T',
  'E',
  'L',
  'E',
  'P',
  'U',
  'I',
  'M',
  'Q',
  'C',
  'X',
  'O',
  'S',
];

const fOut = [
  'A',
  'C',
  'E',
  'E',
  'I',
  'K',
  'L',
  'M',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'X',
];

describe('bubbleSort', () => {
  test('should sort an array containing five numbers.', () => {
    expect(bubbleSort(bIn)).toEqual(bOut);
  });

  test('should sort an array containing nine numbers.', () => {
    expect(bubbleSort(eIn)).toEqual(eOut);
  });
});

describe('insertionSort', () => {
  test('should sort an array containing five numbers.', () => {
    expect(insertionSort(bIn)).toEqual(bOut);
  });

  test('should sort an array containing nine numbers.', () => {
    expect(insertionSort(eIn)).toEqual(eOut);
  });
});

describe('selectionSort', () => {
  test('should sort an array containing five numbers.', () => {
    expect(selectionSort(bIn)).toEqual(bOut);
  });

  test('should sort an array containing nine numbers.', () => {
    expect(selectionSort(eIn)).toEqual(eOut);
  });
});

describe('shellSort', () => {
  test('should sort an array containing five numbers.', () => {
    expect(shellSort(bIn)).toEqual(bOut);
  });
});

describe('mergeSort', () => {
  test('should sort an array containing two numbers.', () => {
    expect(mergeSort(aIn)).toEqual(aOut);
  });

  test('should sort an array containing four numbers.', () => {
    expect(mergeSort(cIn)).toEqual(cOut);
  });

  test('should sort an array containing six numbers.', () => {
    expect(mergeSort(dIn)).toEqual(dOut);
  });

  test('should sort an array containing nine numbers.', () => {
    expect(mergeSort(eIn)).toEqual(eOut);
  });
});

describe('quickSort', () => {
  test('should sort an array containing nine numbers.', () => {
    expect(mergeSort(eIn)).toEqual(eOut);
  });

  test('should sort an array of letters.', () => {
    quickSort(fIn);
    expect(fIn).toEqual(fOut);
  });
});
