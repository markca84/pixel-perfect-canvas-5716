import { Link } from "@tanstack/react-router";
import { DecalIcon } from "./DecalIcon";
import { DecalName } from "./DecalName";
import { formatPrice } from "@/data/products";
import { getColour, themedPacks, type ThemedPack } from "@/data/decals";

export function ThemedPackCard({ pack }: { pack: ThemedPack }) {
  const c = getColour(pack.colour);
  return (
    <article className="paper-card flex flex-col overflow-hidden">
      <div className={`m-3 rounded-3xl p-5 ${pack.surface}`}>
        <div className="rounded-2xl bg-card p-5">
          <DecalName name={pack.sampleName} font={pack.font} colour={pack.colour} icon={pack.icon} size="md" />
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            <DecalName name={pack.sampleName} font={pack.font} colour={pack.colour} size="sm" />
            <DecalName name={pack.sampleName} font={pack.font} colour={pack.colour} size="sm" />
          </div>
          <div className={`mt-4 flex gap-3 ${c.text}`}>
            {[0, 1, 2, 3].map((i) => (
              <DecalIcon key={i} id={pack.icon} className={`size-6 ${i % 2 ? "rotate-12" : "-rotate-6"}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-between gap-3 px-5 pb-5 pt-2">
        <div>
          <h3 className="font-display text-lg">{pack.name}</h3>
          <p className="font-display text-muted-foreground">{formatPrice(pack.price)}</p>
        </div>
        <Link
          to="/make-your-name"
          className="rounded-full bg-primary px-5 py-3 text-xs font-extrabold tracking-widest text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          PERSONALISE
        </Link>
      </div>
    </article>
  );
}

export function ThemedPacks({ heading = true }: { heading?: boolean }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      {heading ? (
        <>
          <p className="label-eyebrow">Themed packs</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">Pick their thing.</h2>
        </>
      ) : null}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {themedPacks.map((pack) => (
          <ThemedPackCard key={pack.id} pack={pack} />
        ))}
      </div>
    </section>
  );
}
