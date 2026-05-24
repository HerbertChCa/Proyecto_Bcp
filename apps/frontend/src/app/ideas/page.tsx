import React from 'react';
import { SubmitIdeaForm } from './submit-idea-form';
import { createSupabaseServerClient } from '../../utils/supabase/server';
import { createClient } from '@supabase/supabase-js';

export default async function IdeasPage() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Create an admin client to fetch user metadata from auth.users (since role is there)
  // Or fetch from profiles if role was there, but since we didn't add role to profiles,
  // we'll just fetch all profiles for now or use admin API to get users with role = org.
  const adminClient = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { data: users, error } = await adminClient.auth.admin.listUsers();
  
  let orgs: { id: string, name: string }[] = [];
  if (!error && users?.users) {
    orgs = users.users
      .filter(u => u.user_metadata?.role === 'org')
      .map(u => ({
        id: u.id,
        name: u.user_metadata?.full_name || 'Organización Desconocida'
      }));
  }

  return (
    <div>
      <div className="mb-8">
        <p className="text-label-md font-label-md uppercase tracking-[0.18em] text-secondary">Participación Ciudadana</p>
        <h1 className="mt-2 text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-primary">
          Proponer una idea
        </h1>
        <p className="mt-2 max-w-2xl text-body-lg text-on-surface-variant">
          Envía tus ideas directamente a las organizaciones. Ellas podrán leer tu propuesta, sumarla con otras similares, y utilizar Inteligencia Artificial para crear iniciativas comunitarias de alto impacto.
        </p>
      </div>

      <div className="grid gap-bento-gap lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-[24px] border border-outline-variant/20 bg-surface-container-lowest p-8 shadow-sm">
          <SubmitIdeaForm orgs={orgs} />
        </section>

        <section className="rounded-[24px] border border-outline-variant/20 bg-surface-container-lowest p-8 shadow-sm h-fit">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container mb-4">
            <span className="material-symbols-outlined text-[24px]">lightbulb</span>
          </div>
          <h2 className="text-title-lg font-title-lg text-primary">¿Qué pasa con mi idea?</h2>
          <ul className="mt-4 space-y-4 text-body-md text-on-surface-variant">
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">send</span>
              <span>Tu idea se envía a la bandeja de entrada de la organización seleccionada.</span>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">group_work</span>
              <span>La organización revisa tu propuesta junto con otras similares enviadas por la comunidad.</span>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">auto_awesome</span>
              <span>Usando IA, la organización puede fusionar múltiples aportes para diseñar una iniciativa robusta.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
