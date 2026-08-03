import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white rounded-b-3xl">
      {/* Soft mesh gradient blooming from the bottom */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-full">
        <div className="hero-gradient-animated absolute inset-0" />
        <div className="absolute -left-24 bottom-0 size-96 rounded-full bg-violet-300/50 blur-3xl hero-blob hero-blob-1" />
        <div className="absolute -bottom-24 left-1/3 size-128 rounded-full bg-fuchsia-300/40 blur-3xl hero-blob hero-blob-2" />
        <div className="absolute -right-16 bottom-0 size-112 rounded-full bg-indigo-300/40 blur-3xl hero-blob hero-blob-3" />
        <div className="absolute bottom-8 left-1/2 size-96 -translate-x-1/2 rounded-full bg-white/60 blur-3xl hero-blob hero-blob-4" />
        <div className="hero-white-fade absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-4xl flex-col items-center justify-center px-4 py-32 text-center sm:px-6 sm:py-40 lg:px-8 lg:py-48">
        <p className="text-xs font-semibold uppercase tracking-widest text-violet-700">
          Best Solutions for Construction
        </p>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
          Better answers.
          <br />
          <span className="bg-linear-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            Better decisions.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id felis ultricies,
          ultricies sem et, molestie diam. Vivamus imperdiet leo vel mollis semper.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/getStarted"
            className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-700"
          >
            Get started
          </Link>

          <Link
            href="/platform"
            className="group inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-violet-700 transition-colors hover:text-violet-900"
          >
            See Higherd in action
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
