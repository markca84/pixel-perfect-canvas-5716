import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { PromoBanner } from "@/components/PromoBanner";
import { CategoryCard } from "@/components/CategoryCard";
import { categories, products } from "@/data/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop all — Paper Beans" },
      {
        name: "description",
        content:
          "Every Paper Beans product in one place: personalised school kit, party bits, games, gifts and seasonal keepsakes.",
      },
      { property: "og:title", content: "Shop all — Paper Beans" },
      {
        property: "og:description",
        content: "Every Paper Beans product in one place.",
      },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-12 sm:pt-16">
        <p className="label-eyebrow">Shop</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">
          Everything we make
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Made in-house in the UK, personalised by you. Free UK delivery over
          £35.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <PromoBanner />
    </>
  );
}
