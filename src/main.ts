import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function boot() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
boot();
