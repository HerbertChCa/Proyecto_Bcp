import Link from 'next/link';
import { InfoPageShell } from '../../components/info-page-shell';

export default function TermsPage() {
  return (
    <InfoPageShell
      ctas={[
        { href: '/', label: 'Volver al inicio' },
        { href: '/privacidad', label: 'Revisar privacidad', variant: 'secondary' },
      ]}
      description="Al usar LánZate aceptas respetar las reglas de participación, convivencia y publicación responsable de iniciativas."
      eyebrow="Términos"
      title="Condiciones de uso"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ['Participación', 'Mantén un trato respetuoso en iniciativas, comentarios y validaciones.'],
          ['Contenido', 'Publica información veraz y vinculada con el propósito de la comunidad.'],
          ['Cobertura', 'La estructura actual deja listos los enlaces legales del producto.'],
        ].map(([title, text]) => (
          <article key={title} className="rounded-2xl border border-outline-variant/20 bg-surface-container p-5">
            <p className="text-label-lg font-label-lg font-bold text-primary">{title}</p>
            <p className="mt-2 text-body-md text-on-surface-variant">{text}</p>
          </article>
        ))}
      </div>
      <div className="rounded-2xl border border-outline-variant/20 bg-secondary/5 p-5 text-body-md text-on-surface-variant">
        Si algo no encaja con tu flujo, vuelve al inicio y sigue hacia el dashboard, las ideas o las iniciativas.
      </div>
    </InfoPageShell>
  );
}