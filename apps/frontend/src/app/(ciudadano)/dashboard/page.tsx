import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex">
      <nav className="hidden md:flex flex-col h-full py-8 px-4 fixed left-0 top-0 w-64 bg-surface-container-low dark:bg-surface-container-low z-20 border-r border-outline-variant/20">
        <div className="flex items-center gap-4 mb-8 px-2">
          <div className="w-12 h-12 object-cover rounded-xl bg-gray-200" aria-hidden="true" />
          <div>
            <h1 className="text-title-lg font-title-lg font-bold text-primary dark:text-primary-fixed-dim">LánZate</h1>
            <p className="text-label-md font-label-md text-on-surface-variant">Participación Ciudadana</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 flex-grow">
          <Link className="flex items-center gap-3 px-4 py-3 rounded-lg bg-surface-container-high text-primary font-bold" href="/dashboard">
            <span className="material-symbols-outlined fill text-[20px]">dashboard</span>
            <span className="text-label-lg font-label-lg">Dashboard</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-surface-container-high" href="/dashboard/perfil">
            <span className="material-symbols-outlined text-[20px]">person</span>
            <span className="text-label-lg font-label-lg">Perfil</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-surface-container-high" href="/ideas">
            <span className="material-symbols-outlined text-[20px]">lightbulb</span>
            <span className="text-label-lg font-label-lg">Ideas</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-surface-container-high" href="/org-panel">
            <span className="material-symbols-outlined text-[20px]">settings</span>
            <span className="text-label-lg font-label-lg">Gestión</span>
          </Link>
        </div>
        <Link className="mt-auto w-full py-3 px-4 bg-primary text-on-primary rounded-xl font-title-lg text-label-lg flex items-center justify-center gap-2" href="/org-panel/nueva-iniciativa">
          Participar
        </Link>
      </nav>

      <div className="flex-1 flex flex-col min-h-screen md:ml-64 w-full md:max-w-[calc(100%-16rem)]">
        <header className="flex justify-between items-center w-full px-container-padding py-4 bg-surface/80 backdrop-blur-md shadow-sm sticky top-0 z-10">
          <div className="flex items-center w-full max-w-md bg-surface-container rounded-xl px-4 py-2 border border-outline-variant focus-within:border-primary focus-within:border-2 transition-all">
            <span className="material-symbols-outlined text-on-surface-variant mr-2">search</span>
            <input className="bg-transparent border-none outline-none w-full text-body-md text-on-surface placeholder:text-on-surface-variant" placeholder="Buscar mis iniciativas o nuevas metas..." type="text" />
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 hidden sm:flex">
              <div className="flex items-center gap-1 text-on-surface-variant">
                <span className="material-symbols-outlined fill text-secondary">military_tech</span>
                <span className="text-label-lg font-label-lg">Nivel 3</span>
              </div>
              <div className="flex items-center gap-1 text-on-surface-variant">
                <span className="material-symbols-outlined fill text-tertiary">monetization_on</span>
                <span className="text-label-lg font-label-lg font-bold">150 Créditos</span>
              </div>
            </div>
            <div className="flex items-center gap-3 border-l border-outline-variant pl-6">
              <div className="text-right hidden lg:block">
                <p className="text-label-lg font-label-lg text-on-surface font-bold">Juan Pérez</p>
                <p className="text-label-md font-label-md text-on-surface-variant">Estudiante</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-title-lg">JP</div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-container-padding pb-24">
          <div className="mb-bento-gap flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-headline-lg font-headline-lg text-primary hidden md:block mb-2">Oportunidades de Impacto</h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">Descubre iniciativas en tu campus y ciudad donde puedes aportar. Gana créditos de participación ciudadana.</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-full border border-outline-variant text-label-lg font-label-lg text-on-surface bg-surface-container-lowest hover:bg-surface-container transition-colors">Todos</button>
              <button className="px-4 py-2 rounded-full bg-primary-container text-on-primary-container text-label-lg font-label-lg font-bold">Recomendados</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-bento-gap">
            <div className="bento-card bg-primary-container text-on-primary-container rounded-[24px] p-6 flex flex-col justify-between border border-primary-fixed/20">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-title-lg font-title-lg">Mis Estadísticas</h3>
                  <span className="material-symbols-outlined">analytics</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-label-md opacity-80 uppercase tracking-wider">Iniciativas Activas</p>
                    <p className="text-display-lg leading-none">3</p>
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <p className="text-label-md opacity-80">Horas</p>
                      <p className="text-title-lg">24h</p>
                    </div>
                    <div className="border-l border-on-primary-container/20 pl-4">
                      <p className="text-label-md opacity-80">Impacto</p>
                      <p className="text-title-lg">Alto</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="mt-6 w-full py-2 bg-on-primary-container text-primary-container rounded-lg font-bold text-label-lg hover:bg-white transition-colors">Ver Reporte Detallado</button>
            </div>

            <div className="bento-card bg-surface-container-lowest rounded-[24px] overflow-hidden flex flex-col">
              <div className="h-40 bg-surface-container relative">
                <img alt="Reciclaje" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtbhGggTQv0vgeuVGWm40p_VVKBYeZSzjYegKzmu1PSSB4coe8g18Xf40-Nqx_RhfSFhIhVetWK1LBFGhHkGpmfvuXt0zdK7y7F77iYxBY6Q9SD6FYZfdS9cHp_WfceJkfshJ5x7LzDnFmU_K7mBzmJKwm_axucSpWLiWCnUkHHKs_Z4vUAtwcANYXx9fltBq4Yap7_GvWPUd5CZ761oCB9jTRVOQBN1nExflyY1k9k3OQfzXckuWSoOfzIiKOH0QfI-PO2u-CpjA" />
                <div className="absolute top-3 left-3 bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-label-md font-label-md glass-overlay">Ambiental</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-title-lg font-title-lg text-on-surface mb-2">Programa de Reciclaje en Campus</h3>
                <p className="text-body-md font-body-md text-on-surface-variant mb-4 flex-grow">Ayuda a clasificar y organizar los nuevos puntos limpios en la facultad de ciencias.</p>
                <div className="flex items-center justify-between mb-4 pt-4 border-t border-surface-container-high">
                  <div className="flex items-center gap-1 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px]">group</span>
                    <span className="text-label-md font-label-md">12 apuntados</span>
                  </div>
                  <div className="flex items-center gap-1 text-tertiary font-bold bg-tertiary/10 px-2 py-1 rounded-md">
                    <span className="material-symbols-outlined text-[16px]">monetization_on</span>
                    <span className="text-label-md font-label-md">2 Créditos</span>
                  </div>
                </div>
                <button className="w-full py-2.5 bg-secondary text-on-secondary rounded-xl font-title-lg text-label-lg hover:opacity-90 transition-opacity">Unirme a la Iniciativa</button>
              </div>
            </div>

            <div className="bento-card bg-surface-container-lowest rounded-[24px] overflow-hidden flex flex-col">
              <div className="h-40 bg-surface-container relative">
                <img alt="Tutorías" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9FsVSxcFW7ON20xgwjVPrDbAdhrZSnY_66zlTR-QAUJaZZMY3NKAVR8QpbraXikEUZspDPAVp60WRaaNa2eHSj3z2PN35v8d491sJYpU3c2YrjJkFvsUVV-DaOVNSuS72xkBSZfBnD1fdkW3TAB5Sm2lbKUFaAvKWafjVoyaBVAGK8NNeR-Y9qyh9XCpPu57Kn-VN8d9yv8QUQhEFp6Zyqux0A3qsOztSmeWE8rajd0sCLJlAk-VR2BTswSpQMzrZUxjrRdwKIfQ" />
                <div className="absolute top-3 left-3 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-md font-label-md glass-overlay">Social</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-title-lg font-title-lg text-on-surface mb-2">Tutorías para Escolares</h3>
                <p className="text-body-md font-body-md text-on-surface-variant mb-4 flex-grow">Brinda apoyo académico en matemáticas a estudiantes de secundaria de colegios cercanos.</p>
                <div className="flex items-center justify-between mb-4 pt-4 border-t border-surface-container-high">
                  <div className="flex items-center gap-1 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px]">group</span>
                    <span className="text-label-md font-label-md">5 apuntados</span>
                  </div>
                  <div className="flex items-center gap-1 text-tertiary font-bold bg-tertiary/10 px-2 py-1 rounded-md">
                    <span className="material-symbols-outlined text-[16px]">monetization_on</span>
                    <span className="text-label-md font-label-md">3 Créditos</span>
                  </div>
                </div>
                <button className="w-full py-2.5 bg-secondary text-on-secondary rounded-xl font-title-lg text-label-lg hover:opacity-90 transition-opacity">Unirme a la Iniciativa</button>
              </div>
            </div>

            <div className="bento-card bg-surface-container-lowest rounded-[24px] overflow-hidden flex flex-col lg:col-span-2 xl:col-span-1">
              <div className="h-40 bg-surface-container relative">
                <img alt="Tech" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgLXcLoCPWQibeAQ7_SojIj1FSEK6HIUX4nBnKAvZGkVV03nuQIktGBGFCsOGDB-jjoaXuvIOq7dJe81PnEBd9I2SmcWXCH9ivkvWUcFTsRg4JSZqXmJBfuoUWkUSoqCtX-yi4HF5XNKG4Arzm77UH23Z5DYk8hfmY4iDj1m6RKHo5_PKkbIBcE9EuGecXDwMfetRJM2j-tdTFqqdYS32Jljue2p5t22RDBhVTXE3e-x3Cq70EAj_xcio20Yj6YpZ1Tln_28LVMaY" />
                <div className="absolute top-3 left-3 bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-label-md font-label-md glass-overlay">Tecnología</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-title-lg font-title-lg text-on-surface mb-2">App de Movilidad Urbana</h3>
                <p className="text-body-md font-body-md text-on-surface-variant mb-4 flex-grow">Participa en el testeo beta de la nueva app para optimizar las rutas de transporte universitario.</p>
                <div className="flex items-center justify-between mb-4 pt-4 border-t border-surface-container-high">
                  <div className="flex items-center gap-1 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px]">group</span>
                    <span className="text-label-md font-label-md">45 apuntados</span>
                  </div>
                  <div className="flex items-center gap-1 text-tertiary font-bold bg-tertiary/10 px-2 py-1 rounded-md">
                    <span className="material-symbols-outlined text-[16px]">monetization_on</span>
                    <span className="text-label-md font-label-md">1 Crédito</span>
                  </div>
                </div>
                <button className="w-full py-2.5 bg-secondary text-on-secondary rounded-xl font-title-lg text-label-lg hover:opacity-90 transition-opacity">Unirme a la Iniciativa</button>
              </div>
            </div>
          </div>
        </main>

        <footer className="w-full mt-auto flex flex-col md:flex-row justify-between items-center px-container-padding py-8 bg-surface-container dark:bg-surface-container-highest border-t border-surface-variant/50 md:ml-64 md:max-w-[calc(100%-16rem)]">
          <p className="text-body-md font-body-md text-on-surface-variant mb-4 md:mb-0">© 2024 LánZate - Plataforma de Participación Ciudadana</p>
          <div className="flex gap-6">
            <Link className="text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors" href="/legal">Aviso Legal</Link>
            <Link className="text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors" href="/privacidad">Privacidad</Link>
            <Link className="text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors" href="/terminos">Términos</Link>
          </div>
        </footer>

        <button className="fixed bottom-8 right-8 w-16 h-16 bg-primary text-on-primary rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center group z-50">
          <span className="material-symbols-outlined text-[32px] group-hover:rotate-90 transition-transform duration-300">add</span>
          <span className="absolute right-20 bg-inverse-surface text-inverse-on-surface px-3 py-1.5 rounded-lg text-label-md font-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Sugerir Nueva Idea</span>
        </button>
      </div>
    </div>
  );
}
