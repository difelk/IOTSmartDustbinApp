// messages.controller.ts
import { Controller, Post, Body, Put } from '@nestjs/common';
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

  @Put('update-display')
  async updateDisplayMessage(
    @Body() updateData: { key: string; value: string },
  ): Promise<string> {
    const { key, value } = updateData;

    const result = await this.messagesService.updateDisplayMessage(key, value);

    return `Message updated: ${result}`;
  }
}
