import { sign, verify } from 'jsonwebtoken';

class JwtService {
  private readonly secretKey: string;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  public generateToken(payload = { user: 'test' }, expiresHoursIn = 1): string {
    try {
      return sign(payload, this.secretKey, {
        expiresIn: `${expiresHoursIn}h`,
      });
    } catch (error) {
      console.error('Error al generar el token:', error);
      throw new Error('No se pudo generar el token');
    }
  }

  public verifyToken<T>(token: string): T {
    try {
      return verify(token, this.secretKey) as T;
    } catch (error) {
      console.error('Error al verificar el token:', error);
      throw new Error('Token inválido o expirado');
    }
  }
}

export default JwtService;
