import { Request, Response } from 'express';
import { JWT } from '@interseguro-test/jwt';

export class JWTController {
  public async generateToken(req: Request, res: Response): Promise<void> {
    try {
      const JwtService = JWT.getInstance();
      const token = JwtService.generateToken();
      res.status(201).json({ token });
    } catch (error) {
      res.status(400).json({ error: 'Datos inválidos' });
    }
  }
}
