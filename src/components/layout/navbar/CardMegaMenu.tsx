import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import type { NavItem } from "@/config/navigation";

type CardMegaMenuProps = {
  item: NavItem;
  onNavigate?: () => void;
};

function CardVisual({
  title,
  image,
  icon: Icon,
}: {
  title: string;
  image?: string;
  icon?: LucideIcon;
}) {
  if (image) {
    return (
      <Image
        src={image}
        alt=""
        width={320}
        height={200}
        unoptimized
        className="h-full w-full object-cover"
      />
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-violet-100 via-fuchsia-50 to-indigo-100">
      {Icon && <Icon className="size-10 text-violet-600" strokeWidth={1.5} />}
      {!Icon && (
        <span className="px-4 text-center text-sm font-medium text-violet-700">{title}</span>
      )}
    </div>
  );
}

/**
 * Card-based mega menu: a row of linked cards with an image/icon and title.
 */
export default function CardMegaMenu({ item, onNavigate }: CardMegaMenuProps) {
  if (!item.cards?.length) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {item.cards.map((card) => (
        <Link
          key={card.id}
          href={card.href}
          onClick={onNavigate}
          className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-900/5"
        >
          <div className="aspect-4/3 overflow-hidden">
            <div className="h-full transition-transform duration-300 group-hover:scale-105">
              <CardVisual title={card.title} image={card.image} icon={card.icon} />
            </div>
          </div>
          <p className="border-t border-slate-100 px-4 py-3 text-center text-sm font-semibold text-slate-900 transition-colors group-hover:text-violet-700">
            {card.title}
          </p>
        </Link>
      ))}
    </div>
  );
}
