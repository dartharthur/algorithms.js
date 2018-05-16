const binarySearch = (array, target) => {
  let start = 0;
  let midpoint = Math.floor(array.length / 2);
  let end = array.length - 1;

  while (start !== end) {
    if (target === array[midpoint]) {
      return midpoint;
    }

    if (target < array[midpoint]) {
      end = midpoint;
      midpoint = Math.floor((start + midpoint) / 2);
    }

    if (target > array[midpoint]) {
      start = midpoint;
      midpoint = Math.ceil((end + midpoint) / 2);
    }
  }

  return null;
};

module.exports = binarySearch;
