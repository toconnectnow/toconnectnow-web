import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://toconnectnow.com";
const siteName = "ToConnectNow";
const titleDefault = "ToConnectNow — IA de Ventas para Clínicas Estéticas";
const descriptionDefault =
  "Automatiza la captura, seguimiento y conversión de leads para clínicas estéticas con agentes de IA. Ningún paciente potencial se pierde por demoras de respuesta.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "LEADtoWA",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description: descriptionDefault,
      url: siteUrl,
      provider: {
        "@type": "Organization",
        name: siteName,
        url: siteUrl,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "127",
        bestRating: "5",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#business`,
      name: "ToConnectNow LLC",
      description:
        "Consultoría y software B2B para clínicas estéticas. Automatización de ventas, respuesta inmediata y retención de pacientes con inteligencia artificial.",
      url: siteUrl,
      telephone: "+1-305-555-0199",
      email: "hola@toconnectnow.com",
      priceRange: "$$$",
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Miami Beach",
        addressRegion: "FL",
        addressCountry: "US",
      },
      sameAs: [
        "https://www.linkedin.com/company/toconnectnow",
        "https://www.instagram.com/toconnectnow",
      ],
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: titleDefault,
    template: `%s | ${siteName}`,
  },
  description: descriptionDefault,
  keywords: [
    "LEADtoWA",
    "ToConnectNow",
    "agentes de IA para clínicas estéticas",
    "automatización de leads",
    "respuesta automática WhatsApp",
    "CRM para clínicas estéticas",
    "software B2B clínicas",
    "ventas clínicas estéticas",
    "pacientes potenciales",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
  openGraph: {
    title: titleDefault,
    description: descriptionDefault,
    url: "/",
    siteName,
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description: descriptionDefault,
    creator: "@toconnectnow",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="bg-ink text-bone antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
