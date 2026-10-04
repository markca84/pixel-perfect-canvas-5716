import { createFileRoute } from "@tanstack/react-router";
import { DecalTypePage } from "@/components/DecalTypePage";

export const Route = createFileRoute("/stick-on-names")({
  head: () => ({
    meta: [
      { title: "Stick-On Names — Paper Beans" },
      { name: "description", content: "Personalised vinyl name decals for bottles, lunchboxes, notebooks and more. Made to order in the UK, from £2.95." },
      { property: "og:title", content: "Stick-On Names — Paper Beans" },
      { property: "og:description", content: "Personalised vinyl name decals, ready to apply. From £2.95." },
    ],
  }),
  component: () => (
    <DecalTypePage
      title="Stick-On Names"
      intro="Personalised vinyl names for bottles, lunchboxes, notebooks and more. You bring the stuff — we cut the name, ready to stick."
      fromPrice={2.95}
      examples={[
        { name: "AMELIA", font: "chunky", colour: "pink", icon: "rainbow" },
        { name: "OSCAR", font: "classic", colour: "blue", icon: "rocket" },
        { name: "SOPHIE", font: "handwritten", colour: "lilac", icon: "flower" },
      ]}
    />
  ),
});
