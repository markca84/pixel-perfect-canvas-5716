import { Link } from "@tanstack/react-router";
import { DecalName } from "./DecalName";
import { formatPrice } from "@/data/products";
import type { ShopType } from "@/data/decals";

const routes = {
  "stick-on-names": "/stick-on-names",
  "iron-on-names": "/iron-on-names",
  "name-packs": "/name-packs",
  "school-packs": "/school-packs",
} as const satisfies Record<ShopType["slug"], string>;

export function ShopTypeCard({ type }: { type: ShopType }) {
  return (
    <Link
      to={routes[type.slug]}
      className={`group flex flex-col overflow-hidden rounded-3xl p-6 transition-transform hover:-translate-y-1 ${type.surface}`}
    >
      <div className="flex min-h-36 items-center justify-center rounded-2xl bg-card/80 px-4 py-8">
        <DecalName {...type.sample} size="md" />
      </div>
      <h3 className="mt-5 font-display text-xl uppercase tracking-wide">{type.title}</h3>
      <p className="mt-1 text-sm text-foreground/70">{type.copy}</p>
      <div className="mt-5 flex items-center justify-between">
        <span className="font-display text-lg">From {formatPrice(type.fromPrice)}</span>
        <span className="rounded-full bg-card px-5 py-2.5 text-xs font-extrabold tracking-widest">
          SHOP
        </span>
      </div>
    </Link>
  );
}
