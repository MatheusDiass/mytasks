import { AuthUser } from '@/domain/entities';

export interface ICreateAccountRepository {
  execute(user: AuthUser): Promise<string>;
}
