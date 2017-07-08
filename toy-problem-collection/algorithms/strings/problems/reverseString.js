export const reverseStringJS = str => str.split('').reverse().join('');

export const reverseStringDecrement = (str) => {
  let built = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    built += str[i];
  }
  return built;
};

export const reverseStringRecursively = (str) => {
  if (str === '') return '';
  return reverseStringRecursively(str.substr(1)) + str.charAt(0);
};
