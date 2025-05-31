import { IExecutable } from '@/app/interfaces';
import { Input } from './types';
import { AuthUser } from '@/domain/entities';
import {
  ICheckEmailExistsRepository,
  ICodeGenerator,
  ICreateConfirmationCodeRepository,
  ICreateAccountRepository,
} from '@/domain/interfaces';
import { EmailAlreadyExistsError } from '@/app/errors';

export class CreateAccountUseCase implements IExecutable<Input, void> {
  constructor(
    private readonly checkEmailExistsRepository: ICheckEmailExistsRepository,
    private readonly createAccountRepository: ICreateAccountRepository,
    private readonly codeGenerator: ICodeGenerator,
    private readonly createConfirmationCodeRepository: ICreateConfirmationCodeRepository
  ) {}

  async execute(input: Input): Promise<void> {
    const authUser = new AuthUser(input);

    const emailExists = await this.checkEmailExistsRepository.execute(
      authUser.email
    );

    if (emailExists) {
      throw new EmailAlreadyExistsError();
    }

    const accountId = await this.createAccountRepository.execute(authUser);

    const code = this.codeGenerator.generate(6);
    await this.createConfirmationCodeRepository.execute({
      accountId,
      code,
      type: 'ACTIVATION',
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24), // 24 hours
    });
  }
}
