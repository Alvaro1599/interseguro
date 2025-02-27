import { Request, Response } from 'express';

export const errorHandler = (req: Request, res: Response): void => {
  res.status(500).json({ error: 'Algo salió mal en el servidor' });
};
