import type { SVGProps } from "react";

export function DoodleStar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2.5c1 5 2.5 6.5 7.5 7.5-5 1-6.5 2.5-7.5 7.5-1-5-2.5-6.5-7.5-7.5 5-1 6.5-2.5 7.5-7.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleHeart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 20s-7-4.4-7-9.2A4 4 0 0 1 12 8a4 4 0 0 1 7 2.8C19 15.6 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleSquiggle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M2 12c4-8 8-8 12 0s8 8 12 0 8-8 12 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleBurst(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3.5 3.5M14.5 14.5 18 18M18 6l-3.5 3.5M9.5 14.5 6 18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
