import { IController } from '@/infra/interfaces';
import {
  ConfirmAccountUseCase,
  ConfirmAccountInput,
  ConfirmAccountResponse,
} from '@/app/use-cases/confirm-account';

export class ConfirmAccountController
  implements IController<ConfirmAccountInput, ConfirmAccountResponse>
{
  constructor(private readonly confirmAccountUseCase: ConfirmAccountUseCase) {}

  async handle(request: ConfirmAccountInput): Promise<ConfirmAccountResponse> {
    return await this.confirmAccountUseCase.execute(request);
  }
}
