function bubbleSort(array) {
  let flag = true;

  while (flag) {
    flag = false;
    for (var i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        flag = true;
      }
    }
  }

  return array;
};