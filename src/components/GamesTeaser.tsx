import { Link } from "@tanstack/react-router";
import gamesImage from "@/assets/cat-games.jpg";

export function GamesTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="grid items-center gap-6 overflow-hidden rounded-4xl bg-mint/60 p-6 sm:grid-cols-[1fr_auto] sm:p-10">
        <div>
          <p className="label-eyebrow">Games</p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl">
            And there&apos;s more to Paper Beans…
          </h2>
          <p className="mt-2 text-muted-foreground">
            Personalised games made for your favourite people.
          </p>
          <Link
            to="/games"
            className="mt-6 inline-flex rounded-full bg-card px-7 py-4 text-xs font-extrabold tracking-widest transition-transform hover:scale-[1.03]"
          >
            EXPLORE GAMES
          </Link>
        </div>
        <img
          src={gamesImage}
          alt="Personalised family memory game"
          loading="lazy"
          className="aspect-square w-full max-w-[220px] rounded-3xl object-cover sm:w-52"
        />
      </div>
    </section>
  );
}
