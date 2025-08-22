import jwt from 'jsonwebtoken';
import { IToken } from '@/domain/interfaces';

export class TokenAdapter implements IToken {
  private readonly TOKEN_SECRET: string = process.env.SECRET_TOKEN!;

  generate(data: object): string {
    return jwt.sign(data, this.TOKEN_SECRET, { expiresIn: '1h' });
  }

  verify(token: string): boolean {
    try {
      jwt.verify(token, this.TOKEN_SECRET);
      return true;
    } catch (err) {
      return false;
    }
  }
}
