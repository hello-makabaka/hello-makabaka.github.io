import { DefaultTheme } from "vitepress";

// 导航栏
const nav: DefaultTheme.NavItem[] = [
  { text: "首页", link: "/" },

  {
    text: "📑博客分类",
    items: [
      {
        text: "游戏开发",
        items: [
          { text: "Unity3D", link: "/blog/Unity3D/" },
          { text: "Shader", link: "/blog/Shader/" }
        ]
      },
      {
        text: "前端开发",
        items: [
          { text: "HTML&CSS", link: "/blog/HTML&CSS/" },
          { text: "Vue.js", link: "/blog/Vue.js/" }
        ]
      }
    ]
  }
  // { text: "😁关于", link: "/about_me" },
  // { text: "💾归档", link: "/archives" },
  // { text: "🤝友链", link: "/friends" },
  // { text: "项目", link: "/projects" },
  // { text: "💰捐赠", link: "/projects" },
  // { text: "RSS", link: "/rss.xml" }
];

export default nav;
