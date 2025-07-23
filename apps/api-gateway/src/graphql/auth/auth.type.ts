import { Field, InputType } from 'type-graphql';

@InputType()
export class AuthData {
  @Field(() => String)
  private readonly name: string;
}
