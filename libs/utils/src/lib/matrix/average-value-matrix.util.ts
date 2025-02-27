import { Matrix } from '@interseguro-test/models';

export function averageValueMatrixUtil(matrix: Matrix): number {
  let sum = 0;
  let count = 0;

  for (const row of matrix) {
    for (const num of row) {
      sum += num;
      count++;
    }
  }

  if (count === 0) {
    throw new Error('La matriz está vacía o no contiene elementos');
  }

  return sum / count;
}
