import { ConfirmationType } from '@prisma/client';

export type GetConfirmationCodeRepoInput = {
  confirmationCodeId: string;
  confirmationType: ConfirmationType;
};

export type GetConfirmationCodeRepoOutput = {
  id: string;
  userId: string;
  code: string;
  type: ConfirmationType;
  isUsed: boolean;
  expiresAt: Date;
  createdAt: Date;
};

export interface IGetConfirmationCodeRepo {
  execute(
    input: GetConfirmationCodeRepoInput
  ): Promise<GetConfirmationCodeRepoOutput | null>;
}
