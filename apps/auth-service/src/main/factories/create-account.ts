import { CreateAccountController } from '@/infra/http/controllers';
import { Queue } from '@/infra/queue';
import { CreateAccountUseCase } from '@/app/use-cases/create-account';
import { apiConfig } from '@/config/config';
import {
  CheckEmailExistsRepo,
  CreateAccountRepo,
  CreateConfirmationCodeRepo,
} from '@/infra/db/repos';
import { CodeGenerator } from '@/infra/provider';

export class CreateAccountFactory {
  private constructor() {}

  static async create(): Promise<CreateAccountController> {
    const checkEmailExistsRepo = new CheckEmailExistsRepo();
    const createAccountRepo = new CreateAccountRepo();
    const codeGeneratorProvider = new CodeGenerator();
    const createConfirmationCodeRepo = new CreateConfirmationCodeRepo();
    const queue = await Queue.connect(apiConfig.queueConn);

    const useCase = new CreateAccountUseCase(
      checkEmailExistsRepo,
      createAccountRepo,
      codeGeneratorProvider,
      createConfirmationCodeRepo,
      queue
    );

    return new CreateAccountController(useCase);
  }
}
