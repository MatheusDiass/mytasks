import { IConfirmAccountRepo } from '@/domain/auth/auth.interface';
import {
  ConfirmAccountData,
  ConfirmAccountResponse,
} from '@/domain/auth/auth.type';
import { HttpClient } from '../http/http-client.adapter';

export class ConfirmAccountRepo implements IConfirmAccountRepo {
  constructor(private readonly httpClient: HttpClient) {}

  async execute(data: ConfirmAccountData): Promise<ConfirmAccountResponse> {
    return await this.httpClient.post<
      ConfirmAccountData,
      ConfirmAccountResponse
    >('auth', '/confirm-account', data);
  }
}
