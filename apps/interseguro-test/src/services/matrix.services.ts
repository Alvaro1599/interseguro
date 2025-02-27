import { QRFactorization } from '@interseguro-test/utils';
import { Matrix } from '@interseguro-test/models';

export class MatrixService {
  public transform(matrix: Partial<Matrix>): Matrix {
    console.log(matrix, 'matrix');
    const result = QRFactorization(matrix);
    console.log(result, 'result');
    return matrix;
  }
}
