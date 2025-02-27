import express, { Router } from 'express';
import { MatrixProcessController } from '../controllers/matrixProcessController';

const matrixRouter: Router = express.Router();
const matrixProcessController = new MatrixProcessController();

matrixRouter.post('/', (req, res) => matrixProcessController.process(req, res));

export default matrixRouter;
