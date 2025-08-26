import {
  AccountData,
  ConfirmAccountData,
  ConfirmAccountResponse,
} from './auth.type';

export interface ICreateAccountRepo {
  execute(data: AccountData): Promise<void>;
}

export interface IConfirmAccountRepo {
  execute(data: ConfirmAccountData): Promise<ConfirmAccountResponse>;
}
