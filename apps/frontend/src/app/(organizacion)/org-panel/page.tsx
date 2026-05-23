import Link from 'next/link';

export default function OrgPanelPage() {
  return (
    <div>
      <div className="mb-8">
        <p className="text-label-md font-label-md uppercase tracking-[0.18em] text-secondary">Radar</p>
        <h1 className="mt-2 text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-primary">
          Panel de organización
        </h1>
        <p className="mt-2 max-w-2xl text-body-lg text-on-surface-variant">
          Gestiona el radar de ideas, prioriza propuestas y salta rápidamente a la publicación.
        </p>
      </div>

      <div className="grid gap-bento-gap xl:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-[28px] border border-surface-variant/30 bg-surface-container-lowest p-6 shadow-sm md:p-8">
          <h2 className="text-headline-lg-mobile font-headline-lg-mobile text-primary">Explora ideas de la comunidad y propuestas IA.</h2>
          <p className="mt-3 max-w-2xl text-body-lg text-on-surface-variant">
            Filtra por interés, abre el panel de validación y publica una nueva iniciativa sin cambiar de estilo ni de contexto.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-outline-variant/20 bg-surface-container p-5">
              <h3 className="text-title-lg font-title-lg text-on-surface">Filtrar ideas</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {['Medio ambiente', 'Educación', 'Infraestructura', 'Cultura'].map((item) => (
                  <button key={item} className="rounded-2xl border border-outline-variant/20 bg-surface-container-low px-4 py-4 text-label-lg font-label-lg text-on-surface-variant transition-colors hover:border-primary hover:text-primary">
                    {item}
                  </button>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-outline-variant/20 bg-primary p-5 text-on-primary">
              <h3 className="text-title-lg font-title-lg">Acciones rápidas</h3>
              <div className="mt-4 flex flex-col gap-3">
                <Link className="rounded-2xl bg-secondary px-4 py-3 text-center text-label-lg font-label-lg font-bold text-on-secondary shadow-sm transition-transform hover:-translate-y-0.5" href="/org-panel/nueva-iniciativa">
                  Crear iniciativa
                </Link>
                <Link className="rounded-2xl border border-white/20 px-4 py-3 text-center text-label-lg font-label-lg font-bold text-white transition-colors hover:bg-white/10" href="/org-panel/validacion">
                  Revisar sugerencias IA
                </Link>
              </div>
            </article>
          </div>
        </section>

        <aside className="space-y-bento-gap">
          <section className="rounded-[28px] border border-surface-variant/30 bg-surface-container-lowest p-6 shadow-sm">
            <h2 className="text-title-lg font-title-lg text-primary">Sugerencias recientes</h2>
            <div className="mt-4 space-y-3">
              {['Mejorar paraderos cercanos al campus', 'Jornada de reciclaje con seguimiento', 'Ruta segura para movilidad nocturna'].map((idea) => (
                <article key={idea} className="rounded-2xl border border-outline-variant/20 bg-surface-container p-4 text-body-md text-on-surface-variant">
                  {idea}
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[28px] border border-surface-variant/30 bg-tertiary-container p-6 text-on-tertiary-container shadow-sm">
            <h2 className="text-title-lg font-title-lg">Estadísticas</h2>
            <p className="mt-3 text-body-md">
              Ideas por categoría, participación, validación pendiente y tendencias de publicación.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                ['32', 'Ideas activas'],
                ['8', 'Pendientes'],
                ['14', 'Revisadas'],
                ['4', 'Publicadas hoy'],
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
