/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {integer[]} arrayOfInts
 * @return {integer}
 */
export const findSingleIntegerM = (arrayOfInts) => {
  const unique = new Set();
  arrayOfInts.forEach(int => (unique.has(int) ? unique.delete(int) : unique.add(int)));
  return [...unique][0];
};

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {integer[]} arrayOfInts
 * @return {integer}
 */
export const findSingleIntegerNM = (arrayOfInts) => {
  /** must use bit-manipulation in order to solve with linear runtime and constant space */
};
