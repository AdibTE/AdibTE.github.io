import { createFileRoute } from "@tanstack/react-router";
import { Intro } from "@/components/portfolio/Intro";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adib M. Rohani — Front-end Engineer" },
      {
        name: "description",
        content:
          "Adib M. Rohani — front-end engineer. React, TypeScript, Next.js. Full-stack when it matters.",
      },
      { property: "og:title", content: "Adib M. Rohani — Front-end Engineer" },
      {
        property: "og:description",
        content:
          "Front-end engineer. Full-stack when it matters. React, TypeScript, Node.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="dark relative min-h-dvh bg-background text-foreground antialiased">
      <Intro />
    </div>
  );
}
