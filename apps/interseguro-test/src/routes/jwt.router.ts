import express, { Router } from 'express';
import { MatrixController } from '../controllers/matrix.controller';
import { JWTController } from '../controllers/jwt.controller';

const jwtRouter: Router = express.Router();
const jwtController = new JWTController();

jwtRouter.post('/generate-token', (req, res) =>
  jwtController.generateToken(req, res)
);

export default jwtRouter;
