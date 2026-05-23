import { TRPCError, initTRPC } from '@trpc/server';
import type { Request } from 'express';
import type { User } from '@supabase/supabase-js';

export type TrpcContext = {
  req: Request;
  user: User | null;
};

const t = initTRPC.context<TrpcContext>().create();

const isAuthenticated = t.middleware(({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'Debes iniciar sesion para acceder a este recurso.',
    });
  }

  return next({
    ctx: {
      ...ctx,
      user: ctx.user,
    },
  });
});

export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuthenticated);
export const trpc = t;