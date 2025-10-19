import { defineConfig } from "vitepress";

import nav from "./nav.mts";
import sidebar from "./sidebar.mts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hello Makabaka",
  description: "个人博客",
  cleanUrls: true,
  srcDir: "./docs/",
  themeConfig: {
    logo: "/logo.png",
    nav,
    sidebar,
    search: {
      provider: "local"
    },
    socialLinks: [{ icon: "github", link: "https://github.com/hello-makabaka" }]
  }
});
