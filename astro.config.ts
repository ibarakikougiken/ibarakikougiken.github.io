import { defineConfig, sharpImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://ibarakikougiken.github.io",
  image: {
    service: sharpImageService(),
    remotePatterns: [{ protocol: "https" }, { protocol: "http" }],
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [icon(), mdx(), sitemap()],
  vite: {
    css: {
      transformer: "lightningcss",
    },
  },
});
