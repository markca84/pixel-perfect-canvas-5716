import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { DoodleStar } from "@/components/Doodles";
import {
  formatPrice,
  getProductBySlug,
  getProductsByCategory,
} from "@/data/products";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Product unavailable — Paper Beans" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} — Paper Beans` },
        { name: "description", content: product.blurb },
        { property: "og:title", content: `${product.name} — Paper Beans` },
        { property: "og:description", content: product.blurb },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const related = getProductsByCategory(product.category).filter(
    (item) => item.id !== product.id,
  );

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:pt-14">
        <p className="label-eyebrow">
          <Link to="/shop" className="hover:text-foreground">
            Shop
          </Link>{" "}
          / {product.name}
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-4xl bg-secondary p-3 sm:p-5">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-3xl object-cover"
            />
          </div>

          <div>
            <h1 className="font-display text-3xl sm:text-4xl">{product.name}</h1>
            <p className="mt-3 font-display text-2xl text-muted-foreground">
              {formatPrice(product.price)}
            </p>
            <p className="mt-5 max-w-md text-muted-foreground">{product.blurb}</p>

            {product.colours ? (
              <div className="mt-8">
                <p className="label-eyebrow">Colour</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {product.colours.map((colour) => (
                    <span
                      key={colour.name}
                      className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-xs font-bold"
                    >
                      <span
                        className={`size-4 rounded-full border border-border ${colour.token}`}
                      />
                      {colour.name}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-10 rounded-3xl border border-dashed border-border bg-card p-6">
              <div className="flex items-center gap-2">
                <DoodleStar className="doodle size-5" />
                <p className="label-eyebrow">Personaliser coming soon</p>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                The live personaliser — where you&apos;ll type a name, pick a
                colour and see a preview — is being built next. For now, have a
                look around the rest of the shop.
              </p>
              <button
                type="button"
                disabled
                className="mt-5 cursor-not-allowed rounded-full bg-primary px-7 py-4 text-xs font-extrabold tracking-widest text-primary-foreground opacity-60"
              >
                PERSONALISE THIS
              </button>
            </div>

            <ul className="mt-8 space-y-2 text-sm text-muted-foreground">
              <li>• Made in-house in the UK</li>
              <li>• Free UK delivery on orders over £35</li>
              <li>• Made to order in 2–3 working days</li>
            </ul>
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="font-display text-2xl sm:text-3xl">Goes nicely with</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
