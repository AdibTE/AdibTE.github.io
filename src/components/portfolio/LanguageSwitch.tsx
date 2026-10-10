import { Link } from "@tanstack/react-router";
import type { Locale } from "@/i18n";
import { getDictionary } from "@/i18n";

type LanguageSwitchProps = {
  locale: Locale;
};

export function LanguageSwitch({ locale }: LanguageSwitchProps) {
  const t = getDictionary(locale);

  return (
    <nav
      dir="ltr"
      className="fixed end-4 top-4 z-20 flex items-center gap-1 font-mono text-xs text-muted-foreground sm:end-6 sm:top-6"
      aria-label={t.langSwitchAria}
    >
      <Link
        to="/"
        className={
          locale === "en"
            ? "text-primary"
            : "transition-colors hover:text-primary"
        }
        aria-current={locale === "en" ? "page" : undefined}
      >
        {t.langEn}
      </Link>
      <span aria-hidden className="text-muted-foreground/50">
        /
      </span>
      <Link
        to="/fa"
        className={
          locale === "fa"
            ? "text-primary"
            : "transition-colors hover:text-primary"
        }
        aria-current={locale === "fa" ? "page" : undefined}
      >
        {t.langFa}
      </Link>
    </nav>
  );
}
