# 创建 vue 工程
`vue create vue-storybook`

# 初始化 storybook 
`npx sb init`

# 安装 `tailwindcss` 
`npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7`

# 配置 postcss.config.js
```javascript
export default {
  plugins: [
    require("tailwindcss")
  ]
}
```

# 自动配置 tailwindcss
`npx tailwindcss init`

# 在 `src/main.js` 引入 tailwindcss 文件
```javascript
import "tailwindcss/tailwind.css";
```

# 在 `.storybok/preview.js`  引入 tailwindcss 文件
```javascript
import "tailwindcss/tailwind.css";
```

> vue/cli 工程不用引入 postcss-loader