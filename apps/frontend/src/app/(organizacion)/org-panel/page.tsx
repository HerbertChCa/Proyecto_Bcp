import Link from 'next/link';
import { createSupabaseServerClient } from '../../../utils/supabase/server';

export default async function OrgPanelPage() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Fetch real counts
  const { count: ideasCount } = await supabase
    .from('raw_ideas')
    .select('*', { count: 'exact', head: true })
    .eq('target_org_id', user?.id || '');

  // Fetch recent ideas (last 3)
  const { data: recentIdeas } = await supabase
    .from('raw_ideas')
    .select('id, content, created_at')
    .eq('target_org_id', user?.id || '')
    .order('created_at', { ascending: false })
    .limit(3);

  const orgName = user?.user_metadata?.full_name || 'Organización';

  return (
    <div>
      <div className="mb-8">
        <p className="text-label-md font-label-md uppercase tracking-[0.18em] text-secondary">Panel de {orgName}</p>
        <h1 className="mt-2 text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-primary">
          Panel de organización
        </h1>
        <p className="mt-2 max-w-2xl text-body-lg text-on-surface-variant">
          Revisa las propuestas ciudadanas que te han enviado, sintetízalas con IA y publica nuevas iniciativas.
        </p>
      </div>

      <div className="grid gap-bento-gap xl:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-[28px] border border-surface-variant/30 bg-surface-container-lowest p-6 shadow-sm md:p-8">
          <h2 className="text-headline-lg-mobile font-headline-lg-mobile text-primary">Gestiona tu impacto comunitario.</h2>
          <p className="mt-3 max-w-2xl text-body-lg text-on-surface-variant">
            Revisa las ideas que te han enviado los ciudadanos, sintetiza las mejores con IA y crea una nueva iniciativa para tu comunidad.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-outline-variant/20 bg-surface-container p-5">
              <h3 className="text-title-lg font-title-lg text-on-surface">Acciones principales</h3>
              <div className="mt-4 flex flex-col gap-3">
                <Link className="rounded-2xl border border-outline-variant/20 bg-surface-container-low px-4 py-4 text-label-lg font-label-lg text-on-surface-variant transition-colors hover:border-primary hover:text-primary flex items-center gap-3" href="/org-panel/ideas">
                  <span className="material-symbols-outlined text-[20px]">inbox</span>
                  Buzón de Ideas ({ideasCount || 0} propuestas)
                </Link>
                <Link className="rounded-2xl border border-outline-variant/20 bg-surface-container-low px-4 py-4 text-label-lg font-label-lg text-on-surface-variant transition-colors hover:border-primary hover:text-primary flex items-center gap-3" href="/org-panel/nueva-iniciativa">
                  <span className="material-symbols-outlined text-[20px]">add_circle</span>
                  Crear nueva iniciativa
                </Link>
              </div>
            </article>

            <article className="rounded-2xl border border-outline-variant/20 bg-primary p-5 text-on-primary">
              <h3 className="text-title-lg font-title-lg">Acciones rápidas</h3>
              <div className="mt-4 flex flex-col gap-3">
                <Link className="rounded-2xl bg-secondary px-4 py-3 text-center text-label-lg font-label-lg font-bold text-on-secondary shadow-sm transition-transform hover:-translate-y-0.5" href="/org-panel/nueva-iniciativa">
                  Crear iniciativa
                </Link>
                <Link className="rounded-2xl border border-white/20 px-4 py-3 text-center text-label-lg font-label-lg font-bold text-white transition-colors hover:bg-white/10" href="/org-panel/ideas">
                  Revisar propuestas
                </Link>
              </div>
            </article>
          </div>
        </section>

        <aside className="space-y-bento-gap">
          <section className="rounded-[28px] border border-surface-variant/30 bg-surface-container-lowest p-6 shadow-sm">
            <h2 className="text-title-lg font-title-lg text-primary">Propuestas recientes</h2>
            <div className="mt-4 space-y-3">
              {(recentIdeas && recentIdeas.length > 0) ? recentIdeas.map((idea) => (
                <article key={idea.id} className="rounded-2xl border border-outline-variant/20 bg-surface-container p-4 text-body-md text-on-surface-variant">
                  <p className="line-clamp-2">{idea.content}</p>
                  <p className="mt-2 text-label-md text-on-surface-variant/60">{new Date(idea.created_at).toLocaleDateString()}</p>
                </article>
              )) : (
                <p className="rounded-2xl bg-surface-container p-4 text-body-md text-on-surface-variant">Aún no has recibido propuestas ciudadanas.</p>
              )}
            </div>
          </section>

          <section className="rounded-[28px] border border-surface-variant/30 bg-tertiary-container p-6 text-on-tertiary-container shadow-sm">
            <h2 className="text-title-lg font-title-lg">Resumen</h2>
            <p className="mt-3 text-body-md">
              Propuestas ciudadanas recibidas y actividad de tu organización.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                [String(ideasCount || 0), 'Ideas recibidas'],
                ['—', 'Iniciativas publicadas'],
              ].map(([value, label]) => (
                <article key={label} className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-bold">{value}</p>
                  <p className="mt-1 text-label-md font-label-md opacity-80">{label}</p>
                </article>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
