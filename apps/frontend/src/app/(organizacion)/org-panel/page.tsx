export default function OrgPanelPage() {
  return (
    <main className="px-container-padding py-8">
      <section className="relative overflow-hidden rounded-[24px] border border-outline-variant/20 bg-surface-container-lowest p-8 shadow-sm">
        <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/3 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />
        <div className="relative z-10 text-center">
          <p className="text-label-md font-label-md uppercase tracking-[0.18em] text-tertiary">Panel de organización</p>
          <h1 className="mt-3 text-headline-lg font-headline-lg text-primary">Radar de ideas</h1>
          <p className="mx-auto mt-4 max-w-2xl text-body-lg font-body-lg text-on-surface-variant">Explora ideas generadas por la comunidad y proyectos sugeridos por IA.</p>
        </div>

        <div className="relative z-10 mt-bento-gap grid gap-bento-gap md:grid-cols-2">
          <section className="rounded-2xl border border-surface-variant/50 bg-surface-container p-6">
            <h2 className="text-title-lg font-title-lg text-primary">Filtrar ideas</h2>
            <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
              <button className="flex flex-col items-center justify-center rounded-2xl border-2 border-transparent bg-surface-container p-6 text-center transition-all hover:border-primary/30">
                <span className="material-symbols-outlined mb-3 text-4xl text-on-surface-variant">eco</span>
                <span className="text-label-lg font-label-lg text-on-surface">Medio ambiente</span>
              </button>
              <button className="flex flex-col items-center justify-center rounded-2xl border-2 border-transparent bg-surface-container p-6 text-center transition-all hover:border-primary/30">
                <span className="material-symbols-outlined mb-3 text-4xl text-on-surface-variant">school</span>
                <span className="text-label-lg font-label-lg text-on-surface">Educación</span>
              </button>
              <button className="flex flex-col items-center justify-center rounded-2xl border-2 border-transparent bg-surface-container p-6 text-center transition-all hover:border-primary/30">
                <span className="material-symbols-outlined mb-3 text-4xl text-on-surface-variant">transportation</span>
                <span className="text-label-lg font-label-lg text-on-surface">Movilidad</span>
              </button>
              <button className="flex flex-col items-center justify-center rounded-2xl border-2 border-transparent bg-surface-container p-6 text-center transition-all hover:border-primary/30">
                <span className="material-symbols-outlined mb-3 text-4xl text-on-surface-variant">groups</span>
                <span className="text-label-lg font-label-lg text-on-surface">Comunidad</span>
              </button>
            </div>
          </section>

          <section className="rounded-2xl border border-surface-variant/50 bg-surface-container p-6">
            <h2 className="text-title-lg font-title-lg text-primary">Acciones rápidas</h2>
            <div className="mt-4 flex flex-col gap-3">
              <button className="rounded-xl bg-secondary px-4 py-3 text-label-lg font-label-lg text-on-secondary">Crear iniciativa</button>
              <button className="rounded-xl bg-primary px-4 py-3 text-label-lg font-label-lg text-on-primary">Revisar sugerencias IA</button>
            </div>
          </section>
        </div>

        <div className="relative z-10 mt-bento-gap grid gap-bento-gap md:grid-cols-2">
          <section className="rounded-2xl border border-outline-variant/20 bg-surface-container-lowest p-4">
            <h3 className="text-label-lg font-label-lg font-semibold text-on-surface">Sugerencias recientes</h3>
            <div className="mt-3 space-y-3">
              <div className="rounded-lg border border-outline-variant/20 bg-white/60 p-3">Idea 1: Mejorar paraderos</div>
              <div className="rounded-lg border border-outline-variant/20 bg-white/60 p-3">Idea 2: Jornada de reciclaje</div>
            </div>
          </section>
          <section className="rounded-2xl border border-outline-variant/20 bg-surface-container-lowest p-4">
            <h3 className="text-label-lg font-label-lg font-semibold text-on-surface">Estadísticas</h3>
            <p className="mt-2 text-body-md font-body-md text-on-surface-variant">Ideas por categoría, participación y tendencias.</p>
          </section>
        </div>
      </section>
    </main>
  );
}
