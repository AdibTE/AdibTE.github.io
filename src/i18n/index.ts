export type Locale = "en" | "fa";

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALES = ["en", "fa"] as const;

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function localeFromPathname(pathname: string): Locale {
  // Match /fa even when a base path is present (e.g. /adibmr.github.io/fa).
  if (pathname === "/fa" || pathname.endsWith("/fa") || pathname.includes("/fa/")) {
    return "fa";
  }
  return "en";
}

export function localePath(locale: Locale, path = "/"): string {
  if (locale === "en") return path === "/" ? "/" : path;
  if (path === "/") return "/fa";
  return `/fa${path.startsWith("/") ? path : `/${path}`}`;
}

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    ogDescription: string;
  };
  brandPath: string;
  name: string;
  tagline: string;
  linksAria: string;
  langSwitchAria: string;
  langEn: string;
  langFa: string;
  slides: ReadonlyArray<{ label: string; value: string }>;
  links: ReadonlyArray<{ href: string; label: string }>;
  notFound: {
    title: string;
    body: string;
    home: string;
  };
  error: {
    title: string;
    body: string;
    retry: string;
    home: string;
  };
};

const resumeHref = `${import.meta.env.BASE_URL}adib_resume.html`;

const sharedLinks = [
  { href: "mailto:adibte@hotmail.com", label: "email" },
  { href: "tel:+989353565148", label: "phone" },
  { href: "https://github.com/AdibTE", label: "github" },
  { href: "https://linkedin.com/in/adib-te-58090b19b/", label: "linkedin" },
  { href: resumeHref, label: "cv" },
] as const;

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    meta: {
      title: "Adib M. Rohani — Front-end Engineer",
      description:
        "Adib M. Rohani — front-end engineer. React, TypeScript, Next.js. Full-stack when it matters.",
      ogDescription:
        "Front-end engineer. Full-stack when it matters. React, TypeScript, Node.",
    },
    brandPath: "~/adib",
    name: "Adib M. Rohani",
    tagline:
      "Front-end engineer. Full-stack when it matters. I ship fast, typed React apps — from UI to API.",
    linksAria: "Links",
    langSwitchAria: "Language",
    langEn: "EN",
    langFa: "FA",
    slides: [
      { label: "role", value: "Front-end Engineer" },
      { label: "role", value: "Full-stack Developer" },
      { label: "role", value: "Freelance Engineer" },
      { label: "knows", value: "React · TypeScript · Next.js" },
      { label: "knows", value: "Node · Express · MongoDB · MySQL" },
      { label: "knows", value: "Zod · Docker · GitHub Actions · PM2" },
      { label: "built", value: "Khorshid — commerce + AI catalog" },
      { label: "built", value: "Chain Store — storefront · panel · admin" },
      { label: "built", value: "20+ production apps · 5+ years" },
    ],
    links: [...sharedLinks],
    notFound: {
      title: "Page not found",
      body: "The page you're looking for doesn't exist or has been moved.",
      home: "Go home",
    },
    error: {
      title: "This page didn't load",
      body: "Something went wrong on our end. You can try refreshing or head back home.",
      retry: "Try again",
      home: "Go home",
    },
  },
  fa: {
    meta: {
      title: "ادیب م. روحانی — مهندس فرانت‌اند",
      description:
        "ادیب م. روحانی — مهندس فرانت‌اند. React، TypeScript، Next.js. فول‌استک وقتی لازم باشد.",
      ogDescription:
        "مهندس فرانت‌اند. فول‌استک وقتی لازم باشد. React، TypeScript، Node.",
    },
    brandPath: "~/adib",
    name: "ادیب م. روحانی",
    tagline:
      "مهندس فرانت‌اند. فول‌استک وقتی لازم باشد. اپ‌های React تایپ‌شده را سریع — از UI تا API — می‌سازم.",
    linksAria: "لینک‌ها",
    langSwitchAria: "زبان",
    langEn: "EN",
    langFa: "FA",
    slides: [
      { label: "نقش", value: "مهندس فرانت‌اند" },
      { label: "نقش", value: "توسعه‌دهنده فول‌استک" },
      { label: "نقش", value: "مهندس فریلنس" },
      { label: "مهارت", value: "React · TypeScript · Next.js" },
      { label: "مهارت", value: "Node · Express · MongoDB · MySQL" },
      { label: "مهارت", value: "Zod · Docker · GitHub Actions · PM2" },
      { label: "ساخت", value: "خورشید — فروشگاه + کاتالوگ هوش مصنوعی" },
      { label: "ساخت", value: "چین‌استور — فروشگاه · پنل · ادمین" },
      { label: "ساخت", value: "بیش از ۲۰ اپ پروداکشن · ۵+ سال" },
    ],
    links: [
      { href: "mailto:adibte@hotmail.com", label: "ایمیل" },
      { href: "tel:+989353565148", label: "تلفن" },
      { href: "https://github.com/AdibTE", label: "گیت‌هاب" },
      { href: "https://linkedin.com/in/adib-te-58090b19b/", label: "لینکدین" },
      { href: resumeHref, label: "رزومه" },
    ],
    notFound: {
      title: "صفحه پیدا نشد",
      body: "صفحه‌ای که دنبالش هستید وجود ندارد یا جابه‌جا شده است.",
      home: "بازگشت به خانه",
    },
    error: {
      title: "این صفحه بارگذاری نشد",
      body: "مشکلی پیش آمد. می‌توانید دوباره تلاش کنید یا به خانه برگردید.",
      retry: "تلاش دوباره",
      home: "بازگشت به خانه",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
