import { Injectable } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { z } from 'zod';

@Injectable()
export class TrpcRouter {
  constructor(private readonly trpc: TrpcService) {}

  appRouter = this.trpc.router({
    hello: this.trpc.procedure
      .input(z.object({ name: z.string().optional() }))
      .query(({ input }) => {
        return { greeting: `¡Hola ${input?.name || 'Hackathon BCP'}!` };
      }),
  });
}

export type AppRouter = TrpcRouter['appRouter'];