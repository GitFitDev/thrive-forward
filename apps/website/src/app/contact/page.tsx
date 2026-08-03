import type { Metadata } from 'next';
import { PageHero } from '@org/components/site';
import { ContactForm } from '../../components/contact-form';
export const metadata: Metadata = {
  title: 'Contact ThriveForward Consulting',
  description:
    'Tell ThriveForward about your AI, software development, digital transformation, or engineering leadership challenge.',
  alternates: { canonical: '/contact' },
};
export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Start a conversation"
        title="Tell us what you're trying to move forward."
        copy="Share a little context. We'll review your goals and respond with the clearest next step—whether that is a focused conversation, a recommended engagement, or a useful referral."
      />
      <section className="bg-[#f3f1eb] py-20">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[.65fr_1.35fr] lg:px-12">
          <aside>
            <h2 className="text-xs font-bold uppercase tracking-widest text-rose-600">
              What happens next
            </h2>
            <ol className="mt-6 divide-y divide-zinc-300 border-y border-zinc-300">
              {[
                'We review your goals and context.',
                'We respond within two business days.',
                'If aligned, we schedule a focused strategy call.',
              ].map((item, index) => (
                <li
                  className="grid grid-cols-[38px_1fr] py-5 text-sm text-zinc-700"
                  key={item}
                >
                  <span className="font-bold text-rose-600">0{index + 1}</span>
                  {item}
                </li>
              ))}
            </ol>
            <p className="mt-8 text-sm leading-7 text-zinc-600">
              Nashville, Tennessee
              <br />
              Serving organizations across the United States.
            </p>
            <div className="mt-8 border-t border-zinc-300 pt-8">
              <h2 className="text-xs font-bold uppercase tracking-widest text-rose-600">
                Prefer a direct path?
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                Book a 30-minute conversation now or email Courtney directly.
              </p>
              <div className="mt-5 grid gap-3">
                <a
                  className="font-bold text-zinc-950 transition hover:text-rose-600"
                  href="https://cal.com/courtney-revada-i4wwtz/30min"
                  rel="noreferrer"
                  target="_blank"
                >
                  Book a 30-minute call →
                </a>
                <a
                  className="font-bold text-zinc-950 transition hover:text-rose-600"
                  href="mailto:revadacourtney@gmail.com"
                >
                  Email Courtney →
                </a>
              </div>
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
