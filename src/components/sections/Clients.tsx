import Image from "next/image";
import { clients, type Client } from "@/config/clients";

function ClientLogo({ client }: { client: Client }) {
  return (
    <div className="flex h-20 w-44 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white px-6 py-4 shadow-sm">
      <Image
        src={client.logo}
        alt={client.name}
        width={160}
        height={48}
        unoptimized
        className="h-10 w-auto max-w-full object-contain opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
      />
    </div>
  );
}

export default function Clients() {
  const loop = [...clients, ...clients];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-700">
            Trusted partners
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Clients
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Teams who rely on Higherd every day.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden">
          {/* Side fade masks */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white via-white/90 to-transparent sm:w-28"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white via-white/90 to-transparent sm:w-28"
          />

          <ul className="clients-scroll-horizontal flex w-max items-center gap-6">
            {loop.map((client, index) => (
              <li key={`${client.id}-${index}`}>
                <ClientLogo client={client} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
