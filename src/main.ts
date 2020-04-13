import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as mongoose from 'mongoose';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  mongoose.connect('mongodb://localhost:27017/woffee_nest', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())
  //生成swagger文档
  const options = new DocumentBuilder()
    .setTitle('WOFFEE nestjs API')
    .setDescription('我的第一个NestJS项目')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
