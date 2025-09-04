export type AccountData = {
  name: string;
  dateBirth: string;
  email: string;
  password: string;
};

export type ConfirmAccountData = {
  code: string;
  confirmationCodeIdEncrypted?: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
};

export type ConfirmAccountResponse = {
  token: string;
  user: User;
};
