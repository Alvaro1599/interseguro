import { Matrix } from '@interseguro-test/models';
import { totalSumValueMatrixUtil } from './total-sum-value-matrix.util';

describe('totalSumValueMatrixUtil', () => {
  it('debería calcular la suma total correctamente para una matriz válida', () => {
    const matrix: Matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(totalSumValueMatrixUtil(matrix)).toBe(45);
  });

  it('debería devolver 0 para una matriz vacía', () => {
    const emptyMatrix: Matrix = [];
    expect(totalSumValueMatrixUtil(emptyMatrix)).toBe(0);
  });

  it('debería calcular la suma total correctamente para una matriz con números negativos', () => {
    const matrix: Matrix = [
      [-1, -2, -3],
      [-4, -5, -6],
    ];
    expect(totalSumValueMatrixUtil(matrix)).toBe(-21);
  });

  it('debería calcular la suma total correctamente para una matriz con valores decimales', () => {
    const matrix: Matrix = [
      [1.5, 2.5],
      [3.5, 4.5],
    ];
    expect(totalSumValueMatrixUtil(matrix)).toBe(12);
  });

  it('debería manejar correctamente una matriz con valores mixtos (enteros y decimales)', () => {
    const matrix: Matrix = [
      [1, 2.5],
      [3, -4.5],
    ];
    expect(totalSumValueMatrixUtil(matrix)).toBe(2);
  });

  it('debería calcular la suma total correctamente para una matriz con filas vacías', () => {
    const matrixWithEmptyRows: Matrix = [[], [], []];
    expect(totalSumValueMatrixUtil(matrixWithEmptyRows)).toBe(0);
  });

  it('debería calcular la suma total correctamente para una matriz con ceros', () => {
    const matrix: Matrix = [
      [0, 0],
      [0, 0],
    ];
    expect(totalSumValueMatrixUtil(matrix)).toBe(0);
  });
});
