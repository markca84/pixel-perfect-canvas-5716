import { createFileRoute } from "@tanstack/react-router";
import { DoodleSquiggle } from "@/components/Doodles";

export const Route = createFileRoute("/application-guide")({
  head: () => ({
    meta: [
      { title: "Application Guide — Paper Beans" },
      { name: "description", content: "How to apply your Paper Beans stick-on name decals and iron-on transfers, plus answers to common questions." },
      { property: "og:title", content: "Application Guide — Paper Beans" },
      { property: "og:description", content: "How to apply your personalised names." },
    ],
  }),
  component: GuidePage,
});

const stick = [
  "Make sure the surface is clean and dry.",
  "Peel the backing away slowly so the name stays on the clear transfer tape.",
  "Position it, then smooth it down firmly from the middle outwards.",
  "Peel the transfer tape back gently at a low angle.",
];

const faqs = [
  { q: "Is the item included?", a: "No — you bring the stuff, we bring the personal touch. We make the personalised name or design only." },
  { q: "How long does it take?", a: "Everything is made to order. Full delivery timings will be confirmed before ordering opens." },
  { q: "Can I order more than one name?", a: "Yes — Name Packs and School Starter Packs are designed for exactly that." },
];

function GuidePage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <p className="label-eyebrow">Help</p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl">Application guide</h1>
      <DoodleSquiggle className="doodle mt-4 w-28" />

      <div className="paper-card mt-10 p-7">
        <h2 className="font-display text-2xl">Stick-on names</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-muted-foreground">
          {stick.map((s) => <li key={s}>{s}</li>)}
        </ol>
      </div>

      <div className="paper-card mt-6 p-7">
        <h2 className="font-display text-2xl">Iron-on names</h2>
        <p className="mt-3 text-muted-foreground">
          Every iron-on order includes its own step-by-step application
          instructions. Please follow those for your transfer.
        </p>
      </div>

      <div id="faqs" className="mt-12 scroll-mt-32">
        <h2 className="font-display text-3xl">FAQs</h2>
        <dl className="mt-6 space-y-5">
          {faqs.map((f) => (
            <div key={f.q}>
              <dt className="font-display text-lg">{f.q}</dt>
              <dd className="text-muted-foreground">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
