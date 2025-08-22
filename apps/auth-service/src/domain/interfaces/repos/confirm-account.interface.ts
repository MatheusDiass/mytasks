import { ConfirmationType } from '@prisma/client';

export type ConfirmAccountRepoInput = {
  email: string;
  confirmationCodeId: string;
};

export interface IConfirmAccountRepo {
  execute(input: ConfirmAccountRepoInput): Promise<void>;
}
