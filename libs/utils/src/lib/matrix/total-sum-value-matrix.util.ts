import { Matrix } from '@interseguro-test/models';

export function totalSumValueMatrixUtil(matrix: Matrix): number {
  let sum = 0;

  for (const row of matrix) {
    for (const num of row) {
      sum += num;
    }
  }

  return sum;
}
