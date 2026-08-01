import type { Metadata } from 'next';
import { BrainCircuit, Code2, Mic2, UsersRound } from 'lucide-react';
import {
  EngagementCard,
  FinalCta,
  PageHero,
  SectionHeader,
  ServiceCard,
} from '@org/components/site';
import { engagements, services } from '../../content/site';
export const metadata: Metadata = {
  title: 'Technology Consulting Services',
  description:
    'AI consulting, custom software development, fractional engineering leadership, executive advisory, keynotes, and workshops.',
  alternates: { canonical: '/services' },
};
const icons = [
  <BrainCircuit key="ai" size={20} />,
  <Code2 key="code" size={20} />,
  <UsersRound key="leaders" size={20} />,
  <Mic2 key="speaking" size={20} />,
];
export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Senior-level strategy and hands-on execution."
        copy="ThriveForward helps leaders understand what to build, why it matters, how to execute it, and how to lead the teams responsible for delivery."
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard
                key={service.href}
                {...service}
                icon={icons[index]}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#f3f1eb] py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Engagement models"
            title="Start where the need is greatest."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {engagements.map((item) => (
              <EngagementCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
