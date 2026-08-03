import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/config/navigation";

type FooterGroup = {
  title: string;
  links: { label: string; href: string }[];
};

// Turn each mega-menu sub-column into its own footer category...
const linkGroups: FooterGroup[] = navItems
  .filter((item) => item.columns)
  .flatMap((item) =>
    item.columns!.map((column) => ({
      title: column.title,
      links: column.links.map((link) => ({ label: link.label, href: link.href })),
    }))
  );

// ...and gather the top-level plain links (Pricing, About, ...) into one column.
const companyLinks = navItems
  .filter((item) => item.href && !item.columns)
  .map((item) => ({ label: item.label, href: item.href! }));

const footerGroups: FooterGroup[] = [
  ...linkGroups,
  ...(companyLinks.length ? [{ title: "Company", links: companyLinks }] : []),
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden rounded-t-3xl text-slate-200">
      {/* Blurred two-color background (#4602aa + #950808) */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#2b0140]" />
        <div className="absolute -left-32 -top-32 size-128 rounded-full bg-[#4602aa] opacity-80 blur-3xl" />
        <div className="absolute -bottom-40 -right-24 size-136 rounded-full bg-[#950808] opacity-70 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 size-96 -translate-x-1/2 rounded-full bg-[#4602aa] opacity-40 blur-3xl" />
        <div className="absolute inset-0 bg-slate-950/20" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left: logo + headline */}
          <div className="lg:col-span-4">
            <Link href="/" aria-label="Higherd home" className="inline-flex items-center">
              <Image
                src="/images/hg-logo.png"
                alt="Higherd"
                width={187}
                height={57}
                unoptimized
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-6 max-w-xs text-2xl font-semibold leading-snug text-white">
              Higherd unlocks
              <br />
              the power
              <br />
              of teams.
            </p>
          </div>

          {/* Right: navbar items organized by category */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:col-span-8">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-white/60 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 
            after:w-full after:h-0.25 after:bg-white/60 w-full">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-200 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Higherd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
