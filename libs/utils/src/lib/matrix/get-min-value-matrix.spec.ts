import { Matrix } from '@interseguro-test/models';
import { getMinValueMatrixUtil } from './get-min-value-matrix.util';

describe('getMinValueMatrixUtil', () => {
  it('debería encontrar el valor mínimo en una matriz válida', () => {
    const matrix: Matrix = [
      [10, 20, 30],
      [40, 5, 60],
      [70, 80, 90],
    ];
    expect(getMinValueMatrixUtil(matrix)).toBe(5);
  });

  it('debería encontrar el valor mínimo en una matriz con números negativos', () => {
    const matrix: Matrix = [
      [-10, -20, -30],
      [-5, -15, -25],
    ];
    expect(getMinValueMatrixUtil(matrix)).toBe(-30);
  });

  it('debería lanzar un error si la matriz está vacía', () => {
    const emptyMatrix: Matrix = [];
    expect(() => getMinValueMatrixUtil(emptyMatrix)).toThrow(
      'La matriz está vacía'
    );
  });

  it('debería lanzar un error si la matriz contiene filas vacías', () => {
    const matrixWithEmptyRows: Matrix = [[], [], []];
    expect(() => getMinValueMatrixUtil(matrixWithEmptyRows)).toThrow(
      'La matriz está vacía'
    );
  });

  it('debería encontrar el valor mínimo en una matriz con valores decimales', () => {
    const matrix: Matrix = [
      [1.5, 2.5],
      [3.5, 0.5],
    ];
    expect(getMinValueMatrixUtil(matrix)).toBe(0.5);
  });

  it('debería manejar correctamente una matriz con valores mixtos (enteros y decimales)', () => {
    const matrix: Matrix = [
      [1, 2.5],
      [3, -4.5],
    ];
    expect(getMinValueMatrixUtil(matrix)).toBe(-4.5);
  });

  it('debería encontrar el valor mínimo en una matriz con valores repetidos', () => {
    const matrix: Matrix = [
      [5, 5, 5],
      [5, 5, 5],
    ];
    expect(getMinValueMatrixUtil(matrix)).toBe(5);
  });
});
