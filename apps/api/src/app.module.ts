import { Module } from '@nestjs/common';
// TODO: Use base graphql package once issue #1536 is resolved and PR #1544 is merged
// TODO: Once PR is merged remove the patch dependency
// import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLModule } from '@nestjs/graphql-patch';
import { DynamooseModule } from 'nestjs-dynamoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '@libs/users';
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
    UsersModule,
  ],
})
export class AppModule {}
