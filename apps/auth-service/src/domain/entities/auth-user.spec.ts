import { describe, expect, it } from 'vitest';
import { AuthUser } from './auth-user';
import { InvalidNameError } from '../errors';

describe('Auth User Entity', () => {
  it('should throw an InvalidNameError if the name is invalid', () => {
    expect(() => {
      new AuthUser({
        name: '',
        dateBirth: new Date(),
        email: 'matheus@email.com',
        password: 'minha@senha',
      });
    }).toThrow(InvalidNameError);
  });
});
