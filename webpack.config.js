const path = require('path');
const slsw = require('serverless-webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: './apps/api/src/main',
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      { test: /\.node$/, use: 'node-loader' },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.build.json' })],
    alias: {
      graphql$: path.resolve(__dirname, './node_modules/graphql/index.js'),
    },
  },
  mode: 'none',
  node: {
    __filename: false,
    __dirname: false,
  },
  plugins: [
    new webpack.IgnorePlugin({
      checkResource(resource) {
        const lazyImports = [
          '@nestjs/microservices',
          '@nestjs/common/cache',
          '@nestjs/microservices/microservices-module',
          'cache-manager',
          'class-transformer',
          'class-transformer/storage',
          'class-validator',
          'fastify-static',
          'aws-serverless-express',
          'apollo-server-express',
          '@nestjs/websockets/socket-module',
          'pino-pretty',
          'aws-sdk',
        ];
        if (!lazyImports.includes(resource)) {
          return false;
        }
        try {
          require.resolve(resource, {
            paths: [process.cwd()],
          });
        } catch (err) {
          return true;
        }
        return false;
      },
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: './tsconfig.build.json',
      },
    }),
  ],
};
