import { describe, expect, it } from 'vitest';
import { AuthUser } from './auth-user';
import {
  InvalidDateBirthError,
  InvalidEmailError,
  InvalidNameError,
  InvalidPasswordError,
} from '../errors';

describe('Auth User Entity', () => {
  it('should throw an InvalidNameError if the name is invalid', () => {
    expect(() => {
      new AuthUser({
        name: '',
        dateBirth: '1999-11-27',
        email: 'john@email.com',
        password: 'my@password',
      });
    }).toThrow(InvalidNameError);
  });

  it('should throw an InvalidDateBirthError if the date birth is invalid', () => {
    expect(() => {
      new AuthUser({
        name: 'John Doe',
        dateBirth: 'invalid-date',
        email: 'john@email.com',
        password: 'my@password',
      });
    }).toThrow(InvalidDateBirthError);
  });

  it('should throw an InvalidEmailError if the email is invalid', () => {
    const invalidEmails: string[] = [
      '', // empty
      'plainaddress', // missing @
      '@no-local-part.com', // missing local part
      'no-at-sign.com', // missing @
      'no-tld@domain', // missing TLD
      'no-domain@.com', // missing domain
      'missing-username@.com', // missing local part
      'space in@email.com', // contains space
      'email@domain..com', // double dots
      'email@-domain.com', // domain starts with hyphen
      'email@domain-.com', // domain ends with hyphen
      'email@domain.c', // TLD with one character
      'email@.com', // empty domain
    ];

    invalidEmails.forEach((email) => {
      expect(() => {
        new AuthUser({
          name: 'John Doe',
          dateBirth: '1999-11-27',
          email,
          password: 'my@password',
        });
      }).toThrow(InvalidEmailError);
    });
  });

  it('should throw an InvalidPasswordError if the password is invalid', () => {
    const invalidPasswords: string[] = [
      '', // empty
      'abc123!', // no uppercase letter
      'ABC123!', // no lowercase letter
      'Abcdefgh', // no special character
      'Abc!@#$%', // no digit
      'ab!@#$%^', // no uppercase letter
      'AB!@#$%^', // no lowercase letter
      'A!b1', // too short
      'abcdefgh', // no uppercase or special character
      'ABCDEFGH', // no lowercase or special character
      '12345678', // no letters or special characters
    ];

    invalidPasswords.forEach((password) => {
      expect(() => {
        new AuthUser({
          name: 'John Doe',
          dateBirth: '1999-11-27',
          email: 'john@email.com',
          password,
        });
      }).toThrow(InvalidPasswordError);
    });
  });
});
