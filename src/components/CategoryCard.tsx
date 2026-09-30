import { Link } from "@tanstack/react-router";
import type { Category, CategorySlug } from "@/data/products";

export const categoryRoutes = {
  personalised: "/personalised",
  parties: "/parties",
  games: "/games",
  gifts: "/gifts",
  seasonal: "/seasonal",
} as const satisfies Record<CategorySlug, string>;

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      to={categoryRoutes[category.slug]}
      className={`group flex flex-col justify-between overflow-hidden rounded-3xl p-6 transition-transform hover:-translate-y-1 ${category.surface}`}
    >
      <div>
        <h3 className="font-display text-xl text-foreground">{category.name}</h3>
        <p className="mt-1 text-sm text-foreground/70">{category.tagline}</p>
      </div>
      <img
        src={category.image}
        alt={category.name}
        loading="lazy"
        className="mx-auto mt-6 aspect-square w-full max-w-[200px] rounded-2xl object-cover"
      />
    </Link>
  );
}
