const insertionSort = require('./insertionSort');

/* insertion sort works ok for small subarrays, would want something more efficient for larger ones */
const merge = (a1, a2) => insertionSort(a1.concat(a2));

const mergeSort = array => {
  if (array.length <= 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid, array.length));

  return merge(left, right);
};

module.exports = mergeSort;
