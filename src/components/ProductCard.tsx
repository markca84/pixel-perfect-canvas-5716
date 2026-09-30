import { Link } from "@tanstack/react-router";
import { formatPrice, type Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="paper-card flex flex-col overflow-hidden">
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="block overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="aspect-square w-full object-cover"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-display text-lg leading-snug">
            <Link to="/product/$slug" params={{ slug: product.slug }}>
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 font-display text-base text-muted-foreground">
            {formatPrice(product.price)}
          </p>
        </div>

        {product.colours ? (
          <div className="flex items-center gap-2">
            {product.colours.map((colour) => (
              <span
                key={colour.name}
                title={colour.name}
                className={`size-4 rounded-full border border-border ${colour.token}`}
              />
            ))}
          </div>
        ) : null}

        <Link
          to="/product/$slug"
          params={{ slug: product.slug }}
          className="mt-auto inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-xs font-extrabold tracking-widest text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          PERSONALISE
        </Link>
      </div>
    </article>
  );
}
