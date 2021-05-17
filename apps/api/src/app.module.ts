import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { APIModule } from './modules/api.module';
import { DynamooseModule } from 'nestjs-dynamoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: false,
      isGlobal: true,
    }),
    GraphQLModule.forRoot({
      // installSubscriptionHandlers: true,
      // autoSchemaFile: process.env ? 'schema.gql' : true,
      // buildSchemaOptions: {
      //   numberScalarMode: 'integer',
      // },
      autoSchemaFile: true,
      playground: {
        endpoint:
          process.env.IS_NOT_SLS === 'true'
            ? '/graphql'
            : `/${process.env.STAGE}/graphql`,
      },
    }),
    DynamooseModule.forRoot({
      // local: true,
      local: process.env.IS_DDB_LOCAL === 'true',
      aws: { region: process.env.REGION },
      model: {
        create: false,
        prefix: `${process.env.SERVICE}-${process.env.STAGE}-`,
        suffix: '-table',
      },
    }),
    APIModule,
  ],
})
export class AppModule {}
