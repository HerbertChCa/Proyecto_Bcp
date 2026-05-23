'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

type NavItem = {
  href: string;
  label: string;
  icon: string;
};

type AppShellProps = {
  title?: string;
  subtitle?: string;
  searchPlaceholder?: string;
  navItems: NavItem[];
  cta?: {
    label: string;
    href: string;
    icon?: string;
  };
  children: ReactNode;
};

const footerLinks = [
  { href: '/legal', label: 'Aviso Legal' },
  { href: '/privacidad', label: 'Privacidad' },
  { href: '/terminos', label: 'Términos' },
];

function isActivePath(pathname: string, href: string) {
  if (href === '/') {
    return pathname === '/';
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function AppShell({
  title = 'LánZate',
  subtitle = 'Participación Ciudadana',
  searchPlaceholder = 'Buscar iniciativas, ideas o paneles...',
  navItems,
  cta,
  children,
}: AppShellProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background text-on-background">
      <aside className="fixed left-0 top-0 hidden h-full w-64 flex-col border-r border-outline-variant/30 bg-surface-container-low px-4 py-8 md:flex">
        <div className="mb-10 flex items-center gap-3 px-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-on-primary shadow-sm">
            <span className="material-symbols-outlined">rocket_launch</span>
          </div>
          <div>
            <h1 className="text-title-lg font-title-lg font-bold text-primary">{title}</h1>
            <p className="text-label-md font-label-md text-on-surface-variant">{subtitle}</p>
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-2">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                aria-current={active ? 'page' : undefined}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition-colors ${
                  active
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                }`}
                href={item.href}
              >
                <span className={`material-symbols-outlined ${active ? 'fill' : ''} text-[20px]`}>
                  {item.icon}
                </span>
                <span className="text-label-lg font-label-lg">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {cta ? (
          <Link
            className="mt-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-secondary px-4 py-3 text-label-lg font-label-lg font-semibold text-on-secondary shadow-sm transition-opacity hover:opacity-90"
            href={cta.href}
          >
            {cta.icon ? <span className="material-symbols-outlined text-[18px]">{cta.icon}</span> : null}
            {cta.label}
          </Link>
        ) : null}
      </aside>

      <div className="flex min-h-screen flex-col md:pl-64">
        <header className="sticky top-0 z-30 border-b border-outline-variant/30 bg-surface/85 backdrop-blur-md">
          <div className="flex items-center justify-between gap-4 px-container-padding py-4">
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-on-primary md:hidden">
                <span className="material-symbols-outlined">rocket_launch</span>
              </div>
              <div className="relative min-w-0 flex-1 max-w-2xl">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
                  search
                </span>
                <input
                  className="w-full rounded-full border border-outline-variant/60 bg-surface-container-lowest px-12 py-3 text-body-md font-body-md text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                  placeholder={searchPlaceholder}
                  type="text"
                />
              </div>
            </div>

            <div className="hidden items-center gap-4 sm:flex">
              <div className="flex items-center gap-2 rounded-full bg-surface-container-low px-4 py-2 text-on-surface-variant">
                <span className="material-symbols-outlined fill text-secondary">military_tech</span>
                <span className="text-label-lg font-label-lg">Nivel 3</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-surface-container-low px-4 py-2 text-on-surface-variant">
                <span className="material-symbols-outlined fill text-tertiary">monetization_on</span>
                <span className="text-label-lg font-label-lg font-semibold">150 Créditos</span>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-container text-on-primary-container font-bold">
                JP
              </div>
            </div>
          </div>

          <nav className="flex gap-2 overflow-x-auto px-container-padding pb-4 md:hidden">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-label-md font-label-md transition-colors ${
                    active
                      ? 'bg-primary text-on-primary'
                      : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-outline-variant/30 bg-surface-container px-container-padding py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-label-lg font-label-lg font-semibold text-primary">{title}</p>
              <p className="text-body-md font-body-md text-on-surface-variant">{subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              {footerLinks.map((link) => (
                <Link key={link.href} className="text-body-md font-body-md text-on-surface-variant hover:text-primary" href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}