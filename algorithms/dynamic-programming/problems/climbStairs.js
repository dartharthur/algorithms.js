/** recursive solution */
export const rClimbStairs = n => {
  if (n === 0 || n === 1 || n === 2) {
    return n;
  }
  return rClimbStairs(n - 1) + rClimbStairs(n - 2);
};

/** top down - O(n) Time & O(n) Space */
export const tdClimbStairs = (() => {
  const memo = {};
  function f(n) {
    let solutionCount;

    if (memo[n]) {
      solutionCount = memo[n];
    } else {
      if (n === 0 || n === 1 || n === 2) {
        memo[n] = n;
      } else {
        memo[n] = f(n - 1) + f(n - 2);
      }
      solutionCount = memo[n];
    }
    return solutionCount;
  }
  return f;
})();

// expected output: 8
// actual output: 8
// console.log(climbStairsV3(5));

/** bottom up - O(n) Time & O(1) Space */
export const buClimbStairsV1 = n => {
  if (n === 0 || n === 1 || n === 2) return n;

  let a = 1;
  let b = 2;
  let solutionCount = 0;

  for (let i = 2; i < n; i += 1) {
    solutionCount = a + b;
    a = b;
    b = solutionCount;
  }

  return solutionCount;
};

/** bottom up - O(n) Time & O(n) Space */
export const buClimbStairsV2 = n => {
  const solutions = [0, 1, 2];

  for (let i = 3; i <= n; i += 1) {
    solutions[i] = solutions[i - 1] + solutions[i - 2];
  }

  return solutions[n];
};
