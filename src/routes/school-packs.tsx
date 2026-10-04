import { createFileRoute } from "@tanstack/react-router";
import { DecalTypePage } from "@/components/DecalTypePage";
import { StarterPack } from "@/components/StarterPack";

export const Route = createFileRoute("/school-packs")({
  head: () => ({
    meta: [
      { title: "School Starter Packs — Paper Beans" },
      { name: "description", content: "A personalised mix of large, medium and mini names plus matching icons for all their school stuff. £9.95." },
      { property: "og:title", content: "School Starter Packs — Paper Beans" },
      { property: "og:description", content: "School stuff = sorted. A mix of sizes for everything." },
    ],
  }),
  component: () => (
    <DecalTypePage
      title="School Starter Packs"
      intro="A mix of sizes for all their everyday stuff — bottles, lunchboxes, pencil cases, bags and more."
    >
      <StarterPack />
    </DecalTypePage>
  ),
});
