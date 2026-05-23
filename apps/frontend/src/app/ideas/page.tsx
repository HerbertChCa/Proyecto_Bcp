"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { synthesizeInitiativeProposal } from '@proyecto-bcp/shared-api';
import { AppShell } from '../../components/app-shell';

type IdeaResult = {
  persisted: boolean;
  message?: string;
  rawIdea?: { id?: string; content?: string } | null;
  synthesizedIdea?: {
    title: string;
    summary: string;
    problem: string;
    audience: string;
    category: string;
    estimatedTime: string;
    activities: string[];
    requirements: string[];
    impact: string[];
  } | null;
  draft?: ReturnType<typeof synthesizeInitiativeProposal>;
  error?: string;
};

export default function IdeasPage() {
  const [raw, setRaw] = useState('');
  const [result, setResult] = useState<IdeaResult | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSynthesize(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setResult(null);

    const response = await fetch('/api/ideas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rawIdea: raw }),
    });

    const json = (await response.json()) as Partial<IdeaResult>;
    setResult(
      response.ok
        ? ({ persisted: Boolean(json.persisted), ...json } as IdeaResult)
        : {
            persisted: false,
            error: json.error || 'No se pudo procesar la idea.',
          },
    );

    setLoading(false);
  }

  return (
    <AppShell
      cta={{ href: '/org-panel/nueva-iniciativa', icon: 'add', label: 'Crear iniciativa' }}
      navItems={[
        { href: '/', label: 'Inicio', icon: 'home' },
        { href: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
        { href: '/iniciativas', label: 'Iniciativas', icon: 'hub' },
        { href: '/ideas', label: 'Ideas', icon: 'lightbulb' },
        { href: '/dashboard/perfil', label: 'Perfil', icon: 'person' },
        { href: '/org-panel', label: 'Organización', icon: 'apartment' },
      ]}
      searchPlaceholder="Buscar ideas, categorías o propuestas..."
      subtitle="Participación Ciudadana"
      title="LánZate"
    >
      <main className="px-container-padding py-8">
        <div className="grid gap-bento-gap lg:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-[24px] border border-outline-variant/20 bg-surface-container-lowest p-8 shadow-sm">
            <p className="text-label-md font-label-md uppercase tracking-[0.18em] text-secondary">Ideas</p>
            <h1 className="mt-3 text-headline-lg font-headline-lg text-primary">Enviar idea y sintetizar propuesta</h1>
            <p className="mt-3 text-body-lg font-body-lg text-on-surface-variant">
              Escribe una idea en lenguaje natural y obtén un borrador estructurado para revisión. El flujo guarda la idea y devuelve una síntesis local sin OpenAI.
            </p>

            <form className="mt-8 space-y-4" onSubmit={handleSynthesize}>
              <textarea
                value={raw}
                onChange={(event) => setRaw(event.target.value)}
                placeholder="Describe el problema, quién se beneficia, qué debería pasar y por qué importa..."
                className="min-h-44 w-full rounded-2xl border border-outline-variant bg-surface-container-low px-4 py-3 text-body-lg font-body-lg text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
              <div className="flex flex-wrap gap-3">
                <button
                  disabled={loading || !raw.trim()}
                  type="submit"
                  className="rounded-full bg-secondary px-5 py-3 text-label-lg font-label-lg text-on-secondary disabled:opacity-60"
                >
                  {loading ? 'Procesando...' : 'Sintetizar'}
                </button>
                <Link className="rounded-full border border-outline-variant px-5 py-3 text-label-lg font-label-lg text-on-surface-variant" href="/dashboard">
                  Ir al dashboard
                </Link>
              </div>
            </form>
          </section>

          <section className="rounded-[24px] border border-outline-variant/20 bg-surface-container-lowest p-8 shadow-sm">
            <p className="text-label-md font-label-md uppercase tracking-[0.18em] text-tertiary">Resultado</p>
            <h2 className="mt-3 text-title-lg font-title-lg text-primary">Borrador sintetizado</h2>

            {result ? (
              result.error ? (
                <div className="mt-6 rounded-2xl border border-error/20 bg-error-container p-4 text-on-error-container">{String(result.error)}</div>
              ) : (
                <div className="mt-6 space-y-4">
                  <p className="text-label-md font-label-md uppercase tracking-[0.16em] text-on-surface-variant">
                    {result.persisted ? 'Guardado en Supabase' : 'Vista previa local'}
                  </p>
                  <div className="rounded-2xl border border-outline-variant/20 bg-surface-container-low p-5">
                    <h3 className="text-title-lg font-title-lg text-on-surface">{result.synthesizedIdea?.title}</h3>
                    <p className="mt-2 text-body-md font-body-md text-on-surface-variant">{result.synthesizedIdea?.summary}</p>
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded-2xl bg-surface-container-low p-4">
                      <p className="text-label-md font-label-md text-on-surface-variant">Categoría</p>
                      <p className="mt-1 text-label-lg font-label-lg text-on-surface">{result.synthesizedIdea?.category}</p>
                    </div>
                    <div className="rounded-2xl bg-surface-container-low p-4">
                      <p className="text-label-md font-label-md text-on-surface-variant">Tiempo estimado</p>
                      <p className="mt-1 text-label-lg font-label-lg text-on-surface">{result.synthesizedIdea?.estimatedTime}</p>
                    </div>
                  </div>
                </div>
              )
            ) : (
              <p className="mt-6 text-body-md font-body-md text-on-surface-variant">Aquí aparecerá el borrador generado cuando envíes una idea.</p>
            )}
          </section>
        </div>
      </main>
    </AppShell>
  );
}
