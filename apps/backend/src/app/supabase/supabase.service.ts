import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient | null = null;
  private readonly configured: boolean;

  constructor() {
    const supabaseUrl = this.normalizeUrl(
      process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    );
    const supabaseKey =
      process.env.SUPABASE_ANON_KEY ||
      process.env.SUPABASE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      '';

    this.configured = Boolean(supabaseUrl && supabaseKey);

    if (this.configured) {
      this.supabase = createClient(supabaseUrl, supabaseKey);
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