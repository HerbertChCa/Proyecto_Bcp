'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';

type CreateResponse =
  | { error: string }
  | {
      id: string;
      title: string;
      description: string;
      category: string;
      status: string | null;
    };

const rewardTypes = [
  { value: 'points', label: 'Puntos LánZate' },
  { value: 'badge', label: 'Badge' },
  { value: 'certificate', label: 'Certificado' },
  { value: 'impact', label: 'Impacto' },
];

export default function NewInitiativePage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rewardType, setRewardType] = useState('points');
  const [status, setStatus] = useState<string>('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus('');

    const response = await fetch('/api/initiatives', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, reward_type: rewardType }),
    });

    const payload = (await response.json()) as CreateResponse;

    if (!response.ok) {
      setStatus('error' in payload ? payload.error : 'No se pudo crear la iniciativa.');
      setLoading(false);
      return;
    }

    setStatus(`Iniciativa creada: ${'title' in payload ? payload.title : title}`);
    setTitle('');
    setDescription('');
    setRewardType('points');
    setLoading(false);
  }

  return (
    <main className="px-container-padding py-8">
      <section className="relative overflow-hidden rounded-[24px] border border-outline-variant/20 bg-surface-container-lowest p-8 shadow-sm md:p-12">
        <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/3 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />
        <div className="relative z-10 text-center">
          <p className="text-label-md font-label-md uppercase tracking-[0.18em] text-tertiary">Panel de organización</p>
          <h1 className="mt-3 text-headline-lg font-headline-lg text-primary">Crear nueva iniciativa</h1>
          <p className="mx-auto mt-4 max-w-2xl text-body-lg font-body-lg text-on-surface-variant">Define los detalles de tu proyecto para involucrar a la comunidad ciudadana.</p>
        </div>

        {status ? <div className="relative z-10 mt-6 rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-on-surface">{status}</div> : null}

        <form className="relative z-10 mt-8 space-y-8" onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-label-lg font-label-lg text-primary" htmlFor="title">
                Título de la iniciativa
              </label>
              <input
                id="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Ej. Renovación del Parque Central"
                type="text"
                className="w-full rounded-xl border border-outline-variant bg-surface-container px-4 py-3 text-body-lg font-body-lg text-on-surface outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="mb-2 block text-label-lg font-label-lg text-primary" htmlFor="description">
                Descripción detallada
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                rows={4}
                placeholder="Describe el impacto, los objetivos y cómo puede ayudar la comunidad..."
                className="w-full resize-y rounded-xl border border-outline-variant bg-surface-container px-4 py-3 text-body-lg font-body-lg text-on-surface outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label className="mb-4 block text-title-lg font-title-lg text-primary">Categoría principal</label>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <button className="flex flex-col items-center justify-center rounded-2xl border-2 border-transparent bg-surface-container p-6 text-center transition-all hover:border-primary/30" type="button">
                <span className="material-symbols-outlined mb-3 text-4xl text-on-surface-variant transition-colors group-hover:text-primary">eco</span>
                <span className="text-label-lg font-label-lg text-on-surface">Medio ambiente</span>
              </button>
              <button className="flex flex-col items-center justify-center rounded-2xl border-2 border-transparent bg-surface-container p-6 text-center transition-all hover:border-primary/30" type="button">
                <span className="material-symbols-outlined mb-3 text-4xl text-on-surface-variant transition-colors group-hover:text-primary">architecture</span>
                <span className="text-label-lg font-label-lg text-on-surface">Infraestructura</span>
              </button>
              <button className="flex flex-col items-center justify-center rounded-2xl border-2 border-transparent bg-surface-container p-6 text-center transition-all hover:border-primary/30" type="button">
                <span className="material-symbols-outlined mb-3 text-4xl text-on-surface-variant transition-colors group-hover:text-primary">school</span>
                <span className="text-label-lg font-label-lg text-on-surface">Educación</span>
              </button>
              <button className="flex flex-col items-center justify-center rounded-2xl border-2 border-transparent bg-surface-container p-6 text-center transition-all hover:border-primary/30" type="button">
                <span className="material-symbols-outlined mb-3 text-4xl text-on-surface-variant transition-colors group-hover:text-primary">palette</span>
                <span className="text-label-lg font-label-lg text-on-surface">Cultura</span>
              </button>
            </div>
          </div>

          <div>
            <label className="mb-4 block text-title-lg font-title-lg text-primary">Alcance / Ubicación</label>
            <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <button className="flex items-center justify-center gap-3 rounded-xl border-2 border-transparent bg-surface-container p-4 transition-all" type="button">
                <span className="material-symbols-outlined text-on-surface-variant">location_city</span>
                <span className="text-label-lg font-label-lg text-on-surface">Nivel ciudad</span>
              </button>
              <button className="flex items-center justify-center gap-3 rounded-xl border-2 border-transparent bg-surface-container p-4 transition-all" type="button">
                <span className="material-symbols-outlined text-on-surface-variant">home_work</span>
                <span className="text-label-lg font-label-lg text-on-surface">Nivel barrio</span>
              </button>
              <button className="flex items-center justify-center gap-3 rounded-xl border-2 border-transparent bg-surface-container p-4 transition-all" type="button">
                <span className="material-symbols-outlined text-on-surface-variant">public</span>
                <span className="text-label-lg font-label-lg text-on-surface">Digital / remoto</span>
              </button>
            </div>
            <input
              className="w-full rounded-xl border border-outline-variant bg-surface-container px-4 py-3 text-body-md font-body-md text-on-surface outline-none"
              placeholder="Especificar ubicación (opcional)"
              type="text"
            />
          </div>

          <div className="rounded-2xl border border-surface-variant/50 bg-surface-container-low p-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-2xl text-tertiary">stars</span>
              <label className="block text-title-lg font-title-lg text-primary">Incentivos para participantes</label>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {rewardTypes.map((reward) => (
                <button
                  key={reward.value}
                  className={`flex items-center gap-2 rounded-lg border bg-surface-container-lowest p-3 transition-all ${
                    rewardType === reward.value ? 'border-tertiary' : 'border-outline-variant hover:border-tertiary'
                  }`}
                  type="button"
                  onClick={() => setRewardType(reward.value)}
                >
                  <span className="material-symbols-outlined text-[20px] text-tertiary">
                    {reward.value === 'points' ? 'loyalty' : reward.value === 'badge' ? 'military_tech' : reward.value === 'certificate' ? 'card_giftcard' : 'volunteer_activism'}
                  </span>
                  <span className="text-label-md font-label-md text-on-surface">{reward.label}</span>
                </button>
              ))}
            </div>
          </div>

          <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-secondary py-4 text-title-lg font-title-lg text-on-secondary disabled:opacity-60" disabled={loading || !title.trim() || !description.trim()} type="submit">
            <span className="material-symbols-outlined">send</span>
            {loading ? 'Publicando...' : 'Publicar iniciativa'}
          </button>
        </form>
      </section>
    </main>
  );
}
