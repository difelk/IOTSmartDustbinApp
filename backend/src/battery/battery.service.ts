import { Injectable } from '@nestjs/common';
import { BatteryData } from './battery.types';

@Injectable()
export class BatteryService {
  getBatteryData(): BatteryData[] {
    return [
      { date: '2023-11-09', time: '18:13', percentage: 25 },
      { date: '2023-11-09', time: '18:14', percentage: 30 },
      { date: '2023-11-10', time: '08:15', percentage: 20 },
    ];
  }
}
