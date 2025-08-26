import { ConfirmAccountUseCase } from './confirm-account.usecase';
import { Errors } from '../../errors';
import { ConfirmAccountInput } from './confirm-account.type';
import {
  IConfirmAccountRepo,
  IGetConfirmationCodeRepo,
  GetConfirmationCodeRepoOutput,
} from '@/domain/interfaces';
import { IUserService } from '@/domain/interfaces/services/user.service';

const buildConfirmationCode = (
  override: Partial<GetConfirmationCodeRepoOutput> = {}
): GetConfirmationCodeRepoOutput => {
  return {
    id: '0197fc72-ba4d-7532-8c88-e9d3a6d853f9',
    userId: '0197fc72-ba4d-7532-8c88-e9d3a6d853f9',
    code: 'MK7TI0',
    type: 'ACTIVATION',
    isUsed: false,
    expiresAt: new Date(Date.now() + 60_000),
    createdAt: new Date(),
    ...override,
  };
};

describe('Confirm Account UseCase', () => {
  const input: ConfirmAccountInput = {
    email: 'matheus.dias@email.com',
    code: 'MK7TI0',
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  const makeSut = () => {
    const getConfirmationCodeRepo = {
      execute: vi.fn<IGetConfirmationCodeRepo['execute']>(),
    };

    const confirmAccountRepo = {
      execute: vi.fn<IConfirmAccountRepo['execute']>(),
    };

    const userService = {
      createUser: vi.fn<IUserService['createUser']>(),
      getUser: vi.fn<IUserService['getUser']>(),
    };

    const token = {
      generate: vi.fn<(data: { userId: string }) => string>(),
      verify: vi.fn<(t: string) => boolean>(),
    };

    const sut = new ConfirmAccountUseCase(
      getConfirmationCodeRepo,
      userService,
      confirmAccountRepo,
      token
    );

    return { sut, getConfirmationCodeRepo, userService, token };
  };

  it('should throw confirmation code not found if confirmation code not exists', () => {
    const { sut, getConfirmationCodeRepo } = makeSut();

    getConfirmationCodeRepo.execute.mockResolvedValue(null);

    expect(sut.execute(input)).rejects.toThrow(
      Errors.confirmationCodeNotFound()
    );
  });

  it('should throw confirmation code already used if confirmation code is used', () => {
    const { sut, getConfirmationCodeRepo } = makeSut();

    getConfirmationCodeRepo.execute.mockResolvedValue(
      buildConfirmationCode({ isUsed: true })
    );

    expect(sut.execute(input)).rejects.toThrow(
      Errors.confirmationCodeAlreadyUsed()
    );
  });

  it('should throw an expires confirmation code if confirmation code expires', () => {
    const { sut, getConfirmationCodeRepo } = makeSut();

    getConfirmationCodeRepo.execute.mockResolvedValue(
      buildConfirmationCode({
        expiresAt: new Date(Date.now() - 1),
        createdAt: new Date(Date.now() - 1),
      })
    );

    expect(sut.execute(input)).rejects.toThrow(
      Errors.confirmationCodeExpires()
    );
  });

  it('should throw an invalid confirmation code error if the confirmation code is wrong', () => {
    const { sut, getConfirmationCodeRepo } = makeSut();

    const input: ConfirmAccountInput = {
      email: 'matheus.dias@email.com',
      code: 'DA7UI0',
    };

    getConfirmationCodeRepo.execute.mockResolvedValue(buildConfirmationCode());

    expect(sut.execute(input)).rejects.toThrow(
      Errors.confirmationCodeInvalid()
    );
  });

  it('should throw an user not found error if the user not exists', () => {
    const { sut, getConfirmationCodeRepo, userService } = makeSut();

    const input: ConfirmAccountInput = {
      email: 'matheus.dias@email.com',
      code: 'DA7UI0',
    };

    getConfirmationCodeRepo.execute.mockResolvedValue(
      buildConfirmationCode({
        code: 'DA7UI0',
      })
    );

    userService.getUser.mockResolvedValue(undefined);

    expect(sut.execute(input)).rejects.toThrow(Errors.userNotFound());
  });
});
