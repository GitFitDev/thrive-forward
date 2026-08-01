import type { Metadata } from 'next';
import { FinalCta, InsightCard, PageHero } from '@org/components/site';
import { insights } from '../../content/site';
export const metadata: Metadata = {
  title: 'Insights for Technology & Business Leaders',
  description:
    'Practical perspectives on AI strategy, engineering leadership, digital transformation, software architecture, and team performance.',
  alternates: { canonical: '/insights' },
};
export default function InsightsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'ThriveForward Insights',
    hasPart: insights.map((item) => ({
      '@type': 'Article',
      headline: item.title,
      description: item.copy,
      author: { '@type': 'Person', name: 'Courtney Revada' },
    })),
  };
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Ideas for leaders building what comes next."
        copy="Practical perspectives on AI strategy, engineering leadership, digital transformation, software architecture, and team performance."
      />
      <section className="bg-[#fbfaf6] py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 border-l-4 border-rose-600 bg-[#f3f1eb] p-5">
            <p className="font-bold text-zinc-950">Editorial preview</p>
            <p className="mt-2 text-sm text-zinc-600">
              These sample article concepts are placeholders until
              ThriveForward&apos;s publication library launches.
            </p>
          </div>
          <div className="grid gap-x-8 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((item) => (
              <InsightCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
        }}
      />
    </>
  );
}
