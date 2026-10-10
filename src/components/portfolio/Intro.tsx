import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Locale } from "@/i18n";
import { getDictionary } from "@/i18n";
import { LanguageSwitch } from "./LanguageSwitch";

const INTERVAL_MS = 2800;

type IntroProps = {
  locale: Locale;
};

export function Intro({ locale }: IntroProps) {
  const t = getDictionary(locale);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % t.slides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [t.slides.length]);

  useEffect(() => {
    setIndex(0);
  }, [locale]);

  const slide = t.slides[index] ?? t.slides[0];
  const isFa = locale === "fa";

  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden px-6 py-16">
      <LanguageSwitch locale={locale} />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.78 0.14 145 / 4%) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.78 0.14 145 / 4%) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 45%, black 20%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,oklch(0.78_0.14_145_/_0.07),transparent_55%)]"
      />

      <div
        className={`mx-auto w-full max-w-2xl ${isFa ? "font-fa" : "font-mono"}`}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-muted-foreground"
        >
          {t.brandPath.startsWith("~/") ? (
            <>
              <span className="text-primary">~/</span>
              {t.brandPath.slice(2)}
            </>
          ) : (
            t.brandPath
          )}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-6 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {t.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base"
        >
          {t.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 flex min-h-[1.75rem] items-baseline gap-3 text-sm sm:text-base"
          aria-live="polite"
        >
          <span className="shrink-0 text-primary">$</span>
          <span
            className={`shrink-0 text-muted-foreground ${isFa ? "w-16" : "w-14"}`}
          >
            {slide.label}
          </span>
          <div className="relative min-w-0 flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={`${slide.label}-${slide.value}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
                className="block truncate text-foreground"
              >
                {slide.value}
                <span className="ms-0.5 inline-block h-[1.05em] w-[0.55ch] translate-y-[0.12em] animate-pulse bg-primary align-baseline" />
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground"
          aria-label={t.linksAria}
        >
          {t.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="transition-colors hover:text-primary"
            >
              ./{link.label}
            </a>
          ))}
        </motion.nav>
      </div>
    </section>
  );
}
