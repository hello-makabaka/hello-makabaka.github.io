import { DefaultTheme } from "vitepress";

// 导航栏
const nav: DefaultTheme.NavItem[] = [
  { text: "首页", link: "/" },
  {
    text: "前端开发",
    items: [{ text: "创建PWA应用", link: "frontend/创建PWA应用" }]
  },

  {
    text: "后端开发",
    items: []
  },

  {
    text: "游戏开发",
    items: [
      { text: "Unity", items: [] },
      { text: "Cocos", items: [] },
      { text: "Shader", rel: "noopener", link: "game_dev/shader" }
    ]
  }
];

export default nav;
