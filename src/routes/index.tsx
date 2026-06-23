import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adib — Front-end Engineer" },
      {
        name: "description",
        content:
          "Adib is a front-end engineer building fast, accessible React, TypeScript and Next.js applications, with full-stack capability across Node, MongoDB and MySQL.",
      },
      { property: "og:title", content: "Adib — Front-end Engineer" },
      {
        property: "og:description",
        content:
          "Selected work, case studies and contact for Adib — a front-end engineer with full-stack range.",
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
    <div className="dark relative min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
