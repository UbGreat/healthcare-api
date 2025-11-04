/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    // ✅ Enable CORS
 // Temporarily enable CORS for all origins
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
// eslint-disable-next-line prettier/prettier
bootstrap();
