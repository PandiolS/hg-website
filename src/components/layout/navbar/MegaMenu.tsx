import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { NavItem } from "@/config/navigation";

type MegaMenuProps = {
  item: NavItem;
  onNavigate?: () => void;
};

/**
 * Presentational mega-menu panel: renders the columns of links plus an
 * optional promoted "highlight" panel on the right.
 */
export default function MegaMenu({ item, onNavigate }: MegaMenuProps) {
  if (!item.columns) return null;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
      {/* Link columns */}
      <div className="grid gap-8 sm:grid-cols-3">
        {item.columns.map((column) => (
          <div key={column.title}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-color-primary
            relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 
            after:w-full after:h-0.25 after:bg-gray-200 w-full">
              {column.title}
              </p>
              <p className="underline underline-offset-2"></p>
           

            <ul className="space-y-1">
              {column.links.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onNavigate}
                      className="group flex items-center gap-1 rounded-xl p-1.25 transition-colors hover:bg-slate-50"
                    >
                      {Icon && (
                        <span className="flex shrink-0 items-center justify-center rounded-lg text-violet-600 transition-colors group-hover:bg-violet-100">
                          <Icon className="size-4" />
                        </span>
                      )}
                      <span className="min-w-0">
                        <span className="block text-sm font-medium text-slate-900">
                          {link.label}
                        </span>
                        {/* {link.description && (
                          <span className="block text-sm text-slate-500">
                            {link.description}
                          </span>
                        )} */}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Promoted highlight panel */}
      {item.highlight && (
        <div className="lg:w-72">
          <div className="h-full rounded-2xl bg-linear-to-br from-violet-600 to-indigo-700 p-5 text-white">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/70">
              {item.highlight.title}
            </p>

            <ul className="space-y-2">
              {item.highlight.items.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onNavigate}
                      className="group flex items-center justify-between gap-3 rounded-xl bg-white/10 px-3 py-2.5 text-sm font-medium transition-colors hover:bg-white/20"
                    >
                      <span className="flex items-center gap-2.5">
                        {Icon && <Icon className="size-4 text-white/80" />}
                        {link.label}
                      </span>
                      <ArrowRight className="size-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
