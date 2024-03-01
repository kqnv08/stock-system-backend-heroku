import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const publicPath = path.resolve(__dirname, '../public');
  app.use(express.static(publicPath))
  await app.listen(5000);
}
bootstrap();
