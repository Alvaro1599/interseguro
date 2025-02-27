import { Request, Response } from 'express';
import { JWT } from './main';
import { JWTMiddleware } from './middleware';

describe('JWTMiddleware', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: jest.Mock;

  let verifyTokenMock: jest.Mock;
  let getInstanceSpy: jest.SpyInstance;

  beforeEach(() => {
    verifyTokenMock = jest.fn();
    getInstanceSpy = jest.spyOn(JWT, 'getInstance').mockReturnValue({
      verifyToken: verifyTokenMock,
    } as any);

    req = { headers: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    next = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('debería retornar 401 si no se provee token', () => {
    JWTMiddleware(req as Request, res as Response, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ error: 'No autorizado' });
    expect(next).not.toHaveBeenCalled();
  });

  test('debería llamar a next si el token es válido', () => {
    req.headers.authorization = 'token-valido';

    JWTMiddleware(req as Request, res as Response, next);

    expect(verifyTokenMock).toHaveBeenCalledWith('token-valido');
    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
  });

  test('debería retornar 401 si el token es inválido', () => {
    req.headers.authorization = 'token-invalido';
    verifyTokenMock.mockImplementation(() => {
      throw new Error('Token inválido');
    });

    JWTMiddleware(req as Request, res as Response, next);

    expect(verifyTokenMock).toHaveBeenCalledWith('token-invalido');
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ error: 'No autorizado' });
    expect(next).not.toHaveBeenCalled();
  });
});
