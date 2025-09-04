export enum StatusCode {
  Success = 200,
  Created = 201,
  BadRequest = 400,
  NotFound = 404,
  InternalServerError = 500,
}

export const GenericCode = {
  INTERNAL: 'GENERIC.INTERNAL',
} as const;

export const UserCode = {
  INVALID_NAME: 'AUTH.USER.INVALID_NAME',
  INVALID_DATE_BIRTH: 'AUTH.USER.INVALID_DATE_BIRTH',
  INVALID_EMAIL: 'AUTH.USER.INVALID_EMAIL',
  INVALID_PASSWORD: 'AUTH.USER.INVALID_PASSWORD',
} as const;
