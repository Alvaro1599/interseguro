import { Matrix, MatrixQR, Vector } from '@interseguro-test/models';

export function dot(v1: Vector, v2: Vector): number {
  if (v1.length !== v2.length) {
    throw new Error('Los vectores deben tener la misma longitud');
  }
  return v1.reduce((acc, cur, i) => acc + cur * v2[i], 0);
}

export function norm(v: Vector): number {
  return Math.sqrt(dot(v, v));
}

export function scaleVector(v: Vector, scalar: number): Vector {
  return v.map((val) => val * scalar);
}

export function subtractVectors(v1: Vector, v2: Vector): Vector {
  if (v1.length !== v2.length) {
    throw new Error('Los vectores deben tener la misma longitud');
  }
  return v1.map((val, i) => val - v2[i]);
}

export function getColumn(matrix: Matrix, col: number): Vector {
  return matrix.map((row) => row[col]);
}

export function QRFactorization(matrix: Matrix): MatrixQR {
  const m = matrix.length;
  if (m === 0) return { Q: [], R: [] };
  const n = matrix[0].length;

  const Q: Matrix = Array.from({ length: m }, () => Array(n).fill(0));
  const R: Matrix = Array.from({ length: n }, () => Array(n).fill(0));

  for (let j = 0; j < n; j++) {
    let v = getColumn(matrix, j);

    for (let i = 0; i < j; i++) {
      const q = getColumn(Q, i);
      const projCoefficient = dot(q, v);
      R[i][j] = projCoefficient;
      const proj = scaleVector(q, projCoefficient);
      v = subtractVectors(v, proj);
    }

    const rjj = norm(v);
    R[j][j] = rjj;

    if (rjj > 1e-10) {
      const qColumn = scaleVector(v, 1 / rjj);
      for (let i = 0; i < m; i++) {
        Q[i][j] = qColumn[i];
      }
    }
  }

  return { Q, R };
}
