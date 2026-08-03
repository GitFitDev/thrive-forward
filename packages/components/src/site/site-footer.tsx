import { Wordmark } from './site-header';

export function SiteFooter({ year }: { year: number }) {
  return (
    <footer className="border-t border-zinc-200 bg-[#fbfaf6]">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
        <div className="md:col-span-2 lg:col-span-1">
          <Wordmark />
          <p className="mt-7 max-w-sm text-sm leading-7 text-zinc-600">
            Senior-level technology strategy, practical AI, modern software, and
            engineering leadership.
          </p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Nashville, Tennessee
          </p>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-950">
            Services
          </h2>
          <div className="mt-5 grid gap-3 text-sm text-zinc-600">
            <a href="/ai-consulting">AI consulting</a>
            <a href="/software-development">Software development</a>
            <a href="/engineering-leadership">Engineering leadership</a>
            <a href="/speaking">Speaking</a>
          </div>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-950">
            Company
          </h2>
          <div className="mt-5 grid gap-3 text-sm text-zinc-600">
            <a href="/about">About</a>
            <a href="/insights">Insights</a>
            <a href="/contact">Contact</a>
            <a href="mailto:revadacourtney@gmail.com">Email Courtney</a>
            <a href="https://cal.com/courtney-revada-i4wwtz/30min">
              Book a call
            </a>
            <a
              href="https://www.linkedin.com/in/courtney-revada-3135ba13a/"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-rose-600">
            Have a complex challenge?
          </p>
          <a
            className="mt-4 block border-b border-zinc-950 pb-4 text-2xl font-bold tracking-tight text-zinc-950"
            href="/contact"
          >
            Let&apos;s move it forward →
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 border-t border-zinc-200 px-5 py-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <span>© {year} ThriveForward Consulting LLC</span>
        <div className="flex gap-6">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
