import { ConfirmationType } from '@prisma/client';

export type GetConfirmationCodeRepoInput = {
  email: string;
  confirmationType: ConfirmationType;
};

export type GetConfirmationCodeRepoOutput = {
  id: string;
  userId: string;
  code: string;
  type: ConfirmationType;
  expiresAt: Date;
  createdAt: Date;
};

export interface IGetConfirmationCodeRepo {
  execute(
    input: GetConfirmationCodeRepoInput
  ): Promise<GetConfirmationCodeRepoOutput | null>;
}
