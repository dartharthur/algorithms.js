/**
 * note:
 * can't break out of forEach loops
 * if solution requires breaking out of loop once an answer is found, forEach is wrong tool
 * use regular for loop instead
 */
const twoSum = (nums, target) => {
  const storage = {};
  for (let i = 0; i < nums.length; i += 1) {
    let addend = target - nums[i];
    if (storage.hasOwnProperty(addend)) {
      return [storage[addend], i];
    }
    storage[nums[i]] = i;
  }
};

export default twoSum;
