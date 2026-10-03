import type { ReactNode } from "react";
import { DecalIcon } from "./DecalIcon";
import {
  decalColours,
  decalFonts,
  decalIcons,
  decalSizes,
  decalTypes,
  getFont,
  type DecalDesign,
} from "@/data/decals";

type Control = "name" | "type" | "font" | "colour" | "icon" | "size";

const chip = (active: boolean) =>
  `rounded-2xl border-2 px-4 py-3 text-left transition-colors ${
    active
      ? "border-foreground bg-card"
      : "border-transparent bg-card/70 hover:border-border"
  }`;

function Step({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <div>
      <p className="label-eyebrow">
        {n}. {title}
      </p>
      <div className="mt-3">{children}</div>
    </div>
  );
}

/** Shared personaliser controls, driven entirely by local React state. */
export function DesignControls({
  design,
  onChange,
  controls = ["name", "type", "font", "colour", "icon", "size"],
}: {
  design: DecalDesign;
  onChange: (next: DecalDesign) => void;
  controls?: Control[];
}) {
  const set = <K extends keyof DecalDesign>(key: K, value: DecalDesign[K]) =>
    onChange({ ...design, [key]: value });
  let n = 0;

  return (
    <div className="space-y-7">
      {controls.includes("name") ? (
        <Step n={++n} title="Name">
          <input
            value={design.name}
            maxLength={12}
            onChange={(e) => set("name", e.target.value.replace(/[^\p{L} '-]/gu, ""))}
            aria-label="Name"
            className="w-full rounded-2xl border-2 border-border bg-card px-5 py-4 font-display text-2xl uppercase tracking-wide outline-none focus:border-foreground"
          />
        </Step>
      ) : null}

      {controls.includes("type") ? (
        <Step n={++n} title="Choose type">
          <div className="grid grid-cols-2 gap-3">
            {decalTypes.map((t) => (
              <button key={t.id} type="button" onClick={() => set("type", t.id)} className={chip(design.type === t.id)} aria-pressed={design.type === t.id}>
                <span className="block font-display text-lg">{t.label}</span>
                <span className="text-xs text-muted-foreground">{t.hint}</span>
              </button>
            ))}
          </div>
        </Step>
      ) : null}

      {controls.includes("font") ? (
        <Step n={++n} title="Choose a font">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {decalFonts.map((f) => (
              <button key={f.id} type="button" onClick={() => set("font", f.id)} className={`${chip(design.font === f.id)} text-center`} aria-pressed={design.font === f.id} aria-label={`${f.label} font`}>
                <span className={`block truncate text-xl leading-tight ${getFont(f.id).className}`}>
                  {f.id === "handwritten" ? "Amelia" : "AMELIA"}
                </span>
                <span className="text-[0.7rem] text-muted-foreground">{f.label}</span>
              </button>
            ))}
          </div>
        </Step>
      ) : null}

      {controls.includes("colour") ? (
        <Step n={++n} title="Choose a colour">
          <div className="flex flex-wrap gap-3">
            {decalColours.map((c) => (
              <button
                key={c.id}
                type="button"
                title={c.label}
                aria-label={c.label}
                aria-pressed={design.colour === c.id}
                onClick={() => set("colour", c.id)}
                className={`size-10 rounded-full border border-border ring-offset-2 ring-offset-background transition-transform hover:scale-110 ${c.swatch} ${
                  design.colour === c.id ? "ring-2 ring-foreground" : ""
                }`}
              />
            ))}
          </div>
        </Step>
      ) : null}

      {controls.includes("icon") ? (
        <Step n={++n} title="Add an icon">
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {decalIcons.map((i) => (
              <button
                key={i.id}
                type="button"
                onClick={() => set("icon", design.icon === i.id ? null : i.id)}
                aria-pressed={design.icon === i.id}
                className={`${chip(design.icon === i.id)} flex flex-col items-center gap-1 px-2 text-center`}
              >
                <DecalIcon id={i.id} className="size-7 text-foreground" />
                <span className="text-[0.7rem] font-bold">{i.label}</span>
              </button>
            ))}
          </div>
        </Step>
      ) : null}

      {controls.includes("size") ? (
        <Step n={++n} title="Size">
          <div className="grid grid-cols-3 gap-3">
            {decalSizes.map((s) => (
              <button key={s.id} type="button" onClick={() => set("size", s.id)} className={`${chip(design.size === s.id)} text-center`} aria-pressed={design.size === s.id}>
                <span className="block font-display text-lg">{s.label}</span>
                <span className="text-[0.7rem] text-muted-foreground">{s.hint}</span>
              </button>
            ))}
          </div>
        </Step>
      ) : null}
    </div>
  );
}
