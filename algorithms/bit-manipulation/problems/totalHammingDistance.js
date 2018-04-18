/* eslint-disable no-bitwise */

/**
 * @param {number[]} nums
 * @return {number}
 */
const totalHammingDistance = nums => {
  let numsToBits = "";
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      numsToBits += (nums[i] ^ nums[j]).toString(2);
    }
  }
  return [...numsToBits]
    .map(asciiBit => parseInt(asciiBit, 10))
    .reduce((acc, bit) => acc + bit, 0);
};

export default totalHammingDistance;
