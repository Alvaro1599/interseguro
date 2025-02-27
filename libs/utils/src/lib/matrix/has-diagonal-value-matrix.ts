import { Matrix } from '@interseguro-test/models';

export function hasDiagonalValueMatrix(matrix: Matrix): boolean {
  const size = matrix.length;

  if (size === 0 || matrix.some((row) => row.length !== size)) {
    return false;
  }

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i !== j && matrix[i][j] !== 0) {
        return false;
      }
    }
  }

  return true;
}
