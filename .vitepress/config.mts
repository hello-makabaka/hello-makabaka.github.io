import { defineConfig } from "vitepress";

import nav from "./nav.mts";
import sidebar from "./sidebar.mts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hello Makabaka",
  titleTemplate: "个人博客",
  description: "个人博客",
  lang: "zh-CN",
  cleanUrls: true,
  srcDir: "./docs/",
  markdown: {
    lineNumbers: true
  },
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.png",
    nav,
    sidebar,
    search: {
      provider: "local"
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/hello-makabaka", ariaLabel: "GitHub" },
      { icon: "bilibili", link: "https://space.bilibili.com/377619410", ariaLabel: "Bilibili" }
    ]
  }
});
