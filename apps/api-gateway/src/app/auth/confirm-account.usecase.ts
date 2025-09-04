import {
  ConfirmAccountData,
  ConfirmAccountResponse,
} from '@/domain/auth/auth.type';
import { IExecutable } from '../interfaces/executable';
import { IConfirmAccountRepo } from '@/domain/auth/auth.interface';
import { ICipher } from '@/domain/interfaces/cipher.interface';
import { Errors } from '../errors';

export class ConfirmAccountUseCase
  implements IExecutable<ConfirmAccountData, ConfirmAccountResponse>
{
  constructor(
    private readonly confirmAccountRepo: IConfirmAccountRepo,
    private readonly cipher: ICipher
  ) {}

  async execute(input: ConfirmAccountData): Promise<ConfirmAccountResponse> {
    if (!input.confirmationCodeIdEncrypted)
      throw Errors.confirmationCodeIdNotProvided();

    const confirmationCodeId = this.cipher.decrypt(
      input.confirmationCodeIdEncrypted
    );

    return await this.confirmAccountRepo.execute({
      ...input,
      confirmationCodeId,
    });
  }
}
