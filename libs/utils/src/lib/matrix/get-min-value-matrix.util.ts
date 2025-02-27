import { Matrix } from '@interseguro-test/models';

export function getMinValueMatrixUtil(matrix: Matrix): number {
  let min: number | null = null;

  for (const row of matrix) {
    for (const num of row) {
      if (min === null || num < min) {
        min = num;
      }
    }
  }

  if (min === null) {
    throw new Error('La matriz está vacía');
  }

  return min;
}
