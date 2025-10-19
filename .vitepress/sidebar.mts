import { DefaultTheme } from "vitepress";

const sidebar: DefaultTheme.Sidebar = {
  "/blog/html": [
    {
      text: "HTML/CSS",
      items: [{ text: "创建PWA应用", link: "blog/html/创建PWA应用" }]
    }
  ],

  // 游戏开发侧边栏
  "/blog/shader": [
    {
      text: "Shader",
      items: [
        {
          text: "常用数学函数",
          link: "blog/shader/常用数学函数"
        }
      ]
    }
  ]
};

export default sidebar;
