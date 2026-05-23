import Link from 'next/link';
import { createSupabaseServerClient } from '../../../../../utils/supabase/server';
import { notFound } from 'next/navigation';

type InitiativePageProps = {
  params: Promise<{ id: string }>;
};

export default async function InitiativePage({ params }: InitiativePageProps) {
  const { id } = await params;
  const client = await createSupabaseServerClient();

  const { data: initiative, error } = await client
    .from('initiatives')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !initiative) {
    notFound();
  }

  // Use the image from DB, or a default placeholder if null
  const imageUrl = initiative.image_url || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800';
  
  const availableSpots = (initiative.max_participants || 0) - (initiative.current_participants || 0);

  return (
    <div>
      <section className="overflow-hidden rounded-[28px] border border-surface-variant/30 bg-surface-container-lowest shadow-sm">
        <div className="relative h-[380px] overflow-hidden bg-surface-container-high">
          <img alt={initiative.title} className="absolute inset-0 h-full w-full object-cover" src={imageUrl} />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/35 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-container-padding md:p-8">
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-secondary-container px-3 py-1 text-label-md font-label-md text-on-secondary-container shadow-sm">{initiative.category}</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-label-md font-label-md text-white backdrop-blur-sm">{initiative.region}</span>
              </div>
              <h1 className="mt-4 text-headline-lg-mobile font-headline-lg-mobile leading-tight text-white md:text-display-lg md:font-display-lg">{initiative.title}</h1>
              <p className="mt-3 max-w-2xl text-body-lg text-primary-fixed-dim">{initiative.summary || initiative.description.substring(0, 150) + '...'}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-bento-gap p-6 md:p-8 xl:grid-cols-[1.25fr_0.75fr]">
          <div className="space-y-bento-gap">
            <section className="rounded-3xl border border-surface-variant/30 bg-surface-container-low p-6 shadow-sm">
              <h2 className="flex items-center gap-2 text-title-lg font-title-lg text-primary">
                <span className="material-symbols-outlined text-secondary">info</span>
                Sobre la iniciativa
              </h2>
              <p className="mt-4 text-body-lg leading-relaxed text-on-surface-variant">
                {initiative.description}
              </p>
            </section>

            <section className="rounded-3xl border border-surface-variant/30 bg-surface-container-low p-6 shadow-sm">
              <h3 className="mb-6 text-label-lg font-label-lg uppercase tracking-wider text-outline">Datos Clave</h3>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  { value: initiative.points_reward || '0', label: 'Créditos', icon: 'military_tech', tone: 'tertiary' },
                  { value: initiative.max_participants || '∞', label: 'Cupos Totales', icon: 'groups', tone: 'secondary' },
                  { value: initiative.status === 'active' ? 'Activo' : 'Cerrado', label: 'Estado', icon: 'check_circle', tone: 'primary' },
                ].map((item) => (
                  <article key={item.label} className="rounded-2xl border border-surface-variant/30 bg-surface-container-low p-5 text-center">
                    <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full ${item.tone === 'primary' ? 'bg-primary-container/10 text-primary-container' : item.tone === 'secondary' ? 'bg-secondary-container/10 text-secondary' : 'bg-tertiary-container/10 text-tertiary'}`}>
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <p className="text-headline-lg font-headline-lg text-primary">{item.value}</p>
                    <p className="mt-1 text-label-md font-label-md text-on-surface-variant">{item.label}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-surface-variant/30 bg-surface-container-low p-6 shadow-sm">
              <h2 className="flex items-center gap-2 text-title-lg font-title-lg text-primary">
                <span className="material-symbols-outlined text-tertiary">school</span>
                Requisitos de formación
              </h2>
              <div className="mt-4 space-y-3">
                {initiative.required_skills && initiative.required_skills.length > 0 ? (
                  initiative.required_skills.map((skill: string) => (
                    <article key={skill} className="flex gap-3 rounded-2xl border border-surface-variant/30 bg-surface-container p-4">
                      <span className="material-symbols-outlined mt-0.5 text-tertiary">check_circle</span>
                      <div>
                        <h4 className="text-label-lg font-label-lg text-on-surface capitalize">{skill}</h4>
                      </div>
                    </article>
                  ))
                ) : (
                  <p className="text-body-md text-on-surface-variant">No se requieren habilidades específicas previas.</p>
                )}
              </div>
            </section>
          </div>

          <aside className="space-y-bento-gap">
            <section className="rounded-3xl border border-surface-variant/30 bg-primary p-6 text-on-primary shadow-lg">
              <h2 className="text-title-lg font-title-lg">¿Listo para impactar?</h2>
              {availableSpots > 0 ? (
                <p className="mt-3 text-body-md text-primary-fixed-dim">Quedan {availableSpots} cupos disponibles para unirte a esta iniciativa.</p>
              ) : (
                <p className="mt-3 text-body-md text-primary-fixed-dim">Actualmente no hay cupos límite o ya están cubiertos.</p>
              )}
              <button className="mt-6 flex w-full items-center justify-between rounded-xl bg-secondary-container px-5 py-3.5 text-label-lg font-label-lg text-on-secondary-container transition-colors hover:bg-secondary hover:text-on-secondary">
                Postular ahora
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </section>

            <section className="rounded-3xl border border-surface-variant/30 bg-surface-container-low p-6 shadow-sm">
              <h3 className="text-label-lg font-label-lg uppercase tracking-wider text-outline">Skills requeridos</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {initiative.required_skills && initiative.required_skills.length > 0 ? (
                  initiative.required_skills.map((skill: string) => (
                    <span key={skill} className="rounded-lg border border-outline-variant/30 bg-surface-container px-3 py-1 text-label-md font-label-md text-on-surface-variant capitalize">
                      {skill}
                    </span>
                  ))
                ) : (
                  <span className="text-body-md text-on-surface-variant">Sin requisitos especiales</span>
                )}
              </div>
            </section>

            <section className="rounded-3xl border border-surface-variant/30 bg-surface-container-low p-6 shadow-sm">
              <p className="text-label-md font-label-md uppercase tracking-[0.18em] text-secondary">Ruta</p>
              <p className="mt-2 text-body-md text-on-surface-variant truncate">ID: {id}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link className="rounded-2xl bg-primary px-4 py-3 text-label-lg font-label-lg text-on-primary" href="/iniciativas">
                  Volver al catálogo
                </Link>
                <Link className="rounded-2xl border border-outline-variant px-4 py-3 text-label-lg font-label-lg text-on-surface-variant" href="/dashboard">
                  Ir al dashboard
                </Link>
              </div>
            </section>
          </aside>
        </div>
      </section>
    </div>
  );
}
