import { ICreateAccountRepository } from '@/domain/interfaces';
import { prisma } from '../database-client';
import { AuthUser } from '@/domain/entities';

export class CreateAccountRepo implements ICreateAccountRepository {
  async execute(user: AuthUser): Promise<string> {
    const accountCreated = await prisma.user.create({
      data: {
        email: user.email,
        password: user.password,
        updatedAt: new Date(),
      },
      select: {
        id: true,
      },
    });

    return accountCreated.id;
  }
}
