import { createFileRoute } from "@tanstack/react-router";
import { Intro } from "@/components/portfolio/Intro";
import { getDictionary } from "@/i18n";

const locale = "en" as const;
const t = getDictionary(locale);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: t.meta.title },
      { name: "description", content: t.meta.description },
      { property: "og:title", content: t.meta.title },
      { property: "og:description", content: t.meta.ogDescription },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "alternate", href: "/", hrefLang: "en" },
      { rel: "alternate", href: "/fa", hrefLang: "fa" },
      { rel: "alternate", href: "/", hrefLang: "x-default" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="dark relative min-h-dvh bg-background text-foreground antialiased">
      <Intro locale={locale} />
    </div>
  );
}
