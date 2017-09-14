/** classic recursive implementation */
export const rFibonacci = n => {
  if (n === 0 || n === 1) {
    return n;
  }
  return rFibonacci(n - 1) + rFibonacci(n - 2);
};

/** top-down dynamic programming (memoization) - IIFE */
export const tdFibonacci = (() => {
  const memo = {};

  function f(n) {
    let value;

    if (n in memo) {
      /** if value already cached - no need to recurse */
      value = memo[n];
    } else {
      if (n === 0 || n === 1) {
        value = n;
      } else {
        value = f(n - 1) + f(n - 2);
      }

      /** must store solutions to base/recursive cases */
      memo[n] = value;
    }

    return value;
  }
  return f;
})();

/** bottom-up dynamic programming */
export const buFibonacci = n => {
  if (n === 0) return 0;
  let a = 0;
  let b = 1;
  for (let i = 2; i < n; i += 1) {
    let c = a + b;
    a = b;
    b = c;
  }
  return a + b;
};
