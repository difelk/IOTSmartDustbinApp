import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { BinData } from './bin.types';

@Injectable()
export class BinService {
  private readonly database: admin.database.Database;

  constructor() {
    this.database = admin.database();
  }

  async getBinData(): Promise<BinData[]> {
    try {
      const snapshot = await this.database.ref('/binData').once('value');
      // const binData: BinData[] = [];
      const allBinData = [];
      snapshot.forEach((childSnapshot) => {
        const data = childSnapshot.val();
        allBinData.push(data);
        // binData.push({
        //   date: data.date,
        //   time: data.time,
        //   status: data.status,
        //   percentage: data.percentage,
        // });
      });

      // return binData;
      return allBinData;
    } catch (error) {
      console.error('Error fetching battery data:', error);
      throw error;
    }
  }
}
