import { Field, ObjectType } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { KeyType } from '../shared/common.enum';

export type UserKey = {
  pk: string;
};

@ObjectType({ implements: CreateUserInput })
export class User extends CreateUserInput {
  @Field()
  pk: string;

  @Field(/* istanbul ignore next */ () => KeyType)
  sk: KeyType.User;

  @Field()
  name: string;

  @Field()
  subscribed: number;

  @Field()
  synced: boolean;

  @Field()
  verificationCode: number;

  @Field()
  isVerified: boolean;
}
