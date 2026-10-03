import { Link } from "@tanstack/react-router";
import bottleImage from "@/assets/product-bottle.jpg";
import { DecalName } from "./DecalName";
import { DoodleBurst, DoodleHeart, DoodleStar } from "./Doodles";

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-8 pt-10 sm:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="label-eyebrow">Personalised by you</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.02] sm:text-7xl">
            Make their stuff,
            <br />
            theirs.
          </h1>
          <p className="mt-5 max-w-md text-base text-muted-foreground sm:text-lg">
            Create personalised names, decals and iron-on transfers for bottles,
            bags, lunchboxes, clothes and more.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/make-your-name"
              className="rounded-full bg-primary px-7 py-4 text-xs font-extrabold tracking-widest text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              MAKE YOUR NAME
            </Link>
            <Link
              to="/how-it-works"
              className="rounded-full border border-foreground/15 px-7 py-4 text-xs font-extrabold tracking-widest text-foreground transition-colors hover:bg-secondary"
            >
              HOW IT WORKS
            </Link>
          </div>
        </div>

        <div className="relative">
          <DoodleStar className="doodle absolute -left-2 -top-2 z-10 size-9" />
          <DoodleHeart className="doodle absolute -right-1 bottom-24 z-10 size-9 text-accent" />
          <DoodleBurst className="doodle absolute -bottom-3 left-1/3 z-10 size-9 text-mint" />

          <div className="relative rounded-4xl bg-blush/60 p-4 sm:p-6">
            {/* A sheet of cut decals */}
            <div className="rounded-3xl bg-card p-5 shadow-card sm:p-8">
              <div className="flex items-center justify-between">
                <p className="label-eyebrow">Your decal sheet</p>
                <p className="text-[0.65rem] font-bold text-muted-foreground">
                  Ready to apply
                </p>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <Decal className="col-span-2 -rotate-2">
                  <DecalName name="AMELIA" font="chunky" colour="pink" icon="rainbow" size="lg" />
                </Decal>
                <Decal className="rotate-2">
                  <DecalName name="HARRY" font="rounded" colour="mint" icon="dinosaur" size="sm" />
                </Decal>
                <Decal className="-rotate-1">
                  <DecalName name="SOPHIE" font="handwritten" colour="lilac" icon="flower" size="sm" />
                </Decal>
                <Decal className="-rotate-1">
                  <DecalName name="JACK" font="playful" colour="blue" icon="football" size="sm" />
                </Decal>
                <Decal className="rotate-1">
                  <DecalName name="LILY" font="classic" colour="yellow" icon="butterfly" size="sm" />
                </Decal>
              </div>
            </div>

            {/* Applied example */}
            <div className="absolute -bottom-6 -right-2 hidden w-36 rotate-3 rounded-3xl bg-card p-2 shadow-lift sm:block">
              <img
                src={bottleImage}
                alt="Example of a name decal applied to a water bottle"
                className="aspect-square w-full rounded-2xl object-cover"
              />
              <p className="px-1 pt-1.5 text-center text-[0.6rem] font-bold text-muted-foreground">
                Shown applied
              </p>
            </div>
          </div>
          <p className="mt-8 text-xs text-muted-foreground sm:mt-10">
            Bottle, bag and other items shown for illustration only.
          </p>
        </div>
      </div>
    </section>
  );
}

function Decal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border-2 border-dashed border-border/80 px-3 py-4 ${className}`}
    >
      {children}
    </div>
  );
}
