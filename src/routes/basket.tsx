import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { ShopTypeCard } from "@/components/ShopTypeCard";
import { shopTypes } from "@/data/decals";

export const Route = createFileRoute("/basket")({
  head: () => ({
    meta: [
      { title: "Your basket — Paper Beans" },
      {
        name: "description",
        content: "Your Paper Beans basket for personalised name decals, iron-on transfers and name packs.",
      },
      { property: "og:title", content: "Your basket — Paper Beans" },
      {
        property: "og:description",
        content: "Your Paper Beans basket.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: BasketPage,
});

function BasketPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 pt-14 text-center sm:pt-20">
        <div className="mx-auto flex size-16 items-center justify-center rounded-3xl bg-blush">
          <ShoppingBag className="size-7 text-foreground/70" />
        </div>
        <h1 className="mt-6 font-display text-3xl sm:text-4xl">
          Your basket is empty
        </h1>
        <p className="mt-4 text-muted-foreground">
          Nothing here yet. Start with a stick-on name, iron-on transfer or one of our themed packs.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-flex rounded-full bg-primary px-8 py-4 text-xs font-extrabold tracking-widest text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          START SHOPPING
        </Link>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="font-display text-2xl sm:text-3xl">Start personalising</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {shopTypes.map((type) => (
            <ShopTypeCard key={type.slug} type={type} />
          ))}
        </div>
      </section>
    </>
  );
}
