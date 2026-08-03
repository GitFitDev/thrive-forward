import {
  CaseStudyCard,
  EngagementCard,
  FinalCta,
  HomeHero,
  InsightCard,
  LogoCloud,
  Reveal,
  SectionHeader,
  ServiceCard,
  StatsGrid,
} from '@org/components/site';
import { BrainCircuit, Code2, Mic2, UsersRound } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import executivePortrait from '../../assets/exec-pic.png';
import {
  caseStudies,
  challenges,
  differentiators,
  engagements,
  insights,
  services,
} from '../content/site';

export const metadata: Metadata = {
  title: {
    absolute:
      'ThriveForward Consulting | Technology, AI & Engineering Leadership',
  },
  description:
    'Senior-level strategy and hands-on execution for AI, custom software, engineering leadership, and digital transformation.',
  alternates: { canonical: '/' },
};
const serviceIcons = [
  <BrainCircuit key="ai" size={20} />,
  <Code2 key="code" size={20} />,
  <UsersRound key="leadership" size={20} />,
  <Mic2 key="speaking" size={20} />,
];

export default function HomePage() {
  return (
    <>
      <HomeHero
        title="Build Better Technology. Lead Stronger Teams."
        accent="Move Forward Faster."
        copy="ThriveForward Consulting helps organizations build scalable digital products, adopt AI with purpose, modernize complex technology, and create engineering teams capable of delivering meaningful business results."
      />
      <LogoCloud
        names={['NIKE', 'optum', 'GE', 'COMCAST', 'MARRIOTT']}
        copy="Experience delivering technology and engineering leadership across organizations including Nike, Optum, GE, Comcast, and Marriott. Organization names reflect founder experience and do not imply endorsement."
      />

      <section className="bg-[#fbfaf6] py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <SectionHeader
              eyebrow="What we do"
              title="From strategy to execution."
              copy="We solve the technical, operational, and leadership challenges that prevent strong ideas from becoming successful products and sustainable businesses."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.href}>
                <ServiceCard {...service} icon={serviceIcons[index]} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <SectionHeader
              eyebrow="The challenge"
              title="Complex challenges require more than generic advice."
              copy="We turn uncertainty into strategy, strategy into execution, and execution into measurable progress."
              inverse
            />
            <div className="divide-y divide-zinc-800 border-y border-zinc-800">
              {challenges.map((challenge, index) => (
                <div
                  className="grid grid-cols-[42px_1fr] gap-4 py-5"
                  key={challenge}
                >
                  <span className="text-xs font-bold text-rose-400">
                    0{index + 1}
                  </span>
                  <p className="text-base font-semibold text-zinc-200">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16">
            <StatsGrid
              items={[
                { value: 'Senior', label: 'Expertise on every engagement' },
                { value: 'End-to-end', label: 'Strategy through execution' },
                { value: 'Practical', label: 'AI tied to business value' },
                { value: 'Durable', label: 'Capability that remains' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Why ThriveForward"
            title="Senior-level expertise without traditional consulting overhead."
            copy="Technical depth, executive perspective, and direct accountability from the people doing the work."
          />
          <div className="mt-12 grid border-l border-t border-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map(([title, copy], index) => (
              <article
                className="border-b border-r border-zinc-200 p-7 sm:p-9"
                key={title}
              >
                <span className="text-xs font-bold text-rose-600">
                  0{index + 1}
                </span>
                <h3 className="mt-12 text-xl font-bold text-zinc-950">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1eb] py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Ways to work together"
            title="Flexible engagements built around your goals."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {engagements.map((engagement) => (
              <EngagementCard key={engagement.title} {...engagement} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf6] py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Representative work"
            title="Turning complex challenges into forward progress."
            copy="Anonymized engagement patterns. We publish outcomes only after client approval and never invent metrics."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.title} {...study} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[.65fr_1.35fr] lg:px-12">
          <div className="relative min-h-96 overflow-hidden border border-zinc-300 bg-[#f3f1eb]">
            <Image
              alt="ThriveForward Consulting executive portrait"
              className="object-cover object-top"
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              src={executivePortrait}
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="Founder and principal"
              title="Technology leadership grounded in real-world execution."
              copy="Courtney Revada is a technology and engineering leader with experience building digital products, modernizing enterprise systems, leading engineering organizations, and helping teams translate ambitious ideas into executable strategies."
            />
            <p className="mt-7 max-w-3xl text-base leading-8 text-zinc-600">
              Her work spans software engineering, artificial intelligence,
              engineering management, product strategy, organizational
              leadership, and enterprise transformation—with a people-centered
              approach to sustainable delivery.
            </p>
            <div className="mt-8 flex gap-4">
              <a className="font-bold text-rose-600" href="/about">
                Read Courtney&apos;s story →
              </a>
              <a
                className="font-bold text-zinc-950"
                href="https://www.linkedin.com/in/courtney-revada-3135ba13a/"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf6] py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Perspectives"
            title="Insights for technology and business leaders."
          />
          <div className="mt-12 grid gap-x-8 md:grid-cols-3">
            {insights.slice(0, 3).map((insight) => (
              <InsightCard key={insight.title} {...insight} />
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
