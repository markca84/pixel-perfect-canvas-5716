import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { featuredProducts } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/basket")({
  head: () => ({
    meta: [
      { title: "Your basket — Paper Beans" },
      {
        name: "description",
        content: "Your Paper Beans basket. Free UK delivery on orders over £35.",
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
          Once the personaliser is live you&apos;ll be able to add names, colours
          and designs here before checking out.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-flex rounded-full bg-primary px-8 py-4 text-xs font-extrabold tracking-widest text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          START SHOPPING
        </Link>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="font-display text-2xl sm:text-3xl">Popular right now</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
