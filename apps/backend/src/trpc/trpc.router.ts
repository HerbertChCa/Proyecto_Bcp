import { Injectable, INestApplication } from '@nestjs/common';
import * as trpcExpress from '@trpc/server/adapters/express';
import { AiSynthesisService } from '../app/ai-synthesis/ai-synthesis.service';
import { AuthService } from '../app/auth/auth.service';
import { SupabaseService } from '../app/supabase/supabase.service';
import { trpc } from './trpc';
import { createIdeasRouter } from './routers/ideasRouter';
import { createInitiativesRouter } from './routers/initiativesRouter';
import { createParticipationsRouter } from './routers/participationsRouter';
import type { TrpcContext } from './trpc';

@Injectable()
export class TrpcRouter {
  public readonly appRouter;

  constructor(
    private readonly supabaseService: SupabaseService,
    private readonly aiSynthesisService: AiSynthesisService,
    private readonly authService: AuthService,
  ) {
    this.appRouter = trpc.router({
      ideas: createIdeasRouter(this.supabaseService, this.aiSynthesisService),
      initiatives: createInitiativesRouter(this.supabaseService),
      participations: createParticipationsRouter(this.supabaseService),
    });
  }

  private async createContext({ req }: { req: trpcExpress.CreateExpressContextOptions['req'] }): Promise<TrpcContext> {
    const user = await this.authService.getUserFromBearerToken(req.headers.authorization);

    return {
      req,
      user,
    };
  }

  async applyMiddleware(app: INestApplication) {
    app.use(
      '/trpc',
      trpcExpress.createExpressMiddleware({
        router: this.appRouter,
        createContext: ({ req }) => this.createContext({ req }),
      }),
    );
  }
}

export type AppRouter = TrpcRouter['appRouter'];