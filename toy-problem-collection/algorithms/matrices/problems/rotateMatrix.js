/** 
 * rotate NxN matrix 90 degrees
 * @param {array} matrix
 * @param {number} dir - direction to rotate (-1 counter-clockwise, 1 clockwise)
 */
const rotateMatrix = (matrix, dir = 1) => {
  const rotatedMatrix = [];
  if (dir === -1) {
    for (let j = matrix.length - 1; j >= 0; j -= 1) {
      const row = [];
      for (let i = 0; i < matrix.length; i += 1) {
        row.push(matrix[i][j]);
      }
      rotatedMatrix.push(row);
    }
    return rotatedMatrix;
  }
  for (let j = 0; j < matrix.length; j += 1) {
    const row = [];
    for (let i = matrix.length - 1; i >= 0; i -= 1) {
      row.push(matrix[i][j]);
    }
    rotatedMatrix.push(row);
  }
  return rotatedMatrix;
};

export default rotateMatrix;
