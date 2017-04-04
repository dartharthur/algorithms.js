function multiplicationMatrix(factors) {
  let matrix = [];
  for (let i = 0; i < factors.length; i++) {
    let row = [];
    for (let j = 0; j < factors.length; j++) {
      row.push(factors[i] * factors[j]);
    }
    matrix.push(row);
  }
  return matrix;
}

function multiplicationMatrixMap(factors) {
  return factors.map(factor => {
    return factors.map(innerFactor => {
      return factor * innerFactor;
    });
  });
}