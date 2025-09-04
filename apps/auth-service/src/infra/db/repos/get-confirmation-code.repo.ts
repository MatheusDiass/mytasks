import {
  GetConfirmationCodeRepoInput,
  GetConfirmationCodeRepoOutput,
  IGetConfirmationCodeRepo,
} from '@/domain/interfaces';
import { prisma } from '../database-client';

export class GetConfirmationCodeRepo implements IGetConfirmationCodeRepo {
  async execute(
    input: GetConfirmationCodeRepoInput
  ): Promise<GetConfirmationCodeRepoOutput | null> {
    return prisma.confirmationCode.findFirst({
      where: {
        type: input.confirmationType,
        id: input.confirmationCodeId,
      },
      orderBy: [{ createdAt: 'desc' }, { id: 'desc' }],
      select: {
        id: true,
        userId: true,
        code: true,
        type: true,
        isUsed: true,
        expiresAt: true,
        createdAt: true,
      },
    });
  }
}
