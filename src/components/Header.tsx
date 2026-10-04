import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Shop", to: "/shop" },
  { label: "Stick-On Names", to: "/stick-on-names" },
  { label: "Iron-On Names", to: "/iron-on-names" },
  { label: "Name Packs", to: "/name-packs" },
  { label: "Games", to: "/games" },
  { label: "How It Works", to: "/how-it-works" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-primary text-primary-foreground">
        <p className="mx-auto max-w-7xl px-4 py-2 text-center text-[0.72rem] font-bold tracking-wide sm:text-xs">
          Personalised by you • Made by us • Posted to your door
        </p>
      </div>

      <div className="border-b border-border/70 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4">
          <button
            type="button"
            className="-ml-1 rounded-full p-2 text-foreground transition-colors hover:bg-secondary lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>

          <Link
            to="/"
            className="font-display text-xl leading-none tracking-tight sm:text-2xl"
          >
            PAPER BEANS
          </Link>

          <nav className="ml-8 hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1">
            <Link
              to="/basket"
              className="rounded-full p-2.5 transition-colors hover:bg-secondary"
              aria-label="Basket"
            >
              <ShoppingBag className="size-5" />
            </Link>
          </div>
        </div>

        {open ? (
          <nav className="border-t border-border/70 px-4 py-3 lg:hidden">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-2 py-3 font-display text-lg"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
