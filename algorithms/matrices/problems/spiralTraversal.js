const spiralTraversal = matrix => {
  const result = [];
  let firstRow = 0;
  let firstCol = 0;
  let lastCol = matrix[0].length - 1;
  let lastRow = matrix.length - 1;
  let i;

  while (firstRow <= lastRow && firstCol <= lastCol) {
    i = firstCol;
    while (i <= lastCol) {
      result.push(matrix[firstRow][(i += 1)]);
    }
    firstRow += 1;

    i = firstRow;
    while (i <= lastRow) {
      result.push(matrix[(i += 1)][lastCol]);
    }
    lastCol -= 1;

    if (firstRow <= lastRow) {
      i = lastCol;
      while (i >= firstCol) {
        result.push(matrix[lastRow][(i -= 1)]);
      }
      lastRow -= 1;
    }

    if (firstCol <= lastCol) {
      i = lastRow;
      while (i >= firstRow) {
        result.push(matrix[(i -= 1)][firstCol]);
      }
      firstCol += 1;
    }
  }
  return result;
};

export default spiralTraversal;
