import { Body, Controller, Get, Post } from '@nestjs/common';
import { synthesizeInitiativeProposal } from '@proyecto-bcp/shared-api';
import { AppService } from './app.service';
import { SupabaseService } from './supabase/supabase.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly supabaseService: SupabaseService,
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
    return synthesizeInitiativeProposal(body.idea || '');
  }
}
