import { Injectable, INestApplication } from '@nestjs/common';
import { initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import { z } from 'zod';
import { SupabaseService } from './supabase/supabase.service';

const t = initTRPC.create();

@Injectable()
export class TrpcRouter {
  constructor(private supabaseService: SupabaseService) {}

  public appRouter = t.router({
    // Endpoint de prueba que el Frontend ya puede usar
    ping: t.procedure.query(() => {
      return { message: '¡El Backend y tRPC están vivos!' };
    }),
    
    // Aquí luego añadirás más endpoints que usen this.supabaseService
  });

  // Esta función conecta tRPC con Express (el motor por defecto de NestJS)
  async applyMiddleware(app: INestApplication) {
    app.use(
      '/trpc',
      trpcExpress.createExpressMiddleware({
        router: this.appRouter,
      })
    );
  }
}

export type AppRouter = TrpcRouter['appRouter'];