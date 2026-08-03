import Link from "next/link";
import { ArrowRight, Calendar, LayoutDashboard, User } from "lucide-react";

type CardVariant = "demo" | "platform";

type OptionCardProps = {
  href: string;
  title: string;
  description: string;
  variant: CardVariant;
  accentClass: string;
  visual: React.ReactNode;
};

function CardBackground({ variant }: { variant: CardVariant }) {
  if (variant === "demo") {
    return (
      <>
        <div className="absolute inset-0 bg-linear-to-br from-accent/25 via-rose-100/90 to-amber-50" />
        <div className="absolute -left-16 -top-12 size-56 rounded-full bg-accent/45 blur-3xl" />
        <div className="absolute -right-10 top-1/4 size-48 rounded-full bg-secondary/35 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 size-64 rounded-full bg-rose-400/30 blur-3xl" />
        <div className="absolute right-1/4 bottom-8 size-40 rounded-full bg-orange-300/25 blur-2xl" />
      </>
    );
  }

  return (
    <>
      <div className="absolute inset-0 bg-linear-to-br from-primary/25 via-sky-100/80 to-lime-50" />
      <div className="absolute -right-12 -top-10 size-56 rounded-full bg-primary/45 blur-3xl" />
      <div className="absolute -left-10 bottom-0 size-52 rounded-full bg-cyan-400/35 blur-3xl" />
      <div className="absolute top-1/3 left-1/2 size-48 -translate-x-1/2 rounded-full bg-violet-400/30 blur-3xl" />
      <div className="absolute right-1/4 bottom-10 size-44 rounded-full bg-emerald-300/25 blur-2xl" />
    </>
  );
}

function OptionCard({
  href,
  title,
  description,
  variant,
  accentClass,
  visual,
}: OptionCardProps) {
  return (
    <Link
      href={href}
      className="group relative isolate flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/60 transition-all hover:-translate-y-3 hover:shadow-xl"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <CardBackground variant={variant} />
      </div>

      <div className="flex flex-1 items-center justify-center px-6 py-12 sm:py-16">
        {visual}
      </div>

      <div className="bg-white/75 px-6 py-6 backdrop-blur-md sm:px-8 sm:py-7">
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
        <span
          className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${accentClass}`}
        >
          Get started
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

function DemoVisual() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex size-16 items-center justify-center rounded-full bg-white shadow-lg ring-4 ring-white/80 sm:size-20">
        <div className="flex size-full items-center justify-center rounded-full bg-linear-to-br from-accent via-rose-600 to-secondary">
          <User className="size-8 text-white sm:size-10" strokeWidth={1.5} />
        </div>
        <span className="absolute bottom-1 right-1 size-3 rounded-full border-2 border-white bg-emerald-500" />
      </div>

      <div className="flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="size-2 rounded-full bg-linear-to-r from-accent to-rose-400"
            style={{ opacity: 1 - i * 0.25 }}
          />
        ))}
      </div>

      <div className="flex size-16 items-center justify-center rounded-full bg-white shadow-lg ring-4 ring-white/80 sm:size-20">
        <div className="flex size-12 items-center justify-center rounded-full bg-linear-to-br from-accent/15 to-rose-200/60 sm:size-14">
          <Calendar className="size-6 text-accent sm:size-7" strokeWidth={1.75} />
        </div>
      </div>
    </div>
  );
}

function PlatformVisual() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200/80">
      <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3">
        <div className="size-6 rounded-md bg-linear-to-br from-primary to-violet-500" />
        <div className="h-2 w-24 rounded-full bg-slate-200" />
      </div>

      <div className="space-y-3 p-4">
        <div className="h-3 w-32 rounded-full bg-slate-800" />

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-slate-100 p-3">
            <div className="mx-auto size-12 rounded-full border-4 border-cyan-200 border-t-primary" />
            <div className="mt-2 h-2 w-16 rounded-full bg-slate-200" />
          </div>
          <div className="space-y-2 rounded-xl border border-slate-100 p-3">
            <div className="h-2 w-full rounded-full bg-slate-100" />
            <div className="h-2 w-4/5 rounded-full bg-slate-100" />
            <div className="h-2 w-3/5 rounded-full bg-slate-100" />
          </div>
        </div>

        <div className="rounded-xl border border-slate-100 p-3">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="size-4 text-primary" />
            <div className="h-2 w-20 rounded-full bg-slate-200" />
          </div>
          <div className="mt-3 flex gap-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="size-8 rounded-full bg-linear-to-br from-primary/20 to-cyan-200/60"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GetStartedPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-15 lg:px-8">
      <header className="max-w-3xl text-center mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Explore the Higherd Way
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Choose the best way to explore our platform and learn how Higherd can
          transform your business operations.
        </p>
      </header>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <OptionCard
          href="/contact"
          variant="demo"
          title="Book a free demo"
          description="See how Higherd can transform your business management with a personalized demo."
          accentClass="text-accent group-hover:text-accent-dark"
          visual={<DemoVisual />}
        />

        <OptionCard
          href="/platform"
          variant="platform"
          title="Explore the platform"
          description="Get started immediately with no setup required and explore the platform at your own pace."
          accentClass="text-primary group-hover:text-primary-dark"
          visual={<PlatformVisual />}
        />
      </div>
    </section>
  );
}
