import { Matrix } from '@interseguro-test/models';
import { getAverageValueMatrixUtil } from './get-average-value-matrix.util';

describe('getAverageValueMatrixUtil', () => {
  it('debería calcular el promedio correctamente para una matriz válida', () => {
    const matrix: Matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expectedAverage = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9) / 9;
    expect(getAverageValueMatrixUtil(matrix)).toBe(expectedAverage);
  });

  it('debería manejar correctamente una matriz con números negativos', () => {
    const matrix: Matrix = [
      [-1, -2, -3],
      [-4, -5, -6],
    ];
    const expectedAverage = (-1 - 2 - 3 - 4 - 5 - 6) / 6;
    expect(getAverageValueMatrixUtil(matrix)).toBe(expectedAverage);
  });

  it('debería lanzar un error si la matriz está vacía', () => {
    const emptyMatrix: Matrix = [];
    expect(() => getAverageValueMatrixUtil(emptyMatrix)).toThrow(
      'La matriz está vacía o no contiene elementos'
    );
  });

  it('debería lanzar un error si la matriz contiene filas vacías', () => {
    const matrixWithEmptyRows: Matrix = [[], [], []];
    expect(() => getAverageValueMatrixUtil(matrixWithEmptyRows)).toThrow(
      'La matriz está vacía o no contiene elementos'
    );
  });

  it('debería calcular el promedio correctamente para una matriz con valores decimales', () => {
    const matrix: Matrix = [
      [1.5, 2.5],
      [3.5, 4.5],
    ];
    const expectedAverage = (1.5 + 2.5 + 3.5 + 4.5) / 4;
    expect(getAverageValueMatrixUtil(matrix)).toBe(expectedAverage);
  });

  it('debería manejar correctamente una matriz con valores mixtos (enteros y decimales)', () => {
    const matrix: Matrix = [
      [1, 2.5],
      [3, 4.5],
    ];
    const expectedAverage = (1 + 2.5 + 3 + 4.5) / 4;
    expect(getAverageValueMatrixUtil(matrix)).toBe(expectedAverage);
  });
});
