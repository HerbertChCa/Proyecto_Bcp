import { InfoPageShell } from '../../components/info-page-shell';

export default function LegalPage() {
  return (
    <InfoPageShell
      ctas={[
        { href: '/', label: 'Volver al inicio' },
        { href: '/privacidad', label: 'Ir a privacidad', variant: 'secondary' },
      ]}
      description="LánZate facilita participación ciudadana, gestión de iniciativas y validación de propuestas. El contenido publicado por usuarios y organizaciones es responsabilidad de sus autores."
      eyebrow="Aviso legal"
      title="Información legal de la plataforma"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ['Uso responsable', 'Evita publicar contenido engañoso, ofensivo o fuera de contexto.'],
          ['Autoría', 'Las iniciativas y comentarios pertenecen a sus autores y moderadores.'],
          ['Cobertura', 'Esta vista completa el recorrido de enlaces legales del producto.'],
        ].map(([title, text]) => (
          <article key={title} className="rounded-2xl border border-outline-variant/20 bg-surface-container p-5">
            <p className="text-label-lg font-label-lg font-bold text-primary">{title}</p>
            <p className="mt-2 text-body-md text-on-surface-variant">{text}</p>
          </article>
        ))}
      </div>
      <div className="rounded-2xl border border-outline-variant/20 bg-primary/5 p-5 text-body-md text-on-surface-variant">
        Si necesitas revisar el recorrido completo del producto, vuelve al inicio o continúa hacia las vistas públicas y el flujo autenticado.
      </div>
    </InfoPageShell>
  );
}