/** recursive solution */
export const rPathsToWork = (e, s) => {
  let solutionCount = 0;
  if (e === 0 || s === 0) return 1;
  solutionCount = rPathsToWork(e - 1, s) + rPathsToWork(e, s - 1);
  return solutionCount;
};

/** top down (memoization) */
export const tdPathsToWorkV1 = (() => {
  const memo = {};
  function f(e, s) {
    let solutionCount;
    if (memo[`${e},${s}`]) {
      solutionCount = memo[`${e},${s}`];
    } else {
      if (e === 0 || s === 0) {
        memo[`${e},${s}`] = 1;
        memo[`${e},${s}`] = 1;
      } else {
        memo[`${e},${s}`] = f(e - 1, s) + f(e, s - 1);
      }
      solutionCount = memo[`${e},${s}`];
    }
    return solutionCount;
  }
  return f;
})();

// expected output: 6
// actual output: 6
// console.log(tdPathsToWork(2,2));

/** top down (memoization) - concise sample code */
export const tdPathsToWorkV2 = (e, s) => {
  const cache = [[0]];
  for (let i = 1; i <= s; i += 1) {
    cache.push([1]);
  }
  for (let j = 1; j <= e; j += 1) {
    cache[0].push(1);
  }
  const r = (e, s) => {
    if (cache[e][s]) return cache[e][s];
    return (cache[e][s] = r(e - 1, s) + r(e, s - 1));
  };
  return r(e, s);
};

/** bottom up */
export const buPathsToWork = (e, s) => {
  const map = [];
  for (let i = 0; i <= s; i += 1) {
    let row = [];
    for (let j = 0; j <= e; j += 1) {
      if (i === 0 || j === 0) row.push(1);
      else row.push(map[i - 1][j] + row[j - 1]);
    }
    map.push(row);
  }
  return map[s][e];
};
