import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/personalised")({
  head: () => ({
    meta: [
      { title: "Personalised — Paper Beans" },
      {
        name: "description",
        content:
          "Personalised water bottles, lunch bags, pencil cases and name stickers, made in-house in the UK.",
      },
      { property: "og:title", content: "Personalised — Paper Beans" },
      {
        property: "og:description",
        content: "School kit with their name on, made in-house in the UK.",
      },
    ],
  }),
  component: () => (
    <CategoryPage
      slug="personalised"
      title="Personalised"
      intro="Bottles, bags, cases and labels with their name on — so nothing goes missing at school."
    />
  ),
});
