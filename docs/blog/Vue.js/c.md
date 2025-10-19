---
title: Vite设置域名代理
---
# Vite设置域名代理

## 配置

在vue项目的根路径上创建*vite.config.js*文件,添加以下代码

```javascript
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 8090,//vue要监听的端口号
    https: false,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:10010/api",//这里填你的服务器域名或ip地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  }
});

```

## 使用

以下以axios为例,vite会将 `"/api"`替换为 `vite.config.js`文件中配置的代理域名
修改前写法

```javascript
axios.get("http://localhost:8000/api/test");
```

修改后写法

```javascript
axios.get("/test");
```
