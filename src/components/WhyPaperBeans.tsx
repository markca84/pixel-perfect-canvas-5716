import { Hand, Heart, MapPin, Palette } from "lucide-react";

const benefits = [
  { title: "Made for you", copy: "Every order is personalised.", Icon: Heart, surface: "bg-blush" },
  { title: "Designer-led", copy: "Fonts, colours and little details that actually look good.", Icon: Palette, surface: "bg-lilac" },
  { title: "Easy to apply", copy: "Prepared and ready to use.", Icon: Hand, surface: "bg-mint" },
  { title: "Made in the UK", copy: "Made to order by Paper Beans.", Icon: MapPin, surface: "bg-sky" },
];

export function WhyPaperBeans() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <p className="label-eyebrow">Why Paper Beans</p>
      <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b) => (
          <li key={b.title} className="flex gap-4">
            <span className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${b.surface}`}>
              <b.Icon className="size-5 text-foreground/70" />
            </span>
            <div>
              <h3 className="font-display text-lg uppercase tracking-wide">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.copy}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
