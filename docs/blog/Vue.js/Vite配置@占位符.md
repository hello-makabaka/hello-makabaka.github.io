---
title: Vite配置@占位符
---

# Vite配置@占位符

## 配置vite.config.js

根目录创建`vite.config.js`,并写入以下内容

```javascript
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [vue()],
});
```

## 配置jsconfig.json

根路径上创建`jsconfig.json`文件,并写入以下内容

```json
{
   "compilerOptions": {
       "baseUrl": "./",
       "paths": {
         "@/*": ["src/*"]
       }
   },
   "exclude": [
       "node_modules"
   ]
}

```

> 配置之后记得重新运行项目,只有修改和配置文件有关的,切记都要重新npm run serve
