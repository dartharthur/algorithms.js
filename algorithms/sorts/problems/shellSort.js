const shellSort = array => {
  const N = array.length;
  let h = 1;
  while (h < N / 3) {
    h = 3 * h + 1; // Knuth's 3x + 1 increment sequence
  }
  while (h >= 1) {
    for (let i = h; i < N; i += 1) {
      for (let j = i; j >= h && array[j] < array[j - h]; j -= h) {
        [array[j - h], array[j]] = [array[j], array[j - h]];
      }
    }
    h = Math.floor(h / 3);
  }
  return array;
};

module.exports = shellSort;
