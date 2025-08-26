import { Arg, Mutation, Resolver } from 'type-graphql';
import {
  AccountData,
  ConfirmAccountData,
  ConfirmAccountResponse,
} from './auth.type';
import { CreateAccountFactory } from './factories/create-account.factory';
import { ErrorCode } from '@/infra/graphql/error-code.decorator';
import { ConfirmAccountFactory } from './factories/confirm-account.factory';

@Resolver()
export class AuthResolver {
  @Mutation(() => Boolean)
  @ErrorCode('CREATE_ACCOUNT_ERROR')
  async createAccount(@Arg('data') data: AccountData): Promise<boolean> {
    const createAccountFactory = await CreateAccountFactory.create();
    await createAccountFactory.execute(data);
    return true;
  }

  @Mutation(() => ConfirmAccountResponse)
  @ErrorCode('CONFIRM_ACCOUNT_ERROR')
  async confirmAccount(
    @Arg('data') data: ConfirmAccountData
  ): Promise<ConfirmAccountResponse> {
    const confirmAccountFactory = await ConfirmAccountFactory.create();
    return await confirmAccountFactory.execute(data);
  }
}
