import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import khorshid from "@/assets/project-khorshid.jpg";
import chainstore from "@/assets/project-chainstore.jpg";

interface CaseStudy {
  index: string;
  name: string;
  tagline: string;
  image: string;
  tags: ReadonlyArray<string>;
  problem: string;
  solution: string;
  challenges: ReadonlyArray<string>;
  outcome: string;
}

const projects: ReadonlyArray<CaseStudy> = [
  {
    index: "01",
    name: "Khorshid",
    tagline: "Full-stack commerce platform with AI-assisted product onboarding.",
    image: khorshid,
    tags: ["Node.js", "Express", "MongoDB", "MySQL", "LLM"],
    problem:
      "Operators were drowning in manual order entry, ad-hoc invoicing in spreadsheets, and a product catalog scraped from dozens of suppliers with inconsistent categories.",
    solution:
      "An Express + MongoDB platform unifying orders, transactional invoicing on MySQL, and an LLM-powered autofill that maps messy scraped categories to the internal taxonomy.",
    challenges: [
      "Designing a transactional invoicing flow across two databases without losing ACID guarantees on the financial path.",
      "Keeping the LLM mapping cost predictable while still recovering from low-confidence predictions safely.",
      "Building a Zod-validated boundary so dirty scraped data never reached the order pipeline.",
    ],
    outcome:
      "Cut catalog onboarding time from hours to minutes and replaced spreadsheet invoicing with a single, auditable workflow.",
  },
  {
    index: "02",
    name: "Chain Store",
    tagline: "Three-surface retail platform — storefront, customer panel, admin.",
    image: chainstore,
    tags: ["Vite", "React", "TypeScript", "Tailwind"],
    problem:
      "A growing retail brand needed one cohesive product across a public storefront, a logged-in customer area, and an internal admin — without three codebases drifting apart.",
    solution:
      "A single Vite + React + TypeScript monorepo with a shared design system and role-aware routing, deployed as three focused apps from one source of truth.",
    challenges: [
      "Sharing primitives across surfaces without leaking admin-only types into the public bundle.",
      "Designing an admin that stays usable as the catalog and order volume grow.",
      "Keeping bundle size honest across three apps that each have different performance budgets.",
    ],
    outcome:
      "Shipped a consistent brand experience across all three surfaces with shared components, typed APIs, and a unified release flow.",
  },
];

export function Projects() {
  return (
    <SectionWrapper
      id="projects"
      eyebrow="03 / Selected work"
      title="A couple of case studies."
      description="Two recent projects that show how I approach product problems — not just the pretty bits."
    >
      <div className="space-y-28">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} reverse={i % 2 === 1} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function ProjectCard({ project, reverse }: { project: CaseStudy; reverse: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="grid items-start gap-10 md:grid-cols-12"
    >
      <div
        className={`md:col-span-7 ${reverse ? "md:order-2" : ""}`}
      >
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.4 }}
          className="group relative overflow-hidden rounded-2xl border border-border bg-card/40"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <img
            src={project.image}
            alt={`${project.name} interface mockup`}
            width={1280}
            height={896}
            loading="lazy"
            className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/80 to-transparent" />
        </motion.div>
      </div>

      <div className={`md:col-span-5 ${reverse ? "md:order-1" : ""}`}>
        <div className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
          <span>{project.index}</span>
          <span className="h-px w-6 bg-primary/60" />
          <span className="text-muted-foreground">Case study</span>
        </div>
        <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {project.name}
        </h3>
        <p className="mt-3 text-balance text-base text-muted-foreground md:text-lg">
          {project.tagline}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-border bg-muted/40 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>

        <dl className="mt-8 space-y-5 text-sm">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary/80">
              Problem
            </dt>
            <dd className="mt-1.5 text-muted-foreground">{project.problem}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary/80">
              Solution
            </dt>
            <dd className="mt-1.5 text-muted-foreground">{project.solution}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary/80">
              Technical challenges
            </dt>
            <dd className="mt-1.5">
              <ul className="space-y-1.5 text-muted-foreground">
                {project.challenges.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary/80">
              Outcome
            </dt>
            <dd className="mt-1.5 text-muted-foreground">{project.outcome}</dd>
          </div>
        </dl>
      </div>
    </motion.article>
  );
}
