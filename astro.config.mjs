// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://alisarac.github.io",
  base: "/wedding",
  trailingSlash: "always",
  redirects: {
    "/": "/tr/",
  },
  i18n: {
    locales: ["tr", "ru"],
    defaultLocale: "tr",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
