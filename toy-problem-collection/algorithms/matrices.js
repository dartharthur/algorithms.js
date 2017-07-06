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

/** 
 * rotate NxN matrix 90 degrees
 * @param {array} matrix
 * @param {number} dir - direction to rotate (-1 counter-clockwise, 1 clockwise)
 */
function rotateMatrix(matrix, dir = 1) {
  let rotatedMatrix = [];
  if (dir === -1) {
    for (let j = matrix.length - 1; j >= 0; j--) {
      let row = [];
      for (let i = 0; i < matrix.length; i++) {
        row.push(matrix[i][j]);
      }
      rotatedMatrix.push(row);
    }
    return rotatedMatrix;
  } else {
    for (let j = 0; j < matrix.length; j++) {
      let row = [];
      for (let i = matrix.length - 1; i >= 0; i--) {
        row.push(matrix[i][j]);
      }
      rotatedMatrix.push(row);
    }
    return rotatedMatrix;
  }
}

function spiralTraversal(matrix) {
  let result = [];
  let firstRow = 0, firstCol = 0;
  let lastCol = matrix[0].length - 1;
  let lastRow = matrix.length - 1;
  let i;

  while (firstRow <= lastRow && firstCol <= lastCol) {
    i = firstCol;
    while (i <= lastCol) {
      result.push(matrix[firstRow][i++]);
    }
    firstRow++;

    i = firstRow;
    while (i <= lastRow) {
      result.push(matrix[i++][lastCol]);
    }
    lastCol--;

    if (firstRow <= lastRow) {
      i = lastCol;
      while (i >= firstCol) {
        result.push(matrix[lastRow][i--]);
      }
      lastRow--;
    }

    if (firstCol <= lastCol) {
      i = lastRow;
      while (i >= firstRow) {
        result.push(matrix[i--][firstCol]);
      }
      firstCol++;
    }
  }
  return result;
}