import { UserDto } from '@/domain/dtos';

export type CreateUserInput = {
  id: string;
  name: string;
  dateBirth: string;
  email: string;
};

export interface IUserService {
  createUser(input: CreateUserInput): Promise<void>;
  getUser(id: string): Promise<UserDto | undefined>;
}
