import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <header className="border-b border-steel-2 bg-ink/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold tracking-tight" aria-label="ToConnectNow Inicio">
            ToConnectNow
          </Link>
          <nav aria-label="Principal">
            <ul className="flex gap-6 text-sm font-medium text-ash">
              <li>
                <Link href="#producto" className="hover:text-bone focus-visible:rounded">
                  Producto
                </Link>
              </li>
              <li>
                <Link href="#beneficios" className="hover:text-bone focus-visible:rounded">
                  Beneficios
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-bone focus-visible:rounded">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">
        <section
          aria-labelledby="hero-title"
          className="mx-auto max-w-6xl px-6 py-24 md:py-32"
        >
          <div className="max-w-3xl">
            <h1
              id="hero-title"
              className="text-4xl font-bold leading-tight tracking-tight md:text-6xl"
            >
              Ningún paciente potencial se pierde por una respuesta lenta
            </h1>
            <p className="mt-6 text-lg text-ash md:text-xl">
              LEADtoWA by ToConnectNow automatiza la captura, calificación y
              conversación de leads para clínicas estéticas con agentes de IA de
              Google. Responde en segundos, agenda más consultas y cierra más
              tratamientos.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-2 focus-visible:rounded-lg"
              >
                Solicitar demo
              </a>
              <a
                href="#producto"
                className="inline-flex items-center justify-center rounded-lg border border-steel-2 px-6 py-3 text-sm font-semibold hover:border-brand focus-visible:rounded-lg"
              >
                Cómo funciona
              </a>
            </div>
          </div>
        </section>

        <section
          id="producto"
          aria-labelledby="producto-title"
          className="bg-steel"
        >
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2
              id="producto-title"
              className="text-3xl font-bold tracking-tight md:text-4xl"
            >
              Automatización de ventas B2B para clínicas estéticas
            </h2>
            <p className="mt-4 max-w-2xl text-ash">
              Conectamos tus anuncios, WhatsApp, formularios y CRM en un flujo
              unificado dirigido por agentes de IA que actúan con autoridad
              consultiva.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <article className="rounded-2xl border border-steel-2 bg-ink p-8">
                <h3 className="text-xl font-semibold">Captura inmediata</h3>
                <p className="mt-3 text-ash">
                  Cada lead de Meta Ads o WhatsApp entra en un embudo
                  automatizado sin demoras ni intervención manual.
                </p>
              </article>
              <article className="rounded-2xl border border-steel-2 bg-ink p-8">
                <h3 className="text-xl font-semibold">Conversación inteligente</h3>
                <p className="mt-3 text-ash">
                  El Agente Prospector inicia diálogos personalizados,
                  diagnostica la pérdida de pacientes y perfila al dueño de
                  clínica.
                </p>
              </article>
              <article className="rounded-2xl border border-steel-2 bg-ink p-8">
                <h3 className="text-xl font-semibold">Cierre escalable</h3>
                <p className="mt-3 text-ash">
                  Agenda consultas, responde objeciones y entrega el lead
                  calificado a tu equipo de ventas en tiempo real.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          id="beneficios"
          aria-labelledby="beneficios-title"
          className="mx-auto max-w-6xl px-6 py-20"
        >
          <h2
            id="beneficios-title"
            className="text-3xl font-bold tracking-tight md:text-4xl"
          >
            Tecnología de Google para tu crecimiento
          </h2>
          <ul className="mt-12 space-y-6 text-ash">
            <li className="flex items-start gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand" aria-hidden="true" />
              <span>
                Infraestructura construida sobre Gemini, Vercel Edge y Google
                Workspace para máxima velocidad y seguridad.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand" aria-hidden="true" />
              <span>
                Semántica HTML estricta, Core Web Vitals optimizados y SEO
                enterprise para posicionamiento orgánico.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand" aria-hidden="true" />
              <span>
                Arquitectura multi-tenant con aislamiento de datos y kill switch
                de seguridad por agente.
              </span>
            </li>
          </ul>
        </section>

        <section
          id="contacto"
          aria-labelledby="contacto-title"
          className="bg-steel"
        >
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2
              id="contacto-title"
              className="text-3xl font-bold tracking-tight md:text-4xl"
            >
              Empieza a retener más pacientes hoy
            </h2>
            <p className="mt-4 max-w-2xl text-ash">
              Agenda una llamada con nuestro equipo y descubre cuánto dinero
              estás dejando en la mesa por demoras de respuesta.
            </p>
            <form
              className="mt-10 max-w-md space-y-4"
              action="#"
              method="POST"
              aria-label="Formulario de contacto"
            >
              <div>
                <label htmlFor="name" className="sr-only">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="w-full rounded-lg border border-steel-2 bg-ink px-4 py-3 text-sm text-bone placeholder:text-ash focus:border-brand focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@clinica.com"
                  className="w-full rounded-lg border border-steel-2 bg-ink px-4 py-3 text-sm text-bone placeholder:text-ash focus:border-brand focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="clinic" className="sr-only">
                  Nombre de la clínica
                </label>
                <input
                  id="clinic"
                  name="clinic"
                  type="text"
                  placeholder="Nombre de tu clínica"
                  className="w-full rounded-lg border border-steel-2 bg-ink px-4 py-3 text-sm text-bone placeholder:text-ash focus:border-brand focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-2 focus-visible:rounded-lg"
              >
                Quiero una demo
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-steel-2 bg-ink">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <p className="text-sm text-ash">
              © {new Date().getFullYear()} ToConnectNow LLC. Miami Beach, FL.
            </p>
            <nav aria-label="Legal">
              <ul className="flex gap-6 text-sm text-ash">
                <li>
                  <Link href="/privacidad" className="hover:text-bone">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terminos" className="hover:text-bone">
                    Términos
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
