// message.service.ts
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class MessageService {
  private readonly database: admin.database.Database;

  constructor() {
    this.database = admin.database();
  }

  async sendMessage(text: string, timestamp: number): Promise<void> {
    try {
      await this.sendToFirebase(text, timestamp);
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }

  private async sendToFirebase(text: string, timestamp: number): Promise<void> {
    try {
      await this.database.ref('/messages').push({
        text,
        timestamp,
      });
    } catch (error) {
      console.error('Error sending message to Firebase:', error);
      throw error;
    }
  }
}
