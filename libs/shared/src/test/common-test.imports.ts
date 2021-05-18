import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { DynamooseModule } from 'nestjs-dynamoose';
import { SharedSchema } from '../schema/shared.schema';

export const CommonTestImports = [
  ConfigModule.forRoot({
    ignoreEnvFile: false,
    isGlobal: true,
  }),
  GraphQLModule.forRoot({
    autoSchemaFile: true,
  }),
  DynamooseModule.forRoot({
    local: process.env.MOCK_DYNAMODB_ENDPOINT,
    aws: { region: 'local' },
    model: {
      create: false,
      prefix: `${process.env.SERVICE}-local-`,
      suffix: '-table',
    },
  }),
  DynamooseModule.forFeature([
    {
      name: 'MainModel',
      schema: SharedSchema,
    },
  ]),
];
