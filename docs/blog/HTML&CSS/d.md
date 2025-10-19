# 网页支持PWA应用创建

## 网页支持PWA应用创建

根路径创建manifest.json并写入一下内容,更多内容参考[manifest.json](https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps/Manifest)

```javascript
{
  "id": "应用id",
  "name": "应用名",
  "short_name": "应用简称",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#fff",
  "description": "应用简介.",
  "form_factor": "desktop",
  "width": 1280,
  "height": 512,
  "icons": [
    {
      "src": "/public/logo.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ],
  "related_applications": []
}
```

在index.html中引入manifest.json

```html
<head>
  <link rel="manifest" href="/manifest.json" />
</head>
```

## 创建ServerWork

根目录创建service-worker.js文件,并写入以下内容

```javascript
self.addEventListener("install", event => {
  console.log("Service Worker installing.", event);
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  console.log("Service Worker activating.", event);
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  // You can add custom fetch handling logic here if needed
  console.log("[Service Worker] Fetching:", event.request.url);
});
```

在index.html中引入

```html
<head>
  <script>
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/service-worker.js")
        .then(function (registration) {
          console.log("Service Worker registered with scope:", registration.scope);
        })
        .catch(function (error) {
          console.log("Service Worker registration failed:", error);
        });
    }
  </script>
</head>
```
