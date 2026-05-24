'use server';

import { createSupabaseServerClient } from '../../utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function submitIdeaAction(rawIdea: string, targetOrgId: string) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    throw new Error('Debe iniciar sesión para proponer una idea');
  }

  const { error } = await supabase
    .from('raw_ideas')
    .insert({
      user_id: user.id,
      content: rawIdea,
      target_org_id: targetOrgId,
    });

  if (error) {
    console.error('Error submitting idea:', error);
    throw new Error(error.message);
  }

  revalidatePath('/dashboard');
}
