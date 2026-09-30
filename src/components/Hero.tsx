import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-composition.jpg";
import { DoodleBurst, DoodleHeart, DoodleStar } from "./Doodles";

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-8 pt-10 sm:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="label-eyebrow">Personalised by you</p>
          <h1 className="mt-4 font-display text-4xl leading-[1.05] sm:text-6xl">
            Little things.
            <br />
            Made just for you.
          </h1>
          <p className="mt-5 max-w-md text-base text-muted-foreground sm:text-lg">
            Personalised goodies for school, birthdays, gifting and everything in
            between.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/personalised"
              className="rounded-full bg-primary px-7 py-4 text-xs font-extrabold tracking-widest text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              SHOP PERSONALISED
            </Link>
            <Link
              to="/"
              hash="how-it-works"
              className="rounded-full border border-foreground/15 px-7 py-4 text-xs font-extrabold tracking-widest text-foreground transition-colors hover:bg-secondary"
            >
              HOW IT WORKS
            </Link>
          </div>
        </div>

        <div className="relative">
          <DoodleStar className="doodle absolute -left-1 top-2 size-8 sm:size-10" />
          <DoodleHeart className="doodle absolute -right-1 top-10 size-8 text-accent sm:size-10" />
          <DoodleBurst className="doodle absolute bottom-4 left-6 size-8 text-mint sm:size-10" />
          <div className="overflow-hidden rounded-4xl bg-blush/60 p-3 sm:p-5">
            <img
              src={heroImage}
              alt="Personalised water bottle, lunch bag, pencil case and name stickers for Amelia"
              className="w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
