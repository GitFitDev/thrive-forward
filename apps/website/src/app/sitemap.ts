import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://thriveforwardconsulting.com';
  const routes = [
    '',
    '/services',
    '/ai-consulting',
    '/software-development',
    '/engineering-leadership',
    '/speaking',
    '/about',
    '/insights',
    '/contact',
    '/privacy',
    '/terms',
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
