import { Matrix } from '@interseguro-test/models';
import { getMaxValue } from './get-max-value-matrix.util';

describe('getMaxValue', () => {
  it('debería encontrar el valor máximo en una matriz válida', () => {
    const matrix: Matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(getMaxValue(matrix)).toBe(9);
  });

  it('debería encontrar el valor máximo en una matriz con números negativos', () => {
    const matrix: Matrix = [
      [-10, -20, -30],
      [-5, -15, -25],
    ];
    expect(getMaxValue(matrix)).toBe(-5);
  });

  it('debería lanzar un error si la matriz está vacía', () => {
    const emptyMatrix: Matrix = [];
    expect(() => getMaxValue(emptyMatrix)).toThrow('La matriz está vacía');
  });

  it('debería lanzar un error si la matriz contiene filas vacías', () => {
    const matrixWithEmptyRows: Matrix = [[], [], []];
    expect(() => getMaxValue(matrixWithEmptyRows)).toThrow(
      'La matriz está vacía'
    );
  });

  it('debería encontrar el valor máximo en una matriz con valores decimales', () => {
    const matrix: Matrix = [
      [1.5, 2.5],
      [3.5, 4.5],
    ];
    expect(getMaxValue(matrix)).toBe(4.5);
  });

  it('debería manejar correctamente una matriz con valores mixtos (enteros y decimales)', () => {
    const matrix: Matrix = [
      [1, 2.5],
      [3, 4.5],
    ];
    expect(getMaxValue(matrix)).toBe(4.5);
  });

  it('debería encontrar el valor máximo en una matriz con valores repetidos', () => {
    const matrix: Matrix = [
      [5, 5, 5],
      [5, 5, 5],
    ];
    expect(getMaxValue(matrix)).toBe(5);
  });
});
