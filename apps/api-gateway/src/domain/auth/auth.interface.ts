import { AccountData } from './auth.type';

export interface ICreateAccountRepo {
  execute(user: AccountData): Promise<void>;
}
