import { HttpAdapter, QRFactorization } from '@interseguro-test/utils';
import { Matrix, MatrixQR } from '@interseguro-test/models';
export class MatrixService {
  public transform(matrix: Partial<Matrix>): MatrixQR {
    return QRFactorization(matrix);
  }

  public async processMatrixQR(matrixQR: MatrixQR) {
    try {
      const httpAdapter = new HttpAdapter('http://localhost:3001');
      return await httpAdapter.post('api/matrix-process', {
        matrixQR,
      });
    } catch (e) {
      console.log('Error en la petición', e);
    }
  }
}
