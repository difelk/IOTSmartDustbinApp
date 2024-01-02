import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class NotificationsService {
  private readonly database: admin.database.Database;

  constructor() {
    this.database = admin.database();
  }

  async getNotifications(): Promise<any> {
    try {
      const snapshot = await this.database
        .ref('/notificationData')
        .once('value');
      console.log('snapshot - ', snapshot);

      return snapshot.val();
    } catch (error) {
      console.error('Error getting notifications from Firebase:', error);
      throw error;
    }
  }

  async updateNotificationViewStatus(id: string): Promise<void> {
    try {
      await this.database.ref(`/notificationData/${id}`).update({ view: true });
    } catch (error) {
      console.error('Error updating notification view status:', error);
      throw error;
    }
  }

  async deleteNotification(notificationId: string): Promise<void> {
    try {
      const notificationRef = this.database.ref(
        `/notificationData/${notificationId}`,
      );
      await notificationRef.remove();
    } catch (error) {
      console.error('Error deleting notification:', error);
      throw error;
    }
  }
}
