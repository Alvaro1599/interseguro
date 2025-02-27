import { QRFactorization } from './rotation-matrix.util';

describe('QRFactorization - Matriz Identidad', () => {
  test('Para la matriz identidad, Q y R deben ser la identidad', () => {
    const A = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ];

    const expected = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ];

    const { Q, R } = QRFactorization(A);

    expect(Q).toEqual(expected);
    expect(R).toEqual(expected);
  });
  test('Para la matriz diagonal', () => {
    const A = [
      [1, 0, 0],
      [0, 2, 0],
      [0, 0, 3],
    ];

    // Q = A y R = A
    const expectedQ = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ];

    const expectedR = [
      [1, 0, 0],
      [0, 2, 0],
      [0, 0, 3],
    ];

    const { Q, R } = QRFactorization(A);
    expect(Q).toEqual(expectedQ);
    expect(R).toEqual(expectedR);
  });

  test('Para la matriz permutación 3X3', () => {
    const A = [
      [0, 0, 1],
      [1, 0, 0],
      [0, 1, 0],
    ];

    // Q = A y R = A
    const expectedQ = [
      [0, 0, 1],
      [1, 0, 0],
      [0, 1, 0],
    ];

    const expectedR = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ];

    const { Q, R } = QRFactorization(A);
    expect(Q).toEqual(expectedQ);
    expect(R).toEqual(expectedR);
  });
});
