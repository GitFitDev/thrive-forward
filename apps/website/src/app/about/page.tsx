import type { Metadata } from 'next';
import { FinalCta, PageHero, SectionHeader } from '@org/components/site';
export const metadata: Metadata = {
  title: 'About Courtney Revada & ThriveForward',
  description:
    'Meet Courtney Revada, founder of ThriveForward Consulting and a technology leader grounded in real-world execution.',
  alternates: { canonical: '/about' },
};
export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ThriveForward"
        title="Technical depth. Executive perspective. Human-centered leadership."
        copy="A founder-led consulting company helping organizations make better technology decisions and build the capability to execute them."
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[.7fr_1.3fr] lg:px-12">
          <div className="grid min-h-[520px] place-items-center border border-zinc-300 bg-[#f3f1eb]">
            <div className="text-center">
              <span className="text-8xl font-bold tracking-tight text-zinc-300">
                CR
              </span>
              <p className="mt-4 text-xs font-bold uppercase tracking-widest text-zinc-500">
                Professional portrait forthcoming
              </p>
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="Courtney Revada · Founder"
              title="Technology leadership grounded in real-world execution."
            />
            <div className="mt-8 space-y-6 text-base leading-8 text-zinc-600">
              <p>
                Courtney Revada is a technology and engineering leader with
                experience building digital products, modernizing enterprise
                systems, leading engineering organizations, and helping teams
                translate ambitious ideas into executable strategies.
              </p>
              <p>
                Her experience spans software engineering, artificial
                intelligence, engineering management, product strategy,
                organizational leadership, and enterprise transformation.
              </p>
              <p>
                Courtney brings technical depth, executive communication, and
                people-centered leadership. She understands how to design the
                solution, guide the team, communicate with stakeholders, and
                create the systems required for sustainable delivery.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                'Software & AI',
                'Engineering leadership',
                'Product strategy',
                'Enterprise transformation',
              ].map((item) => (
                <span
                  className="border border-zinc-300 px-4 py-2 text-xs font-bold"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-950 py-20 text-white">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Our point of view"
            title="Forward progress should outlast the engagement."
            copy="The best consulting creates clarity, builds capability, and leaves an organization stronger—not dependent."
            inverse
          />
          <div className="mt-12 grid border-l border-t border-zinc-700 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                'Clarity over complexity',
                'Make hard decisions understandable and actionable.',
              ],
              [
                'Outcomes over activity',
                'Connect work to meaningful business progress.',
              ],
              [
                'Capability over dependency',
                'Build teams and systems that continue improving.',
              ],
              [
                'People and technology',
                'Treat transformation as a systems and leadership challenge.',
              ],
            ].map(([title, copy], index) => (
              <article
                className="border-b border-r border-zinc-700 p-7"
                key={title}
              >
                <span className="text-xs font-bold text-rose-400">
                  0{index + 1}
                </span>
                <h3 className="mt-12 text-xl font-bold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
