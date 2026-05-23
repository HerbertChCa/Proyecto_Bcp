'use client';

import { loginAction, registerAction } from './actions';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function LoginPage() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'register') setActiveTab('register');
    else if (tab === 'login') setActiveTab('login');
    const errParam = searchParams.get('error');
    if (errParam) setError(decodeURIComponent(errParam));
  }, [searchParams]);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(0,24,92,0.18),transparent_35%),linear-gradient(135deg,#00185c_0%,#0b1b4d_45%,#f7f9fb_45%,#f7f9fb_100%)] px-6 py-10 text-on-background md:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">

        {/* ── Left panel ── */}
        <section className="flex flex-col justify-between rounded-[32px] bg-primary p-8 text-on-primary shadow-2xl shadow-black/10 md:p-12">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-label-md font-label-md hover:bg-white/20 transition-colors">
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Volver al inicio
            </Link>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-on-primary">
                <span className="material-symbols-outlined">rocket_launch</span>
              </div>
              <div>
                <p className="text-title-lg font-title-lg font-bold leading-tight">LánZate</p>
                <p className="text-label-md font-label-md text-primary-fixed-dim leading-tight">Participación Ciudadana</p>
              </div>
            </div>
            <h1 className="mt-8 max-w-md text-display-lg font-display-lg leading-tight text-white">
              Entra al flujo de participación sin perder contexto.
            </h1>
            <p className="mt-4 max-w-xl text-body-lg text-primary-fixed-dim">
              Continúa en tu dashboard, revisa ideas o publica una iniciativa con la misma identidad visual del resto del producto.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ['dashboard', 'Dashboard', 'Seguimiento y recompensas'],
              ['lightbulb', 'Ideas', 'Borradores y síntesis IA'],
              ['settings', 'Gestión', 'Validación y publicación'],
            ].map(([icon, label, detail]) => (
              <article key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <span className="material-symbols-outlined text-[20px] text-primary-fixed-dim mb-2 block">{icon}</span>
                <p className="text-label-lg font-label-lg font-bold text-white">{label}</p>
                <p className="mt-1 text-body-md text-primary-fixed-dim">{detail}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Right panel ── */}
        <section className="rounded-[32px] border border-surface-variant/30 bg-surface-container-lowest p-8 shadow-sm md:p-12">

          {/* Tabs */}
          <div className="flex rounded-2xl bg-surface-container p-1 mb-8">
            <button
              id="tab-login"
              type="button"
              onClick={() => setActiveTab('login')}
              className={`flex-1 rounded-xl py-2.5 text-label-lg font-label-lg font-semibold transition-all ${
                activeTab === 'login'
                  ? 'bg-surface-container-lowest text-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Iniciar sesión
            </button>
            <button
              id="tab-register"
              type="button"
              onClick={() => setActiveTab('register')}
              className={`flex-1 rounded-xl py-2.5 text-label-lg font-label-lg font-semibold transition-all ${
                activeTab === 'register'
                  ? 'bg-surface-container-lowest text-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Registrarse
            </button>
          </div>

          {error ? (
            <div className="mb-6 rounded-2xl border border-error/20 bg-error/5 px-4 py-3 text-body-md text-error">
              {error}
            </div>
          ) : null}

          {/* ── Login form ── */}
          {activeTab === 'login' && (
            <div>
              <div className="mb-8">
                <p className="text-label-md font-label-md uppercase tracking-[0.18em] text-secondary">Acceso</p>
                <h2 className="mt-3 text-headline-lg font-headline-lg text-primary">Usa tus credenciales para continuar</h2>
                <p className="mt-3 text-body-lg text-on-surface-variant">
                  Si todavía no tienes una cuenta,{' '}
                  <button
                    type="button"
                    onClick={() => setActiveTab('register')}
                    className="text-secondary font-semibold hover:underline"
                  >
                    regístrate gratis
                  </button>
                  .
                </p>
              </div>

              <form action={loginAction} className="space-y-5">
                <label className="block space-y-2">
                  <span className="text-label-lg font-label-lg text-on-surface">Correo electrónico</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="tu@correo.com"
                    className="w-full rounded-2xl border border-outline-variant bg-surface-container px-4 py-3 text-on-surface outline-none transition placeholder:text-on-surface-variant focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                </label>

                <label className="block space-y-2">
                  <span className="text-label-lg font-label-lg text-on-surface">Contraseña</span>
                  <input
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="••••••••"
                    className="w-full rounded-2xl border border-outline-variant bg-surface-container px-4 py-3 text-on-surface outline-none transition placeholder:text-on-surface-variant focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-secondary px-4 py-3 text-label-lg font-label-lg font-bold text-on-secondary transition-all hover:-translate-y-0.5 hover:bg-secondary/90 hover:shadow-md"
                >
                  Entrar
                </button>
              </form>

              <div className="mt-6 text-center">
                <button
                  type="button"
                  className="text-body-md text-on-surface-variant hover:text-primary transition-colors"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>
            </div>
          )}

          {/* ── Register form ── */}
          {activeTab === 'register' && (
            <div>
              <div className="mb-8">
                <p className="text-label-md font-label-md uppercase tracking-[0.18em] text-secondary">Nuevo usuario</p>
                <h2 className="mt-3 text-headline-lg font-headline-lg text-primary">Crea tu cuenta gratis</h2>
                <p className="mt-3 text-body-lg text-on-surface-variant">
                  ¿Ya tienes cuenta?{' '}
                  <button
                    type="button"
                    onClick={() => setActiveTab('login')}
                    className="text-secondary font-semibold hover:underline"
                  >
                    Inicia sesión
                  </button>
                  .
                </p>
              </div>

              <form className="space-y-5" action={registerAction}>
                <label className="block space-y-2">
                  <span className="text-label-lg font-label-lg text-on-surface">Nombre completo</span>
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Juan Pérez"
                    className="w-full rounded-2xl border border-outline-variant bg-surface-container px-4 py-3 text-on-surface outline-none transition placeholder:text-on-surface-variant focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                </label>

                <label className="block space-y-2">
                  <span className="text-label-lg font-label-lg text-on-surface">Correo electrónico</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="tu@correo.com"
                    className="w-full rounded-2xl border border-outline-variant bg-surface-container px-4 py-3 text-on-surface outline-none transition placeholder:text-on-surface-variant focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                </label>

                <label className="block space-y-2">
                  <span className="text-label-lg font-label-lg text-on-surface">Contraseña</span>
                  <input
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Mínimo 8 caracteres"
                    className="w-full rounded-2xl border border-outline-variant bg-surface-container px-4 py-3 text-on-surface outline-none transition placeholder:text-on-surface-variant focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                </label>

                <label className="block space-y-2">
                  <span className="text-label-lg font-label-lg text-on-surface">Confirmar contraseña</span>
                  <input
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    placeholder="••••••••"
                    className="w-full rounded-2xl border border-outline-variant bg-surface-container px-4 py-3 text-on-surface outline-none transition placeholder:text-on-surface-variant focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-primary px-4 py-3 text-label-lg font-label-lg font-bold text-on-primary transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md"
                >
                  Crear cuenta
                </button>

                <p className="text-center text-label-md font-label-md text-on-surface-variant">
                  Al registrarte aceptas nuestros{' '}
                  <Link href="/terminos" className="text-primary hover:underline">Términos de uso</Link>
                  {' '}y la{' '}
                  <Link href="/privacidad" className="text-primary hover:underline">Política de privacidad</Link>
                  .
                </p>
              </form>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}