import { AccountData } from '@/domain/auth/auth.type';
import { IExecutable } from '../interfaces/executable';
import { ICreateAccountRepo } from '@/domain/auth/auth.interface';
import { ICipher } from '@/domain/interfaces/cipher.interface';

export class CreateAccountUseCase implements IExecutable<AccountData, string> {
  constructor(
    private readonly createAccountRepo: ICreateAccountRepo,
    private readonly cipher: ICipher
  ) {}

  async execute(input: AccountData): Promise<string> {
    const confirmationCodeId = await this.createAccountRepo.execute(input);
    const confirmationCodeIdEncrypted = this.cipher.encrypt(confirmationCodeId);
    return confirmationCodeIdEncrypted;
  }
}
