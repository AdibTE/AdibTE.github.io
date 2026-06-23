export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-xs text-muted-foreground">
        <span className="font-mono">© {year} Adib. Built with care.</span>
        <a
          href="#top"
          className="font-mono uppercase tracking-[0.2em] hover:text-primary"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
