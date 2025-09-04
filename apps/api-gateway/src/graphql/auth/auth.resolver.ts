import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import cookie from '@fastify/cookie';
import {
  AccountData,
  ConfirmAccountData,
  ConfirmAccountResponse,
} from './auth.type';
import { CreateAccountFactory } from './factories/create-account.factory';
import { ErrorCode } from '@/infra/graphql/error-code.decorator';
import { ConfirmAccountFactory } from './factories/confirm-account.factory';
import type { GraphQLContext } from '@/infra/graphql/graphql.type';

@Resolver()
export class AuthResolver {
  @Mutation(() => Boolean)
  @ErrorCode('CREATE_ACCOUNT_ERROR')
  async createAccount(
    @Arg('data') data: AccountData,
    @Ctx() { res }: GraphQLContext
  ): Promise<boolean> {
    const useCase = await CreateAccountFactory.create();
    const confirmationCodeId = await useCase.execute(data);
    res.header(
      'Set-Cookie',
      cookie.serialize('act', confirmationCodeId, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 10,
      })
    );
    return true;
  }

  @Mutation(() => ConfirmAccountResponse)
  @ErrorCode('CONFIRM_ACCOUNT_ERROR')
  async confirmAccount(
    @Arg('data') data: ConfirmAccountData,
    @Ctx() { req }: GraphQLContext
  ): Promise<ConfirmAccountResponse> {
    const confirmationCodeIdEncrypted = req.headers.cookie
      ?.split('; ')
      .find((cookie) => cookie.startsWith('act='))
      ?.split('=')[1];

    const useCase = await ConfirmAccountFactory.create();
    return await useCase.execute({
      ...data,
      confirmationCodeIdEncrypted,
    });
  }
}
