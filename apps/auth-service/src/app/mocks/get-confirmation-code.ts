import {
  GetConfirmationCodeRepoInput,
  GetConfirmationCodeRepoOutput,
  IGetConfirmationCodeRepo,
} from '@/domain/interfaces';

export class GetConfirmationCodeRepo implements IGetConfirmationCodeRepo {
  async execute(
    input: GetConfirmationCodeRepoInput
  ): Promise<GetConfirmationCodeRepoOutput | undefined> {
    return undefined;
  }
}
