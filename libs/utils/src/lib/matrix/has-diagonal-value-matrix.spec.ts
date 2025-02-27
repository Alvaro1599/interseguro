import { Matrix } from '@interseguro-test/models';
import { hasDiagonalValueMatrix } from './has-diagonal-value-matrix';

describe('hasDiagonalValueMatrix', () => {
  it('debería devolver true para una matriz diagonal válida', () => {
    const matrix: Matrix = [
      [1, 0, 0],
      [0, 2, 0],
      [0, 0, 3],
    ];
    expect(hasDiagonalValueMatrix(matrix)).toBe(true);
  });

  it('debería devolver false para una matriz que no es diagonal', () => {
    const matrix: Matrix = [
      [1, 0, 0],
      [0, 2, 3],
      [0, 0, 4],
    ];
    expect(hasDiagonalValueMatrix(matrix)).toBe(false);
  });

  it('debería devolver false para una matriz vacía', () => {
    const emptyMatrix: Matrix = [];
    expect(hasDiagonalValueMatrix(emptyMatrix)).toBe(false);
  });

  it('debería devolver false para una matriz rectangular (no cuadrada)', () => {
    const nonSquareMatrix: Matrix = [
      [1, 0],
      [0, 2],
      [0, 0],
    ];
    expect(hasDiagonalValueMatrix(nonSquareMatrix)).toBe(false);
  });

  it('debería devolver true para una matriz diagonal con ceros en la diagonal principal', () => {
    const matrix: Matrix = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(hasDiagonalValueMatrix(matrix)).toBe(true);
  });

  it('debería devolver false si hay valores fuera de la diagonal principal', () => {
    const matrix: Matrix = [
      [1, 0, 0],
      [0, 2, 0],
      [1, 0, 3],
    ];
    expect(hasDiagonalValueMatrix(matrix)).toBe(false);
  });
});
