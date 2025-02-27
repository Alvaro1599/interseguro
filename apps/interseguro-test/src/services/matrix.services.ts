import { HttpAdapter, QRFactorization } from '@interseguro-test/utils';
import { Matrix, MatrixQR } from '@interseguro-test/models';
import * as process from 'node:process';
export class MatrixService {
  public transform(matrix: Partial<Matrix>): MatrixQR {
    return QRFactorization(matrix);
  }

  public async processMatrixQR(matrixQR: MatrixQR) {
    try {
      const httpAdapter = new HttpAdapter(
        `http://localhost:${process.env.NX_MATRIX_PROCESS_PORT}`
      );
      return await httpAdapter.post('api/matrix-process', {
        matrixQR,
      });
    } catch (e) {
      console.log('Error en la petición', e);
    }
  }
}
