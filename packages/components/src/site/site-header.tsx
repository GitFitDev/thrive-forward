'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export type NavigationItem = { label: string; href: string };

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <a
      className="group inline-flex items-center gap-3"
      href="/"
      aria-label="ThriveForward Consulting home"
    >
      <span
        className={`grid size-9 rotate-45 place-items-center border ${inverted ? 'border-white' : 'border-zinc-950'}`}
        aria-hidden="true"
      >
        <span className="-rotate-45 text-lg font-semibold text-rose-600">
          ›
        </span>
      </span>
      <span className="leading-none">
        <strong
          className={`block text-[15px] font-bold tracking-tight ${inverted ? 'text-white' : 'text-zinc-950'}`}
        >
          ThriveForward
        </strong>
        <span
          className={`mt-1.5 block text-[8px] font-semibold tracking-[0.28em] ${inverted ? 'text-zinc-400' : 'text-zinc-500'}`}
        >
          CONSULTING
        </span>
      </span>
    </a>
  );
}

export function SiteHeader({ items }: { items: NavigationItem[] }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${scrolled || open ? 'border-zinc-200 bg-[#fbfaf6]/95 backdrop-blur' : 'border-transparent bg-[#fbfaf6]'}`}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center gap-8 px-5 sm:px-8 lg:px-12">
        <Wordmark />
        <nav
          className="ml-auto hidden items-center gap-5 xl:flex"
          aria-label="Primary navigation"
        >
          {items.map((item) => (
            <a
              className="text-[13px] font-semibold text-zinc-600 transition hover:text-rose-600"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="ml-auto hidden rounded-sm bg-rose-600 px-5 py-3 text-xs font-bold text-white transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-600 focus:ring-offset-2 xl:ml-2 xl:inline-flex"
          href="/contact"
        >
          Book a Strategy Call
        </a>
        <button
          className="ml-auto grid size-11 place-items-center border border-zinc-300 text-zinc-950 xl:hidden"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav
          className="border-t border-zinc-200 bg-[#fbfaf6] px-5 py-5 xl:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto grid max-w-[1440px] sm:grid-cols-2">
            {items.map((item, index) => (
              <a
                className="border-b border-zinc-200 py-4 text-lg font-semibold text-zinc-950"
                href={item.href}
                key={item.href}
              >
                <span className="mr-4 text-[10px] text-rose-600">
                  0{index + 1}
                </span>
                {item.label}
              </a>
            ))}
            <a
              className="mt-5 inline-flex justify-center bg-rose-600 px-5 py-4 text-sm font-bold text-white sm:col-span-2"
              href="/contact"
            >
              Book a Strategy Call
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
