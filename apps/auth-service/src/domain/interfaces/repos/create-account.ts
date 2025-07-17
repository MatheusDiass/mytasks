import { AuthUser } from '@/domain/entities';

export interface ICreateAccountRepo {
  execute(user: AuthUser): Promise<string>;
}
