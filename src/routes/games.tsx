import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/games")({
  head: () => ({
    meta: [
      { title: "Games — Paper Beans" },
      {
        name: "description",
        content:
          "Personalised memory games and quiz cards made about your own family, printed in the UK.",
      },
      { property: "og:title", content: "Games — Paper Beans" },
      {
        property: "og:description",
        content: "Games made about your own family.",
      },
    ],
  }),
  component: () => (
    <CategoryPage
      slug="games"
      title="Games"
      intro="Games built around your own people, photos and in-jokes. Made to be played to bits."
    />
  ),
});
