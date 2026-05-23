import React from 'react';
import Link from 'next/link';
import { createSupabaseServerClient } from '../../utils/supabase/server';

type Initiative = {
  id: string;
  title: string;
  summary?: string | null;
  category?: string | null;
  created_at?: string | null;
};

export default async function InitiativesPage() {
  const client = await createSupabaseServerClient();

  const { data, error } = await client
    .from('initiatives')
    .select('id,title,summary,category,created_at')
    .eq('status', 'active')
    .order('created_at', { ascending: false });

  const items: Initiative[] = (error ? [] : data) ?? [];

  return (
    <div>
      <div className="mb-bento-gap flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-label-md font-label-md uppercase tracking-[0.18em] text-secondary">Iniciativas</p>
          <h1 className="mt-2 text-headline-lg font-headline-lg text-primary">Catálogo de iniciativas activas</h1>
          <p className="mt-3 max-w-2xl text-body-lg font-body-lg text-on-surface-variant">Explora propuestas abiertas y entra directamente al detalle de cada iniciativa.</p>
        </div>
        <Link className="rounded-2xl bg-primary px-5 py-3 text-label-lg font-label-lg font-bold text-on-primary transition-all hover:-translate-y-0.5 hover:shadow-md whitespace-nowrap" href="/org-panel/nueva-iniciativa">
          Publicar iniciativa
        </Link>
      </div>

      {items.length === 0 ? (
        <div className="rounded-[24px] border border-outline-variant/20 bg-surface-container-lowest p-8 text-on-surface-variant shadow-sm">
          No se encontraron iniciativas activas.
        </div>
      ) : (
        <div className="grid gap-bento-gap lg:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <Link key={item.id} className="rounded-[24px] border border-outline-variant/20 bg-surface-container-lowest p-6 shadow-sm transition-transform hover:-translate-y-1" href={`/dashboard/iniciativa/${item.id}`}>
              <p className="text-label-md font-label-md uppercase tracking-[0.16em] text-tertiary">{item.category ?? 'General'}</p>
              <h2 className="mt-3 text-title-lg font-title-lg text-on-surface">{item.title}</h2>
              <p className="mt-2 text-body-md font-body-md text-on-surface-variant">{item.summary}</p>
              <div className="mt-6 flex items-center justify-between text-label-md font-label-md text-on-surface-variant">
                <span>Ver detalle</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
