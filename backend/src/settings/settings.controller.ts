import { Controller, Post, Body } from '@nestjs/common';
import { SettingsService } from './settings.service';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Post('update-config')
  async updateConfig(@Body() config: any): Promise<void> {
  
    
    try {
      await this.settingsService.updateConfig(config);
    } catch (error) {
      console.error('Error updating config:', error);
      throw error;
    }
  }
}
