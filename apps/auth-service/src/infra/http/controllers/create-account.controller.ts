import { IController } from '@/infra/interfaces';
import { CreateAccountUseCase, Input } from '@/app/use-cases/create-account';

export class CreateAccountController implements IController<Input, string> {
  constructor(private readonly createAccountUseCase: CreateAccountUseCase) {}

  async handle(request: Input): Promise<string> {
    return await this.createAccountUseCase.execute(request);
  }
}
