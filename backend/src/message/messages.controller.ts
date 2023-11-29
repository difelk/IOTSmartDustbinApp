// messages.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { MessageService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessageService) {}

  @Post('control')
  async createMessage(
    @Body() message: { text: string; timestamp: number },
  ): Promise<string> {
    const { text, timestamp } = message;

    const savedMessage = await this.messagesService.sendMessage(
      text,
      timestamp,
    );
    return `Message saved: ${savedMessage}`;
  }
}
