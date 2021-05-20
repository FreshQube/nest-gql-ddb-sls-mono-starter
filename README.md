<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

![](https://img.shields.io/endpoint?url=https://api.keyvalue.xyz/5ee49491/coverage)

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript, GraphQL, DynamoDB (Using Dynamoose) with serverless framework starter template repository. 

The app is configured to use Nest JS with a code first graphql approach inside a lambda function via a fastify adapter and all routes and requests are handled by NestJS.

The endpoint supports both GraphQL as well as REST APIs

Uses @NestJS/GraphQL for graphql support and NestJS fastify adapter.

The API is connected to a DynamoDB instance via Dynamoose ORM which is configured along with lamdba on a serverless.yml file.

Uses serverless framework to ease the initialization and deployment of resources like lambda, DynamoDB and maintain separate environments like staging , dev and prod separately.

This is a mono repo and there is a git actions workflow for deploying which has been commented out for now and can be uncommented while deploying.

Jest is used for unit testing as well as e2e testing if required in the future.


Code coverage checks are done using git actions, check out this action for more info and do create your own key:value pair for use with this action.
https://github.com/marketplace/actions/jest-annotations-coverage

## Stack

This repo uses

- TypeScript (4.x+)
- NestJS
- NestJS / Fastify
- NestJS / GraphQL
- NestJS / Dynamoose
- Serverless Framework
- Github Actions
- Jest Framework (testing + coverage)
- AWS DynamoDB
- AWS Lambda
- AWS S3 (serverless deployment bucket)
  
## Installation

```bash
$ yarn
```

## Running the app

```bash

# Setup AWS CREDENTIALS before deploying the app

# for first time only run to install DDB
# this will generate .dynamodb folder with ddb jar files if you delete this folder
# in the future then re run this command again
$ yarn ddb:install

# start local DDB instance
$ yarn ddb:start

# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod

# sls deploy dev
$ yarn deploy

# sls deploy prod
$ yarn deploy:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

This repo is [MIT licensed](LICENSE).
