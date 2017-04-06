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

let test = [[1,2,3],[4,5,6],[7,8,9]];

function spiralTraversal(matrix) {
  let result = [];
  let topLevel = 0;
  let bottomLevel = matrix.length - 1;

  // while(result.length < matrix.length * matrix[0].length) {
    for (let i = topLevel; i < matrix[topLevel].length; i++) {
      result.push(matrix[topLevel][i]);
    }
    for (let i = topLevel + 1; i < bottomLevel; i++) {
      result.push(matrix[i][bottomLevel])
    }
    for (let i = bottomLevel; i >= 0; i--) {
      result.push(matrix[bottomLevel][i]);
    }
    for (let i = bottomLevel - 1; i > topLevel; i--) {
      result.push(matrix[i][topLevel]);
    }
  // }

  return result;
}

console.log(spiralTraversal(test));