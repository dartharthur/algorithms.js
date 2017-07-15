/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @return {number}
 */
export const majorityElementHashTable = (nums) => {
  const elementDictionary = {};
  for (let i = 0; i < nums.length; i += 1) {
    elementDictionary[nums[i]]
      ? (elementDictionary[nums[i]] += 1)
      : (elementDictionary[nums[i]] = 1);
    if (elementDictionary[nums[i]] > nums.length / 2) return nums[i];
  }
  return null;
};

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
export const majorityElementBoyerMoore = (nums) => {
  /** Boyer-Moore Majority Vote Algorithm */
  /**
   * "If major is truly the majority, there will be more increases
   * than decreases and counts will be positive at the end of the algorithm."
   */
  let major;
  let counts = 0;
  const n = nums.length;
  for (let i = 0; i < n; i += 1) {
    if (!counts) {
      major = nums[i];
      counts = 1;
    } else {
      counts += (nums[i] === major) ? 1 : -1;
    }
  }
  return major;
};
