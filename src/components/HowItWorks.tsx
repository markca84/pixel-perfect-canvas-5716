import { DoodleBurst, DoodleHeart, DoodleStar } from "./Doodles";

const steps = [
  {
    title: "Pick it",
    copy: "Choose your favourite product.",
    surface: "bg-butter",
    Icon: DoodleStar,
  },
  {
    title: "Make it yours",
    copy: "Add a name, colour and design.",
    surface: "bg-sky",
    Icon: DoodleBurst,
  },
  {
    title: "We make it",
    copy: "Made by Paper Beans and delivered to your door.",
    surface: "bg-mint",
    Icon: DoodleHeart,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
      <p className="label-eyebrow">How it works</p>
      <h2 className="mt-3 max-w-xl font-display text-3xl sm:text-4xl">
        Three little steps and it&apos;s theirs
      </h2>

      <ol className="mt-10 grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.title} className="paper-card p-7">
            <div
              className={`flex size-12 items-center justify-center rounded-2xl ${step.surface}`}
            >
              <step.Icon className="size-6 text-foreground/70" />
            </div>
            <p className="label-eyebrow mt-5">Step {index + 1}</p>
            <h3 className="mt-1 font-display text-xl">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{step.copy}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
