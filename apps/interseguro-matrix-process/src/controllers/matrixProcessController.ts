import { Request, Response } from 'express';
import { MatrixProcessService } from '../services/matrix.services';

export class MatrixProcessController {
  private matrixProcessService: MatrixProcessService;

  constructor() {
    this.matrixProcessService = new MatrixProcessService();
  }

  public async process(req: Request, res: Response): Promise<void> {
    try {
      const { matrixQR } = req.body;
      const matrixTransformed = this.matrixProcessService.process(matrixQR);
      res.status(201).json(matrixTransformed);
    } catch (error) {
      res.status(400).json({ error: 'Datos inválidos' });
    }
  }
}
