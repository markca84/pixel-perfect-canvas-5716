import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/gifts")({
  head: () => ({
    meta: [
      { title: "Gifts — Paper Beans" },
      {
        name: "description",
        content:
          "Personalised keepsake gift boxes and prints, wrapped and made in-house in the UK.",
      },
      { property: "og:title", content: "Gifts — Paper Beans" },
      {
        property: "og:description",
        content: "Keepsakes that feel properly thought about.",
      },
    ],
  }),
  component: () => (
    <CategoryPage
      slug="gifts"
      title="Gifts"
      intro="Keepsake boxes and prints for new babies, birthdays and thank yous — gift wrapped as standard."
    />
  ),
});
