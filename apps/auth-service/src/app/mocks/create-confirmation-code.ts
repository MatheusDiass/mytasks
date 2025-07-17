import {
  CreateConfirmationCodeInput,
  ICreateConfirmationCodeRepo,
} from '@/domain/interfaces';

export class CreateConformationCodeRepo implements ICreateConfirmationCodeRepo {
  async execute(input: CreateConfirmationCodeInput): Promise<void> {}
}
