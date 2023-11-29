// lid.module.ts
import { Module } from '@nestjs/common';
import { LidController } from './lid.controller';
import { LidService } from './lid.service';

@Module({
  controllers: [LidController],
  providers: [LidService],
})
export class LidModule {}