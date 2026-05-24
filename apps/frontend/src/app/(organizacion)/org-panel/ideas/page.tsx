import { createSupabaseServerClient } from '../../../../utils/supabase/server';
import { redirect } from 'next/navigation';
import { InboxClient } from './inbox-client';

export default async function OrgIdeasPage() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user || user.user_metadata?.role !== 'org') {
    redirect('/dashboard');
  }

  // Fetch ideas targeted to this org
  const { data: rawIdeas } = await supabase
    .from('raw_ideas')
    .select('id, content, created_at, profiles(full_name)')
    .eq('target_org_id', user.id)
    .order('created_at', { ascending: false });

  const formattedIdeas = (rawIdeas || []).map((idea: any) => ({
    id: idea.id,
    content: idea.content,
    created_at: idea.created_at,
    profiles: Array.isArray(idea.profiles) ? idea.profiles[0] : idea.profiles,
  }));

  return (
    <div>
      <div className="mb-8">
        <p className="text-label-md font-label-md uppercase tracking-[0.18em] text-secondary">Gestión de Innovación</p>
        <h1 className="mt-2 text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-primary">
          Buzón de Propuestas
        </h1>
        <p className="mt-2 max-w-2xl text-body-lg text-on-surface-variant">
          Revisa las ideas que los ciudadanos han enviado a tu organización. Selecciona una o varias propuestas afines y utiliza nuestra Inteligencia Artificial para fusionarlas en una nueva Iniciativa Comunitaria lista para publicar.
        </p>
      </div>

      <InboxClient initialIdeas={formattedIdeas} />
    </div>
  );
}
