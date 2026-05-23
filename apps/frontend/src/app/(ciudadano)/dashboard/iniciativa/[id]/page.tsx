import Link from 'next/link';

type InitiativePageProps = {
  params: Promise<{ id: string }>;
};

export default async function InitiativePage({ params }: InitiativePageProps) {
  const { id } = await params;

  return (
    <div>
      <section className="overflow-hidden rounded-[28px] border border-surface-variant/30 bg-surface-container-lowest shadow-sm">
        <div className="relative h-[380px] overflow-hidden bg-surface-container-high">
          <img alt="Bosque Sostenible" className="absolute inset-0 h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb1vaIGuD4HLxaOapZZ04jT_hQcKZ9HNzuLzRkTr3vMujz_Ml9e7U5KwkJRtTbgVGdgeRtlNy5DzYvpac3p8u6z4dfsaIe7LEH2GG7DbRDKlywwf59in2CGekPIrv0smqHs0PMYrMbeeHCGpCY8PDN9kf0wLUrQnu05SKlAkBxbOMRlnMTpzIfSs3Nq7CVxNGcABULYXw1ibl8JZ0kItkqm0Obrb47L0FdmxX4bBWvNr70IE6tGRuP8_q5FOkb8SFN4G6evt5FrUY" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/35 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-container-padding md:p-8">
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-secondary-container px-3 py-1 text-label-md font-label-md text-on-secondary-container shadow-sm">Sostenibilidad</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-label-md font-label-md text-white backdrop-blur-sm">Impacto social</span>
              </div>
              <h1 className="mt-4 text-headline-lg-mobile font-headline-lg-mobile leading-tight text-white md:text-display-lg md:font-display-lg">Reforestación urbana sostenible</h1>
              <p className="mt-3 max-w-2xl text-body-lg text-primary-fixed-dim">Creando pulmones verdes en el corazón financiero mediante soluciones tecnológicas de irrigación y monitoreo IoT.</p>
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
                Buscamos desarrollar un sistema de monitoreo inteligente para nuevas áreas de reforestación urbana. El proyecto integra sensores de humedad y temperatura con una plataforma en la nube que optimiza el uso del agua y reporta el crecimiento vegetal en tiempo real.
              </p>
            </section>

            <section className="rounded-3xl border border-surface-variant/30 bg-surface-container-low p-6 shadow-sm">
              <h3 className="mb-6 text-label-lg font-label-lg uppercase tracking-wider text-outline">Metas y KPIs</h3>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  { value: '500+', label: 'Árboles monitoreados', icon: 'park', tone: 'tertiary' },
                  { value: '40%', label: 'Ahorro de agua', icon: 'water_drop', tone: 'secondary' },
                  { value: '99.9%', label: 'Uptime del sistema', icon: 'monitoring', tone: 'primary' },
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
                {[
                  ['Fundamentos IoT', 'Experiencia con Arduino, Raspberry Pi o sensores ambientales similares.'],
                  ['Cloud Architecture Basics', 'Conocimientos en AWS, Azure o Google Cloud para ingesta de datos.'],
                ].map(([title, text]) => (
                  <article key={title} className="flex gap-3 rounded-2xl border border-surface-variant/30 bg-surface-container p-4">
                    <span className="material-symbols-outlined mt-0.5 text-tertiary">check_circle</span>
                    <div>
                      <h4 className="text-label-lg font-label-lg text-on-surface">{title}</h4>
                      <p className="mt-1 text-body-md text-on-surface-variant">{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-bento-gap">
            <section className="rounded-3xl border border-surface-variant/30 bg-primary p-6 text-on-primary shadow-lg">
              <h2 className="text-title-lg font-title-lg">¿Listo para impactar?</h2>
              <p className="mt-3 text-body-md text-primary-fixed-dim">Quedan 2 cupos disponibles para desarrolladores de hardware y backend.</p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-primary-fixed/20 bg-primary-container/50 px-3 py-1.5 text-label-md font-label-md text-primary-fixed">
                <span className="material-symbols-outlined text-[16px]">schedule</span>
                Dedicación: 15h semanales
              </div>
              <button className="mt-6 flex w-full items-center justify-between rounded-xl bg-secondary-container px-5 py-3.5 text-label-lg font-label-lg text-on-secondary-container transition-colors hover:bg-secondary hover:text-on-secondary">
                Postular ahora
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </section>

            <section className="rounded-3xl border border-surface-variant/30 bg-surface-container-low p-6 shadow-sm">
              <h3 className="text-label-lg font-label-lg uppercase tracking-wider text-outline">Equipo actual</h3>
              <div className="mt-4 space-y-4">
                {[
                  ['Ana López', 'Líder de proyecto'],
                  ['Carlos Ruiz', 'Especialista IoT'],
                  ['Elena Silva', 'UX/UI Designer'],
                ].map(([name, role]) => (
                  <div key={name} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-variant text-on-surface-variant">{name.slice(0, 1)}</div>
                    <div>
                      <p className="text-label-lg font-label-lg text-on-surface">{name}</p>
                      <p className="text-label-md font-label-md text-on-surface-variant">{role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-surface-variant/30 bg-surface-container-low p-6 shadow-sm">
              <h3 className="text-label-lg font-label-lg uppercase tracking-wider text-outline">Skills requeridos</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {['C++', 'Python', 'AWS IoT Core', 'Agile'].map((skill) => (
                  <span key={skill} className="rounded-lg border border-outline-variant/30 bg-surface-container px-3 py-1 text-label-md font-label-md text-on-surface-variant">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-surface-variant/30 bg-surface-container-low p-6 shadow-sm">
              <p className="text-label-md font-label-md uppercase tracking-[0.18em] text-secondary">Ruta</p>
              <p className="mt-2 text-body-md text-on-surface-variant">ID de iniciativa: {id}</p>
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
