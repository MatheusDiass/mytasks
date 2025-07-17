import { AuthUser } from '@/domain/entities';
import { ICreateAccountRepo } from '@/domain/interfaces';

export class CreateAccountRepo implements ICreateAccountRepo {
  async execute(user: AuthUser): Promise<string> {
    return '0197fc72-ba4d-7532-8c88-e9d3a6d853f9';
  }
}
