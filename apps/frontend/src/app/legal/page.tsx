import Link from 'next/link';

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-background px-container-padding py-12 text-on-background md:px-8">
      <section className="mx-auto max-w-4xl rounded-[24px] border border-outline-variant/30 bg-surface-container-lowest p-8 shadow-sm md:p-12">
        <p className="text-label-md font-label-md uppercase tracking-[0.18em] text-secondary">Aviso Legal</p>
        <h1 className="mt-3 text-headline-lg font-headline-lg text-primary">Información legal de la plataforma</h1>
        <p className="mt-4 text-body-lg font-body-lg text-on-surface-variant">
          LánZate facilita participación ciudadana, gestión de iniciativas y validación de propuestas. El contenido publicado por usuarios y organizaciones es responsabilidad de sus autores.
        </p>
        <p className="mt-4 text-body-md font-body-md text-on-surface-variant">
          Esta vista completa el flujo para los enlaces del pie de página y sirve como referencia básica de uso.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="rounded-full bg-primary px-5 py-3 text-label-lg font-label-lg text-on-primary" href="/">
            Volver al inicio
          </Link>
          <Link className="rounded-full border border-outline-variant px-5 py-3 text-label-lg font-label-lg text-on-surface-variant" href="/privacidad">
            Privacidad
          </Link>
        </div>
      </section>
    </main>
  );
}