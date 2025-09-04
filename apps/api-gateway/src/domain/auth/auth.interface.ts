import {
  AccountData,
  ConfirmAccountData,
  ConfirmAccountResponse,
} from './auth.type';

export interface ICreateAccountRepo {
  execute(data: AccountData): Promise<string>;
}

export type ConfirmAccountRepoData = {
  code: string;
  confirmationCodeId: string;
};

export interface IConfirmAccountRepo {
  execute(data: ConfirmAccountRepoData): Promise<ConfirmAccountResponse>;
}
