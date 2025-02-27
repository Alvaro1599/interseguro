import JwtService from './jwt';
import * as process from 'node:process';

export class JWT {
  private static instance: JwtService;

  public static getInstance(): JwtService {
    if (!JWT.instance) {
      JWT.instance = new JwtService(process.env.NX_JWT_SECRET);
    }
    return JWT.instance;
  }
}
