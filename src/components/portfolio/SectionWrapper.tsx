import { useRef, type ReactNode } from "react";
import { motion, useInView, type Variants } from "framer-motion";

interface SectionWrapperProps {
  id: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function SectionWrapper({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className={`relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-24 md:py-32 ${className}`}
    >
      {(eyebrow || title || description) && (
        <header className="mb-14 max-w-3xl">
          {eyebrow && (
            <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary/60" />
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>
          )}
        </header>
      )}
      {children}
    </motion.section>
  );
}
