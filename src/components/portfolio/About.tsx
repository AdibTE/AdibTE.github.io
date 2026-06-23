import { SectionWrapper } from "./SectionWrapper";

const stats: ReadonlyArray<{ value: string; label: string }> = [
  { value: "5+", label: "Years building for the web" },
  { value: "20+", label: "Production projects shipped" },
  { value: "Full-stack", label: "Capable, front-end focused" },
];

export function About() {
  return (
    <SectionWrapper id="about" eyebrow="01 / About">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="text-balance text-2xl font-light leading-snug text-foreground md:text-3xl">
            I care about the part of software people actually touch — but I'm comfortable
            anywhere in the stack.
          </p>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              My day-to-day is React, TypeScript and Next.js — composable UIs, strict
              types, animations that feel right rather than just look busy. I obsess over
              performance budgets, keyboard support and the little details users feel
              before they can name them.
            </p>
            <p>
              On the backend I design REST APIs with Node and Express, model data in
              MongoDB and MySQL, validate boundaries with Zod, and ship with GitHub Actions
              and PM2. It means I can take an idea from sketch to production without
              hand-offs getting in the way.
            </p>
          </div>
        </div>

        <ul className="md:col-span-2 md:border-l md:border-border md:pl-10">
          {stats.map((s) => (
            <li
              key={s.label}
              className="border-b border-border py-5 first:pt-0 last:border-b-0"
            >
              <div className="font-mono text-3xl text-primary md:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
