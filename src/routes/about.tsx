import { createFileRoute } from "@tanstack/react-router";
import { HowItWorks } from "@/components/HowItWorks";
import { PromoBanner } from "@/components/PromoBanner";
import { DoodleHeart, DoodleSquiggle } from "@/components/Doodles";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Paper Beans — made in-house in the UK" },
      {
        name: "description",
        content:
          "Paper Beans is a small UK studio making personalised bottles, bags, labels, party bits and gifts in-house. Delivery, returns and personalisation guide.",
      },
      { property: "og:title", content: "About Paper Beans" },
      {
        property: "og:description",
        content:
          "A small UK studio making personalised things in-house, one name at a time.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 pt-14 text-center sm:pt-20">
        <p className="label-eyebrow">About Paper Beans</p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl">
          A small studio, a lot of names
        </h1>
        <DoodleSquiggle className="doodle mx-auto mt-5 w-32" />
        <p className="mt-6 text-muted-foreground">
          We&apos;re a UK family business making personalised bits for school
          mornings, birthday tables and gifts that need to feel thought about.
          Everything is designed, printed and finished in-house, so if something
          isn&apos;t right we can simply make it again.
        </p>
      </section>

      <HowItWorks />

      <section className="mx-auto max-w-5xl px-4 pb-6">
        <div className="grid gap-6 md:grid-cols-3">
          <article id="delivery" className="paper-card p-7">
            <h2 className="font-display text-xl">Delivery &amp; Returns</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Made to order in 2–3 working days, then sent on a tracked UK
              service. Free UK delivery over £35. Personalised items can&apos;t
              be returned unless faulty — but tell us and we&apos;ll put it
              right.
            </p>
          </article>

          <article id="personalisation" className="paper-card p-7">
            <h2 className="font-display text-xl">Personalisation Guide</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Names work best up to 10 characters. Type them exactly as you want
              them printed — capitals, accents and all. We print what you type,
              so do give it a second read.
            </p>
          </article>

          <article id="contact" className="paper-card p-7">
            <h2 className="font-display text-xl">Contact</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Questions, rush orders or something bespoke? Message us on
              Instagram and we&apos;ll usually reply the same day.
            </p>
            <DoodleHeart className="doodle mt-4 size-5" />
          </article>
        </div>
      </section>

      <PromoBanner />
    </>
  );
}
