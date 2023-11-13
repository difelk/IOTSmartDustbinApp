import { Controller, Get } from '@nestjs/common';
import { BatteryService } from './battery.service';
import { BatteryData } from './battery.types';

@Controller('battery')
export class BatteryController {
  constructor(private readonly batteryService: BatteryService) {}

  @Get()
  getBatteryDetails(): BatteryData[] {
    return this.batteryService.getBatteryData();
  }
}
