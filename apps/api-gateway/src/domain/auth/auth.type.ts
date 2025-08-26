export type AccountData = {
  name: string;
  dateBirth: string;
  email: string;
  password: string;
};

export type ConfirmAccountData = {
  email: string;
  code: string;
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
