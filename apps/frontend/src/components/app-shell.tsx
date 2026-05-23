'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { logoutAction } from '../app/login/actions';
import type { ReactNode } from 'react';

type NavItem = {
  href: string;
  label: string;
  icon: string;
};

type AppShellProps = {
  searchPlaceholder?: string;
  headerMeta?: ReactNode;
  children: ReactNode;
};

const unifiedNavItems: NavItem[] = [
  { href: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
  { href: '/dashboard/perfil', label: 'Perfil', icon: 'person' },
  { href: '/ideas', label: 'Ideas', icon: 'lightbulb' },
  { href: '/org-panel', label: 'Gestión', icon: 'settings' },
];

function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function AppShell({
  searchPlaceholder = 'Buscar iniciativas, ideas o paneles...',
  headerMeta,
  children,
}: AppShellProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background text-on-background">
      {/* ── Sidebar ── */}
      <aside className="fixed left-0 top-0 hidden h-full w-60 flex-col bg-surface-container-lowest border-r border-outline-variant/20 px-4 py-6 md:flex shadow-sm">
        {/* Logo */}
        <div className="mb-8 flex w-full items-center justify-center">
          <img src="/logo.png" alt="LánZate Logo" className="h-20 w-auto object-contain" />
        </div>

        {/* Nav items */}
        <nav className="flex flex-1 flex-col gap-1">
          {unifiedNavItems.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                aria-current={active ? 'page' : undefined}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-150 ${
                  active
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                }`}
                href={item.href}
              >
                <span
                  className={`material-symbols-outlined text-[20px] ${active ? 'fill' : ''}`}
                >
                  {item.icon}
                </span>
                <span className="text-label-lg font-label-lg">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* CTA – Participar */}
        <Link
          className="mt-auto flex w-full items-center justify-center gap-2 rounded-2xl bg-secondary px-4 py-3 text-label-lg font-label-lg font-semibold text-on-secondary shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          href="/org-panel/nueva-iniciativa"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Participar
        </Link>
        <form action={logoutAction} className="mt-2 w-full">
          <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-2xl border border-outline-variant/30 bg-surface-container px-4 py-3 text-label-lg font-label-lg font-semibold text-on-surface-variant transition-all hover:bg-surface-container-high hover:text-on-surface">
            <span className="material-symbols-outlined text-[18px]">logout</span>
            Salir
          </button>
        </form>
      </aside>

      {/* ── Main content ── */}
      <div className="flex min-h-screen flex-col md:pl-60">
        {/* Top header */}
        <header className="sticky top-0 z-30 border-b border-outline-variant/20 bg-surface/90 backdrop-blur-md">
          <div className="flex items-center justify-between gap-4 px-container-padding py-3">
            {/* Mobile logo */}
            <div className="flex-1 md:hidden flex justify-center">
              <img src="/logo.png" alt="LánZate Logo" className="h-10 w-auto object-contain" />
            </div>

            {/* Search */}
            <div className="relative min-w-0 flex-1 max-w-xl">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">
                search
              </span>
              <input
                className="w-full rounded-full border border-outline-variant/50 bg-surface-container-lowest px-10 py-2.5 text-body-md font-body-md text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                placeholder={searchPlaceholder}
                type="text"
              />
            </div>

            {/* Header meta (user info, etc.) */}
            {headerMeta ? (
              <div className="flex items-center gap-3">{headerMeta}</div>
            ) : null}
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 px-container-padding py-6">{children}</main>

        {/* Footer */}
        <footer className="mt-auto border-t border-outline-variant/20 bg-surface-container px-container-padding py-6 text-body-md text-on-surface-variant">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-label-lg font-label-lg font-bold text-primary">LánZate</p>
              <p className="mt-0.5 text-label-md font-label-md">© 2024 Plataforma de Participación Ciudadana</p>
            </div>
            <div className="flex flex-wrap gap-5 text-label-md font-label-md">
              <Link className="transition-colors hover:text-primary" href="/about">Sobre nosotros</Link>
              <Link className="transition-colors hover:text-primary" href="/legal">Aviso legal</Link>
              <Link className="transition-colors hover:text-primary" href="/privacidad">Privacidad</Link>
              <Link className="transition-colors hover:text-primary" href="/terminos">Términos</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
