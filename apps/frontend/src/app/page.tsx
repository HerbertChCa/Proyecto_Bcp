'use client';

import { useState } from 'react';
import { synthesizeInitiativeProposal } from '@proyecto-bcp/shared-api';

const DEFAULT_IDEA =
  'Queremos organizar talleres de reciclaje y limpieza en el barrio, con apoyo de jovenes voluntarios y vecinos, para ordenar los espacios publicos y crear una red de participacion constante.';

const featureCards = [
  {
    title: 'Entrada libre',
    body: 'El usuario escribe su idea en lenguaje natural y la IA la ordena en un formato util.',
  },
  {
    title: 'Salida estructurada',
    body: 'La propuesta se convierte en objetivo, publico, actividades, requisitos e impacto.',
  },
  {
    title: 'Lista para Supabase',
    body: 'Mas adelante este mismo resultado podra persistirse como iniciativa real en la base de datos.',
  },
];

export default function Index() {
  const [idea, setIdea] = useState(DEFAULT_IDEA);

  const draft = synthesizeInitiativeProposal(idea);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.96),_rgba(15,23,42,0.86)_42%,_rgba(2,6,23,1)_100%)] px-6 py-10 text-slate-50 sm:px-10 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                Prototipo vivo
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Iniciativas comunitarias que la IA convierte en propuestas claras.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                El flujo arranca con una idea libre del usuario. La sintetizamos en una ficha
                utilizable para luego guardarla, filtrarla y vincularla con Supabase cuando la
                clave ya este lista.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {featureCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"
                  >
                    <h2 className="text-sm font-semibold text-white">{card.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{card.body}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="border-t border-white/10 bg-slate-950/40 p-8 sm:p-10 lg:border-l lg:border-t-0">
              <div className="flex h-full flex-col justify-between gap-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">
                    Motor de síntesis
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">
                    Modo mock listo para iterar.
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Por ahora la lógica corre localmente con reglas compartidas. Cuando tengas la
                    API de Supabase, este mismo formato puede guardarse sin rehacer la interfaz.
                  </p>
                </div>

                <div className="grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>Estado</span>
                    <span className="font-semibold text-emerald-200">Activo</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>Fuente</span>
                    <span className="font-semibold text-white">Entrada libre</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>Persistencia</span>
                    <span className="font-semibold text-white">Supabase despues</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20 backdrop-blur-xl sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">
                  Idea original
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Escribe una iniciativa en texto natural.
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIdea(DEFAULT_IDEA)}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
              >
                Cargar ejemplo
              </button>
            </div>

            <label className="mt-6 block">
              <span className="mb-3 block text-sm font-medium text-slate-200">
                Descripcion de la propuesta
              </span>
              <textarea
                value={idea}
                onChange={(event) => setIdea(event.target.value)}
                rows={11}
                className="min-h-[280px] w-full rounded-3xl border border-white/10 bg-slate-950/60 p-5 text-base leading-7 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/70 focus:ring-2 focus:ring-emerald-300/20"
                placeholder="Ejemplo: Queremos organizar una red de tutorias, limpieza del barrio o talleres de salud..."
              />
            </label>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              La tarjeta de la derecha se actualiza en tiempo real con una sintesis tipo IA.
            </p>
          </div>

          <div className="rounded-[2rem] border border-emerald-300/20 bg-slate-950/60 p-6 shadow-xl shadow-black/25 backdrop-blur-xl sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
                  Sintesis generada
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Ficha estructurada</h2>
              </div>
              <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-100">
                {draft.category}
              </span>
            </div>

            <div className="mt-6 grid gap-4">
              <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Titulo
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">{draft.title}</h3>
              </article>

              <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Objetivo / resumen
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-200">{draft.summary}</p>
              </article>

              <article className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Publico
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">{draft.audience}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Tiempo estimado
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">{draft.estimatedTime}</p>
                </div>
              </article>

              <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Problema que resuelve
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-200">{draft.problem}</p>
              </article>

              <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Actividades sugeridas
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-200">
                  {draft.activities.map((activity) => (
                    <li key={activity} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Requisitos e impacto
                </p>
                <div className="mt-3 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-white">Requisitos</p>
                    <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-200">
                      {draft.requirements.map((requirement) => (
                        <li key={requirement} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-sky-300" />
                          <span>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Impacto esperado</p>
                    <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-200">
                      {draft.impact.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-amber-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
