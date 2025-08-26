import {
  ConfirmAccountData,
  ConfirmAccountResponse,
} from '@/domain/auth/auth.type';
import { IExecutable } from '../interfaces/executable';
import { IConfirmAccountRepo } from '@/domain/auth/auth.interface';

export class ConfirmAccountUseCase
  implements IExecutable<ConfirmAccountData, ConfirmAccountResponse>
{
  constructor(private readonly confirmAccountRepo: IConfirmAccountRepo) {}

  async execute(input: ConfirmAccountData): Promise<ConfirmAccountResponse> {
    return await this.confirmAccountRepo.execute(input);
  }
}
