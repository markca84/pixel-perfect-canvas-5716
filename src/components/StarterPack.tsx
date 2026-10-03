import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { useState } from "react";
import { DecalIcon } from "./DecalIcon";
import { DecalName } from "./DecalName";
import { DesignControls } from "./DesignControls";
import { formatPrice } from "@/data/products";
import { defaultDesign, getColour, starterPack, type DecalDesign } from "@/data/decals";

export function StarterPack() {
  const [design, setDesign] = useState<DecalDesign>({ ...defaultDesign, colour: "blue", icon: "rocket" });
  const icon = design.icon ?? "rainbow";
  const colour = getColour(design.colour).light ? "black" : design.colour;
  const props = { name: design.name, font: design.font, colour };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <div className="grid gap-8 rounded-4xl bg-butter/60 p-5 sm:p-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <p className="label-eyebrow">School Starter Pack</p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl">School stuff = sorted.</h2>
          <p className="mt-4 text-muted-foreground">
            Perfect for bottles, lunchboxes, pencil cases, bags and more.
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-2 text-sm font-bold">
            {starterPack.contents.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="size-4 text-vinyl-pink" /> {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-3xl bg-card p-5 sm:p-6">
            <div className="flex flex-col gap-4">
              <DecalName {...props} icon={design.icon} size="lg" />
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {[0, 1, 2].map((i) => (
                  <DecalName key={i} {...props} size="sm" />
                ))}
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <DecalName key={i} {...props} size="xs" />
                ))}
              </div>
              <div className={`flex gap-3 ${getColour(colour).text}`}>
                {[0, 1, 2, 3].map((i) => (
                  <DecalIcon key={i} id={icon} className="size-6" />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-5">
            <span className="font-display text-3xl">{formatPrice(starterPack.price)}</span>
            <Link
              to="/school-packs"
              className="rounded-full bg-primary px-7 py-4 text-xs font-extrabold tracking-widest text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              BUILD YOUR PACK
            </Link>
          </div>
        </div>

        <div className="rounded-3xl bg-card/70 p-5 sm:p-7">
          <DesignControls design={design} onChange={setDesign} controls={["name", "font", "colour", "icon"]} />
        </div>
      </div>
    </section>
  );
}
