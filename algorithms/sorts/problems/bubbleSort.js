const bubbleSort = array => {
  let flag = true;
  while (flag) {
    flag = false;
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        flag = true;
      }
    }
  }
  return array;
};

module.exports = bubbleSort;
