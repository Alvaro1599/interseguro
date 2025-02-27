import { MatrixQR } from '@interseguro-test/models';
import { MatrixMetric } from '../models/matrix-metric';

export class MatrixProcessService {
  public process(matrixQR: MatrixQR) {
    const matrixMetric = new MatrixMetric(matrixQR);
    return matrixMetric.execute();
  }
}
