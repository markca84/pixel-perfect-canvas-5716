import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { DecalName } from "./DecalName";
import { DoodleSquiggle } from "./Doodles";
import { HowItWorks } from "./HowItWorks";
import { formatPrice } from "@/data/products";
import type { DecalColourId, DecalFontId, DecalIconId } from "@/data/decals";

type Example = { name: string; font: DecalFontId; colour: DecalColourId; icon?: DecalIconId };

export function DecalTypePage({
  eyebrow = "Shop",
  title,
  intro,
  fromPrice,
  examples = [],
  children,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
  fromPrice?: number;
  examples?: Example[];
  children?: ReactNode;
}) {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-12 sm:pt-16">
        <p className="label-eyebrow">{eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">{title}</h1>
        <DoodleSquiggle className="doodle mt-4 w-28" />
        <p className="mt-4 max-w-xl text-muted-foreground">{intro}</p>
        {fromPrice ? (
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="font-display text-2xl">From {formatPrice(fromPrice)}</span>
            <Link
              to="/make-your-name"
              className="rounded-full bg-primary px-7 py-4 text-xs font-extrabold tracking-widest text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              MAKE YOUR NAME
            </Link>
          </div>
        ) : null}
      </section>

      {examples.length ? (
        <section className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {examples.map((e) => (
              <div key={e.name + e.font} className="paper-card flex min-h-40 items-center justify-center p-8">
                <DecalName {...e} size="md" />
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Example designs. Items they&apos;re applied to are not included.
          </p>
        </section>
      ) : null}

      {children}
      <HowItWorks />
    </>
  );
}
