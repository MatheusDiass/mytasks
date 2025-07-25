import { ICreateAccountRepo } from '@/domain/auth/auth.interface';
import { AccountData } from '@/domain/auth/auth.type';
import { HttpClient } from '../http/http-client.adapter';

export class CreateAccountRepo implements ICreateAccountRepo {
  constructor(private readonly httpClient: HttpClient) {}

  async execute(account: AccountData): Promise<void> {
    await this.httpClient.post<AccountData, void>('auth', '/accounts', account);
  }
}
