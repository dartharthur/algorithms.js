/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
const repeatedStringMatch = (A, B) => {
  const C = A;
  let builtA = A;
  let count = 1;

  while (builtA.indexOf(B) === -1) {
    builtA += C;
    count += 1;
    if (builtA.length > B.length * 2) {
      if (builtA.indexOf(B) > -1) {
        return count;
      }
      return -1;
    }
  }

  return count;
};

export default repeatedStringMatch;
