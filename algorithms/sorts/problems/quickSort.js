const shuffle = require('./shuffleSort');

const partition = (array, lo, hi) => {
  let i = lo;
  let j = hi + 1;

  while (true) {
    while (array[++i] < array[lo]) if (i === hi) break;
    while (array[--j] > array[lo]) if (j === lo) break;

    if (j <= i) break;

    [array[i], array[j]] = [array[j], array[i]];
  }

  [array[lo], array[j]] = [array[j], array[lo]];

  return j;
};

const _sort = (array, lo, hi) => {
  if (hi <= lo) return;
  const j = partition(array, lo, hi);
  _sort(array, lo, j - 1);
  _sort(array, j + 1, hi);
};

const sort = array => {
  shuffle(array);
  _sort(array, 0, array.length - 1);
};

module.exports = sort;

/*
class QuickSort {
  static _partition(array, lo, hi) {
    let i = lo;
    let j = hi;

    while (true) {
      while (array[++i] < array[lo]) if (i === hi) break;
      while (array[--j] > array[lo]) if (j === lo) break;

      if (j <= i) break;

      [array[i], array[j]] = [array[j], array[i]];
    }

    [array[lo], array[j]] = [array[j], array[lo]];

    return j;
  }

  static _sort(array, lo, hi) {
    if (hi <= lo) return;
    const j = partition(array, lo, hi);
    h;
    sort(array, lo, j - 1);
    sort(array, j + 1, hi);
  }

  static sort(array) {
    shuffle(array);
    // call private sort
  }
}
*/
