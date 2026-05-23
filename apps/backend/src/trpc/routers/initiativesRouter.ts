import {
  CreateInitiativeInputSchema,
  type CreateInitiativeInput,
} from '@proyecto-bcp/shared-api';
import { SupabaseService } from '../../app/supabase/supabase.service';
import { protectedProcedure, publicProcedure, trpc } from '../trpc';

const rewardPointsByType: Record<string, number> = {
  points: 10,
  badge: 25,
  certificate: 50,
  impact: 75,
};

function isVerifiedOrganization(userMetadata: Record<string, unknown> | undefined) {
  return Boolean(
    userMetadata?.organization_verified ||
      userMetadata?.is_verified_organization ||
      userMetadata?.verified_organization ||
      userMetadata?.organization_status === 'verified',
  );
}

export const createInitiativesRouter = (supabaseService: SupabaseService) =>
  trpc.router({
    getAll: publicProcedure.query(async () => {
      const client = supabaseService.getClient();

      if (!client) {
        throw new Error('Supabase no esta configurado.');
      }

      const { data, error } = await client
        .from('initiatives')
        .select('*')
        .eq('status', 'active')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      return data ?? [];
    }),
    create: protectedProcedure
      .input(CreateInitiativeInputSchema)
      .mutation(async ({ input, ctx }) => {
        if (!isVerifiedOrganization(ctx.user?.user_metadata)) {
          throw new Error('La organizacion no esta verificada.');
        }

        const client = supabaseService.getClient();

        if (!client) {
          throw new Error('Supabase no esta configurado.');
        }

        const pointsReward = rewardPointsByType[input.reward_type] ?? 0;

        const { data, error } = await client
          .from('initiatives')
          .insert({
            title: input.title,
            description: input.description,
            summary: input.description,
            category: input.reward_type,
            region: 'general',
            status: 'active',
            current_participants: 0,
            points_reward: pointsReward,
            organizer_id: ctx.user.id,
            district: null,
            required_skills: [],
            max_participants: null,
            start_date: null,
            end_date: null,
            image_url: null,
          })
          .select('*')
          .single();

        if (error) {
          throw error;
        }

        return data;
      }),
  });