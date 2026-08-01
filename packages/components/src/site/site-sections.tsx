import type { ReactNode } from 'react';

export function ButtonLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-sm border px-5 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-rose-600 focus:ring-offset-2 ${secondary ? 'border-zinc-300 bg-transparent text-zinc-950 hover:border-zinc-950' : 'border-rose-600 bg-rose-600 text-white hover:bg-rose-700'}`}
      href={href}
    >
      {children}
    </a>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  copy,
  centered = false,
  inverse = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  centered?: boolean;
  inverse?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
      <p
        className={`text-xs font-bold uppercase tracking-[0.2em] ${inverse ? 'text-rose-400' : 'text-rose-600'}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-5 text-4xl font-bold tracking-[-0.045em] sm:text-5xl lg:text-6xl ${inverse ? 'text-white' : 'text-zinc-950'}`}
      >
        {title}
      </h2>
      {copy && (
        <p
          className={`mt-6 text-base leading-8 sm:text-lg ${inverse ? 'text-zinc-300' : 'text-zinc-600'}`}
        >
          {copy}
        </p>
      )}
    </div>
  );
}

export function HomeHero({
  title,
  accent,
  copy,
}: {
  title: string;
  accent: string;
  copy: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200 bg-[#fbfaf6]">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-2/5 border-l border-zinc-200 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:48px_48px] opacity-45 lg:block" />
      <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-rose-600">
          Strategy · Technology · Leadership
        </p>
        <h1 className="mt-7 max-w-5xl text-5xl font-bold leading-[0.98] tracking-[-0.065em] text-zinc-950 sm:text-7xl lg:text-[92px]">
          {title}
          <span className="block text-rose-600">{accent}</span>
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
          {copy}
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact">Book a Strategy Call</ButtonLink>
          <ButtonLink href="/services" secondary>
            Explore Our Capabilities
          </ButtonLink>
        </div>
        <p className="mt-12 border-l-2 border-rose-600 pl-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Strategy, technology, and leadership built for meaningful
          transformation.
        </p>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="border-b border-zinc-200 bg-[#f3f1eb]">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-600">
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-5xl text-5xl font-bold tracking-[-0.055em] text-zinc-950 sm:text-7xl">
          {title}
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-600">{copy}</p>
        <div className="mt-8">
          <ButtonLink href="/contact">Start a Conversation</ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function LogoCloud({ names, copy }: { names: string[]; copy: string }) {
  return (
    <section className="border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">
        <p className="max-w-3xl text-sm leading-7 text-zinc-600">{copy}</p>
        <div className="mt-10 grid grid-cols-2 gap-px border border-zinc-200 bg-zinc-200 sm:grid-cols-3 lg:grid-cols-5">
          {names.map((name) => (
            <div
              className="grid min-h-24 place-items-center bg-white text-xl font-bold tracking-tight text-zinc-500"
              key={name}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceCard({
  number,
  title,
  copy,
  outcomes,
  href,
  icon,
}: {
  number: string;
  title: string;
  copy: string;
  outcomes: string[];
  href: string;
  icon?: ReactNode;
}) {
  return (
    <article className="group flex h-full flex-col border border-zinc-200 bg-white p-7 transition hover:-translate-y-1 hover:border-zinc-400 hover:shadow-[0_18px_50px_rgba(24,24,27,0.08)] sm:p-9">
      <div className="flex items-center justify-between text-rose-600">
        <span className="text-xs font-bold tracking-widest">{number}</span>
        <span className="grid size-11 place-items-center border border-zinc-200 text-zinc-700">
          {icon}
        </span>
      </div>
      <h3 className="mt-10 text-2xl font-bold tracking-tight text-zinc-950">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-zinc-600">{copy}</p>
      <ul className="mt-6 grid gap-2 text-sm text-zinc-700">
        {outcomes.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="text-rose-600">—</span>
            {item}
          </li>
        ))}
      </ul>
      <a
        className="mt-8 inline-flex font-bold text-zinc-950 group-hover:text-rose-600"
        href={href}
      >
        Explore capability →
      </a>
    </article>
  );
}

export function EngagementCard({
  title,
  duration,
  copy,
  includes,
}: {
  title: string;
  duration: string;
  copy: string;
  includes: string[];
}) {
  return (
    <article className="flex h-full flex-col border border-zinc-300 bg-[#fbfaf6] p-7">
      <p className="text-xs font-bold uppercase tracking-widest text-rose-600">
        {duration}
      </p>
      <h3 className="mt-5 text-2xl font-bold tracking-tight text-zinc-950">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-zinc-600">{copy}</p>
      <ul className="mt-6 grid gap-2 border-t border-zinc-200 pt-5 text-sm text-zinc-700">
        {includes.map((item) => (
          <li key={item}>✓ {item}</li>
        ))}
      </ul>
      <a
        className="mt-8 font-bold text-zinc-950 hover:text-rose-600"
        href="/contact"
      >
        Discuss this engagement →
      </a>
    </article>
  );
}

export function CaseStudyCard({
  category,
  title,
  challenge,
  approach,
  capabilities,
}: {
  category: string;
  title: string;
  challenge: string;
  approach: string;
  capabilities: string;
}) {
  return (
    <article className="border-t-4 border-zinc-950 bg-white p-7 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-widest text-rose-600">
        {category}
      </p>
      <h3 className="mt-5 text-2xl font-bold tracking-tight text-zinc-950">
        {title}
      </h3>
      <dl className="mt-7 grid gap-5 text-sm leading-7">
        <div>
          <dt className="font-bold text-zinc-950">Challenge</dt>
          <dd className="text-zinc-600">{challenge}</dd>
        </div>
        <div>
          <dt className="font-bold text-zinc-950">Approach</dt>
          <dd className="text-zinc-600">{approach}</dd>
        </div>
        <div>
          <dt className="font-bold text-zinc-950">Outcome</dt>
          <dd className="text-zinc-500">Approved metrics forthcoming.</dd>
        </div>
      </dl>
      <p className="mt-7 border-t border-zinc-200 pt-5 text-xs font-semibold uppercase tracking-wider text-zinc-500">
        {capabilities}
      </p>
    </article>
  );
}

export function InsightCard({
  category,
  title,
  copy,
}: {
  category: string;
  title: string;
  copy: string;
}) {
  return (
    <article className="group border-t border-zinc-300 py-7">
      <p className="text-xs font-bold uppercase tracking-widest text-rose-600">
        {category}
      </p>
      <h3 className="mt-4 text-2xl font-bold tracking-tight text-zinc-950 transition group-hover:text-rose-600">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-zinc-600">{copy}</p>
      <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-zinc-400">
        Sample insight · Coming soon
      </p>
    </article>
  );
}

export function StatsGrid({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <div className="grid border border-zinc-700 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div
          className="border-b border-zinc-700 p-7 last:border-b-0 sm:border-r lg:border-b-0"
          key={item.label}
        >
          <strong className="block text-4xl font-bold text-white">
            {item.value}
          </strong>
          <span className="mt-2 block text-sm text-zinc-400">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export function FaqSection({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="divide-y divide-zinc-200 border-y border-zinc-200">
      {items.map((item) => (
        <details className="group py-5" key={item.question}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-zinc-950">
            {item.question}
            <span className="text-xl text-rose-600 group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="max-w-3xl pt-4 text-sm leading-7 text-zinc-600">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}

export function FinalCta({
  title = 'Your next stage of growth requires the right strategy, technology, and leadership.',
}: {
  title?: string;
}) {
  return (
    <section className="bg-rose-600">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-100">
          Ready to move forward?
        </p>
        <h2 className="mt-6 max-w-5xl text-4xl font-bold tracking-[-0.045em] text-white sm:text-6xl">
          {title}
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-8 text-rose-50">
          Whether you are building a product, adopting AI, modernizing systems,
          or strengthening an engineering organization, ThriveForward can help
          turn uncertainty into execution.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex min-h-12 items-center justify-center bg-zinc-950 px-5 text-sm font-bold text-white"
            href="/contact"
          >
            Book a Strategy Call
          </a>
          <a
            className="inline-flex min-h-12 items-center justify-center border border-white px-5 text-sm font-bold text-white"
            href="/contact"
          >
            Tell Us About Your Challenge
          </a>
        </div>
      </div>
    </section>
  );
}
