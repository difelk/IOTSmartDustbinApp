// lid.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { LidService } from './lid.service';
import { LidStatus } from './lid.types';

@Controller('lid')
export class LidController {
  constructor(private readonly lidService: LidService) {}

  @Post('control')
  async controlLid(@Body() body: { lidStatus: LidStatus }): Promise<void> {
    try {
      const { lidStatus } = body;
      await this.lidService.controlLid(lidStatus);
    } catch (error) {
      console.error('Error controlling lid:', error);
      throw error;
    }
  }
}
