import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ProductModule } from './module/product.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(ProductModule);

  const config = new DocumentBuilder()
    .setTitle('api')
    .setVersion('1.0')

    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(5000);
}
bootstrap();
