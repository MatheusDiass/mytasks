import { Arg, Mutation, Resolver } from 'type-graphql';
import { AccountData } from './auth.type';
import { CreateAccountFactory } from './factories/create-account.factory';
import { ErrorCode } from '@/infra/graphql/error-code.decorator';

@Resolver()
export class AuthResolver {
  @Mutation(() => Boolean)
  @ErrorCode('CREATE_ACCOUNT_ERROR')
  async createAccount(@Arg('data') data: AccountData): Promise<boolean> {
    const createAccountFactory = await CreateAccountFactory.create();
    await createAccountFactory.execute(data);
    return true;
  }
}
