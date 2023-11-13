import { Module } from '@nestjs/common';
import { BatteryController } from './battery.controller';
import { BatteryService } from './battery.service';

@Module({
  controllers: [BatteryController],
  providers: [BatteryService],
})
export class BatteryModule {}
