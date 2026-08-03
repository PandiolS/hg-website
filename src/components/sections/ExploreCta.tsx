import Link from "next/link";
import DemoEmailForm from "./DemoEmailForm";

const demoSteps = [
  "Share your goals and challenges",
  "We tailor the demo to your needs",
  "See Higherd in action",
];

const tourSteps = [
  "Explore interactive demos",
  "See key workflows in action",
  "Book a demo when you're ready",
];

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="mt-6 space-y-3">
      {items.map((item, index) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-800 sm:text-base">
          <span className="font-semibold tabular-nums text-slate-900">{index + 1}.</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export default function ExploreCta() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* Brand gradient — dark violet edges, soft center */}
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-[#ABD9FF] to-white"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Explore Intelligent Solutions.
          </h2>
          <p className="mt-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
            See how Higherd works.
          </p>
        </header>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          {/* Demo card — wider */}
          <article className="rounded-3xl bg-violet-100/55 p-8 backdrop-blur-sm sm:p-10">
            <span className="inline-block rounded-full bg-blue-400 px-3 py-1 text-xs font-semibold text-white">
              Personalised demo
            </span>

            <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Book your demo
            </h3>

            <NumberedList items={demoSteps} />
            <DemoEmailForm />
          </article>

          {/* Product tour card */}
          <article className="flex flex-col rounded-3xl bg-violet-100/55 p-8 backdrop-blur-sm sm:p-10">
            <span className="inline-block rounded-full bg-violet-500/90 px-3 py-1 text-xs font-semibold text-white  ">
              Takes 2 minutes
            </span>

            <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Take toour
            </h3>

            <NumberedList items={tourSteps} />

            <div className="mt-auto pt-8">
              <Link
                href="/platform"
                className="inline-flex rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Take a product tour
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
