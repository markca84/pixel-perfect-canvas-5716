import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { DoodleHeart, DoodleStar } from "./Doodles";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/70 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div className="max-w-sm">
            <p className="font-display text-2xl">Good things in your inbox.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              New products, ideas and occasional treats.
            </p>
            <form
              className="mt-5 flex flex-col gap-3 sm:flex-row"
              onSubmit={(event) => event.preventDefault()}
            >
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@email.com"
                className="w-full rounded-full border border-border bg-card px-5 py-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="rounded-full bg-primary px-6 py-3 text-xs font-extrabold tracking-widest text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                SIGN UP
              </button>
            </form>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <h3 className="label-eyebrow">Shop</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link to="/shop" className="hover:text-primary">
                    All products
                  </Link>
                </li>
                <li>
                  <Link to="/personalised" className="hover:text-primary">
                    Personalised
                  </Link>
                </li>
                <li>
                  <Link to="/parties" className="hover:text-primary">
                    Parties
                  </Link>
                </li>
                <li>
                  <Link to="/games" className="hover:text-primary">
                    Games
                  </Link>
                </li>
                <li>
                  <Link to="/gifts" className="hover:text-primary">
                    Gifts
                  </Link>
                </li>
                <li>
                  <Link to="/seasonal" className="hover:text-primary">
                    Seasonal
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="label-eyebrow">Help</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link to="/about" className="hover:text-primary">
                    About Paper Beans
                  </Link>
                </li>
                <li>
                  <Link to="/about" hash="delivery" className="hover:text-primary">
                    Delivery &amp; Returns
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    hash="personalisation"
                    className="hover:text-primary"
                  >
                    Personalisation Guide
                  </Link>
                </li>
                <li>
                  <Link to="/about" hash="contact" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="label-eyebrow">Follow</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a
                    href="https://instagram.com"
                    className="inline-flex items-center gap-2 hover:text-primary"
                  >
                    <Instagram className="size-4" /> Instagram
                  </a>
                </li>
                <li>
                  <a href="https://pinterest.com" className="hover:text-primary">
                    Pinterest
                  </a>
                </li>
              </ul>
              <div className="mt-6 flex items-center gap-2">
                <DoodleStar className="doodle size-5" />
                <DoodleHeart className="doodle size-5 text-accent" />
              </div>
            </div>
          </div>
        </div>

        <p className="mt-14 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Paper Beans. Made in-house in the UK.
        </p>
      </div>
    </footer>
  );
}
