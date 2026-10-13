import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Custom domain https://adibmr.ir → base must be "/".
const base = process.env.BASE_PATH || "/";

export default defineConfig({
  base,
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      // Static HTML for known routes. SPA shell mode skipped — it was
      // suppressing index.html for "/". Unknown paths use 404.html copy in CI.
      prerender: {
        enabled: true,
        crawlLinks: true,
      },
    }),
    viteReact(),
  ],
});
