'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { synthesizeInitiativeProposal } from '@proyecto-bcp/shared-api';

type RawIdea = {
  id: string;
  content: string;
  created_at: string;
  profiles?: { full_name: string };
};

export function InboxClient({ initialIdeas }: { initialIdeas: RawIdea[] }) {
  const [ideas] = useState<RawIdea[]>(initialIdeas);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleToggle = (id: string) => {
    setSelectedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const handleSynthesize = async () => {
    if (selectedIds.length === 0) return;
    setLoading(true);
    setResult(null);

    const selectedIdeasText = ideas.filter(i => selectedIds.includes(i.id)).map(i => i.content);

    try {
      const response = await fetch('/api/ideas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          rawIdeas: selectedIdeasText,
          primaryRawIdeaId: selectedIds[0] // For database relation
        }),
      });
      const data = await response.json();
      setResult(data);
    } catch (e) {
      alert("Error en la síntesis");
    }
    setLoading(false);
  };

  return (
    <div className="grid gap-bento-gap lg:grid-cols-[1fr_1fr]">
      {/* Left Col: Inbox list */}
      <section className="rounded-[24px] border border-outline-variant/20 bg-surface-container-lowest p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-title-lg font-title-lg text-primary">Ideas Recibidas ({ideas.length})</h2>
          <button 
            disabled={selectedIds.length === 0 || loading}
            onClick={handleSynthesize}
            className="rounded-2xl bg-secondary px-4 py-2 text-label-lg font-label-lg font-bold text-on-secondary disabled:opacity-50 transition-all hover:-translate-y-0.5"
          >
            {loading ? 'Sintetizando...' : `Sintetizar seleccionadas (${selectedIds.length})`}
          </button>
        </div>

        {ideas.length === 0 ? (
          <p className="text-body-md text-on-surface-variant p-4 bg-surface-container rounded-2xl">No hay propuestas pendientes.</p>
        ) : (
          <div className="space-y-3">
            {ideas.map((idea) => (
              <label 
                key={idea.id} 
                className={`block cursor-pointer p-4 border rounded-2xl transition-colors ${selectedIds.includes(idea.id) ? 'bg-primary/5 border-primary/30' : 'bg-surface-container-low border-outline-variant/20 hover:bg-surface-container'}`}
              >
                <div className="flex gap-3">
                  <input 
                    type="checkbox" 
                    checked={selectedIds.includes(idea.id)} 
                    onChange={() => handleToggle(idea.id)} 
                    className="mt-1 h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary shrink-0"
                  />
                  <div>
                    <p className="text-label-md font-label-md text-on-surface-variant">Enviado por: {idea.profiles?.full_name || 'Anónimo'} • {new Date(idea.created_at).toLocaleDateString()}</p>
                    <p className="mt-2 text-body-md text-on-surface line-clamp-3">{idea.content}</p>
                  </div>
                </div>
              </label>
            ))}
          </div>
        )}
      </section>

      {/* Right Col: Result */}
      <section className="rounded-[24px] border border-outline-variant/20 bg-surface-container-lowest p-6 shadow-sm">
        <p className="text-label-md font-label-md uppercase tracking-[0.18em] text-tertiary">Resultado IA</p>
        <h2 className="mt-3 text-title-lg font-title-lg text-primary">Borrador Consolidado</h2>

        {result ? (
          result.error ? (
            <div className="mt-6 rounded-2xl border border-error/20 bg-error-container p-4 text-on-error-container">{String(result.error)}</div>
          ) : (
            <div className="mt-6 space-y-4">
              <p className="text-label-md font-label-md uppercase tracking-[0.16em] text-on-surface-variant">
                {result.persisted ? 'Guardado en Borradores' : 'Vista previa local'}
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
              
              <div className="mt-6 flex justify-end">
                <Link className="rounded-2xl bg-primary px-5 py-3 text-label-lg font-label-lg font-bold text-on-primary transition-all hover:-translate-y-0.5" href="/org-panel/nueva-iniciativa">
                  Publicar Iniciativa a partir de este borrador
                </Link>
              </div>
            </div>
          )
        ) : (
          <p className="mt-6 text-body-md font-body-md text-on-surface-variant">Selecciona una o más ideas de tu buzón y haz clic en "Sintetizar" para generar una propuesta estructurada.</p>
        )}
      </section>
    </div>
  );
}
