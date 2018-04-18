/* eslint-disable no-bitwise */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) =>
  [...(x ^ y).toString(2)]
    .map(asciiBit => parseInt(asciiBit, 10))
    .reduce((acc, bit) => acc + bit);

export default hammingDistance;
