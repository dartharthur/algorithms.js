/**
 * note:
 * can't break out of forEach loops
 * if solution requires breaking out of loop once an answer is found, forEach is wrong tool
 * use regular for loop instead
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

function reverseInteger(number) {
  let built = 0;
  let source = Math.abs(number);

  while(source > 0) {
    built = (built * 10) + (source % 10);
    /** max 32 bit integer */
    if (built > 2147483647) return 0;
    source = Math.floor(source / 10);
  }

  return number < 0 ? built * -1 : built;
};