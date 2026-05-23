import { CreateIdeaInputSchema } from '@proyecto-bcp/shared-api';
import { AiSynthesisService } from '../../app/ai-synthesis/ai-synthesis.service';
import { SupabaseService } from '../../app/supabase/supabase.service';
import { protectedProcedure, publicProcedure, trpc } from '../trpc';

export const createIdeasRouter = (
  supabaseService: SupabaseService,
  aiSynthesisService: AiSynthesisService,
) =>
  trpc.router({
    submit: protectedProcedure
      .input(CreateIdeaInputSchema)
      .mutation(async ({ input, ctx }) => {
        const client = supabaseService.getClient();

        if (!client) {
          throw new Error('Supabase no esta configurado.');
        }

        const { data, error } = await client
          .from('raw_ideas')
          .insert({
            user_id: ctx.user.id,
            content: input.content,
          })
          .select('*')
          .single();

        if (error) {
          throw error;
        }

        const synthesis = await aiSynthesisService.synthesizePendingIdeas([input.content]);

        const { data: synthesizedIdea, error: synthesisError } = await client
          .from('synthesized_ideas')
          .insert({
            raw_idea_id: data.id,
            created_by: ctx.user.id,
            title: synthesis.title,
            summary: synthesis.summary,
            problem: synthesis.problem,
            audience: synthesis.audience,
            category: synthesis.category,
            estimated_time: synthesis.estimatedTime,
            activities: synthesis.activities,
            requirements: synthesis.requirements,
            impact: synthesis.impact,
          })
          .select('*')
          .single();

        if (synthesisError) {
          throw synthesisError;
        }

        return {
          rawIdea: data,
          synthesizedIdea,
        };
      }),
    getSynthesized: publicProcedure.query(async () => {
      const client = supabaseService.getClient();

      if (!client) {
        throw new Error('Supabase no esta configurado.');
      }

      const { data, error } = await client
        .from('synthesized_ideas')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      return data ?? [];
    }),
  });