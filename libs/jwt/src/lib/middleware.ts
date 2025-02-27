import { Request, Response } from 'express';
import { JWT } from './main';

export const JWTMiddleware = (req: Request, res: Response, next): void => {
  const jwtService = JWT.getInstance();

  const token = req?.headers?.authorization;

  if (!token) {
    res.status(401).json({ error: 'No autorizado' });
    return;
  }
  try {
    jwtService.verifyToken(token);
    next();
  } catch (e) {
    res.status(401).json({ error: 'No autorizado' });
    return;
  }
};
