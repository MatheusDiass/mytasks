import { CreateAccountUseCase } from '@/app/auth/create-account.usecase';
import { HttpClient } from '@/infra/http/http-client.adapter';
import { CreateAccountRepo } from '@/infra/repos/create-account';

export class CreateAccountFactory {
  static async create(): Promise<CreateAccountUseCase> {
    const httpClient = HttpClient.instance();
    const repo = new CreateAccountRepo(httpClient);
    const useCase = new CreateAccountUseCase(repo);

    return useCase;
  }
}
