import { PageHero } from '@org/components/site';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy information for the ThriveForward Consulting website.',
  alternates: { canonical: '/privacy' },
};
export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        copy="How ThriveForward handles information provided through this website."
      />
      <article className="mx-auto max-w-3xl px-5 py-20 text-base leading-8 text-zinc-600 sm:px-8">
        <h2 className="mt-12 text-2xl font-bold text-zinc-950">
          Information we collect
        </h2>
        <p className="mt-4">
          When you submit an inquiry, ThriveForward may collect the information
          you voluntarily provide so we can respond, qualify the request, and
          improve our services. Inquiry information is stored with our database
          service provider and is not available for public access through this
          website.
        </p>
        <h2 className="mt-10 text-2xl font-bold text-zinc-950">
          How information is used
        </h2>
        <p className="mt-4">
          Information is used only to respond to inquiries, provide requested
          services, maintain business records, and meet applicable legal
          obligations.
        </p>
        <h2 className="mt-10 text-2xl font-bold text-zinc-950">Questions</h2>
        <p className="mt-4">
          Contact ThriveForward Consulting LLC through the website contact form
          with privacy questions or requests.
        </p>
      </article>
    </>
  );
}
