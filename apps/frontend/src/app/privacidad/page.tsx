
import { InfoPageShell } from '../../components/info-page-shell';

export default function PrivacyPage() {
  return (
    <InfoPageShell
      ctas={[
        { href: '/', label: 'Volver al inicio' },
        { href: '/legal', label: 'Ver aviso legal', variant: 'secondary' },
      ]}
      description="Usamos tu información para autenticación, seguimiento de participación y gestión de iniciativas dentro de la plataforma."
      eyebrow="Privacidad"
      title="Cómo tratamos tus datos"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ['Autenticación', 'Usamos tus credenciales para mantener sesiones y proteger el acceso.'],
          ['Participación', 'Tus acciones ayudan a registrar avance, reputación e impacto.'],
          ['Control', 'El recorrido está preparado para enlazar con el resto del producto.'],
        ].map(([title, text]) => (
          <article key={title} className="rounded-2xl border border-outline-variant/20 bg-surface-container p-5">
            <p className="text-label-lg font-label-lg font-bold text-primary">{title}</p>
            <p className="mt-2 text-body-md text-on-surface-variant">{text}</p>
          </article>
        ))}
      </div>
      <div className="rounded-2xl border border-outline-variant/20 bg-tertiary/5 p-5 text-body-md text-on-surface-variant">
        Para navegar de vuelta al flujo principal puedes usar el inicio, el dashboard o cualquiera de las vistas públicas.
      </div>
    </InfoPageShell>
  );
}