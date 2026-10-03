import { DecalIcon } from "./DecalIcon";
import {
  getColour,
  getFont,
  type DecalColourId,
  type DecalFontId,
  type DecalIconId,
} from "@/data/decals";

const sizeClass = {
  xs: "text-lg",
  sm: "text-2xl",
  md: "text-4xl",
  lg: "text-5xl sm:text-6xl",
  xl: "text-6xl sm:text-8xl",
} as const;

export type DecalNameSize = keyof typeof sizeClass;

/** Renders a personalised name as it would look cut from vinyl. */
export function DecalName({
  name,
  font,
  colour,
  icon,
  size = "md",
  className = "",
}: {
  name: string;
  font: DecalFontId;
  colour: DecalColourId;
  icon?: DecalIconId | null;
  size?: DecalNameSize;
  className?: string;
}) {
  const f = getFont(font);
  const c = getColour(colour);
  const display = font === "handwritten" ? toTitle(name) : name.toUpperCase();

  return (
    <span
      className={`inline-flex items-center gap-[0.25em] leading-none ${sizeClass[size]} ${c.text} ${className}`}
    >
      {icon ? <DecalIcon id={icon} className="size-[0.95em] shrink-0" /> : null}
      <span className={`${f.className} tracking-wide`}>{display || "NAME"}</span>
    </span>
  );
}

function toTitle(value: string) {
  return value
    .toLowerCase()
    .replace(/(^|\s)\S/g, (m) => m.toUpperCase());
}
