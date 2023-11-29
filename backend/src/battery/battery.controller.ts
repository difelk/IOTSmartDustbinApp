import { Controller, Get } from '@nestjs/common';
import { BatteryService } from './battery.service';
import { BatteryData } from './battery.types';

@Controller('battery')
export class BatteryController {
  constructor(private readonly batteryService: BatteryService) {}

  @Get()
  async getBatteryDetails(): Promise<BatteryData[]> {
    try {
      const batteryData: BatteryData[] =
        await this.batteryService.getBatteryData();
      console.log('controller bat - ', batteryData);

      return batteryData;
    } catch (error) {
      console.error('Error in battery controller:', error);
      throw error;
    }
  }
}
