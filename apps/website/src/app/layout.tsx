import type { Metadata, Viewport } from 'next';
import { SiteFooter, SiteHeader } from '@org/components/site';
import { navigation } from '../content/site';
import './global.css';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://thriveforwardconsulting.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      'ThriveForward Consulting | Technology, AI & Engineering Leadership',
    template: '%s | ThriveForward Consulting',
  },
  description:
    'ThriveForward Consulting helps organizations build scalable technology, adopt AI with purpose, and create engineering teams that deliver.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'ThriveForward Consulting',
    title: 'ThriveForward Consulting',
    description:
      'Build better technology. Lead stronger teams. Move forward faster.',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ThriveForward Consulting',
    description:
      'Build better technology. Lead stronger teams. Move forward faster.',
  },
};

export const viewport: Viewport = {
  themeColor: '#fbfaf6',
  width: 'device-width',
  initialScale: 1,
};

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'ThriveForward Consulting LLC',
    url: siteUrl,
    areaServed: 'United States',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nashville',
      addressRegion: 'TN',
      addressCountry: 'US',
    },
    serviceType: [
      'AI consulting',
      'Technology consulting',
      'Custom software development',
      'Fractional engineering leadership',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ThriveForward Consulting LLC',
    url: siteUrl,
    founder: { '@type': 'Person', name: 'Courtney Revada' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Courtney Revada',
    jobTitle: 'Founder and Technology Consultant',
    worksFor: { '@type': 'Organization', name: 'ThriveForward Consulting LLC' },
  },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:p-3"
          href="#main-content"
        >
          Skip to content
        </a>
        <SiteHeader items={navigation} />
        <main id="main-content">{children}</main>
        <SiteFooter year={new Date().getFullYear()} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
          }}
        />
      </body>
    </html>
  );
}
