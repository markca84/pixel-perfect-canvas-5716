import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { ShopTypeCard } from "@/components/ShopTypeCard";
import { Personaliser } from "@/components/Personaliser";
import { ThemedPacks } from "@/components/ThemedPacks";
import { HowItWorks } from "@/components/HowItWorks";
import { UseItOn } from "@/components/UseItOn";
import { StarterPack } from "@/components/StarterPack";
import { WhyPaperBeans } from "@/components/WhyPaperBeans";
import { GamesTeaser } from "@/components/GamesTeaser";
import { DoodleStar } from "@/components/Doodles";
import { shopTypes } from "@/data/decals";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paper Beans — Personalised name decals & iron-on transfers" },
      {
        name: "description",
        content:
          "Create personalised names, decals and iron-on transfers for bottles, bags, lunchboxes, clothes and more. Made to order in the UK.",
      },
      { property: "og:title", content: "Paper Beans — Make their stuff, theirs." },
      {
        property: "og:description",
        content: "Personalised stick-on names and iron-on transfers, made to order and ready to apply.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="label-eyebrow">Shop by type</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">A little name goes a long way.</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              For school stuff, sports kits, favourite bottles and everything that somehow goes missing.
            </p>
          </div>
          <DoodleStar className="doodle hidden size-10 sm:block" />
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {shopTypes.map((t) => (
            <ShopTypeCard key={t.slug} type={t} />
          ))}
        </div>
      </section>

      <section className="bg-blush/40 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <p className="label-eyebrow">Make your name</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Make it theirs.</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Pick a name. Choose a style. Add a little something extra.
          </p>
          <div className="mt-10">
            <Personaliser />
          </div>
        </div>
      </section>

      <ThemedPacks />
      <HowItWorks />
      <UseItOn />
      <StarterPack />
      <WhyPaperBeans />
      <GamesTeaser />
    </>
  );
}
