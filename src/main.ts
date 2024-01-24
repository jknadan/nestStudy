import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
// 함수 실행 bootstrap = "우리의 서버를 실행한다."
bootstrap();
