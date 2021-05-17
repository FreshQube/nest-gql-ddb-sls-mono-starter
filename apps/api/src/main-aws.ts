import { lambda } from '@gcoreplus/nestjs-aws-serverless';
import { AppModule } from './app.module';

exports.handler = lambda(AppModule, { engine: 'fastify' });
