import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, type SupabaseClient, type User } from '@supabase/supabase-js';

@Injectable()
export class AuthService {
  private readonly adminClient: SupabaseClient | null;

  constructor(private readonly configService: ConfigService) {
    const supabaseUrl = this.configService.get<string>('SUPABASE_URL') || '';
    const serviceRoleKey =
      this.configService.get<string>('SUPABASE_SERVICE_ROLE_KEY') ||
      this.configService.get<string>('SUPABASE_SERVICE_KEY') ||
      '';

    this.adminClient = supabaseUrl && serviceRoleKey ? createClient(supabaseUrl, serviceRoleKey) : null;
  }

  async getUserFromBearerToken(authorizationHeader?: string): Promise<User | null> {
    const token = this.extractBearerToken(authorizationHeader);

    if (!token) {
      return null;
    }

    if (!this.adminClient) {
      throw new UnauthorizedException(
        'Supabase Admin no esta configurado. Agrega SUPABASE_SERVICE_ROLE_KEY para proteger rutas privadas.',
      );
    }

    const { data, error } = await this.adminClient.auth.getUser(token);

    if (error || !data.user) {
      throw new UnauthorizedException('Token de Supabase invalido o expirado.');
    }

    return data.user;
  }

  private extractBearerToken(authorizationHeader?: string) {
    if (!authorizationHeader) {
      return null;
    }

    const [scheme, token] = authorizationHeader.split(' ');

    if (!scheme || scheme.toLowerCase() !== 'bearer' || !token) {
      return null;
    }

    return token.trim();
  }
}