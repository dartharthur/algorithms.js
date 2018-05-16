const binarySearch = (array, start, end, target) => {
  const midpoint = Math.floor((start + end) / 2);
  if (array[midpoint] === target) {
    return midpoint;
  }

  if (start === end) {
    return null;
  }

  if (target < array[midpoint]) {
    return binarySearch(array, start, midpoint, target);
  } else {
    return binarySearch(array, midpoint + 1, end, target);
  }
};

module.exports = binarySearch;
