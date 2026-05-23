import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex text-body-md antialiased">
      <div className="w-full flex flex-col min-h-screen relative">
        <header className="flex justify-between items-center w-full px-container-padding py-4 bg-surface/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined">lightbulb</span>
              </div>
              <div className="text-title-lg font-title-lg font-bold text-primary">LánZate</div>
            </div>
            <nav className="hidden lg:flex items-center gap-6">
              <Link className="text-label-lg font-label-lg text-primary font-bold border-b-2 border-primary pb-1" href="/">
                Inicio
              </Link>
              <Link className="text-label-lg font-label-lg text-on-surface-variant hover:text-primary transition-colors pb-1" href="/iniciativas">
                Explorar
              </Link>
              <Link className="text-label-lg font-label-lg text-on-surface-variant hover:text-primary transition-colors pb-1" href="/dashboard">
                Comunidad
              </Link>
              <Link className="text-label-lg font-label-lg text-on-surface-variant hover:text-primary transition-colors pb-1" href="/about">
                Sobre Nosotros
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Link className="px-4 py-2 text-label-lg font-label-lg font-bold text-primary hover:bg-surface-variant/50 rounded-xl transition-colors" href="/login">
              Iniciar Sesión
            </Link>
            <Link className="px-4 py-2 bg-primary text-on-primary text-label-lg font-label-lg font-bold rounded-xl hover:opacity-90 transition-opacity shadow-sm" href="/org-panel/nueva-iniciativa">
              Regístrate
            </Link>
          </div>
        </header>

        <main className="flex-grow p-container-padding flex flex-col gap-bento-gap max-w-7xl mx-auto w-full">
          <section className="w-full rounded-[24px] overflow-hidden relative min-h-[500px] flex items-center shadow-sm">
            <div className="absolute inset-0 z-0">
              <img
                alt="Team collaboration"
                className="w-full h-full object-cover object-center"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByfoA4BLhNph-tkOWrCRZoY8FCAR6y2thz5VVohq_KysHc70iHkzHAT2N-HfNbPepXa3fmWkIr5s_YXrYj7QpTvTx0Q_tfYVrlo6T-F3KCHCiTqRQLjGVCvnLq_rYzayCc5MtZ6sjZqKdM_jpF2ERN4ZdvMpnGR9DwZOOwyAAbfeT2XOJQOQNeyVisda7jQeHdM19RZfh1Q2lShN36ulcND5IX32JfCEFBGGUbSmz7Qhw7SsEYEGNnP3UDA1F6GBct_MQKG8tT7sk"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
            </div>
            <div className="relative z-10 p-8 md:p-16 max-w-3xl">
              <h1 className="text-headline-lg-mobile md:text-display-lg font-headline-lg-mobile md:font-display-lg text-on-primary mb-6 drop-shadow-md">
                Transforma tu comunidad con LánZate
              </h1>
              <p className="text-body-lg font-body-lg text-on-primary/90 mb-8 max-w-2xl text-xl">
                Descubre, idea y lanza proyectos innovadores que generan un impacto real. Únete a una comunidad de agentes de cambio, desarrolla tus habilidades y haz realidad tus iniciativas.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link className="bg-secondary hover:bg-secondary/90 text-on-secondary px-8 py-4 rounded-xl text-title-lg font-title-lg font-bold shadow-lg transition-transform hover:-translate-y-1" href="/org-panel/nueva-iniciativa">
                  Empieza a Crear
                </Link>
                <Link className="border-2 border-on-primary text-on-primary hover:bg-on-primary/10 px-8 py-4 rounded-xl text-title-lg font-title-lg font-bold shadow-lg transition-all" href="/iniciativas">
                  Descubre Iniciativas
                </Link>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-bento-gap">
            <div className="bg-surface-container-lowest rounded-[24px] p-8 shadow-sm border border-surface-variant/30 flex flex-col hover:-translate-y-1 transition-transform group">
              <div className="w-14 h-14 bg-tertiary-container text-on-tertiary-container rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">public</span>
              </div>
              <h3 className="text-title-lg font-title-lg text-on-surface mb-4">Impacto Social Real</h3>
              <p className="text-body-lg font-body-lg text-on-surface-variant">Conecta tus ideas con los desafíos más apremiantes de tu comunidad. Nuestra plataforma facilita la creación de soluciones sostenibles y medibles.</p>
            </div>
            <div className="bg-surface-container-lowest rounded-[24px] p-8 shadow-sm border border-surface-variant/30 flex flex-col hover:-translate-y-1 transition-transform group md:col-span-2 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
                <span className="material-symbols-outlined text-[200px]">military_tech</span>
              </div>
              <div className="w-14 h-14 bg-secondary-container text-on-secondary-container rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
                <span className="material-symbols-outlined text-3xl">stars</span>
              </div>
              <h3 className="text-title-lg font-title-lg text-on-surface mb-4 relative z-10">Sube de Nivel</h3>
              <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl relative z-10">Participa activamente, gana experiencia y desbloquea recompensas. Nuestro sistema gamificado reconoce tu esfuerzo y te motiva a alcanzar nuevas metas de impacto.</p>
            </div>
            <div className="bg-surface-container-lowest rounded-[24px] p-8 shadow-sm border border-surface-variant/30 flex flex-col hover:-translate-y-1 transition-transform group md:col-span-2 relative overflow-hidden bg-gradient-to-br from-surface-container-lowest to-primary-fixed/20">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4 text-primary">
                <span className="material-symbols-outlined text-[200px]">psychology</span>
              </div>
              <div className="w-14 h-14 bg-primary text-on-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
                <span className="material-symbols-outlined text-3xl">auto_awesome</span>
              </div>
              <h3 className="text-title-lg font-title-lg text-on-surface mb-4 relative z-10">Potenciado por IA</h3>
              <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl relative z-10">¿Atascado? Utiliza nuestras herramientas de Inteligencia Artificial para generar ideas, estructurar proyectos y encontrar las mejores estrategias para tu iniciativa.</p>
            </div>
            <div className="bg-surface-container-lowest rounded-[24px] p-8 shadow-sm border border-surface-variant/30 flex flex-col hover:-translate-y-1 transition-transform group">
              <div className="w-14 h-14 bg-surface-variant text-on-surface-variant rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">groups</span>
              </div>
              <h3 className="text-title-lg font-title-lg text-on-surface mb-4">Comunidad Activa</h3>
              <p className="text-body-lg font-body-lg text-on-surface-variant">Encuentra co-fundadores, mentores y voluntarios. LánZate es tu red para construir equipos sólidos y multidisciplinarios.</p>
            </div>
          </section>

          <section className="w-full bg-primary rounded-[24px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-lg mt-8">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-headline-lg font-headline-lg text-on-primary mb-4">¿Listo para hacer la diferencia?</h2>
              <p className="text-body-lg font-body-lg text-on-primary/80">Únete a miles de ciudadanos que ya están transformando su entorno con LánZate.</p>
            </div>
            <Link className="bg-secondary hover:bg-secondary/90 text-on-secondary px-8 py-4 rounded-xl text-title-lg font-title-lg font-bold shadow-sm whitespace-nowrap transition-transform hover:-translate-y-1" href="/org-panel/nueva-iniciativa">
              Crear mi Cuenta Gratis
            </Link>
          </section>
        </main>

        <footer className="w-full mt-auto bg-surface-container dark:bg-surface-container-highest border-t border-surface-variant/50 flex flex-col md:flex-row justify-between items-center px-container-padding py-8 text-body-md font-body-md text-on-surface-variant">
          <div className="mb-4 md:mb-0 text-center md:text-left flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-on-primary">
              <span className="material-symbols-outlined text-[16px]">lightbulb</span>
            </div>
            <div>
              <span className="text-label-lg font-label-lg font-bold text-primary block">LánZate</span>
              © 2024 LánZate - Plataforma de Participación Ciudadana
            </div>
          </div>
          <div className="flex gap-6">
            <Link className="text-on-surface-variant hover:text-primary transition-colors" href="/legal">
              Aviso Legal
            </Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors" href="/privacidad">
              Privacidad
            </Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors" href="/terminos">
              Términos
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
