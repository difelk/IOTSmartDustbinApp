// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';
import { firebaseConfig } from '../config/firebaseConfig';

async function bootstrap() {
  const serviceAccount = firebaseConfig as admin.ServiceAccount;
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:
    "https://ecobinnexus-default-rtdb.asia-southeast1.firebasedatabase.app",
  });

  const app = await NestFactory.create(AppModule);

  app.enableCors();
  await app.listen(3000);
}

bootstrap();
