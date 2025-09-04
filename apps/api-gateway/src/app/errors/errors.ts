import { AppError } from '@/domain/errors';
import { Auth } from './types';
import { StatusCode } from '@/domain/errors/types';

export const Errors = {
  confirmationCodeIdNotProvided: () =>
    new AppError(
      Auth.NOT_PROVIDED,
      'Confirmation code ID not provided',
      StatusCode.BadRequest
    ),
};
