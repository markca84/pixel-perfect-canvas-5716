import { Link } from "@tanstack/react-router";
import type { Category } from "@/data/products";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      to={`/${category.slug}`}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 transition-transform hover:-translate-y-1 ${category.surface}`}
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
