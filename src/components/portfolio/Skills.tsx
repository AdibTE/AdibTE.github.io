import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";

interface SkillGroup {
  category: string;
  items: ReadonlyArray<string>;
}

const groups: ReadonlyArray<SkillGroup> = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Vite", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "Mongoose", "MySQL", "REST APIs"],
  },
  {
    category: "Tools",
    items: ["Zod", "Git", "GitHub Actions", "PM2", "Docker", "Vitest"],
  },
];

export function Skills() {
  return (
    <SectionWrapper
      id="skills"
      eyebrow="02 / Stack"
      title="Tools I reach for"
      description="A focused toolkit chosen for shipping reliable, maintainable products — not for the resume."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {groups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: gi * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition-colors hover:border-primary/40"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="mb-6 flex items-baseline justify-between">
              <h3 className="text-lg font-medium">{group.category}</h3>
              <span className="font-mono text-xs text-muted-foreground">
                0{gi + 1}
              </span>
            </div>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors group-hover:text-foreground"
                >
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
