export const insertionSort = array => {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i + 1] && array[i] > array[i + 1]) {
      for (let j = i + 1; j >= 0; j -= 1) {
        if (array[j - 1] && array[j] < array[j - 1]) {
          [array[j - 1], array[j]] = [array[j], array[j - 1]];
        } else {
          break;
        }
      }
    }
  }
  return array;
};

module.exports = insertionSort;
