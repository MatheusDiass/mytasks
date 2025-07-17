import { ConfirmationType } from '@prisma/client';

export type CreateConfirmationCodeInput = {
  accountId: string;
  code: string;
  type: ConfirmationType;
  expiresAt: Date;
};

export interface ICreateConfirmationCodeRepo {
  execute(input: CreateConfirmationCodeInput): Promise<void>;
}
