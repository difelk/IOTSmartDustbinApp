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

  async updateDisplayMessage(key: string, value: string): Promise<void> {
    try {
      const displayRef = this.database.ref('/display');

      const snapshot = await displayRef.once('value');
      const displayArray = snapshot.val();
      displayArray.forEach((displayObject) => {
        if (displayObject[key] !== undefined) {
          displayObject[key] = value;
        }
      });
      await displayRef.set(displayArray);
    } catch (error) {
      console.error('Error updating display message:', error);
      throw error;
    }
  }

  private async sendToFirebase(text: string, timestamp: number): Promise<void> {
    try {
      await this.database.ref('/display').push({
        text,
        timestamp,
      });
    } catch (error) {
      console.error('Error sending message to Firebase:', error);
      throw error;
    }
  }
}
