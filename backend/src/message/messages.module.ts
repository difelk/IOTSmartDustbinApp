// messages.module.ts
import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessageService } from './messages.service';

@Module({
  controllers: [MessagesController],
  providers: [MessageService],
})
export class MessagesModule {}
