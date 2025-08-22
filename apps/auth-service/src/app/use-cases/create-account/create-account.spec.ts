import {
  CheckEmailExistsRepo,
  CodeGenerator,
  CreateAccountRepo,
  CreateConformationCodeRepo,
  Queue,
} from '@/app/mocks';
import { CreateAccountUseCase } from './create-account.usecase';
import { AccountCode, Errors } from '../../errors';

describe('Create Account UseCase', () => {
  let useCase: CreateAccountUseCase;

  beforeAll(() => {
    useCase = new CreateAccountUseCase(
      new CheckEmailExistsRepo(),
      new CreateAccountRepo(),
      new CodeGenerator(),
      new CreateConformationCodeRepo(),
      new Queue()
    );
  });

  it('should create a new account successfully', () => {
    const authUser = {
      name: 'Matheus Dias',
      dateBirth: '1999-11-27',
      email: 'matheus.dias@email.com',
      password: 'MY@password@123',
    };

    expect(useCase.execute(authUser)).rejects.toThrow(
      Errors.accountAlreadyExists()
    );
  });
});
