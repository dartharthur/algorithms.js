// const flattenAndRemoveDuplicates = (arr, unique = new Set()) => {
//   arr.forEach(element => {
//     if (Array.isArray(element)) {
//       flattenAndRemoveDuplicates(element, unique);
//     } else {
//       unique.add(element);
//     }
//   });
//   return [...unique];
// };

const flattenAndRemoveDuplicates = (arr, result = []) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i])) {
      flattenAndRemoveDuplicates(arr[i], result);
    } else if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};

export default flattenAndRemoveDuplicates;
