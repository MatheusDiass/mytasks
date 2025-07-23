import { Arg, Mutation, Resolver } from 'type-graphql';
import { AuthData } from './auth.type';

@Resolver()
export class AuthResolver {
  @Mutation(() => Boolean)
  async createAccount(@Arg('data') data: AuthData): Promise<boolean> {
    return true;
  }
}
