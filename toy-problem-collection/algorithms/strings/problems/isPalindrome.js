/**
 * @param {string} str
 * @return {boolean}
 */

const sanitizeString = (str) => {
  let built = '';
  for (let i = 0; i < str.length; i += 1) {
    if (
      str.toLowerCase().charCodeAt(i) >= 48 && str.toLowerCase().charCodeAt(i) <= 57
    ) built += str[i];
    if (
      str.toLowerCase().charCodeAt(i) >= 97 && str.toLowerCase().charCodeAt(i) <= 122
    ) built += str[i].toLowerCase();
  }
  return built;
};

const isPalindrome = (str) => {
  const sanitizedString = sanitizeString(str);
  for (let i = 0; i < Math.floor(sanitizedString.length / 2); i += 1) {
    if (sanitizedString[i] !== sanitizedString[sanitizedString.length - i - 1]) return false;
  }
  return true;
};

export default isPalindrome;
