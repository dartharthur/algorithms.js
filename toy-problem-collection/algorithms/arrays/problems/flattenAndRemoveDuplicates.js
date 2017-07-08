const flattenAndRemoveDuplicates = (arr, unique = new Set()) => {
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      flattenAndRemoveDuplicates(element, unique);
    } else {
      unique.add(element);
    }
  });
  return [...unique];
};

export default flattenAndRemoveDuplicates;
