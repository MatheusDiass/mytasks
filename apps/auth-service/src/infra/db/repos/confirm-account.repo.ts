import {
  ConfirmAccountRepoInput,
  IConfirmAccountRepo,
} from '@/domain/interfaces';
import { prisma } from '../database-client';

export class ConfirmAccountRepo implements IConfirmAccountRepo {
  async execute(input: ConfirmAccountRepoInput): Promise<void> {
    await prisma.$transaction(async (tx) => {
      const { userId } = await tx.confirmationCode.update({
        where: { id: input.confirmationCodeId },
        data: {
          isUsed: true,
        },
        select: { userId: true },
      });

      await tx.user.update({
        where: { id: userId },
        data: {
          isActive: true,
        },
      });
    });
  }
}
