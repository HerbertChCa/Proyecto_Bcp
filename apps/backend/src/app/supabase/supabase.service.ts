import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient | null = null;
  private readonly configured: boolean;

  constructor(private readonly configService: ConfigService) {
    const supabaseUrl = this.normalizeUrl(
      this.configService.get<string>('SUPABASE_URL') ||
        this.configService.get<string>('NEXT_PUBLIC_SUPABASE_URL') ||
        '',
    );
    const supabaseKey =
      this.configService.get<string>('SUPABASE_SERVICE_ROLE_KEY') ||
      this.configService.get<string>('SUPABASE_KEY') ||
      this.configService.get<string>('SUPABASE_ANON_KEY') ||
      this.configService.get<string>('NEXT_PUBLIC_SUPABASE_ANON_KEY') ||
      '';

    this.configured = Boolean(supabaseUrl && supabaseKey);

    if (this.configured) {
      this.supabase = createClient(supabaseUrl, supabaseKey, {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
          detectSessionInUrl: false,
        },
      });
    }
  }

  getClient() {
    return this.supabase;
  }

  isReady() {
    return this.configured && this.supabase !== null;
  }

  private normalizeUrl(value: string) {
    return value.replace(/\/rest\/v1\/?$/, '').replace(/\/$/, '');
  }
}