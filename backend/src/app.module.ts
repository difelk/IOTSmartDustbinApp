import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BatteryModule } from './battery/battery.module';
import { BinModule } from './bin/bin.module';
import { LidModule } from './lid/lid.module';
import { MessagesModule } from './message/messages.module';

@Module({
  imports: [BatteryModule, BinModule, LidModule, MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
