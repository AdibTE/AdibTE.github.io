import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface NavLink {
  href: string;
  label: string;
}

const links: ReadonlyArray<NavLink> = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full border border-border/80 px-5 py-2.5 backdrop-blur-xl transition-colors ${
          scrolled ? "bg-background/70" : "bg-background/30"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-medium">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-primary/15 text-primary">
            A
          </span>
          <span className="hidden sm:inline">adib.dev</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          Let's talk
          <span aria-hidden>→</span>
        </a>
      </nav>
    </motion.header>
  );
}
