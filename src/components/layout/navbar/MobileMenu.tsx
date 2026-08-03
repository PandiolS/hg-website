"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Globe, X } from "lucide-react";
import { navItems, type NavItem } from "@/config/navigation";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-50 flex flex-col bg-white transition-transform duration-300 ease-out lg:hidden ${
        open ? "translate-x-0" : "pointer-events-none translate-x-full"
      }`}
    >
      {/* Top bar with logo and close button */}
      <div className="flex h-16 items-center justify-between border-b border-slate-200/70 px-4">
        <Link href="/" aria-label="Higherd home" onClick={onClose} className="flex items-center">
          <Image
            src="/images/hg-logo.png"
            alt="Higherd"
            width={140}
            height={32}
            unoptimized
            className="h-8 w-auto"
          />
        </Link>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="inline-flex size-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100"
        >
          <X className="size-6" />
        </button>
      </div>

      {/* Scrollable links */}
      <nav className="flex-1 overflow-y-auto px-4 py-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <MobileNavEntry item={item} onNavigate={onClose} />
            </li>
          ))}
        </ul>
      </nav>

      {/* Pinned footer with actions */}
      <div className="space-y-3 border-t border-slate-100 p-4">
        {/* <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50"
        >
          <Globe className="size-4" />
          English
        </button>
        <Link
          href="/login"
          onClick={onClose}
          className="block rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
        >
          Log in
        </Link> */}
        <Link
          href="/contact"
          onClick={onClose}
          className="block rounded-xl bg-violet-600 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-violet-700"
        >
          Book a demo
        </Link>
      </div>
    </div>
  );
}

function MobileNavEntry({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  // Plain link entry (no mega menu).
  if (!item.columns && !item.cards) {
    return (
      <Link
        href={item.href ?? "#"}
        onClick={onNavigate}
        className="block rounded-xl px-3 py-3 text-base font-medium text-slate-900 transition-colors hover:bg-slate-50"
      >
        {item.label}
      </Link>
    );
  }

  // Card-style mega menu.
  if (item.cards) {
    return (
      <div>
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-slate-900 transition-colors hover:bg-slate-50"
        >
          {item.label}
          <ChevronDown
            className={`size-5 text-slate-400 transition-transform duration-200 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`grid transition-all duration-200 ${
            expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-2 gap-3 px-3 pb-3 pt-1">
              {item.cards.map((card) => {
                const Icon = card.icon;
                return (
                  <Link
                    key={card.id}
                    href={card.href}
                    onClick={onNavigate}
                    className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors hover:border-violet-200 hover:bg-slate-50"
                  >
                    <div className="flex aspect-4/3 items-center justify-center bg-linear-to-br from-violet-100 via-fuchsia-50 to-indigo-100">
                      {Icon && <Icon className="size-8 text-violet-600" strokeWidth={1.5} />}
                    </div>
                    <p className="border-t border-slate-100 px-2 py-2 text-center text-xs font-semibold text-slate-900">
                      {card.title}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Collapsible accordion entry (column mega menu).
  return (
    <div>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-slate-900 transition-colors hover:bg-slate-50"
      >
        {item.label}
        <ChevronDown
          className={`size-5 text-slate-400 transition-transform duration-200 ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-200 ${
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-4 px-3 pb-3 pt-1">
            {item.columns.map((column) => (
              <div key={column.title}>
                <p className="mb-1 px-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {column.title}
                </p>
                <ul>
                  {column.links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={onNavigate}
                          className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
                        >
                          {Icon && <Icon className="size-4 text-violet-600" />}
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
