import {
  Backpack,
  GlassWater,
  NotebookPen,
  Package,
  Pencil,
  Shirt,
  ShoppingBag,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import { DecalName } from "./DecalName";
import type { DecalColourId, DecalFontId } from "@/data/decals";

const uses: { label: string; Icon: LucideIcon; surface: string; font: DecalFontId; colour: DecalColourId }[] = [
  { label: "Water bottles", Icon: GlassWater, surface: "bg-sky", font: "chunky", colour: "pink" },
  { label: "Lunchboxes", Icon: Utensils, surface: "bg-butter", font: "rounded", colour: "blue" },
  { label: "School bags", Icon: Backpack, surface: "bg-blush", font: "playful", colour: "black" },
  { label: "PE bags", Icon: ShoppingBag, surface: "bg-mint", font: "classic", colour: "lilac" },
  { label: "Pencil cases", Icon: Pencil, surface: "bg-lilac", font: "handwritten", colour: "pink" },
  { label: "Notebooks", Icon: NotebookPen, surface: "bg-secondary", font: "rounded", colour: "mint" },
  { label: "Storage boxes", Icon: Package, surface: "bg-butter", font: "chunky", colour: "blue" },
  { label: "Sports kit", Icon: Shirt, surface: "bg-sky", font: "playful", colour: "black" },
];

export function UseItOn() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:items-end">
        <div>
          <p className="label-eyebrow">Use it on…</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            One name. Loads of possibilities.
          </h2>
        </div>
        <p className="max-w-lg text-muted-foreground lg:justify-self-end">
          <strong className="text-foreground">You bring the stuff. We bring the personal touch.</strong>{" "}
          These are just ideas — the items themselves aren&apos;t included, only the
          personalised name.
        </p>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {uses.map((u) => (
          <li key={u.label} className={`flex flex-col rounded-3xl p-5 ${u.surface}`}>
            <u.Icon className="size-7 text-foreground/60" strokeWidth={1.75} />
            <div className="mt-6 rounded-2xl bg-card/80 px-3 py-3 text-center">
              <DecalName name="AMELIA" font={u.font} colour={u.colour} size="xs" />
            </div>
            <p className="mt-3 font-display text-base">{u.label}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-muted-foreground">
        Items shown for illustration only and not included.
      </p>
    </section>
  );
}
