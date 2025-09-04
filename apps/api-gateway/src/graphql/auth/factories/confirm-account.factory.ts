import { ConfirmAccountUseCase } from '@/app/auth/confirm-account.usecase';
import { CipherAdapter } from '@/infra/cipher.adapter';
import { HttpClient } from '@/infra/http/http-client.adapter';
import { ConfirmAccountRepo } from '@/infra/repos/confirm-account.repo';

export class ConfirmAccountFactory {
  static async create(): Promise<ConfirmAccountUseCase> {
    const httpClient = HttpClient.instance();
    const cipher = new CipherAdapter();
    const repo = new ConfirmAccountRepo(httpClient);
    const useCase = new ConfirmAccountUseCase(repo, cipher);

    return useCase;
  }
}
