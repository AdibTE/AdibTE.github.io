import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slides: ReadonlyArray<{ label: string; value: string }> = [
  { label: "role", value: "Front-end Engineer" },
  { label: "role", value: "Full-stack Developer" },
  { label: "role", value: "Freelance Engineer" },
  { label: "knows", value: "React · TypeScript · Next.js" },
  { label: "knows", value: "Node · Express · MongoDB · MySQL" },
  { label: "knows", value: "Zod · Docker · GitHub Actions · PM2" },
  { label: "built", value: "Khorshid — commerce + AI catalog" },
  { label: "built", value: "Chain Store — storefront · panel · admin" },
  { label: "built", value: "20+ production apps · 5+ years" },
];

const links = [
  { href: "mailto:adibte@hotmail.com", label: "email" },
  { href: "tel:+989353565148", label: "phone" },
  { href: "https://github.com/AdibTE", label: "github" },
  { href: "https://linkedin.com/in/adib-te-58090b19b/", label: "linkedin" },
  { href: "/adib_resume.html", label: "cv" },
] as const;

const INTERVAL_MS = 2800;

export function Intro() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden px-6 py-16">
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

      <div className="mx-auto w-full max-w-2xl font-mono">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-muted-foreground"
        >
          <span className="text-primary">~/</span>adib
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-6 text-6xl font-semibold tracking-tight text-foreground sm:text-7xl md:text-8xl"
        >
          Adib M. Rohani
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base"
        >
          Front-end engineer. Full-stack when it matters. I ship fast, typed
          React apps — from UI to API.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 flex min-h-[1.75rem] items-baseline gap-3 text-sm sm:text-base"
          aria-live="polite"
        >
          <span className="shrink-0 text-primary">$</span>
          <span className="w-14 shrink-0 text-muted-foreground">{slide.label}</span>
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
                <span className="ml-0.5 inline-block h-[1.05em] w-[0.55ch] translate-y-[0.12em] animate-pulse bg-primary align-baseline" />
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground"
          aria-label="Links"
        >
          {links.map((link) => (
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
