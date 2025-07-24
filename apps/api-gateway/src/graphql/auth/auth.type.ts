import { Field, InputType } from 'type-graphql';

@InputType()
export class AccountData {
  @Field(() => String)
  readonly name: string;

  @Field(() => String)
  readonly dateBirth: string;

  @Field(() => String)
  readonly email: string;

  @Field(() => String)
  readonly password: string;
}
