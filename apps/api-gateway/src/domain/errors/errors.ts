import { AppError } from './app-error';
import { UserCode, StatusCode } from './types';

export const Errors = {
  invalidName: () =>
    new AppError(
      UserCode.INVALID_NAME,
      'The name is invalid',
      StatusCode.BadRequest
    ),
  invalidDateBirth: () =>
    new AppError(
      UserCode.INVALID_DATE_BIRTH,
      'The date birth is invalid',
      StatusCode.BadRequest
    ),

  invalidEmail: () =>
    new AppError(
      UserCode.INVALID_EMAIL,
      'The email is invalid',
      StatusCode.BadRequest
    ),
  invalidPassword: () =>
    new AppError(
      UserCode.INVALID_PASSWORD,
      'The password must be at least 8 characters long and include uppercase, lowercase, and special characters',
      StatusCode.BadRequest
    ),
};
