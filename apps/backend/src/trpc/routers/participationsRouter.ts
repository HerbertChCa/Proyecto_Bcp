import { z } from 'zod';
import { SupabaseService } from '../../app/supabase/supabase.service';
import { protectedProcedure, trpc } from '../trpc';

const EnrollInputSchema = z.object({
  user_id: z.string().uuid(),
  initiative_id: z.string().uuid(),
});

export const createParticipationsRouter = (supabaseService: SupabaseService) =>
  trpc.router({
    enroll: protectedProcedure
      .input(EnrollInputSchema)
      .mutation(async ({ input, ctx }) => {
        if (ctx.user.id !== input.user_id) {
          throw new Error('No puedes inscribir a otro usuario con tu token actual.');
        }

        const client = supabaseService.getClient();

        if (!client) {
          throw new Error('Supabase no esta configurado.');
        }

        const { data, error } = await client
          .from('participations')
          .insert({
            user_id: input.user_id,
            initiative_id: input.initiative_id,
            status: 'enrolled',
            applied_at: new Date().toISOString(),
          })
          .select('*')
          .single();

        if (error) {
          throw error;
        }

        return data;
      }),
  });