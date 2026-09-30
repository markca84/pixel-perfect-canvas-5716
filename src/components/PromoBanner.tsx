import { Link } from "@tanstack/react-router";
import { DoodleHeart, DoodleSquiggle, DoodleStar } from "./Doodles";

export function PromoBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="relative overflow-hidden rounded-4xl bg-primary px-6 py-14 text-center sm:px-16 sm:py-20">
        <DoodleStar className="absolute left-6 top-8 size-10 text-primary-foreground/40 sm:size-14" />
        <DoodleHeart className="absolute bottom-8 right-8 size-10 text-primary-foreground/40 sm:size-14" />
        <DoodleSquiggle className="absolute -bottom-2 left-1/3 w-32 text-primary-foreground/30" />

        <h2 className="relative font-display text-3xl text-primary-foreground sm:text-5xl">
          Make their stuff, theirs.
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-sm text-primary-foreground/80 sm:text-base">
          From school bags to birthday cakes, add a little bit of them to
          everything.
        </p>
        <Link
          to="/personalised"
          className="relative mt-8 inline-flex rounded-full bg-card px-8 py-4 text-xs font-extrabold tracking-widest text-foreground transition-transform hover:scale-[1.04]"
        >
          START PERSONALISING
        </Link>
      </div>
    </section>
  );
}
