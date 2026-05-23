import { loginAction } from './actions';

type LoginPageProps = {
  searchParams?: {
    error?: string;
  };
};

export default function LoginPage({ searchParams }: LoginPageProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12 text-slate-50">
      <section className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Acceso seguro
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            Inicia sesión en LánZate
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Usa tu correo y contraseña para continuar con el flujo autenticado.
          </p>
        </div>

        {searchParams?.error ? (
          <div className="mb-6 rounded-2xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-100">
            {searchParams.error}
          </div>
        ) : null}

        <form action={loginAction} className="space-y-5">
          <label className="block space-y-2">
            <span className="text-sm font-medium text-slate-200">Correo electrónico</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="tu@correo.com"
              className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/70 focus:ring-2 focus:ring-emerald-300/20"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-slate-200">Contraseña</span>
            <input
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/70 focus:ring-2 focus:ring-emerald-300/20"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-2xl bg-emerald-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300"
          >
            Entrar
          </button>
        </form>
      </section>
    </main>
  );
}