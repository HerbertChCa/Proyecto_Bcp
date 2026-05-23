export default function ProfilePage() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex">
      <nav className="hidden md:flex flex-col h-full py-8 px-4 fixed left-0 top-0 w-64 bg-surface-container-low dark:bg-surface-container-low z-40 border-r border-outline-variant/20">
        <div className="mb-10 px-4">
          <h1 className="text-title-lg font-title-lg font-bold text-primary">LánZate</h1>
          <p className="text-label-md font-label-md text-on-surface-variant">Participación Ciudadana</p>
        </div>
        <div className="flex-1 space-y-2">
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-surface-container-high transition-colors text-on-surface-variant font-medium" href="/dashboard">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-label-lg font-label-lg">Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-surface-container-high transition-colors bg-primary-container/10 text-primary font-bold scale-95 duration-100" href="/dashboard/perfil">
            <span className="material-symbols-outlined fill">person</span>
            <span className="text-label-lg font-label-lg">Perfil</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-surface-container-high transition-colors text-on-surface-variant font-medium" href="/ideas">
            <span className="material-symbols-outlined">lightbulb</span>
            <span className="text-label-lg font-label-lg">Ideas</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-surface-container-high transition-colors text-on-surface-variant font-medium" href="/org-panel">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-label-lg font-label-lg">Gestión</span>
          </a>
        </div>
        <button className="mt-auto bg-primary text-on-primary py-3 rounded-xl text-label-lg font-label-lg font-bold hover:bg-primary/90 transition-colors">
          Participar
        </button>
      </nav>

      <div className="flex-1 flex flex-col min-w-0 md:ml-64 w-full">
        <header className="sticky top-0 z-30 flex justify-between items-center w-full px-container-padding py-4 bg-surface/80 backdrop-blur-md shadow-sm">
          <div className="md:hidden">
            <h1 className="text-title-lg font-title-lg font-bold text-primary">LánZate</h1>
          </div>
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input className="w-full bg-surface-container border-none rounded-full py-2 pl-10 pr-4 text-body-md focus:ring-2 focus:ring-primary transition-all" placeholder="Buscar..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-container">
              <span className="material-symbols-outlined">military_tech</span>
            </button>
            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-container">
              <span className="material-symbols-outlined">monetization_on</span>
            </button>
            <div className="h-10 w-10 rounded-full bg-surface-container-high overflow-hidden border-2 border-primary/20 flex items-center justify-center">
              <div className="w-full h-full object-cover bg-gray-200" aria-hidden="true" />
            </div>
          </div>
        </header>

        <main className="flex-1 p-container-padding flex flex-col gap-bento-gap">
          <section className="bg-surface-container-lowest rounded-[24px] p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none" />
            <div className="flex-shrink-0 relative">
              <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-surface-container-lowest shadow-md z-10 relative">
                <div className="w-full h-full object-cover bg-gray-200" aria-hidden="true" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-secondary text-on-secondary w-10 h-10 rounded-full flex items-center justify-center border-2 border-surface-container-lowest shadow-sm z-20" title="Ciudadano Activo">
                <span className="material-symbols-outlined text-[20px]">star</span>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left z-10 w-full">
              <div className="inline-block px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-label-md font-label-md mb-2">Rango: Ciudadano Activo</div>
              <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-primary mb-1">Carlos Mendoza</h2>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6">Estudiante de Arquitectura • 1,450 pts de impacto</p>
              <div className="max-w-md w-full mx-auto md:mx-0">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-label-lg font-label-lg text-primary">Progreso hacia Nivel 4</span>
                  <span className="text-label-md font-label-md text-on-surface-variant">150 pts restantes</span>
                </div>
                <div className="h-4 w-full bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-secondary rounded-full" style={{ width: '75%' }} />
                </div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-bento-gap">
            <section className="lg:col-span-7 bg-surface-container-lowest rounded-[24px] p-6 md:p-8 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-title-lg font-title-lg text-primary">Mi Historial de Impacto</h3>
                <button className="text-label-md font-label-md text-secondary font-bold hover:underline">Ver todo</button>
              </div>
              <div className="relative pl-4 space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-secondary before:to-surface-variant before:rounded-full pt-2">
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-on-secondary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 absolute -left-4 md:left-1/2 transform">
                    <span className="material-symbols-outlined text-[16px]">park</span>
                  </div>
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] pl-6 md:pl-0 md:group-odd:pr-6 md:group-even:pl-6">
                    <div className="bg-surface-container p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-label-lg font-label-lg text-primary font-bold">Limpieza Parque Central</h4>
                        <span className="text-label-md font-label-md text-secondary font-bold">+50 pts</span>
                      </div>
                      <p className="text-body-md font-body-md text-on-surface-variant text-sm">Voluntariado ambiental de fin de semana.</p>
                      <span className="text-label-md font-label-md text-outline mt-2 block">Hace 2 días</span>
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 absolute -left-4 md:left-1/2 transform">
                    <span className="material-symbols-outlined text-[16px]">campaign</span>
                  </div>
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] pl-6 md:pl-0 md:group-odd:pr-6 md:group-even:pl-6">
                    <div className="bg-surface-container p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-label-lg font-label-lg text-primary font-bold">Campaña de Reciclaje</h4>
                        <span className="text-label-md font-label-md text-secondary font-bold">+30 pts</span>
                      </div>
                      <p className="text-body-md font-body-md text-on-surface-variant text-sm">Organización de puntos limpios en el campus.</p>
                      <span className="text-label-md font-label-md text-outline mt-2 block">12 Oct 2024</span>
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 absolute -left-4 md:left-1/2 transform">
                    <span className="material-symbols-outlined text-[16px]">forum</span>
                  </div>
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] pl-6 md:pl-0 md:group-odd:pr-6 md:group-even:pl-6">
                    <div className="bg-surface-container p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-label-lg font-label-lg text-primary font-bold">Foro Vecinal Sur</h4>
                        <span className="text-label-md font-label-md text-secondary font-bold">+15 pts</span>
                      </div>
                      <p className="text-body-md font-body-md text-on-surface-variant text-sm">Participación activa en el debate sobre movilidad.</p>
                      <span className="text-label-md font-label-md text-outline mt-2 block">28 Sep 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="lg:col-span-5 bg-surface-container-lowest rounded-[24px] p-6 md:p-8 shadow-sm flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-title-lg font-title-lg text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">redeem</span>
                  Mis Recompensas
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                <div className="bg-primary-container rounded-xl p-4 text-on-primary-container relative overflow-hidden group cursor-pointer hover:shadow-md transition-all">
                  <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-[80px] opacity-10 rotate-12">qr_code_2</span>
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-on-primary-container text-[20px]">local_cafe</span>
                    </div>
                    <div>
                      <h4 className="text-label-lg font-label-lg font-bold mb-1">Café Gratis</h4>
                      <p className="text-label-md font-label-md opacity-80 mb-3">Cafetería Central</p>
                      <button className="w-full py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-label-md font-label-md font-bold transition-colors flex items-center justify-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">qr_code_scanner</span> Ver Código
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-tertiary-container rounded-xl p-4 text-on-tertiary-container relative overflow-hidden group cursor-pointer hover:shadow-md transition-all">
                  <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-[80px] opacity-10 rotate-12">qr_code_2</span>
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-on-tertiary-container text-[20px]">menu_book</span>
                    </div>
                    <div>
                      <h4 className="text-label-lg font-label-lg font-bold mb-1">20% Dto. Librería</h4>
                      <p className="text-label-md font-label-md opacity-80 mb-3">Librería El Ateneo</p>
                      <button className="w-full py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-label-md font-label-md font-bold transition-colors flex items-center justify-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">qr_code_scanner</span> Ver Código
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container rounded-xl p-4 text-on-surface-variant border border-outline-variant/30 flex flex-col items-center justify-center text-center opacity-70">
                  <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center mb-2">
                    <span className="material-symbols-outlined text-[20px]">lock</span>
                  </div>
                  <h4 className="text-label-lg font-label-lg font-bold mb-1">Bono Transporte</h4>
                  <p className="text-label-md font-label-md">Desbloquea en Nivel 4</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <a className="text-label-lg font-label-lg text-primary hover:underline inline-flex items-center gap-1" href="#">
                  Ver Todas las Recompensas <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
