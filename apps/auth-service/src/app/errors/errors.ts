import { AppError } from '@/domain/errors';
import { AccountCode, ConfirmationCode } from './types';
import { StatusCode } from '@/domain/errors/types';

export const Errors = {
  accountAlreadyExists: () =>
    new AppError(
      AccountCode.ALREADY_EXISTS,
      'Account already exists',
      StatusCode.BadRequest
    ),
  confirmationCodeNotFound: () =>
    new AppError(
      ConfirmationCode.NOT_FOUND,
      'Confirmation code not found',
      StatusCode.NotFound
    ),
  confirmationCodeExpires: () =>
    new AppError(
      ConfirmationCode.EXPIRED,
      'Confirmation code expired',
      StatusCode.BadRequest
    ),
  confirmationCodeInvalid: () =>
    new AppError(
      ConfirmationCode.EXPIRED,
      'Confirmation code invalid',
      StatusCode.BadRequest
    ),
  userNotFound: () =>
    new AppError(
      ConfirmationCode.NOT_FOUND,
      'User not found',
      StatusCode.NotFound
    ),
};
