import { createFileRoute } from "@tanstack/react-router";
import { ShopTypeCard } from "@/components/ShopTypeCard";
import { ThemedPacks } from "@/components/ThemedPacks";
import { GamesTeaser } from "@/components/GamesTeaser";
import { shopTypes } from "@/data/decals";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop all — Paper Beans" },
      { name: "description", content: "Stick-on names, iron-on names, themed name packs and school starter packs — personalised by you, made to order in the UK." },
      { property: "og:title", content: "Shop all — Paper Beans" },
      { property: "og:description", content: "Personalised names for all the stuff they already own." },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-12 sm:pt-16">
        <p className="label-eyebrow">Shop</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">Personalised names, ready to apply</h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          You bring the stuff. We bring the personal touch — made to order in the UK.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {shopTypes.map((t) => (
            <ShopTypeCard key={t.slug} type={t} />
          ))}
        </div>
      </section>
      <ThemedPacks />
      <GamesTeaser />
    </>
  );
}
