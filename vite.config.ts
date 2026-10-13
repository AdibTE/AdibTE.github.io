import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// GitHub project pages: https://adibte.github.io/adibmr.github.io/
const REPO_BASE = "/adibmr.github.io/";

const isGitHubPages =
  (process.argv.includes("--mode") &&
    process.argv[process.argv.indexOf("--mode") + 1] === "pages") ||
  Boolean(process.env.BASE_PATH) ||
  process.env.GITHUB_PAGES === "true";

const base = process.env.BASE_PATH || (isGitHubPages ? REPO_BASE : "/");

export default defineConfig({
  base,
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      spa: {
        enabled: true,
        prerender: {
          outputPath: "/404.html",
          crawlLinks: true,
        },
      },
      prerender: {
        enabled: true,
        crawlLinks: true,
      },
    }),
    viteReact(),
  ],
});
