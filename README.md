<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript, GraphqQL, DynamoDB (Using Dynamoose) with serverless framework starter repository. 

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
