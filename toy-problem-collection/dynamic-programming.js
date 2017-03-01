/** bottom up - O(n) Time & O(1) Space */
function climbStairsV1(n) {
  if (n === 0 || n === 1 || n === 2) return n;

  let a = 1;
  let b = 2;
  let solutionCount = 0;

  for (let i = 2; i < n; i++) {
    solutionCount = a + b;
    a = b;
    b = solutionCount;
  }

  return solutionCount;
};

/** bottom up - O(n) Time & O(n) Space */
function climbStairsV2(n) {
  let solutions = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    solutions[i] = solutions[i - 1] + solutions[i - 2];
  }

  return solutions[n];
};

/** top down - O(n) Time & O(n) Space */
const climbStairsV3 = (function() {
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

/** recursive solution */
function rPathsToWork(e, s) {
  let solutionCount = 0;
  if (e === 0 || s === 0) return 1;
  solutionCount = rPathsToWork(e - 1, s) + rPathsToWork(e, s - 1);
  return solutionCount;
};

/** top-down (memoization) */
const tdPathsToWork = (function() {
  const memo = {};
  function f(e, s) {
    let solutionCount;
    if (memo[JSON.stringify([e,s])]) {
      solutionCount = memo[JSON.stringify([e,s])];
    } else {
      if (e === 0 || s === 0) {
        memo[JSON.stringify([e,s])] = 1;
        memo[JSON.stringify([s,e])] = 1;
      } else {
        memo[JSON.stringify([e,s])] = f(e - 1, s) + f(e, s - 1);
      }
      solutionCount = memo[JSON.stringify([e,s])];
    }
    // console.log('here is our cache', memo);
    return solutionCount;
  }
  return f;
})();

// expected output: 6
// actual output: 6
console.log(tdPathsToWork(2,2));