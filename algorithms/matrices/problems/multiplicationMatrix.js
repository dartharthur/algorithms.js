export const multiplicationMatrix = factors => {
  const matrix = [];
  for (let i = 0; i < factors.length; i += 1) {
    const row = [];
    for (let j = 0; j < factors.length; j += 1) {
      row.push(factors[i] * factors[j]);
    }
    matrix.push(row);
  }
  return matrix;
};

export const multiplicationMatrixMap = factors =>
  factors.map(factor => factors.map(innerFactor => factor * innerFactor));
