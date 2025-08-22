import {
  ConfirmAccountRepoInput,
  IConfirmAccountRepo,
} from '@/domain/interfaces';
import { prisma } from '../database-client';

export class ConfirmAccountRepo implements IConfirmAccountRepo {
  async execute(input: ConfirmAccountRepoInput): Promise<void> {
    await prisma.$transaction(async (tx) => {
      await tx.user.update({
        where: { email: input.email },
        data: {
          isActive: true,
        },
      });

      await tx.confirmationCode.update({
        where: { id: input.confirmationCodeId },
        data: {
          isUsed: true,
        },
      });
    });
  }
}
