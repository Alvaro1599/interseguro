import express, { Router } from 'express';
import { MatrixController } from '../controllers/matrix.controller';
import { JWTMiddleware } from '@interseguro-test/jwt';

const matrixRouter: Router = express.Router();
const matrixController = new MatrixController();

matrixRouter.post('/transform-and-process', JWTMiddleware, (req, res) =>
  matrixController.transformAndProcess(req, res)
);

export default matrixRouter;
