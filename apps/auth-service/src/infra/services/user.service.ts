import { UserDto } from '@/domain/dtos';
import {
  CreateUserInput,
  IUserService,
} from '@/domain/interfaces/services/user.service';
import { IHttpClient } from '../http-client/http-client.interface';

export class UserService implements IUserService {
  constructor(private readonly httpClient: IHttpClient) {}

  async createUser(input: CreateUserInput): Promise<void> {
    await this.httpClient.post<CreateUserInput, void>('/api/users', input);
  }

  async getUser(id: string): Promise<UserDto | undefined> {
    return (await this.httpClient.get<UserDto[]>(`/api/users/${id}`))[0];
  }
}
