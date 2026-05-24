'use client';

import Link from 'next/link';
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
  { value: 'points', label: 'Puntos LánZate', icon: 'loyalty' },
  { value: 'badge', label: 'Insignia Especial', icon: 'military_tech' },
  { value: 'certificate', label: 'Recompensa Física', icon: 'card_giftcard' },
  { value: 'impact', label: 'Ser Voluntario/a', icon: 'volunteer_activism' },
];

export default function NewInitiativePage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rewardType, setRewardType] = useState('points');
  const [status, setStatus] = useState('');
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
    <div>
      <div className="mb-8 text-center">
        <p className="text-label-md font-label-md uppercase tracking-[0.18em] text-tertiary">Panel de organización</p>
        <h1 className="mt-3 text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-primary">
          Crear Nueva Iniciativa
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-body-lg text-on-surface-variant">
          Define los detalles de tu proyecto para involucrar a la comunidad ciudadana.
        </p>
      </div>

      <div className="grid gap-bento-gap xl:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-[28px] border border-surface-variant/30 bg-surface-container-lowest p-6 shadow-sm md:p-8">
          {status ? (
            <div className="mb-6 rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-on-surface">
              {status}
            </div>
          ) : null}

          <form className="space-y-8" onSubmit={handleSubmit}>
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
                  className="w-full rounded-2xl border border-outline-variant bg-surface-container px-4 py-3 text-body-lg text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
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
                  rows={5}
                  placeholder="Describe el impacto, los objetivos y cómo puede ayudar la comunidad..."
                  className="w-full resize-y rounded-2xl border border-outline-variant bg-surface-container px-4 py-3 text-body-lg text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>
            </div>

            <div>
              <label className="mb-4 block text-title-lg font-title-lg text-primary">Categoría principal</label>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  ['eco', 'Medio Ambiente'],
                  ['architecture', 'Infraestructura'],
                  ['school', 'Educación'],
                  ['palette', 'Cultura'],
                ].map(([icon, label]) => (
                  <button key={label} className="group flex flex-col items-center justify-center rounded-2xl border-2 border-transparent bg-surface-container p-6 text-center transition-all hover:border-primary/40 hover:bg-surface-container-high" type="button">
                    <span className="material-symbols-outlined mb-3 text-4xl text-on-surface-variant group-hover:text-primary transition-colors">{icon}</span>
                    <span className="text-label-lg font-label-lg text-on-surface">{label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-4 block text-title-lg font-title-lg text-primary">Alcance / Ubicación</label>
              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  ['location_city', 'Nivel Ciudad'],
                  ['home_work', 'Nivel Barrio'],
                  ['public', 'Digital / Remoto'],
                ].map(([icon, label]) => (
                  <button key={label} className="flex items-center justify-center gap-3 rounded-2xl border-2 border-transparent bg-surface-container px-4 py-4 transition-all hover:border-primary/40 hover:bg-surface-container-high" type="button">
                    <span className="material-symbols-outlined text-on-surface-variant">{icon}</span>
                    <span className="text-label-lg font-label-lg text-on-surface">{label}</span>
                  </button>
                ))}
              </div>
              <input
                className="w-full rounded-2xl border border-outline-variant bg-surface-container px-4 py-3 text-body-md text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10 placeholder:text-on-surface-variant"
                placeholder="Especificar ubicación (opcional)"
                type="text"
              />
            </div>

            <div className="rounded-2xl border border-surface-variant/50 bg-surface-container-low p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-2xl text-tertiary">stars</span>
                <label className="block text-title-lg font-title-lg text-primary">Incentivos para Participantes</label>
              </div>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {rewardTypes.map((reward) => (
                  <button
                    key={reward.value}
                    className={`flex items-center gap-2 rounded-2xl border bg-surface-container-lowest p-3 transition-all ${
                      rewardType === reward.value
                        ? 'border-tertiary bg-tertiary-container/20'
                        : 'border-outline-variant hover:border-tertiary'
                    }`}
                    type="button"
                    onClick={() => setRewardType(reward.value)}
                  >
                    <span className="material-symbols-outlined text-[20px] text-tertiary">{reward.icon}</span>
                    <span className="text-label-md font-label-md text-on-surface">{reward.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-secondary py-4 text-title-lg font-title-lg font-bold text-on-secondary disabled:opacity-60 transition-all hover:-translate-y-0.5 hover:shadow-md"
              disabled={loading || !title.trim() || !description.trim()}
              type="submit"
            >
              <span className="material-symbols-outlined">send</span>
              {loading ? 'Publicando...' : 'Publicar Iniciativa'}
            </button>
          </form>
        </section>

        <aside className="space-y-bento-gap">
          <section className="rounded-[28px] border border-surface-variant/30 bg-primary p-6 text-on-primary shadow-sm md:p-8">
            <p className="text-label-md font-label-md uppercase tracking-[0.18em] text-primary-fixed-dim">Consejo</p>
            <h2 className="mt-2 text-title-lg font-title-lg">Cuanto más clara sea la idea, más fácil será validarla.</h2>
            <p className="mt-3 text-body-md text-primary-fixed-dim">
              Describe problema, contexto, participantes e impacto esperado para que el panel la evalúe mejor.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link className="rounded-2xl bg-secondary px-4 py-3 text-label-lg font-label-lg font-bold text-on-secondary shadow-sm" href="/org-panel/validacion">
                Ver validación
              </Link>
              <Link className="rounded-2xl border border-white/20 px-4 py-3 text-label-lg font-label-lg font-bold text-white" href="/org-panel/ideas">
                Ir al buzón de ideas
              </Link>
            </div>
          </section>

          <section className="rounded-[28px] border border-surface-variant/30 bg-surface-container-lowest p-6 shadow-sm">
            <h2 className="text-title-lg font-title-lg text-primary">Tipo de incentivo</h2>
            <div className="mt-4 grid gap-3">
              {rewardTypes.map((reward) => (
                <button
                  key={reward.value}
                  className={`flex items-center gap-3 rounded-2xl border bg-surface-container-lowest p-3 text-left transition-colors ${
                    rewardType === reward.value ? 'border-tertiary bg-tertiary-container/10' : 'border-outline-variant hover:border-tertiary'
                  }`}
                  type="button"
                  onClick={() => setRewardType(reward.value)}
                >
                  <span className="material-symbols-outlined text-tertiary text-[20px]">{reward.icon}</span>
                  <span className="text-label-md font-label-md text-on-surface">{reward.label}</span>
                </button>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
