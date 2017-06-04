/** classic recursive implementation */
function rFibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return rFibonacci(n - 1) + rFibonacci(n - 2);
  }
};

/** top-down dynamic programming (memoization) - IIFE */
const tdFibonacci = (function() {
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
function buFibonacci(n) {
  if (n === 0) return 0;
  let a = 0;
  let b = 1;
  for (let i = 2; i < n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return a + b;
};

/** recursive solution */
function rClimbStairs(n) {
  if (n === 0 || n === 1 || n === 2) {
    return n;
  } else {
    return rClimbStairs(n - 1) + rClimbStairs(n - 2);
  }
};

/** top down - O(n) Time & O(n) Space */
const tdClimbStairs = (function() {
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
function buClimbStairsV1(n) {
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
function buClimbStairsV2(n) {
  let solutions = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    solutions[i] = solutions[i - 1] + solutions[i - 2];
  }

  return solutions[n];
};

/** recursive solution */
function rPathsToWork(e, s) {
  let solutionCount = 0;
  if (e === 0 || s === 0) return 1;
  solutionCount = rPathsToWork(e - 1, s) + rPathsToWork(e, s - 1);
  return solutionCount;
};

/** top down (memoization) */
const tdPathsToWorkV1 = (function() {
  const memo = {};
  function f(e, s) {
    let solutionCount;
    if (memo[e + ',' + s]) {
      solutionCount = memo[e + ',' + s];
    } else {
      if (e === 0 || s === 0) {
        memo[e + ',' + s] = 1;
        memo[s + ',' + e] = 1;
      } else {
        memo[e + ',' + s] = f(e - 1, s) + f(e, s - 1);
      }
      solutionCount = memo[e + ',' + s];
    }
    return solutionCount;
  }
  return f;
})();

// expected output: 6
// actual output: 6
// console.log(tdPathsToWork(2,2));

/** top down (memoization) - concise sample code */
function tdPathsToWorkV2(e, s) {
 const cache = [[0]];
 for (let i = 1; i <= s; i++) {
   cache.push([1]);
 }
 for (let j = 1; j <= e; j++) {
   cache[0].push(1);
 }
 const r = (e, s) => {
   if (cache[e][s]) return cache[e][s];
   return cache[e][s] = r(e - 1, s) + r(e, s - 1);
 }
 return r(e, s);
};

/** bottom up */
function buPathsToWork(e, s) {
  const map = [];
  for (let i = 0; i <= s; i++) {
    let row = [];
    for (let j = 0; j <= e; j++) {
      if (i === 0 || j === 0) row.push(1);
      else row.push(map[i - 1][j] + row[j - 1]);
    }
    map.push(row);
  }
  return map[s][e];
};