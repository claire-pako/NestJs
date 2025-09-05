import { Module } from '@nestjs/common';
import { MesagesController } from './mesages.controller';

@Module({
  controllers: [MesagesController]
})
export class MessagesModule {}
