import { AccountData } from '@/domain/auth/auth.type';
import { IExecutable } from '../interfaces/executable';
import { ICreateAccountRepo } from '@/domain/auth/auth.interface';

export class CreateAccountUseCase implements IExecutable<AccountData, void> {
  constructor(private readonly createAccountRepo: ICreateAccountRepo) {}

  async execute(input: AccountData): Promise<void> {
    await this.createAccountRepo.execute(input);
  }
}
