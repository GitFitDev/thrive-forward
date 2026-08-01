import { ButtonLink } from '@org/components/site';
export default function NotFound() {
  return (
    <section className="grid min-h-[65vh] place-items-center bg-[#fbfaf6] px-5 text-center">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-rose-600">
          404
        </p>
        <h1 className="mt-5 text-5xl font-bold tracking-tight text-zinc-950">
          This path isn't moving forward.
        </h1>
        <p className="mt-5 text-zinc-600">
          The page you requested could not be found.
        </p>
        <div className="mt-8">
          <ButtonLink href="/">Return Home</ButtonLink>
        </div>
      </div>
    </section>
  );
}
