import { QRFactorization } from '@interseguro-test/utils';
import { Matrix, MatrixQR } from '@interseguro-test/models';
import { MatrixMetric } from '../models/matrix-metric';

export class MatrixProcessService {
  public process(matrixQR: MatrixQR): string {
    const matrixMetric = new MatrixMetric(matrixQR);

    return matrixMetric.execute();
  }
}
