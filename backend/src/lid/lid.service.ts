// lid.service.ts
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { LidStatus } from './lid.types';

@Injectable()
export class LidService {
  private readonly database: admin.database.Database;

  constructor() {
    this.database = admin.database();
  }

  async controlLid(lidStatus: LidStatus): Promise<void> {
    try {
      if (lidStatus === 'LID_OPEN') {
        await this.updateLidStatusInFirebase('LID_OPEN');
      } else if (lidStatus === 'LID_CLOSE') {
        await this.updateLidStatusInFirebase('LID_CLOSE');
      } else {
        console.warn('Unsupported lid status:', lidStatus);
      }
    } catch (error) {
      console.error('Error controlling lid:', error);
      throw error;
    }
  }

  private async updateLidStatusInFirebase(lidStatus: string): Promise<void> {
    try {
      await this.database.ref('/lidStatus').set(lidStatus);
    } catch (error) {
      console.error('Error updating lid status in Firebase:', error);
      throw error;
    }
  }
}
