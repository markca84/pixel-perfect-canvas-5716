import { createFileRoute } from "@tanstack/react-router";
import { Personaliser } from "@/components/Personaliser";

export const Route = createFileRoute("/make-your-name")({
  head: () => ({
    meta: [
      { title: "Make Your Name — Paper Beans" },
      { name: "description", content: "Design a personalised name decal or iron-on transfer: pick a font, colour, icon and size and see it live." },
      { property: "og:title", content: "Make Your Name — Paper Beans" },
      { property: "og:description", content: "Pick a name. Choose a style. Add a little something extra." },
    ],
  }),
  component: () => (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
      <p className="label-eyebrow">Make your name</p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl">Make it theirs.</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Pick a name. Choose a style. Add a little something extra.
      </p>
      <div className="mt-10">
        <Personaliser showCta={false} />
      </div>
    </section>
  ),
});
