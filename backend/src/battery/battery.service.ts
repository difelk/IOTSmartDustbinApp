import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { BatteryData } from './battery.types';

@Injectable()
export class BatteryService {
  private readonly database: admin.database.Database;

  constructor() {
    this.database = admin.database();
  }

  async getBatteryData(): Promise<BatteryData[]> {
    try {
      const snapshot = await this.database.ref('/batteryData').once('value');
      
      const allBatteryData = [];
      snapshot.forEach((childSnapshot) => {
        const data = childSnapshot.val();
        allBatteryData.push(data);
      });
      return allBatteryData;
    } catch (error) {
      console.error('Error fetching battery data:', error);
      throw error;
    }
  }
}
