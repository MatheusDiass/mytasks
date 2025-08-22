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
import { HttpClientAdapter } from '@/infra/http-client/http-client.adapter';
import { UserService } from '@/infra/services';

export class CreateAccountFactory {
  private constructor() {}

  static async create(): Promise<CreateAccountController> {
    const httpClient = HttpClientAdapter.instance();
    const userService = new UserService(httpClient);
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
      userService,
      queue
    );

    return new CreateAccountController(useCase);
  }
}
