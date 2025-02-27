import { Matrix, MatrixQR, Vector } from '@interseguro-test/models';
export declare function dot(v1: Vector, v2: Vector): number;
export declare function norm(v: Vector): number;
export declare function scaleVector(v: Vector, scalar: number): Vector;
export declare function subtractVectors(v1: Vector, v2: Vector): Vector;
export declare function getColumn(matrix: Matrix, col: number): Vector;
export declare function QRFactorization(matrix: Matrix): MatrixQR;
