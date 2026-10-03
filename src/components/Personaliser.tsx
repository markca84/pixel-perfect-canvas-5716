import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { DecalName } from "./DecalName";
import { DesignControls } from "./DesignControls";
import { DoodleStar } from "./Doodles";
import { defaultDesign, getColour, type DecalDesign } from "@/data/decals";

const previewSize = { mini: "md", medium: "lg", large: "xl" } as const;

/** Live name personaliser preview. Local state only — no checkout yet. */
export function Personaliser({ showCta = true }: { showCta?: boolean }) {
  const [design, setDesign] = useState<DecalDesign>(defaultDesign);
  const light = getColour(design.colour).light;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
      <div className="lg:sticky lg:top-36 lg:self-start">
        <div
          className={`relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-4xl p-8 transition-colors sm:min-h-[380px] ${
            light ? "bg-ink" : "bg-card"
          }`}
        >
          <DoodleStar className="doodle absolute left-6 top-6 size-6" />
          <span className="absolute right-5 top-5 rounded-full bg-secondary px-3 py-1 text-[0.65rem] font-extrabold tracking-widest text-foreground">
            LIVE PREVIEW
          </span>
          <div className="rounded-3xl border-2 border-dashed border-border/80 px-6 py-8 sm:px-10">
            <DecalName
              name={design.name}
              font={design.font}
              colour={design.colour}
              icon={design.icon}
              size={previewSize[design.size]}
              className="max-w-full break-all"
            />
          </div>
          <p className={`absolute bottom-5 left-0 right-0 text-center text-xs ${light ? "text-vinyl-white/70" : "text-muted-foreground"}`}>
            {design.type === "stick" ? "Stick-on vinyl decal" : "Iron-on transfer"} · {design.size}
          </p>
        </div>
        {showCta ? (
          <Link
            to="/make-your-name"
            className="mt-6 flex w-full items-center justify-center rounded-full bg-primary px-7 py-4 text-xs font-extrabold tracking-widest text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            MAKE YOURS
          </Link>
        ) : (
          <div className="mt-6 rounded-3xl border border-dashed border-border bg-card p-5 text-sm text-muted-foreground">
            Ordering opens soon — for now, play with names, fonts and colours to
            see how they look.
            <button
              type="button"
              disabled
              className="mt-4 flex w-full cursor-not-allowed items-center justify-center rounded-full bg-primary px-7 py-4 text-xs font-extrabold tracking-widest text-primary-foreground opacity-60"
            >
              ADD TO BASKET — COMING SOON
            </button>
          </div>
        )}
      </div>

      <div className="rounded-4xl bg-secondary/70 p-6 sm:p-8">
        <DesignControls design={design} onChange={setDesign} />
      </div>
    </div>
  );
}
