import type { Metadata } from 'next';
import Image from 'next/image';
import { FinalCta, PageHero, SectionHeader } from '@org/components/site';
import speakerImage from '../../../assets/speaker.png';
export const metadata: Metadata = {
  title: 'Engineering Leadership & AI Keynote Speaker',
  description:
    'Bring Courtney Revada to your conference, leadership event, company offsite, or team workshop for practical ideas on AI, engineering leadership, and change.',
  alternates: { canonical: '/speaking' },
};
const topics = [
  'Leading Engineering Teams Through Change',
  'Practical AI for Modern Organizations',
  'Building a Culture of Innovation Without Burning Out Your Team',
  'From Self-Taught Engineer to Technology Leader',
  'Resilience, Ownership, and Betting on Yourself',
  'The Future of Engineering Management in the Age of AI',
  'Building Teams That People Want to Be Part Of',
];
export default function SpeakingPage() {
  return (
    <>
      <PageHero
        eyebrow="Keynotes and workshops"
        title="Ideas that move people and organizations forward."
        copy="Engaging, human-centered sessions that connect technology, leadership, resilience, and meaningful action."
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:px-12">
          <div className="relative min-h-[460px] overflow-hidden bg-zinc-950">
            <Image
              alt="Speaker presenting on stage with a handheld microphone"
              className="object-cover object-center"
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              src={speakerImage}
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="Speaking topics"
              title="Timely ideas. Practical takeaways."
            />
            <div className="mt-10 divide-y divide-zinc-200 border-y border-zinc-200">
              {topics.map((topic, index) => (
                <div className="grid grid-cols-[42px_1fr] py-5" key={topic}>
                  <span className="text-xs font-bold text-rose-600">
                    0{index + 1}
                  </span>
                  <h2 className="font-bold text-zinc-950">{topic}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f3f1eb] py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Designed for your room"
            title="Not an off-the-shelf talk."
            copy="Every keynote or workshop is adapted to your audience, organizational context, and desired outcome—from executive alignment to an energized engineering organization."
          />
          <div className="mt-12 grid gap-px bg-zinc-300 sm:grid-cols-3">
            {[
              ['Keynotes', 'Conferences and company events'],
              ['Workshops', 'Interactive team development'],
              ['Facilitation', 'Leadership alignment sessions'],
            ].map(([title, copy]) => (
              <article className="bg-white p-8" key={title}>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-3 text-sm text-zinc-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCta title="Bring Courtney to your next event." />
    </>
  );
}
