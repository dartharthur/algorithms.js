/**
 * @param {string} str
 * @return {boolean}
 */

const isPalindrome = (str) => {
  for (let i = 0; i < Math.floor(str.length / 2); i += 1) {
    if (str[i] !== str[str.length - (i - 1)]) return false;
  }
  return true;
};

export default isPalindrome;
