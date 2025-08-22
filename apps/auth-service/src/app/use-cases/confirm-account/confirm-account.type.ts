import { UserDto } from '@/domain/dtos';

export type ConfirmAccountInput = {
  email: string;
  code: string;
};

export type ConfirmAccountResponse = {
  token: string;
  user: UserDto;
};
