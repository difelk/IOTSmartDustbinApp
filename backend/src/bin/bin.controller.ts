import { Controller, Get } from '@nestjs/common';
import { BinService } from './bin.service';
import { BinData } from './bin.types';

@Controller('bin')
export class BinController {
  constructor(private readonly binService: BinService) {}

  @Get()
  async getBinData(): Promise<BinData[]> {
    try {
      const binData: BinData[] = await this.binService.getBinData();
      return binData;
    } catch (error) {
      console.error('Error in bin controller:', error);
      throw error;
    }
  }
}
