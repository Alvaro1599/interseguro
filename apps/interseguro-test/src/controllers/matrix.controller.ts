import { Request, Response } from 'express';
import { MatrixService } from '../services/matrix.services';
import { HttpAdapter } from '@interseguro-test/utils';

export class MatrixController {
  private matrixService: MatrixService;

  constructor() {
    this.matrixService = new MatrixService();
  }

  public async transformAndProcess(req: Request, res: Response): Promise<void> {
    try {
      const { matrix } = req.body;
      console.log('matrix', matrix);
      const matrixTransformed = this.matrixService.transform(matrix);
      console.log('matrix-QR', matrixTransformed);

      const response = await this.matrixService.processMatrixQR(
        matrixTransformed
      );
      console.log('matrix-metrics', response);

      res.status(201).json(response);
    } catch (error) {
      res.status(400).json({ error: 'Datos inválidos' });
    }
  }
}
