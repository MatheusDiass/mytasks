import { ICreateAccountRepo } from '@/domain/interfaces';
import { prisma } from '../database-client';
import { AuthUser } from '@/domain/entities';

export class CreateAccountRepo implements ICreateAccountRepo {
  async execute(user: AuthUser): Promise<string> {
    const { id } = await prisma.user.create({
      data: {
        email: user.email,
        password: user.password,
        updatedAt: new Date(),
      },
      select: {
        id: true,
      },
    });

    return id;
  }
}
