'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { submitIdeaAction } from './actions';

type Org = { id: string; name: string };

export function SubmitIdeaForm({ orgs }: { orgs: Org[] }) {
  const [raw, setRaw] = useState('');
  const [orgId, setOrgId] = useState(orgs[0]?.id || '');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await submitIdeaAction(raw, orgId);
      setSuccess(true);
      setRaw('');
    } catch (e) {
      alert('Error enviando idea');
    }
    setLoading(false);
  }

  if (success) {
    return (
      <div className="rounded-[24px] border border-outline-variant/20 bg-surface-container-lowest p-8 shadow-sm text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-container text-on-primary-container">
          <span className="material-symbols-outlined text-[32px]">check</span>
        </div>
        <h2 className="mt-4 text-title-lg font-title-lg text-primary">¡Propuesta enviada!</h2>
        <p className="mt-2 text-body-lg text-on-surface-variant">
          Tu idea ha sido enviada a la organización. Ellos la revisarán y podrán contactarte o usarla para crear una nueva iniciativa comunitaria.
        </p>
        <div className="mt-6">
          <Link className="rounded-2xl bg-secondary px-6 py-3 text-label-lg font-label-lg font-bold text-on-secondary transition-all hover:-translate-y-0.5" href="/dashboard">
            Volver al Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <label className="block space-y-2">
        <span className="text-label-lg font-label-lg text-on-surface">¿A qué organización quieres proponer esta idea?</span>
        <select
          value={orgId}
          onChange={(e) => setOrgId(e.target.value)}
          required
          className="w-full rounded-2xl border border-outline-variant bg-surface-container-low px-4 py-3 text-body-lg font-body-lg text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
        >
          {orgs.length === 0 && <option value="">No hay organizaciones disponibles</option>}
          {orgs.map((org) => (
            <option key={org.id} value={org.id}>
              {org.name}
            </option>
          ))}
        </select>
      </label>

      <label className="block space-y-2">
        <span className="text-label-lg font-label-lg text-on-surface">Describe tu propuesta libremente</span>
        <textarea
          value={raw}
          onChange={(event) => setRaw(event.target.value)}
          required
          placeholder="Ej: Quiero hacer un programa para enseñar programación a niños los sábados..."
          className="min-h-44 w-full rounded-2xl border border-outline-variant bg-surface-container-low px-4 py-3 text-body-lg font-body-lg text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
        />
      </label>
      
      <div className="flex flex-wrap gap-3 pt-2">
        <button
          disabled={loading || !raw.trim() || !orgId}
          type="submit"
          className="rounded-2xl bg-primary px-5 py-3 text-label-lg font-label-lg font-bold text-on-primary disabled:opacity-60 transition-all hover:-translate-y-0.5"
        >
          {loading ? 'Enviando...' : 'Enviar Propuesta'}
        </button>
        <Link className="rounded-2xl border border-outline-variant px-5 py-3 text-label-lg font-label-lg text-on-surface-variant hover:border-primary hover:text-primary transition-colors flex items-center gap-2" href="/dashboard">
          Cancelar
        </Link>
      </div>
    </form>
  );
}
