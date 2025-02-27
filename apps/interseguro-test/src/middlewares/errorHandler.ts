import { Request, Response } from 'express';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
): void => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal en el servidor' });
};
