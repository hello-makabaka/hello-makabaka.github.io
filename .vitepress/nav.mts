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
          { text: "Unity3D", link: "blog/unity" },
          // { text: "Unreal Engine", link: "blog/unreal" },
          // { text: "Cocos Creator", link: "blog/cocos" },
          { text: "Shader", link: "blog/shader/" }
        ]
      },
      {
        text: "前端开发",
        items: [
          { text: "HTML/CSS", link: "blog/html/" },
          // { text: "JavaScript", link: "/blog/js" },
          { text: "Vue.js", link: "blog/vue/" }
        ]
      },
      {
        text: "后端开发",
        items: [
          // { text: "Database", link: "blog/database" },
          // { text: "Node.js", link: "blog/nodejs" },
          // { text: "NestJS", link: "blog/nestjs" },
          { text: "Prisma", link: "blog/prisma" }
        ]
      }
    ]
  }
  // { text: "😁关于", link: "about_me" },
  // { text: "💾归档", link: "archives" },
  // { text: "🤝友链", link: "friends" },
  // { text: "项目", link: "projects" },
  // { text: "💰捐赠", link: "projects" },
  // { text: "RSS", link: "rss.xml" }
];

export default nav;
