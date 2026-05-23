import Link from 'next/link';

const opportunities = [
  {
    title: 'Programa de Reciclaje en Campus',
    category: 'Ambiental',
    summary: 'Apoya la instalación de puntos limpios y el seguimiento de residuos con métricas públicas.',
    points: '2 créditos',
    members: '12 apuntados',
    icon: 'recycling',
    accent: 'bg-tertiary-container text-on-tertiary-container',
  },
  {
    title: 'Tutorías para Escolares',
    category: 'Social',
    summary: 'Acompaña a estudiantes de secundaria con sesiones de matemáticas y lectoescritura.',
    points: '3 créditos',
    members: '5 apuntados',
    icon: 'school',
    accent: 'bg-secondary-container text-on-secondary-container',
  },
  {
    title: 'App de Movilidad Urbana',
    category: 'Tecnología',
    summary: 'Valida prototipos de rutas inteligentes para mejorar los traslados de la comunidad.',
    points: '1 crédito',
    members: '45 apuntados',
    icon: 'route',
    accent: 'bg-primary-container text-on-primary-container',
  },
];

const highlights = [
  { label: 'Iniciativas activas', value: '3', detail: 'participando esta semana' },
  { label: 'Horas aportadas', value: '24h', detail: 'en proyectos de impacto' },
  { label: 'Créditos acumulados', value: '150', detail: 'canjeables en recompensas' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-bento-gap">
      {/* Header row */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-label-md font-label-md uppercase tracking-[0.18em] text-secondary">Panel ciudadano</p>
          <h1 className="mt-1 text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-primary">
            Oportunidades de Impacto
          </h1>
          <p className="mt-1 text-body-md text-on-surface-variant">
            Descubre iniciativas en tu campus y ciudad donde puedes aportar. Gana créditos de participación ciudadana.
          </p>
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-1.5 rounded-full bg-secondary-container px-3 py-1.5">
            <span className="material-symbols-outlined fill text-[18px] text-on-secondary-container">military_tech</span>
            <span className="text-label-lg font-label-lg text-on-secondary-container">Nivel 3</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-tertiary-container px-3 py-1.5">
            <span className="material-symbols-outlined fill text-[18px] text-on-tertiary-container">monetization_on</span>
            <span className="text-label-lg font-label-lg font-bold text-on-tertiary-container">150 Créditos</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-outline-variant/40 bg-surface-container px-3 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-container text-on-primary-container text-label-md font-bold">
              JP
            </div>
            <div className="hidden xl:block">
              <p className="text-label-lg font-label-lg font-bold text-on-surface leading-tight">Juan Pérez</p>
              <p className="text-label-md font-label-md text-on-surface-variant leading-tight">Estudiante</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats + recommendation */}
      <section className="overflow-hidden rounded-[28px] border border-surface-variant/30 bg-surface-container-lowest shadow-sm">
        <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="p-8 md:p-10">
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <article key={item.label} className="rounded-2xl border border-outline-variant/30 bg-surface-container p-4">
                  <p className="text-label-md font-label-md text-on-surface-variant">{item.label}</p>
                  <p className="mt-2 text-3xl font-bold text-primary">{item.value}</p>
                  <p className="mt-1 text-body-md text-on-surface-variant">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary-container p-8 text-on-primary md:p-10">
            <div className="flex h-full flex-col justify-between gap-6 rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm">
              <div>
                <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-label-md font-label-md">
                  Recomendación del día
                </div>
                <h4 className="mt-4 text-title-lg font-title-lg">Súmate a una iniciativa visible.</h4>
                <p className="mt-3 text-body-md text-primary-fixed-dim">
                  Las iniciativas con mayor tracción están buscando refuerzos en comunicación, análisis y terreno.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <Link className="rounded-2xl bg-secondary px-4 py-3 text-center text-label-lg font-label-lg font-bold text-on-secondary shadow-sm transition-transform hover:-translate-y-0.5" href="/iniciativas">
                  Explorar ahora
                </Link>
                <Link className="rounded-2xl border border-white/20 px-4 py-3 text-center text-label-lg font-label-lg font-bold text-white transition-colors hover:bg-white/10" href="/ideas">
                  Ver ideas IA
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-title-lg font-title-lg text-primary">Oportunidades recomendadas</h2>
            <p className="text-body-md text-on-surface-variant">Cada tarjeta te lleva a una acción clara: unirte, revisar o proponer mejoras.</p>
          </div>
          <div className="hidden sm:flex gap-2">
            <button className="rounded-full border border-outline-variant bg-surface-container-lowest px-4 py-2 text-label-lg font-label-lg text-on-surface">Todos</button>
            <button className="rounded-full bg-primary-container px-4 py-2 text-label-lg font-label-lg font-bold text-on-primary-container">Recomendados</button>
          </div>
        </div>

        <div className="grid gap-bento-gap lg:grid-cols-3">
          {opportunities.map((opportunity) => (
            <article key={opportunity.title} className="overflow-hidden rounded-[28px] border border-surface-variant/30 bg-surface-container-lowest shadow-sm transition-transform hover:-translate-y-1">
              <div className="flex h-44 items-center justify-center bg-gradient-to-br from-surface-container via-surface-container-high to-surface-container">
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${opportunity.accent}`}>
                  <span className="material-symbols-outlined text-[30px]">{opportunity.icon}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-surface-container px-3 py-1 text-label-md font-label-md text-on-surface-variant">
                    {opportunity.category}
                  </span>
                  <span className="text-label-lg font-label-lg font-bold text-tertiary">{opportunity.points}</span>
                </div>
                <h3 className="mt-4 text-title-lg font-title-lg text-on-surface">{opportunity.title}</h3>
                <p className="mt-2 text-body-md text-on-surface-variant">{opportunity.summary}</p>
                <div className="mt-6 flex items-center justify-between border-t border-outline-variant/20 pt-4 text-label-md font-label-md text-on-surface-variant">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">group</span>
                    {opportunity.members}
                  </span>
                  <Link className="rounded-xl bg-secondary px-4 py-2 text-label-lg font-label-lg font-bold text-on-secondary transition-transform hover:-translate-y-0.5" href="/org-panel/nueva-iniciativa">
                    Unirme a la iniciativa
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom row */}
      <section className="grid gap-bento-gap lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-[28px] border border-surface-variant/30 bg-surface-container-lowest p-6 shadow-sm md:p-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-title-lg font-title-lg text-primary">Ruta de participación</h2>
            <Link className="text-label-lg font-label-lg text-secondary hover:underline" href="/dashboard/perfil">
              Ver perfil
            </Link>
          </div>
          <div className="mt-6 space-y-4">
            {[
              'Revisa tu nivel y recompensas acumuladas.',
              'Elige una iniciativa y confirma tu participación.',
              'Comparte evidencia para seguir sumando impacto.',
            ].map((step, index) => (
              <div key={step} className="flex gap-4 rounded-2xl border border-outline-variant/20 bg-surface-container p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-container text-label-lg font-bold text-on-primary-container">
                  {index + 1}
                </div>
                <p className="text-body-md text-on-surface-variant">{step}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[28px] border border-surface-variant/30 bg-primary p-6 text-on-primary shadow-sm md:p-8">
          <h2 className="text-title-lg font-title-lg">Atajo rápido</h2>
          <p className="mt-3 text-body-md text-primary-fixed-dim">
            Si ya tienes una propuesta lista, publícala sin pasar por pantallas intermedias.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Link className="rounded-2xl bg-secondary px-4 py-3 text-center text-label-lg font-label-lg font-bold text-on-secondary shadow-sm transition-transform hover:-translate-y-0.5" href="/org-panel/nueva-iniciativa">
              Publicar iniciativa
            </Link>
            <Link className="rounded-2xl border border-white/20 px-4 py-3 text-center text-label-lg font-label-lg font-bold text-white transition-colors hover:bg-white/10" href="/ideas">
              Sintetizar una idea
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}
