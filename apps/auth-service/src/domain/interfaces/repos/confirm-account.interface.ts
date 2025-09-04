import { ConfirmationType } from '@prisma/client';

export type ConfirmAccountRepoInput = {
  confirmationCodeId: string;
};

export interface IConfirmAccountRepo {
  execute(input: ConfirmAccountRepoInput): Promise<void>;
}
