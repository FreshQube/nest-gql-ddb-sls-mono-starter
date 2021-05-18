import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';
import { SharedSchema } from '@libs/shared';
import { UsersService } from './users.service';
import { UsersResolver } from './resolver/user.resolver';
@Module({
  imports: [
    DynamooseModule.forFeature([
      {
        name: 'MainModel',
        schema: SharedSchema,
      },
    ]),
  ],
  providers: [UsersService, UsersResolver],
  exports: [UsersService, UsersResolver],
})
export class UsersModule {}
