import type { DecalIconId } from "@/data/decals";

/** Single-colour icons drawn like cut vinyl — they inherit currentColor. */
export function DecalIcon({ id, className }: { id: DecalIconId; className?: string }) {
  const common = {
    viewBox: "0 0 48 48",
    className,
    "aria-hidden": true,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 3.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (id) {
    case "rainbow":
      return (
        <svg {...common}>
          <path d="M5 36a19 19 0 0 1 38 0" />
          <path d="M12 36a12 12 0 0 1 24 0" />
          <path d="M19 36a5 5 0 0 1 10 0" />
        </svg>
      );
    case "butterfly":
      return (
        <svg {...common}>
          <path d="M24 16v22" />
          <path d="M24 16c-2-5-4-7-6-8M24 16c2-5 4-7 6-8" />
          <path d="M22 22C17 11 6 10 6 18c0 5 8 7 16 5zM26 22c5-11 16-12 16-4 0 5-8 7-16 5z" fill="currentColor" />
          <path d="M22 26c-7 0-12 4-10 9 2 4 8 1 10-5zM26 26c7 0 12 4 10 9-2 4-8 1-10-5z" fill="currentColor" />
        </svg>
      );
    case "flower":
      return (
        <svg {...common}>
          <circle cx="24" cy="12.5" r="6.5" />
          <circle cx="34.9" cy="20.4" r="6.5" />
          <circle cx="30.7" cy="33.3" r="6.5" />
          <circle cx="17.3" cy="33.3" r="6.5" />
          <circle cx="13.1" cy="20.4" r="6.5" />
          <circle cx="24" cy="24" r="4" fill="currentColor" />
        </svg>
      );
    case "football":
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="19" />
          <path d="M24 16l7.6 5.5-2.9 9h-9.4l-2.9-9z" fill="currentColor" />
          <path d="M24 16V5M31.6 21.5l10-3M28.7 30.5l6 8.5M19.3 30.5l-6 8.5M16.4 21.5l-10-3" />
        </svg>
      );
    case "dinosaur":
      return (
        <svg {...common}>
          <path
            d="M6 30c3-7 10-11 18-11h3c1-5 5-9 10-9 4 0 6 2 6 5s-2 4-5 4h-3c0 4-1 8-3 11-2 2-3 3-3 5v6M17 30v8M6 30c4 2 8 2 11 0M24 19l2-5 3 4M17 20l1-5 3 5"
          />
          <circle cx="38" cy="14" r="1" fill="currentColor" />
        </svg>
      );
    case "rocket":
      return (
        <svg {...common}>
          <path d="M24 4c7 5 10 13 10 22v8H14v-8c0-9 3-17 10-22z" />
          <circle cx="24" cy="19" r="3.5" fill="currentColor" />
          <path d="M14 27l-6 6v5l6-3M34 27l6 6v5l-6-3" />
          <path d="M20 38l4 6 4-6" fill="currentColor" />
        </svg>
      );
  }
}
