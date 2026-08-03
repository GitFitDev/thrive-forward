import { PageHero } from '@org/components/site';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms governing use of the ThriveForward Consulting website.',
  alternates: { canonical: '/terms' },
};
export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        copy="Terms governing access to and use of the ThriveForward Consulting website."
      />
      <article className="mx-auto max-w-3xl px-5 py-20 text-base leading-8 text-zinc-600 sm:px-8">
        <h2 className="mt-12 text-2xl font-bold text-zinc-950">
          Using this website
        </h2>
        <p className="mt-4">
          The information on this website is provided for general informational
          purposes and does not create a consulting, legal, or contractual
          relationship.
        </p>
        <h2 className="mt-10 text-2xl font-bold text-zinc-950">
          Intellectual property
        </h2>
        <p className="mt-4">
          Website content and branding remain the property of ThriveForward
          Consulting LLC unless otherwise stated.
        </p>
        <h2 className="mt-10 text-2xl font-bold text-zinc-950">Questions</h2>
        <p className="mt-4">
          Contact ThriveForward Consulting LLC through the website contact form
          with questions about these terms.
        </p>
      </article>
    </>
  );
}
