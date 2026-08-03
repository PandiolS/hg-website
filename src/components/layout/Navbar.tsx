"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Globe, Menu } from "lucide-react";
import { navItems, type NavItem } from "@/config/navigation";
import MegaMenu from "./navbar/MegaMenu";
import CardMegaMenu from "./navbar/CardMegaMenu";
import MobileMenu from "./navbar/MobileMenu";

/** Delay before a hovered mega menu closes, to survive the gap between the trigger and the panel. */
const CLOSE_DELAY_MS = 120;

export default function Navbar() {
  const pathname = usePathname();
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveLabel(id);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveLabel(null), CLOSE_DELAY_MS);
  };

  const closeNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveLabel(null);
  };

  // Close menus when the route changes.
  useEffect(() => {
    closeNow();
    setMobileOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Close the desktop mega menu on Escape.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeNow();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Prevent background scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const activeItem = navItems.find((item) => item.id === activeLabel) ?? null;

  return (
    <>
      <header
        className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur-md"
      >
      <div className="mx-auto flex h-16 max-w-8xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" aria-label="Higherd home" className="flex items-center">
          <Image
            src="/images/hg-logo.png"
            alt="Higherd"
            width={200}
            height={60}
            priority
            unoptimized
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop navigation + mega menu (hover zone = nav + panel only) */}
        <div
          className="relative hidden lg:block"
          onMouseEnter={() => {
            if (closeTimer.current) clearTimeout(closeTimer.current);
          }}
          onMouseLeave={scheduleClose}
        >
          <nav className="flex items-center gap-1">
            {navItems.map((item) => (
              <NavTrigger
                key={item.id}
                item={item}
                active={activeLabel === item.id}
                isCurrent={isItemActive(item, pathname)}
                onOpen={() => openMenu(item.id)}
                onClose={closeNow}
              />
            ))}
          </nav>

          <div
            className={`absolute left-1/2 top-full z-40 w-[min(calc(100vw-2rem),80rem)] -translate-x-1/2 pt-2 transition-all duration-200 ${
              hasMegaMenu(activeItem)
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-2 opacity-0"
            }`}
          >
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5">
              {activeItem?.cards && (
                <CardMegaMenu item={activeItem} onNavigate={closeNow} />
              )}
              {activeItem?.columns && (
                <MegaMenu item={activeItem} onNavigate={closeNow} />
              )}
            </div>
          </div>
        </div>

        {/* Right-side actions */}
        <div className="hidden items-center gap-1 lg:flex">
          {/* <button
            type="button"
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            <Globe className="size-4" />
            EN
          </button>
          */}
          <Link
            href="#"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            Log in
          </Link> 
          <Link
            href="/getStarted"
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-violet-700"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          className="inline-flex size-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 lg:hidden"
        >
          <Menu className="size-6" />
        </button>
      </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

function NavTrigger({
  item,
  active,
  isCurrent,
  onOpen,
  onClose,
}: {
  item: NavItem;
  active: boolean;
  isCurrent: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const baseClass = `flex items-center gap-1 rounded-lg px-3 py-2 text-m font-medium transition-colors ${
    active || isCurrent
      ? "bg-slate-100 text-slate-900"
      : "text-slate-950 hover:bg-slate-100 hover:text-slate-900 "
  }`;

  // Plain link (no mega menu) — close any open mega menu on hover.
  if (!hasMegaMenu(item)) {
    return (
      <Link
        href={item.href ?? "#"}
        className={baseClass}
        onMouseEnter={onClose}
        onFocus={onClose}
      >
        {item.label}
      </Link>
    );
  }

  // Mega-menu trigger.
  return (
    <button
      type="button"
      onMouseEnter={onOpen}
      onFocus={onOpen}
      aria-expanded={active}
      className={baseClass}
    >
      {item.label}
      <ChevronDown
        className={`size-4 transition-transform duration-200 ${active ? "rotate-180" : ""}`}
      />
    </button>
  );
}

/** Whether a nav item opens a mega menu panel. */
function hasMegaMenu(item: NavItem | null): boolean {
  return Boolean(item?.columns?.length || item?.cards?.length);
}

/** Highlights a top-level item when the current route belongs to it. */
function isItemActive(item: NavItem, pathname: string): boolean {
  if (item.href) {
    return item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
  }
  if (item.cards?.some((card) => pathname.startsWith(card.href))) {
    return true;
  }
  return (
    item.columns?.some((column) =>
      column.links.some((link) => pathname.startsWith(link.href))
    ) ?? false
  );
}
