import Link from 'next/link';
import type { ReactNode } from 'react';

type CallToAction = {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost';
};

type InfoPageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  ctas?: CallToAction[];
};

export function InfoPageShell({ eyebrow, title, description, children, ctas = [] }: InfoPageShellProps) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(0,24,92,0.08),transparent_36%),linear-gradient(180deg,#f7f9fb_0%,#eef2f6_100%)] px-6 py-10 text-on-background md:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <div className="flex items-center justify-between rounded-full border border-outline-variant/20 bg-surface-container-lowest px-5 py-3 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-on-primary shadow-sm">
              <span className="material-symbols-outlined">rocket_launch</span>
            </div>
            <div>
              <p className="text-label-md font-label-md text-on-surface-variant">LánZate</p>
              <p className="text-title-lg font-title-lg font-bold text-primary">Participación Ciudadana</p>
            </div>
          </div>
          <Link className="rounded-full border border-outline-variant px-4 py-2 text-label-lg font-label-lg text-on-surface-variant transition-colors hover:border-primary hover:text-primary" href="/">
            Volver al inicio
          </Link>
        </div>

        <section className="rounded-[28px] border border-surface-variant/30 bg-surface-container-lowest p-8 shadow-sm md:p-12">
          <p className="text-label-md font-label-md uppercase tracking-[0.18em] text-secondary">{eyebrow}</p>
          <h1 className="mt-3 max-w-3xl text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-primary">{title}</h1>
          <p className="mt-4 max-w-3xl text-body-lg text-on-surface-variant">{description}</p>

          <div className="mt-8 space-y-6">{children}</div>

          {ctas.length > 0 ? (
            <div className="mt-10 flex flex-wrap gap-3">
              {ctas.map((cta) => (
                <Link
                  key={`${cta.href}-${cta.label}`}
                  className={[
                    'rounded-full px-5 py-3 text-label-lg font-label-lg transition-colors',
                    cta.variant === 'secondary'
                      ? 'border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary'
                      : cta.variant === 'ghost'
                        ? 'bg-surface-container px-5 py-3 text-on-surface hover:bg-surface-container-high'
                        : 'bg-primary text-on-primary hover:bg-primary/90',
                  ].join(' ')}
                  href={cta.href}
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          ) : null}
        </section>

        <footer className="flex flex-col gap-2 px-1 pb-2 text-body-md text-on-surface-variant md:flex-row md:items-center md:justify-between">
          <p>© 2024 LánZate - Plataforma de Participación Ciudadana</p>
          <div className="flex flex-wrap gap-4">
            <Link className="transition-colors hover:text-primary" href="/about">
              Sobre nosotros
            </Link>
            <Link className="transition-colors hover:text-primary" href="/legal">
              Aviso legal
            </Link>
            <Link className="transition-colors hover:text-primary" href="/privacidad">
              Privacidad
            </Link>
            <Link className="transition-colors hover:text-primary" href="/terminos">
              Términos
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}