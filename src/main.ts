import { NestFactory } from '@nestjs/core';
//import { MessagesModule } from './messages/messages.module';
import { ComputerModule } from './computer/computer.module';

async function bootstrap() {
  const app = await NestFactory.create(ComputerModule);
  await app.listen(3000);
}
bootstrap();
