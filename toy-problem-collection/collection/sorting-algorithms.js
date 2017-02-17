function bubbleSort(array) {
  let flag = true;
  while (flag) {
    flag = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        flag = true;
      }
    }
  }
  return array;
};

function insertionSortV2(array) {
  for (let i = 0 ; i < array.length; i++) {
    if (array[i + 1] && array[i].value > array[i + 1].value) {
      for (let j = i + 1; j >= 0; j--) {
        if (array[j - 1] && array[j].value < array[j - 1].value) {
          [array[j - 1], array[j]] = [array[j], array[j - 1]];
        } else {
          break;
        }
      }
    }
  }
  return array;
};

function insertionSortV2(array) {
  for (let i = 1; i < array.length; i++) {
    /** key point is we can bake our conditional logic into second element of for loop */
    for (let j = i; j > 0 && array[j].value < array[j-1].value; j--) {
      [array[j - 1], array[j]] = [array[j], array[j - 1]];
    }
  }
  return array;
};

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) min = j;
    }
    if (min > i) [array[i], array[min]] = [array[min], array[i]];
  }
  return array;
};