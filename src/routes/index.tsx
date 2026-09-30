import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { HowItWorks } from "@/components/HowItWorks";
import { PromoBanner } from "@/components/PromoBanner";
import { categories, featuredProducts } from "@/data/products";
import { DoodleStar } from "@/components/Doodles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paper Beans — Little things. Made just for you." },
      {
        name: "description",
        content:
          "UK-made personalised water bottles, lunch bags, pencil cases, name stickers, party products and gifts. Free UK delivery over £35.",
      },
      {
        property: "og:title",
        content: "Paper Beans — Little things. Made just for you.",
      },
      {
        property: "og:description",
        content:
          "Personalised goodies for school, birthdays, gifting and everything in between.",
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
            <p className="label-eyebrow">Categories</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Made for every little moment
            </h2>
          </div>
          <DoodleStar className="doodle hidden size-10 sm:block" />
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="label-eyebrow">Bestsellers</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              School favourites
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden text-xs font-extrabold tracking-widest text-muted-foreground hover:text-foreground sm:block"
          >
            SHOP ALL
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <HowItWorks />
      <PromoBanner />
    </>
  );
}
