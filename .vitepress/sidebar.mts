import { DefaultTheme } from "vitepress";

const sidebar: DefaultTheme.Sidebar = {
  // 前端开发侧边栏
  "/frontend/": [],

  // 后端开发侧边栏
  "/backend/": [],

  // 游戏开发侧边栏
  "/game_dev/shader": [
    {
      text: "Shader",
      items: [
        {
          text: "常用数学函数",
          link: "game_dev/shader/常用数学函数"
        }
      ]
    }
  ]
};

export default sidebar;
