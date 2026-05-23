export default function ValidationPage() {
  return (
    <div>
      <div className="mb-bento-gap flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-label-md font-label-md uppercase tracking-[0.18em] text-secondary">Validación</p>
          <h1 className="mt-2 text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-primary">
            Validación de Asistencia
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-on-surface-variant">
            Mantén un criterio consistente al aprobar, pedir cambios o escalar una sugerencia a iniciativa.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="rounded-full border border-outline-variant bg-surface-container-lowest px-4 py-2 text-label-lg font-label-lg text-on-surface-variant">Todas</button>
          <button className="rounded-full bg-primary-container px-4 py-2 text-label-lg font-label-lg text-on-primary-container">Pendientes</button>
        </div>
      </div>

      <div className="grid gap-bento-gap lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-[28px] border border-surface-variant/30 bg-surface-container-lowest p-6 shadow-sm">
          <h2 className="text-title-lg font-title-lg text-primary">Solicitudes pendientes</h2>
          <div className="mt-6 space-y-4">
            <article className="rounded-2xl border border-outline-variant/20 bg-surface-container p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-label-lg font-label-lg text-on-surface">Jornada de reciclaje vecinal</p>
                  <p className="mt-1 text-body-md text-on-surface-variant">Categoría: Ambiental · Origen: comunidad</p>
                </div>
                <span className="rounded-full bg-secondary-container px-3 py-1 text-label-md font-label-md text-on-secondary-container whitespace-nowrap">Revisar</span>
              </div>
            </article>
            <article className="rounded-2xl border border-outline-variant/20 bg-surface-container p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-label-lg font-label-lg text-on-surface">Paraderos con mejor iluminación</p>
                  <p className="mt-1 text-body-md text-on-surface-variant">Categoría: Infraestructura · Origen: IA</p>
                </div>
                <span className="rounded-full bg-primary-container px-3 py-1 text-label-md font-label-md text-on-primary-container whitespace-nowrap">Validado</span>
              </div>
            </article>
            <article className="rounded-2xl border border-outline-variant/20 bg-surface-container p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-label-lg font-label-lg text-on-surface">Red de tutorías entre estudiantes</p>
                  <p className="mt-1 text-body-md text-on-surface-variant">Categoría: Educación · Origen: comunidad</p>
                </div>
                <span className="rounded-full bg-tertiary-container px-3 py-1 text-label-md font-label-md text-on-tertiary-container whitespace-nowrap">Editar</span>
              </div>
            </article>
          </div>
        </section>

        <aside className="space-y-bento-gap">
          <section className="rounded-[28px] border border-surface-variant/30 bg-surface-container-lowest p-6 shadow-sm">
            <h2 className="text-title-lg font-title-lg text-primary">Resumen</h2>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-surface-container p-4">
                <p className="text-label-md font-label-md text-on-surface-variant">Pendientes</p>
                <p className="mt-1 text-title-lg font-title-lg text-primary">8</p>
              </div>
              <div className="rounded-2xl bg-surface-container p-4">
                <p className="text-label-md font-label-md text-on-surface-variant">Aprobadas</p>
                <p className="mt-1 text-title-lg font-title-lg text-primary">21</p>
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border border-surface-variant/30 bg-surface-container-lowest p-6 shadow-sm">
            <h3 className="text-label-lg font-label-lg uppercase tracking-wider text-outline">Acciones</h3>
            <div className="mt-4 flex flex-col gap-3">
              <button className="rounded-2xl bg-primary px-4 py-3 text-label-lg font-label-lg font-bold text-on-primary transition-all hover:-translate-y-0.5">Aprobar selección</button>
              <button className="rounded-2xl bg-secondary px-4 py-3 text-label-lg font-label-lg font-bold text-on-secondary transition-all hover:-translate-y-0.5">Solicitar cambios</button>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
