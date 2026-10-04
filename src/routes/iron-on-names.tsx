import { createFileRoute } from "@tanstack/react-router";
import { DecalTypePage } from "@/components/DecalTypePage";

export const Route = createFileRoute("/iron-on-names")({
  head: () => ({
    meta: [
      { title: "Iron-On Names — Paper Beans" },
      { name: "description", content: "Personalised iron-on name transfers for bags, PE kits, clothing and fabric items. Made to order in the UK, from £3.50." },
      { property: "og:title", content: "Iron-On Names — Paper Beans" },
      { property: "og:description", content: "Personalised iron-on transfers for fabric. From £3.50." },
    ],
  }),
  component: () => (
    <DecalTypePage
      title="Iron-On Names"
      intro="Personalised transfers for bags, PE kits, clothing and fabric items. Each order comes with its own application instructions."
      fromPrice={3.5}
      examples={[
        { name: "HARRY", font: "rounded", colour: "mint", icon: "dinosaur" },
        { name: "JACK", font: "playful", colour: "black", icon: "football" },
        { name: "LILY", font: "chunky", colour: "lilac", icon: "butterfly" },
      ]}
    />
  ),
});
