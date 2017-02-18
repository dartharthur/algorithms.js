/**
 * Given an array of integers, every element appears twice except for one. Find that single one.
 * Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 */

/** using extra memory */
function singleNumberV1(nums) {
  let storage = {};
  nums.forEach(num => {
    storage[num] ? storage[num] = 'duplicate' : storage[num] = 'unique';
  });
  for (let value in storage) {
    if (storage[value] === 'unique') return +value; 
  }
};

/** not using extra memory */
function singleNumberV2(nums) {
  
};