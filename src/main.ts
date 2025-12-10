import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as expressBasicAuth from 'express-basic-auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    expressBasicAuth({
      users: {
        [process.env.BASIC_AUTH_USER ?? 'admin']:
          process.env.BASIC_AUTH_PASSWORD ?? 'admin',
      },
      challenge: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
