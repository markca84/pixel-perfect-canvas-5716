import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/parties")({
  head: () => ({
    meta: [
      { title: "Parties — Paper Beans" },
      {
        name: "description",
        content:
          "Personalised cake toppers, party bags and table bits, hand-finished in the UK.",
      },
      { property: "og:title", content: "Parties — Paper Beans" },
      {
        property: "og:description",
        content: "Cake toppers, party bags and table bits with their name on.",
      },
    ],
  }),
  component: () => (
    <CategoryPage
      slug="parties"
      title="Parties"
      intro="Cake toppers, party bags and little table details, all hand-finished with their name."
    />
  ),
});
