import Link from 'next/link';
import { InfoPageShell } from '../../components/info-page-shell';

export default function AboutPage() {
  return (
    <InfoPageShell
      ctas={[
        { href: '/dashboard', label: 'Ir al dashboard' },
        { href: '/iniciativas', label: 'Explorar iniciativas', variant: 'secondary' },
      ]}
      description="LánZate conecta ciudadanía, organizaciones y equipos de proyecto en un flujo visual consistente para descubrir, validar y lanzar iniciativas de impacto."
      eyebrow="Sobre nosotros"
      title="Una plataforma para pasar de la idea a la acción"
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {[
          ['Descubrir', 'Explora iniciativas activas, retos locales e ideas impulsadas por IA.'],
          ['Participar', 'Únete, aporta horas y acumula créditos visibles en tu perfil.'],
          ['Lanzar', 'Pasa de propuesta a publicación con un panel organizado por propósito.'],
        ].map(([title, text]) => (
          <article key={title} className="rounded-2xl border border-outline-variant/20 bg-surface-container p-5">
            <p className="text-label-lg font-label-lg font-bold text-primary">{title}</p>
            <p className="mt-2 text-body-md text-on-surface-variant">{text}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-2xl border border-outline-variant/20 bg-primary/5 p-5">
          <p className="text-label-lg font-label-lg font-bold text-primary">Flujo unificado</p>
          <p className="mt-2 text-body-md text-on-surface-variant">
            El objetivo es que el usuario no sienta cambios bruscos entre landing, autenticación, exploración y gestión.
          </p>
        </article>
        <article className="rounded-2xl border border-outline-variant/20 bg-tertiary/5 p-5">
          <p className="text-label-lg font-label-lg font-bold text-primary">Estética del proyecto</p>
          <p className="mt-2 text-body-md text-on-surface-variant">
            Se mantienen los colores azul, naranja y turquesa con tarjetas suaves y una composición tipo bento.
          </p>
        </article>
      </div>
      <div className="flex flex-wrap gap-3 text-body-md text-on-surface-variant">
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
    </InfoPageShell>
  );
}