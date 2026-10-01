<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules

- Product, category and price data lives in `src/data/products.ts` as local sample
  data shaped like an API response, so a database can replace it without touching
  components.
- Shared UI lives in `src/components/` (Header, Footer, Hero, CategoryCard,
  ProductCard, PromoBanner, HowItWorks, CategoryPage, Doodles); routes compose
  these rather than defining layout inline.
- All colours, radii and fonts come from the semantic tokens in `src/styles.css`;
  never hardcode colour utilities in components, so the brand stays themeable.
