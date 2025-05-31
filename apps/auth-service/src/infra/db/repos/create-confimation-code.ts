import {
  CreateConfirmationCodeInput,
  ICreateConfirmationCodeRepository,
} from '@/domain/interfaces';
import { prisma } from '../database-client';

export class CreateConfirmationCodeRepository
  implements ICreateConfirmationCodeRepository
{
  async execute(input: CreateConfirmationCodeInput): Promise<void> {
    await prisma.confirmationCode.create({
      data: {
        userId: input.accountId,
        code: input.code,
        type: input.type,
        expiresAt: input.expiresAt,
      },
    });
  }
}
