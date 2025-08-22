import { ConfirmAccountController } from '@/infra/http/controllers';
import { ConfirmAccountUseCase } from '@/app/use-cases/confirm-account';
import { HttpClientAdapter } from '@/infra/http-client/http-client.adapter';
import { UserService } from '@/infra/services';
import { GetConfirmationCodeRepo } from '@/infra/db/repos/get-confirmation-code.repo';
import { TokenAdapter } from '@/infra/token/token.adapter';
import { ConfirmAccountRepo } from '@/infra/db/repos';

export class ConfirmAccountFactory {
  private constructor() {}

  static create(): ConfirmAccountController {
    const httpClient = HttpClientAdapter.instance();
    const userService = new UserService(httpClient);
    const getConfirmationCodeRepo = new GetConfirmationCodeRepo();
    const confirmAccountRepo = new ConfirmAccountRepo();
    const token = new TokenAdapter();
    const useCase = new ConfirmAccountUseCase(
      getConfirmationCodeRepo,
      userService,
      confirmAccountRepo,
      token
    );

    return new ConfirmAccountController(useCase);
  }
}
