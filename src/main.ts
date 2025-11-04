/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    // ✅ Enable CORS
  app.enableCors({
    origin: ['http://localhost:4000', 'https://your-frontend-domain.com'], // Add allowed origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: false, // If you’re using cookies or authorization headers
  });
  await app.listen(process.env.PORT ?? 3000);
}
// eslint-disable-next-line prettier/prettier
bootstrap();
