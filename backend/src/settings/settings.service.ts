import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class SettingsService {
  private readonly database: admin.database.Database;

  constructor() {
    this.database = admin.database();
  }

  async updateConfig(config: any): Promise<void> {
    try {
      const {
        binNotificationGetTime,
        batteryNotificationGetTime,
        ...otherConfig
      } = config;
      await this.database
        .ref('/Config/BatterySendDataTime')
        .update({ timeInterval: batteryNotificationGetTime });

      await this.database
        .ref('/Config/BinSendDataTime')
        .update({ timeInterval: binNotificationGetTime });
      await this.database.ref('/Config').update(otherConfig);
    } catch (error) {
      console.error('Error updating config:', error);
      throw error;
    }
  }
}
