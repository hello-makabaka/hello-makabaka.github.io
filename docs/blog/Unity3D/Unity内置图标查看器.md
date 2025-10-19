---
title: Unity内置图标查看器
---

# Unity内置图标查看器

## 效果截图

![7ogA2C.png](https://i.imgs.ovh/2025/10/20/7ogA2C.png)

## C#代码UnityIconsWindow.cs

```csharp
using UnityEditor;
using UnityEngine;
using UnityEngine.UIElements;

namespace UnityToolkit.Editor
{
    public class UnityIconsWindow : EditorWindow
    {
        [MenuItem(("UnityToolkit/Unity内置图标"))]
        private static void ShowWindow()
        {
            var window = GetWindow<UnityIconsWindow>();
            window.minSize = window.maxSize = new Vector2(1280, 720);
            window.titleContent = new GUIContent("Unity内置图标", EditorGUIUtility.IconContent("d_UnityLogo").image);
        }

        public void CreateGUI()
        {
            var styleSheet = AssetDatabase.LoadAssetAtPath<StyleSheet>("Assets/UnityToolkit/Editor/UnityIconsWindow/UnityIconsWindow.uss");
            rootVisualElement.styleSheets.Add(styleSheet);

            var texture2Ds = Resources.FindObjectsOfTypeAll<Texture2D>();

            var container = new VisualElement();
            container.AddToClassList("container");

            for (int i = 0; i < texture2Ds.Length; i++)
            {
                var iconName = texture2Ds[i].name;
                var texture = EditorGUIUtility.IconContent(iconName).image;
                if (texture is Texture2D texture2D)
                {
                    var image = new VisualElement();
                    image.style.backgroundImage = new StyleBackground(texture2D);
                    image.AddToClassList("container-item");
                    container.Add(image);

                    image.RegisterCallback<ClickEvent>(evt =>
                    {
                        var copyStr = $"EditorGUIUtility.IconContent({iconName}).image";
                        GUIUtility.systemCopyBuffer = copyStr;
                        Debug.Log($"已复制到剪切板:{iconName}");
                    });
                }
            }

            var scrollView = new ScrollView();
            scrollView.Add(container);

            rootVisualElement.Add(scrollView);
        }
    }
}
```

## USS样式UnityIconsWindow.uss

```css
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.container > .container-item {
    width: 50px;
    height: 50px;
    margin: 5px;
    border-width: 1px;
    border-color: rgb(32, 32, 32);
    border-radius: 5px;
    -unity-background-scale-mode: scale-to-fit;
    cursor: link;
}
```
