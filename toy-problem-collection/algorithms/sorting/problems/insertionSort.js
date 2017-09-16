export const insertionSortV1 = array => {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i + 1] && array[i].value > array[i + 1].value) {
      for (let j = i + 1; j >= 0; j -= 1) {
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

export const insertionSortV2 = array => {
  for (let i = 1; i < array.length; i += 1) {
    /** key point is we can bake our conditional logic into second element of for loop */
    for (let j = i; j > 0 && array[j].value < array[j - 1].value; j -= 1) {
      [array[j - 1], array[j]] = [array[j], array[j - 1]];
    }
  }
  return array;
};
