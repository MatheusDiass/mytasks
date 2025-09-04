import { Field, InputType, ObjectType } from 'type-graphql';

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

@InputType()
export class ConfirmAccountData {
  @Field(() => String)
  readonly code: string;
}

@ObjectType()
export class User {
  @Field(() => String)
  readonly id: string;

  @Field(() => String)
  readonly name: string;

  @Field(() => String)
  readonly email: string;
}

@ObjectType()
export class ConfirmAccountResponse {
  @Field(() => String)
  readonly token: string;

  @Field(() => User)
  readonly user: User;
}
