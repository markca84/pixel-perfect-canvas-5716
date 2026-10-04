import { createFileRoute } from "@tanstack/react-router";
import { DecalTypePage } from "@/components/DecalTypePage";
import { ThemedPacks } from "@/components/ThemedPacks";

export const Route = createFileRoute("/name-packs")({
  head: () => ({
    meta: [
      { title: "Themed Name Packs — Paper Beans" },
      { name: "description", content: "Themed personalised name packs — dinosaurs, rainbows, football, butterflies, space and flowers. Names and icons designed to go together." },
      { property: "og:title", content: "Themed Name Packs — Paper Beans" },
      { property: "og:description", content: "Names + little icons designed to go together." },
    ],
  }),
  component: () => (
    <DecalTypePage
      title="Themed Name Packs"
      intro="One large name, two medium names and a handful of matching little icons — all designed to go together."
      fromPrice={5.95}
    >
      <ThemedPacks heading={false} />
    </DecalTypePage>
  ),
});
