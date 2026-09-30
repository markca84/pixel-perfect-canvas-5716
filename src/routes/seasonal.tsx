import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/seasonal")({
  head: () => ({
    meta: [
      { title: "Seasonal — Paper Beans" },
      {
        name: "description",
        content:
          "Personalised Christmas Eve boxes, Easter baskets and seasonal keepsakes made in the UK.",
      },
      { property: "og:title", content: "Seasonal — Paper Beans" },
      {
        property: "og:description",
        content: "Christmas, Easter and everything in between.",
      },
    ],
  }),
  component: () => (
    <CategoryPage
      slug="seasonal"
      title="Seasonal"
      intro="Christmas Eve boxes, Easter baskets and the bits that come out year after year."
    />
  ),
});
