import { createFileRoute, Link } from "@tanstack/react-router";
import { HowItWorks } from "@/components/HowItWorks";
import { UseItOn } from "@/components/UseItOn";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Paper Beans" },
      { name: "description", content: "Make it, we make it, stick it. How Paper Beans personalised decals and iron-on names get from your idea to your door." },
      { property: "og:title", content: "How It Works — Paper Beans" },
      { property: "og:description", content: "Easy peasy, stick & squeezy." },
    ],
  }),
  component: () => (
    <>
      <HowItWorks />
      <UseItOn />
      <div className="mx-auto max-w-7xl px-4 pb-8">
        <Link to="/application-guide" className="text-xs font-extrabold tracking-widest text-muted-foreground hover:text-foreground">
          READ THE APPLICATION GUIDE →
        </Link>
      </div>
    </>
  ),
});
