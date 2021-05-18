import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsBoolean, ValidateIf } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @IsNotEmpty()
  @IsString()
  @Field()
  name: string;

  @ValidateIf((o) => o.synced)
  @IsBoolean()
  @Field({ nullable: true })
  synced: boolean;
}
