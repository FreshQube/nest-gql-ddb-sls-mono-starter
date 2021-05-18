import { Field, InputType, InterfaceType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
@InterfaceType('BaseUser')
export class CreateUserInput {
  @IsNotEmpty()
  @IsString()
  @Field()
  pk: string;

  @IsString()
  @Field()
  name: string;
}
