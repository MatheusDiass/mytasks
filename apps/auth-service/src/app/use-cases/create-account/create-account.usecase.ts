import { IExecutable } from '@/app/interfaces';
import {
  Input,
  UserQueueInput,
  NotificationQueueInput,
} from './create-account.types';
import { AuthUser } from '@/domain/entities';
import {
  ICheckEmailExistsRepo,
  ICodeGenerator,
  ICreateConfirmationCodeRepo,
  ICreateAccountRepo,
  IQueue,
} from '@/domain/interfaces';
import { EmailAlreadyExistsError } from '@/app/errors';

export class CreateAccountUseCase implements IExecutable<Input, void> {
  constructor(
    private readonly checkEmailExistsRepo: ICheckEmailExistsRepo,
    private readonly createAccountRepo: ICreateAccountRepo,
    private readonly codeGenerator: ICodeGenerator,
    private readonly createConfirmationCodeRepo: ICreateConfirmationCodeRepo,
    private readonly queue: IQueue
  ) {}

  async execute(input: Input): Promise<void> {
    const authUser = new AuthUser(input);

    const emailExists = await this.checkEmailExistsRepo.execute(authUser.email);

    if (emailExists) {
      throw new EmailAlreadyExistsError();
    }

    const accountId = await this.createAccountRepo.execute(authUser);

    const code = this.codeGenerator.generate(6);
    await this.createConfirmationCodeRepo.execute({
      accountId,
      code,
      type: 'ACTIVATION',
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24), // 24 hours
    });

    await this.queue.publish<UserQueueInput>({
      exchangeName: 'user.exchange',
      routingKey: 'user.created',
      data: {
        id: accountId,
        name: authUser.name,
        dateBirth: authUser.dateBirth,
        email: authUser.email,
      },
    });

    await this.queue.publish<NotificationQueueInput>({
      exchangeName: 'notification.exchange',
      routingKey: 'notification.user.created',
      data: {
        userName: authUser.name,
        userEmail: authUser.email,
        confirmationCode: code,
      },
    });
  }
}
