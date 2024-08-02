// Write a function that outputs the transpose of a matrix - a new matrix where the columns and rows of the original are swapped.

// For example, the transpose of:

// | 1 2 3 |
// | 4 5 6 |
// is

// | 1 4 |
// | 2 5 |
// | 3 6 |
// The input to your function will be an array of matrix rows. You can assume that each row has the same length, and that the height and width of the matrix are both positive.

const matr2 = [
  [1, 2, 3],
  [4, 5, 6],
];

function transpose(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    throw new Error("Matrix dimensions must be positive.");
  }

  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const res = Array.from({ length: numCols }, () => []);

  for (const row of matrix) {
    for (let i = 0; i < row.length; i++) {
      res[i].push(row[i]);
    }
  }

  return res;
}



const matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

const transposedMatrix = transpose(matrix);
console.log(transposedMatrix);

//второй способ с помощью map
function transposeUsingMap(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    throw new Error("Размеры матрицы должны быть положительными.");
  }

  return matrix[0].map((_, i) => {
    return matrix.map((row) => row[i]);
  });
}
