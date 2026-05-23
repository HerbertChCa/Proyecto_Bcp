export default function ValidationPage() {
  return (
    <main className="px-container-padding py-8">
      <div className="mb-bento-gap flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-label-md font-label-md uppercase tracking-[0.18em] text-secondary">Validación</p>
          <h1 className="mt-2 text-headline-lg font-headline-lg text-primary">Cola de revisión</h1>
          <p className="mt-3 max-w-2xl text-body-lg font-body-lg text-on-surface-variant">
            Revisa iniciativas y sugerencias antes de publicarlas. Esta vista ahora sigue la misma estructura de navegación del panel.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="rounded-full border border-outline-variant bg-surface-container-lowest px-4 py-2 text-label-lg font-label-lg text-on-surface-variant">Todas</button>
          <button className="rounded-full bg-primary-container px-4 py-2 text-label-lg font-label-lg text-on-primary-container">Pendientes</button>
        </div>
      </div>

      <div className="grid gap-bento-gap lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-[24px] border border-outline-variant/20 bg-surface-container-lowest p-6 shadow-sm">
          <h2 className="text-title-lg font-title-lg text-primary">Solicitudes pendientes</h2>
          <div className="mt-6 space-y-4">
            <article className="rounded-2xl border border-outline-variant/20 bg-surface-container-low p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-label-lg font-label-lg text-on-surface">Jornada de reciclaje vecinal</p>
                  <p className="mt-1 text-body-md font-body-md text-on-surface-variant">Categoría: Ambiental · Origen: comunidad</p>
                </div>
                <span className="rounded-full bg-secondary-container px-3 py-1 text-label-md font-label-md text-on-secondary-container">Revisar</span>
              </div>
            </article>
            <article className="rounded-2xl border border-outline-variant/20 bg-surface-container-low p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-label-lg font-label-lg text-on-surface">Paraderos con mejor iluminación</p>
                  <p className="mt-1 text-body-md font-body-md text-on-surface-variant">Categoría: Infraestructura · Origen: IA</p>
                </div>
                <span className="rounded-full bg-primary-container px-3 py-1 text-label-md font-label-md text-on-primary-container">Validado</span>
              </div>
            </article>
          </div>
        </section>

        <aside className="space-y-bento-gap">
          <section className="rounded-[24px] border border-outline-variant/20 bg-surface-container-lowest p-6 shadow-sm">
            <h2 className="text-title-lg font-title-lg text-primary">Resumen</h2>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-surface-container-low p-4">
                <p className="text-label-md font-label-md text-on-surface-variant">Pendientes</p>
                <p className="mt-1 text-title-lg font-title-lg text-primary">8</p>
              </div>
              <div className="rounded-2xl bg-surface-container-low p-4">
                <p className="text-label-md font-label-md text-on-surface-variant">Aprobadas</p>
                <p className="mt-1 text-title-lg font-title-lg text-primary">21</p>
              </div>
            </div>
          </section>

          <section className="rounded-[24px] border border-outline-variant/20 bg-surface-container-lowest p-6 shadow-sm">
            <h3 className="text-label-lg font-label-lg uppercase tracking-wider text-outline">Acciones</h3>
            <div className="mt-4 flex flex-col gap-3">
              <button className="rounded-xl bg-primary px-4 py-3 text-label-lg font-label-lg text-on-primary">Aprobar selección</button>
              <button className="rounded-xl bg-secondary px-4 py-3 text-label-lg font-label-lg text-on-secondary">Solicitar cambios</button>
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}
