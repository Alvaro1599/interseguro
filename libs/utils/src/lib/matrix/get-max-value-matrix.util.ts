import { Matrix } from '@interseguro-test/models';

export function getMaxValue(matrix: Matrix): number {
  let max: number | null = null;

  for (const row of matrix) {
    for (const num of row) {
      if (max === null || num > max) {
        max = num;
      }
    }
  }

  if (max === null) {
    throw new Error('La matriz está vacía');
  }

  return max;
}
