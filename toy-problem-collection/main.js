/**
 * Note:
 * Can't break out of forEach loops.
 * If solution requires breaking out of loop once an answer is found, forEach is wrong tool.
 * Use regular for loop instead.
 */
function twoSum(nums, target) {
  let storage = {};
  for (let i = 0; i < nums.length; i++) {
    let addend = target - nums[i];
    if (storage.hasOwnProperty(addend)) {
      return ([storage[addend], i]);
    } else {
      storage[nums[i]] = i;
    }
  }
};