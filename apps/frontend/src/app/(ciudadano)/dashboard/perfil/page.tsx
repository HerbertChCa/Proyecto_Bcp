export default function ProfilePage() {
  return (
    <div>
      {/* Profile header */}
      <section className="rounded-[28px] border border-surface-variant/30 bg-surface-container-lowest p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="relative shrink-0">
            <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-surface-container-lowest bg-primary-container text-display-lg font-bold text-on-primary-container shadow-md">
              CM
            </div>
            <div className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-surface-container-lowest bg-secondary text-on-secondary shadow-sm">
              <span className="material-symbols-outlined text-[20px]">star</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="inline-flex rounded-full bg-tertiary-container px-3 py-1 text-label-md font-label-md text-on-tertiary-container">
              Rango: Ciudadano Activo
            </div>
            <h1 className="mt-4 text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-primary">Carlos Mendoza</h1>
            <p className="mt-2 text-body-md text-on-surface-variant">Estudiante de Arquitectura • 1,450 pts de impacto</p>
            <div className="mt-6 max-w-xl">
              <div className="mb-2 flex items-end justify-between">
                <span className="text-label-lg font-label-lg text-primary">Progreso hacia Nivel 4</span>
                <span className="text-label-md font-label-md text-on-surface-variant">150 pts restantes</span>
              </div>
              <div className="h-4 w-full overflow-hidden rounded-full bg-surface-variant">
                <div className="h-full rounded-full bg-secondary" style={{ width: '75%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-bento-gap grid gap-bento-gap xl:grid-cols-[1.3fr_0.9fr]">
        {/* Impact history */}
        <section className="rounded-[28px] border border-surface-variant/30 bg-surface-container-lowest p-6 shadow-sm md:p-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-title-lg font-title-lg text-primary">Mi historial de impacto</h2>
            <button className="text-label-lg font-label-lg text-secondary hover:underline">Ver todo</button>
          </div>
          <div className="mt-6 space-y-4">
            {[
              ['Limpieza Parque Central', '+50 pts', 'Voluntariado ambiental de fin de semana.', 'Hace 2 días', 'park'],
              ['Campaña de Reciclaje', '+30 pts', 'Organización de puntos limpios en el campus.', '12 Oct 2024', 'campaign'],
              ['Foro Vecinal Sur', '+15 pts', 'Participación activa en el debate sobre movilidad.', '28 Sep 2024', 'forum'],
            ].map(([title, points, description, date, icon]) => (
              <article key={title} className="flex gap-4 rounded-2xl border border-outline-variant/20 bg-surface-container p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-container text-on-primary-container">
                  <span className="material-symbols-outlined text-[18px]">{icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-label-lg font-label-lg font-bold text-on-surface">{title}</h3>
                    <span className="text-label-md font-label-md font-bold text-secondary shrink-0">{points}</span>
                  </div>
                  <p className="mt-1 text-body-md text-on-surface-variant">{description}</p>
                  <p className="mt-2 text-label-md font-label-md text-on-surface-variant">{date}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Rewards */}
        <section className="rounded-[28px] border border-surface-variant/30 bg-surface-container-lowest p-6 shadow-sm md:p-8">
          <h2 className="text-title-lg font-title-lg text-primary">Mis recompensas</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl bg-primary-container p-4 text-on-primary-container">
              <p className="text-label-lg font-label-lg font-bold">Café gratis</p>
              <p className="mt-1 text-label-md font-label-md opacity-80">Cafetería Central</p>
              <button className="mt-4 w-full rounded-xl bg-white/10 px-3 py-2 text-label-md font-label-md font-bold transition-colors hover:bg-white/20">
                Ver código
              </button>
            </article>
            <article className="rounded-2xl bg-tertiary-container p-4 text-on-tertiary-container">
              <p className="text-label-lg font-label-lg font-bold">20% Dto. Librería</p>
              <p className="mt-1 text-label-md font-label-md opacity-80">Librería El Ateneo</p>
              <button className="mt-4 w-full rounded-xl bg-white/10 px-3 py-2 text-label-md font-label-md font-bold transition-colors hover:bg-white/20">
                Ver código
              </button>
            </article>
            <article className="rounded-2xl border border-outline-variant/20 bg-surface-container p-4 text-on-surface-variant">
              <p className="text-label-lg font-label-lg font-bold text-on-surface">Bono transporte</p>
              <p className="mt-1 text-label-md font-label-md">Desbloquea en Nivel 4</p>
            </article>
            <article className="rounded-2xl border border-outline-variant/20 bg-surface-container p-4 text-on-surface-variant">
              <p className="text-label-lg font-label-lg font-bold text-on-surface">Certificado social</p>
              <p className="mt-1 text-label-md font-label-md">Disponible tras 300 pts más</p>
            </article>
          </div>
          <button className="mt-6 inline-flex items-center gap-2 text-label-lg font-label-lg text-primary hover:underline">
            Explorar catálogo de recompensas
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </section>
      </div>
    </div>
  );
}
