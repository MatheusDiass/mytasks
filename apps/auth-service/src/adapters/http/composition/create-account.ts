import { CreateAccountUseCase } from '@/app/use-cases/create-account';
import {
  CheckEmailExistsRepository,
  CreateAccountRepository,
  CreateConfirmationCodeRepository,
} from '@/infra/db/repos';
import { CodeGenerator } from '@/infra/provider';
import { CreateAccountController } from '../controllers';

const checkEmailExistsRepository = new CheckEmailExistsRepository();
const createAccountRepository = new CreateAccountRepository();
const codeGenerator = new CodeGenerator();
const createCodeConfirmationUseCase = new CreateConfirmationCodeRepository();

const createAccountUseCase = new CreateAccountUseCase(
  checkEmailExistsRepository,
  createAccountRepository,
  codeGenerator,
  createCodeConfirmationUseCase
);

export const createAccountController = new CreateAccountController(
  createAccountUseCase
);
