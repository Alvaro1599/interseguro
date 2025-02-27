import express, { Router } from 'express';
import { MatrixController } from '../controllers/matrix.controller';

const matrixRouter: Router = express.Router();
const matrixController = new MatrixController();

matrixRouter.post('/transform-and-process', (req, res) => matrixController.transformAndProcess(req, res));

export default matrixRouter;
