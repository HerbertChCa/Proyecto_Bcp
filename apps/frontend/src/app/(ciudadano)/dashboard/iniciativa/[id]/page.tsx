import Link from 'next/link';

type InitiativePageProps = {
  params: Promise<{ id: string }>;
};

export default async function InitiativePage({ params }: InitiativePageProps) {
  const { id } = await params;

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex">
      <aside className="bg-surface-container-low dark:bg-surface-container-low fixed left-0 top-0 h-full w-64 flex flex-col py-8 px-4 z-50 shadow-sm border-r border-surface-variant/50 hidden md:flex">
        <div className="flex items-center gap-3 px-4 mb-10">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-on-primary">
            <span className="material-symbols-outlined">rocket_launch</span>
          </div>
          <div>
            <h1 className="text-title-lg font-title-lg font-bold text-primary dark:text-primary-fixed-dim">LánZate</h1>
            <p className="text-label-md font-label-md text-on-surface-variant">Participación Ciudadana</p>
          </div>
        </div>
        <nav className="flex-1 space-y-2">
          <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors" href="/dashboard">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-label-lg font-label-lg">Dashboard</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors" href="/dashboard/perfil">
            <span className="material-symbols-outlined">person</span>
            <span className="text-label-lg font-label-lg">Perfil</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-primary font-bold bg-primary-fixed/20 scale-95 duration-100" href="/ideas">
            <span className="material-symbols-outlined icon-fill">lightbulb</span>
            <span className="text-label-lg font-label-lg">Ideas</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors" href="/org-panel">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-label-lg font-label-lg">Gestión</span>
          </Link>
        </nav>
        <div className="mt-auto pt-8 border-t border-surface-variant/50">
          <button className="w-full bg-secondary text-on-secondary rounded-xl py-3 flex items-center justify-center gap-2 font-label-lg text-label-lg hover:opacity-90 transition-opacity shadow-sm">
            <span className="material-symbols-outlined text-sm">add</span>
            Participar
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-h-screen md:ml-64 w-full max-w-[100vw] md:max-w-[calc(100%-16rem)] relative">
        <header className="bg-surface/80 backdrop-blur-md dark:bg-surface/80 docked full-width top shadow-sm flex justify-between items-center w-full px-container-padding py-4 sticky top-0 z-40">
          <div className="flex items-center gap-4 flex-1">
            <span className="text-title-lg font-title-lg font-bold text-primary dark:text-primary-fixed-dim md:hidden">LánZate</span>
            <div className="relative hidden md:block w-full max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
              <input className="w-full bg-surface-container-high border-none rounded-full py-2 pl-10 pr-4 text-body-md font-body-md focus:ring-2 focus:ring-primary/50 text-on-surface outline-none transition-all" placeholder="Buscar iniciativas..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-on-surface-variant hover:text-primary transition-colors w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container">
              <span className="material-symbols-outlined">military_tech</span>
            </button>
            <button className="text-on-surface-variant hover:text-primary transition-colors w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container relative">
              <span className="material-symbols-outlined">monetization_on</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full" />
            </button>
            <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-full h-full object-cover bg-gray-200" aria-hidden="true" />
            </div>
          </div>
        </header>

        <main className="flex-1 w-full pb-16">
          <section className="relative w-full h-[400px] bg-surface-container-high overflow-hidden">
            <img alt="Bosque Sostenible" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb1vaIGuD4HLxaOapZZ04jT_hQcKZ9HNzuLzRkTr3vMujz_Ml9e7U5KwkJRtTbgVGdgeRtlNy5DzYvpac3p8u6z4dfsaIe7LEH2GG7DbRDKlywwf59in2CGekPIrv0smqHs0PMYrMbeeHCGpCY8PDN9kf0wLUrQnu05SKlAkBxbOMRlnMTpzIfSs3Nq7CVxNGcABULYXw1ibl8JZ0kItkqm0Obrb47L0FdmxX4bBWvNr70IE6tGRuP8_q5FOkb8SFN4G6evt5FrUY" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-container-padding md:p-8 flex flex-col justify-end">
              <div className="max-w-7xl mx-auto w-full">
                <div className="flex gap-2 mb-4">
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-md font-label-md shadow-sm">Sostenibilidad</span>
                  <span className="glass-overlay text-white px-3 py-1 rounded-full text-label-md font-label-md">Impacto Social</span>
                </div>
                <h1 className="text-display-lg font-display-lg text-white mb-2 leading-tight drop-shadow-md">Reforestación Urbana Sostenible</h1>
                <p className="text-body-lg font-body-lg text-primary-fixed-dim max-w-2xl drop-shadow-sm">Creando pulmones verdes en el corazón financiero mediante soluciones tecnológicas de irrigación y monitoreo IoT.</p>
              </div>
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-container-padding py-8 grid grid-cols-1 lg:grid-cols-12 gap-bento-gap">
            <div className="lg:col-span-8 flex flex-col gap-bento-gap">
              <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-surface-variant/30">
                <h2 className="text-title-lg font-title-lg text-primary mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">info</span>
                  Sobre la Iniciativa
                </h2>
                <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">Buscamos desarrollar un sistema de monitoreo inteligente para nuevas áreas de reforestación urbana. El proyecto requiere la integración de sensores de humedad y temperatura con una plataforma en la nube que optimice el uso del agua y reporte el crecimiento vegetal en tiempo real. Este esfuerzo no solo mejorará la calidad del aire local, sino que también establecerá un modelo replicable para futuras intervenciones ecológicas en la ciudad.</p>
              </div>

              <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-surface-variant/30">
                <h3 className="text-label-lg font-label-lg text-outline uppercase tracking-wider mb-6">Metas y KPIs</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center p-6 rounded-2xl bg-surface-container-low border border-surface-variant/50 text-center hover:shadow-sm transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-tertiary-container/10 flex items-center justify-center text-tertiary mb-3">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>park</span>
                    </div>
                    <span className="text-headline-lg font-headline-lg text-primary">500+</span>
                    <span className="text-label-md font-label-md text-on-surface-variant mt-1">Árboles Monitoreados</span>
                  </div>
                  <div className="flex flex-col items-center p-6 rounded-2xl bg-surface-container-low border border-surface-variant/50 text-center hover:shadow-sm transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-secondary-container/10 flex items-center justify-center text-secondary mb-3">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>water_drop</span>
                    </div>
                    <span className="text-headline-lg font-headline-lg text-primary">40%</span>
                    <span className="text-label-md font-label-md text-on-surface-variant mt-1">Ahorro de Agua</span>
                  </div>
                  <div className="flex flex-col items-center p-6 rounded-2xl bg-surface-container-low border border-surface-variant/50 text-center hover:shadow-sm transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container mb-3">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>monitoring</span>
                    </div>
                    <span className="text-headline-lg font-headline-lg text-primary">99.9%</span>
                    <span className="text-label-md font-label-md text-on-surface-variant mt-1">Uptime del Sistema</span>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-surface-variant/30">
                <h2 className="text-title-lg font-title-lg text-primary mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary">school</span>
                  Requisitos de Formación
                </h2>
                <p className="text-body-md font-body-md text-on-surface-variant mb-6">Para asegurar el éxito técnico del proyecto, los postulantes deben contar con certificaciones o experiencia comprobable en las siguientes áreas:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 bg-surface-container-low p-4 rounded-xl border border-surface-variant/30">
                    <span className="material-symbols-outlined text-tertiary shrink-0 mt-0.5">check_circle</span>
                    <div>
                      <h4 className="text-label-lg font-label-lg text-on-surface">Fundamentos IoT</h4>
                      <p className="text-body-md font-body-md text-on-surface-variant mt-1">Experiencia con Arduino, Raspberry Pi o sensores ambientales similares.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 bg-surface-container-low p-4 rounded-xl border border-surface-variant/30">
                    <span className="material-symbols-outlined text-tertiary shrink-0 mt-0.5">check_circle</span>
                    <div>
                      <h4 className="text-label-lg font-label-lg text-on-surface">Cloud Architecture Basics</h4>
                      <p className="text-body-md font-body-md text-on-surface-variant mt-1">Conocimientos en AWS, Azure o Google Cloud para ingesta de datos.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <aside className="lg:col-span-4 flex flex-col gap-bento-gap">
              <div className="bg-primary rounded-3xl p-8 shadow-lg text-on-primary relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary-fixed/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <h2 className="text-title-lg font-title-lg mb-2 relative z-10">¿Listo para Impactar?</h2>
                <p className="text-body-md font-body-md text-primary-fixed-dim mb-6 relative z-10">Quedan 2 cupos disponibles para desarrolladores de hardware y backend.</p>
                <div className="flex items-center gap-2 mb-6 text-primary-fixed bg-primary-container/50 w-fit px-3 py-1.5 rounded-lg text-label-md font-label-md border border-primary-fixed/20 relative z-10">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  Dedicación: 15h semanales
                </div>
                <button className="w-full bg-secondary-container text-on-secondary-container hover:bg-secondary hover:text-on-secondary transition-colors rounded-xl py-3.5 px-6 font-label-lg text-label-lg flex items-center justify-between shadow-md relative z-10 group/btn">
                  Postular ahora
                  <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>

              <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-surface-variant/30">
                <h3 className="text-label-lg font-label-lg text-outline uppercase tracking-wider mb-4">Equipo Actual</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-surface-variant border border-surface-variant" aria-hidden="true" />
                    <div>
                      <p className="text-label-lg font-label-lg text-on-surface">Ana López</p>
                      <p className="text-label-md font-label-md text-on-surface-variant">Líder de Proyecto</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-surface-variant border border-surface-variant" aria-hidden="true" />
                    <div>
                      <p className="text-label-lg font-label-lg text-on-surface">Carlos Ruiz</p>
                      <p className="text-label-md font-label-md text-on-surface-variant">Especialista IoT</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-surface-variant border border-surface-variant" aria-hidden="true" />
                    <div>
                      <p className="text-label-lg font-label-lg text-on-surface">Elena Silva</p>
                      <p className="text-label-md font-label-md text-on-surface-variant">UX/UI Designer</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-surface-variant/30">
                <h3 className="text-label-lg font-label-lg text-outline uppercase tracking-wider mb-4">Skills Requeridos</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-surface-variant/50 text-on-surface-variant rounded-lg border border-outline-variant/30 text-label-md font-label-md">C++</span>
                  <span className="px-3 py-1 bg-surface-variant/50 text-on-surface-variant rounded-lg border border-outline-variant/30 text-label-md font-label-md">Python</span>
                  <span className="px-3 py-1 bg-surface-variant/50 text-on-surface-variant rounded-lg border border-outline-variant/30 text-label-md font-label-md">AWS IoT Core</span>
                  <span className="px-3 py-1 bg-surface-variant/50 text-on-surface-variant rounded-lg border border-outline-variant/30 text-label-md font-label-md">Agile</span>
                </div>
              </div>
            </aside>
          </section>
        </main>

        <footer className="bg-surface-container dark:bg-surface-container-highest w-full mt-auto flex flex-col md:flex-row justify-between items-center px-container-padding py-8 border-t border-surface-variant/30 md:ml-64 md:max-w-[calc(100%-16rem)]">
          <div className="mb-4 md:mb-0">
            <span className="text-label-lg font-label-lg font-bold text-primary">LánZate</span>
            <p className="text-body-md font-body-md text-on-surface-variant dark:text-on-surface-variant mt-1">© 2024 LánZate - Plataforma de Participación Ciudadana</p>
          </div>
          <div className="flex gap-6">
            <Link className="text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors" href="/legal">Aviso Legal</Link>
            <Link className="text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors" href="/privacidad">Privacidad</Link>
            <Link className="text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors" href="/terminos">Términos</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
