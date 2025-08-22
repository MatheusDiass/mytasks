import { IExecutable } from '@/app/interfaces';
import {
  ConfirmAccountInput,
  ConfirmAccountResponse,
} from './confirm-account.type';
import {
  IConfirmAccountRepo,
  IGetConfirmationCodeRepo,
  IToken,
} from '@/domain/interfaces';
import { ConfirmationType } from '@prisma/client';
import { Errors } from '../../errors';
import { IUserService } from '@/domain/interfaces/services/user.service';

export class ConfirmAccountUseCase
  implements IExecutable<ConfirmAccountInput, ConfirmAccountResponse>
{
  constructor(
    private readonly getConfirmationCodeRepo: IGetConfirmationCodeRepo,
    private readonly userService: IUserService,
    private readonly confirmAccountRepo: IConfirmAccountRepo,
    private readonly token: IToken
  ) {}

  async execute(input: ConfirmAccountInput): Promise<ConfirmAccountResponse> {
    const confirmationData = await this.getConfirmationCodeRepo.execute({
      email: input.email,
      confirmationType: ConfirmationType.ACTIVATION,
    });

    if (!confirmationData) throw Errors.confirmationCodeNotFound();

    const currentDate = new Date();
    if (confirmationData.expiresAt.getTime() < currentDate.getTime())
      throw Errors.confirmationCodeExpires();

    if (input.code !== confirmationData.code)
      throw Errors.confirmationCodeInvalid();

    const user = await this.userService.getUser(confirmationData.userId);

    if (!user) {
      throw Errors.userNotFound();
    }

    await this.confirmAccountRepo.execute({
      email: input.email,
      confirmationCodeId: confirmationData.id,
    });

    const token = this.token.generate({ userId: user.id });

    return {
      token,
      user,
    };
  }
}
