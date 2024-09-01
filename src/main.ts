import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//harith
//harith//harith//harith
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ["http://localhost:3000"]
  });
  await app.listen(8000);
}
bootstrap();
