import { FileDown } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";

interface TimelineEntry {
  period: string;
  role: string;
  org: string;
  detail: string;
}

const timeline: ReadonlyArray<TimelineEntry> = [
  {
    period: "2023 — Now",
    role: "Front-end Engineer (Freelance)",
    org: "Independent",
    detail:
      "Building production React/Next.js apps for startups — from design systems to typed APIs and deployment.",
  },
  {
    period: "2021 — 2023",
    role: "Full-stack Developer",
    org: "Khorshid",
    detail:
      "Led the rebuild of the commerce platform: Express/Mongo backend, React admin, LLM-assisted catalog tooling.",
  },
  {
    period: "2019 — 2021",
    role: "Junior Web Developer",
    org: "Early projects",
    detail:
      "Cut my teeth on smaller React and Node projects, learning the discipline of shipping under real constraints.",
  },
];

export function Resume() {
  return (
    <SectionWrapper
      id="resume"
      eyebrow="04 / Resume"
      title="A short timeline."
      description="The longer version, with proper formatting, lives in the PDF."
    >
      <div className="grid gap-12 md:grid-cols-5">
        <ol className="md:col-span-3 relative border-l border-border pl-6">
          {timeline.map((entry) => (
            <li key={entry.role} className="mb-10 last:mb-0">
              <span className="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_0_4px_oklch(0.68_0.18_255_/_0.15)]" />
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {entry.period}
              </div>
              <h3 className="mt-1 text-lg font-medium">
                {entry.role}{" "}
                <span className="text-muted-foreground">· {entry.org}</span>
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{entry.detail}</p>
            </li>
          ))}
        </ol>

        <aside className="md:col-span-2">
          <div className="rounded-2xl border border-border bg-card/40 p-6 backdrop-blur">
            <h3 className="text-lg font-medium">Curriculum Vitae</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A single-page PDF with full experience, education and references.
            </p>
            <a
              href="/resume.pdf"
              download
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-[0_0_30px_-5px_oklch(0.68_0.18_255_/_0.6)]"
            >
              <FileDown className="h-4 w-4" />
              Download resume (PDF)
            </a>
          </div>
        </aside>
      </div>
    </SectionWrapper>
  );
}
