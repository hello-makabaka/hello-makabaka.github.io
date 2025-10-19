/** @format */
import fs from "fs";
import path from "path";
import { DefaultTheme } from "vitepress";

function getMarkdownTitle(filePath: string): string {
  const content = fs.readFileSync(filePath, "utf-8");
  const match = content.match(/title:\s*(.*)/);
  return match ? match[1] : path.basename(filePath, ".md");
}

function genSidebarItems(dir: string, sidebar: DefaultTheme.SidebarItem[] = []) {
  if (!fs.existsSync(dir)) {
    console.error(`Directory not found: ${dir}`);
    return sidebar;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  entries.forEach(entry => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const childItems: DefaultTheme.SidebarItem[] = [];
      genSidebarItems(fullPath, childItems);
      if (childItems.length > 0) {
        sidebar.push({
          text: entry.name,
          collapsed: true,
          items: childItems
        });
      }
    } else if (entry.isFile() && entry.name.endsWith(".md") && entry.name !== "index.md") {
      const title = getMarkdownTitle(fullPath);
      const link = path
        .relative("./docs", fullPath)
        .replace(/\\/g, "/")
        .replace(/\.md$/, "")
        .replace(/\/README$/, "/");
      sidebar.push({
        text: title,
        link: `/${link}`
      });
    }
  });

  return sidebar;
}

function sortSidebarItems(items) {
  items.sort((a, b) => a.text.localeCompare(b.text));
  return items;
}

function genSidebar(dir: string): DefaultTheme.SidebarItem[] {
  return [
    {
      text: dir.split("/").pop() || "",
      items: sortSidebarItems(genSidebarItems(dir))
    }
  ];
}

const sidebar: DefaultTheme.Sidebar = {
  "/blog/Unity3D/": genSidebar("./docs/blog/Unity3D"),
  "/blog/Vue.js/": genSidebar("./docs/blog/Vue.js"),
  "/blog/Shader/": genSidebar("./docs/blog/Shader"),
  "/blog/HTML&CSS/": genSidebar("./docs/blog/HTML&CSS"),
};

export default sidebar;
