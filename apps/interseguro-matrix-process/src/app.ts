import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import matrixRouter from './routes/matrix.router';
import { errorHandler } from './middlewares/errorHandler';

export class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.configureMiddlewares();
    this.setupRoutes();
    this.handleErrors();
  }

  private configureMiddlewares(): void {
    this.app.use(cors());
    this.app.use(morgan('dev'));
    this.app.use(express.json());
  }

  private setupRoutes(): void {
    this.app.use('/api/matrix-process', matrixRouter);
  }

  private handleErrors(): void {
    this.app.use(errorHandler);
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  }
}
