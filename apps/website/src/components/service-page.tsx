import {
  FinalCta,
  FaqSection,
  PageHero,
  SectionHeader,
} from '@org/components/site';
import type { ServiceDetail } from '../content/site';

export function ServicePage({ service }: { service: ServiceDetail }) {
  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        copy={service.description}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-12">
          <SectionHeader
            eyebrow="When to call us"
            title="The problems we help solve."
          />
          <div className="divide-y divide-zinc-200 border-y border-zinc-200">
            {service.problems.map((problem, index) => (
              <div
                className="grid grid-cols-[42px_1fr] gap-4 py-6"
                key={problem}
              >
                <span className="text-xs font-bold text-rose-600">
                  0{index + 1}
                </span>
                <p className="text-lg font-semibold text-zinc-950">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#f3f1eb] py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Our approach"
            title="Structured enough to create clarity. Flexible enough for reality."
          />
          <div className="mt-12 grid border-l border-t border-zinc-300 md:grid-cols-2 lg:grid-cols-4">
            {service.approach.map((step, index) => (
              <article
                className="border-b border-r border-zinc-300 p-7"
                key={step}
              >
                <span className="text-xs font-bold text-rose-600">
                  0{index + 1}
                </span>
                <h3 className="mt-16 text-xl font-bold text-zinc-950">
                  {step}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <SectionHeader
              eyebrow="What you receive"
              title="Tangible deliverables."
            />
            <ul className="mt-10 divide-y divide-zinc-200 border-y border-zinc-200">
              {service.deliverables.map((item) => (
                <li className="py-5 font-semibold text-zinc-800" key={item}>
                  ✓ <span className="ml-3">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader
              eyebrow="Business impact"
              title="Outcomes that matter."
            />
            <ul className="mt-10 divide-y divide-zinc-200 border-y border-zinc-200">
              {service.outcomes.map((item) => (
                <li className="py-5 font-semibold text-zinc-800" key={item}>
                  → <span className="ml-3">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-zinc-950 py-20 text-white">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <p className="text-xs font-bold uppercase tracking-widest text-rose-400">
            Recommended starting point
          </p>
          <div className="mt-5 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {service.engagement}
              </h2>
              <p className="mt-5 max-w-3xl leading-8 text-zinc-300">
                Focused discovery surfaces the highest-leverage decisions and
                creates a practical roadmap. When it makes sense, we stay to
                help execute it.
              </p>
            </div>
            <a
              className="inline-flex min-h-12 items-center justify-center bg-rose-600 px-5 text-sm font-bold text-white"
              href="/contact"
            >
              Discuss your goals
            </a>
          </div>
        </div>
      </section>
      <section className="bg-[#fbfaf6] py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-12">
          <SectionHeader
            eyebrow="Common questions"
            title="What leaders ask before we begin."
          />
          <FaqSection items={service.faq} />
        </div>
      </section>
      <FinalCta />
    </>
  );
}
