import { ProductCard } from "./ProductCard";
import { PromoBanner } from "./PromoBanner";
import { getProductsByCategory, type CategorySlug } from "@/data/products";
import { DoodleSquiggle } from "./Doodles";

export function CategoryPage({
  slug,
  title,
  intro,
}: {
  slug: CategorySlug;
  title: string;
  intro: string;
}) {
  const items = getProductsByCategory(slug);

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-12 sm:pt-16">
        <p className="label-eyebrow">Shop</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">{title}</h1>
        <DoodleSquiggle className="doodle mt-4 w-28" />
        <p className="mt-4 max-w-xl text-muted-foreground">{intro}</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <PromoBanner />
    </>
  );
}
