import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class CountUserInput {
  @IsNotEmpty()
  @IsNumber()
  @Field()
  startTimestamp: number;

  @IsNotEmpty()
  @IsNumber()
  @Field()
  endTimestamp: number;
}
