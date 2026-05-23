import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AiSynthesisService } from './ai-synthesis/ai-synthesis.service';
import { SupabaseService } from './supabase/supabase.service';
import { TrpcRouter } from '../trpc/trpc.router';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService, SupabaseService, AuthService, AiSynthesisService, TrpcRouter],
})
export class AppModule {}
