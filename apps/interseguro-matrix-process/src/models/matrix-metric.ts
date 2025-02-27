import {
  getAverageValueMatrixUtil,
  getMaxValue,
  getMinValueMatrixUtil,
  hasDiagonalValueMatrix,
  totalSumValueMatrixUtil,
} from '@interseguro-test/utils';
import { MatrixQR } from '@interseguro-test/models';

export class MatrixMetric {
  private functionsToApplyWithKeys = [
    { 'Suma Total': totalSumValueMatrixUtil },
    { 'Tiene Diagonal?': hasDiagonalValueMatrix },
    { 'Valor minimo': getMinValueMatrixUtil },
    { 'Valor maximo': getMaxValue },
    { 'Valor promedio': getAverageValueMatrixUtil },
  ];

  constructor(public matrix: MatrixQR) {}

  execute() {
    const result = {};

    for (const element of this.functionsToApplyWithKeys) {
      const [nameKey] = Object.keys(element);
      const [func] = Object.values(element);
      result[nameKey] = {
        R: func(this.matrix.R),
        Q: func(this.matrix.Q),
      };
    }
    return result;
  }
}
