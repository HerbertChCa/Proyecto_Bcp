import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AiSynthesisService } from './ai-synthesis/ai-synthesis.service';
import { SupabaseService } from './supabase/supabase.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly supabaseService: SupabaseService,
    private readonly aiSynthesisService: AiSynthesisService,
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('status')
  getStatus() {
    return {
      message: 'Backend listo para sintetizar iniciativas',
      supabaseReady: this.supabaseService.isReady(),
    };
  }

  @Post('initiatives/synthesize')
  synthesizeInitiative(@Body() body: { idea: string }) {
    return this.aiSynthesisService.synthesizePendingIdeas([body.idea || '']);
  }
}
