import { Controller, Get, Post, Param, Delete, Put } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get()
  async getNotifications(): Promise<any> {
    try {
      const notifications = await this.notificationsService.getNotifications();
      return notifications;
    } catch (error) {
      console.error('Error getting notifications:', error);
      throw error;
    }
  }


  @Put('view/:id')
  async updateNotificationViewStatus(@Param('id') id: string): Promise<void> {
    try {
      await this.notificationsService.updateNotificationViewStatus(id);
    } catch (error) {
      console.error('Error updating notification view status:', error);
      throw error;
    }
  }

  @Delete('delete/:id')
  async deleteNotification(@Param('id') id: string): Promise<void> {
    try {
      await this.notificationsService.deleteNotification(id);
    } catch (error) {
      console.error('Error deleting notification:', error);
      throw error;
    }
  }
}
