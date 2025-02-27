import { Request, Response } from 'express';
import { MatrixService } from '../services/matrix.services';

export class MatrixController {
  private matrixService: MatrixService;

  constructor() {
    this.matrixService = new MatrixService();
  }

  public async transformAndProcess(req: Request, res: Response): Promise<void> {
    try {
      const { matrix } = req.body;
      const matrixTransformed = this.matrixService.transform(matrix);
      res.status(201).json(matrixTransformed);
    } catch (error) {
      res.status(400).json({ error: 'Datos inválidos' });
    }
  }
}
