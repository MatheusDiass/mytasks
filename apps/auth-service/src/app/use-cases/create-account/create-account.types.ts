export type Input = {
  name: string;
  dateBirth: string;
  email: string;
  password: string;
};

export type NotificationQueueInput = {
  userName: string;
  userEmail: string;
  confirmationCode: string;
};

export type UserQueueInput = {
  id: string;
  name: string;
  dateBirth: string;
  email: string;
};
