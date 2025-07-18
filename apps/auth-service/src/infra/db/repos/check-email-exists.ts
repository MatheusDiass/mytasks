import { ICheckEmailExistsRepo } from '@/domain/interfaces';
import { prisma } from '../database-client';

export class CheckEmailExistsRepo implements ICheckEmailExistsRepo {
  async execute(email: string): Promise<boolean> {
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        password: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return !!user;
  }
}
