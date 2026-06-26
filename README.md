# 素盒物联

[![License: MIT](https://img.shields.io/badge/License-MIT-81C0C0.svg)](LICENSE)
[![Vue 2](https://img.shields.io/badge/Vue-2.7-81C0C0.svg)](https://v2.vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.x-81C0C0.svg)](https://vitejs.dev/)

一个开源的数字标牌企业展示网站模板，基于 **Vue 2 + Vue Router + Vite** 构建。适用于产品官网、方案展示、案例介绍等场景的快速搭建与二次开发。

> **免责声明**：本项目为开源演示模板。网站中的公司名称、联系方式、案例数据、产品信息均为虚构，仅供学习与展示用途，不代表任何真实企业或商业承诺。

## 在线预览

部署至 GitHub Pages / Vercel / Netlify 后即可访问。本地预览：

```bash
npm install
npm run dev
```

浏览器打开 [http://localhost:5173](http://localhost:5173)

## 功能页面

| 页面 | 路径 | 说明 |
|------|------|------|
| 首页 | `/` | 首屏横幅、解决方案、产品、数据、案例 |
| 产品中心 | `/products` | 分类筛选、关键词搜索 |
| 解决方案 | `/solutions` | 功能特性、行业应用 |
| 成功案例 | `/cases` | 行业案例详情 |
| 新闻动态 | `/news` | 分类筛选、分页 |
| 下载中心 | `/downloads` | 文档与驱动列表 |
| 联系我们 | `/contact` | 联系信息与留言表单 |

## 技术栈

- [Vue 2.7](https://v2.vuejs.org/) — 渐进式前端框架
- [Vue Router 3](https://v3.router.vuejs.org/) — 单页路由
- [Vite 4](https://vitejs.dev/) — 构建工具
- 预编译 Tailwind CSS + 自定义主题样式

## 快速开始

### 环境要求

- Node.js >= 16
- npm >= 8

### 安装与运行

```bash
# 克隆仓库
git clone git@github.com:bring-knife-to-work/suhe_iot.git
cd suhe_iot

# 安装依赖
npm install

# 开发模式
npm run dev

# 生产构建
npm run build

# 预览构建结果
npm run preview
```

## 项目结构

```
suhe_iot/
├── public/              # 静态资源
├── src/
│   ├── components/      # 公共组件（Header、Footer、FilterBar 等）
│   ├── views/           # 页面视图
│   ├── data/
│   │   └── site.js      # ★ 站点文案、产品、案例等数据（主要修改入口）
│   ├── styles/
│   │   ├── tailwind.css # Tailwind 工具类
│   │   └── theme.css    # ★ 主题色与语义化类名
│   ├── router/          # 路由配置
│   ├── App.vue
│   └── main.js
├── index.html
├── vite.config.js
├── LICENSE
└── README.md
```

## 自定义配置

### 修改品牌与联系信息

编辑 `src/data/site.js`：

```js
export const companyContact = {
  address: '广东省深圳市福田区深南大道 7888 号东海国际中心 A 座 12 层',
  zip: '518040',
  phone: '400-668-8188',
  phoneLocal: '0755-6688-8188',
  email: 'info@suhewl.com',
  emailSupport: 'support@suhewl.com',
  hours: '周一至周五 9:00-18:00',
};
```

### 修改主题色

编辑 `src/styles/theme.css` 中的 CSS 变量：

```css
:root {
  --color-primary: #81C0C0;       /* 主色 */
  --color-primary-dark: #6AADAD;  /* 悬停色 */
  --color-dark: #2D5A5A;          /* 深色背景 */
}
```

### 替换图片

在 `src/data/site.js` 顶部的 `img` 对象中替换图片 URL，或直接修改各数据项的 `image` 字段。当前使用 [Unsplash](https://unsplash.com/) 免费图库。

### 修改页面标题

路由标题在 `src/router/index.js` 的 `meta.title` 中配置；默认标题在 `index.html`。

## 部署

站点地址：https://bring-knife-to-work.github.io/suhe_iot/

### GitHub Pages（推荐）

1. 仓库 **Settings → Pages → Build and deployment**
2. **Source** 选择 **GitHub Actions**（不要选 Deploy from branch）
3. 推送代码到 `main` 分支后，Actions 会自动构建并部署

项目已配置：
- `vite.config.js` 中 `base: '/suhe_iot/'`
- `.github/workflows/deploy.yml` 自动构建 `dist` 并发布

### 本地预览生产构建

```bash
npm run build
npm run preview
```

## 参与贡献

欢迎提交 Issue 与 Pull Request：

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/your-feature`
3. 提交更改：`git commit -m 'feat: 添加某某功能'`
4. 推送分支：`git push origin feature/your-feature`
5. 发起 Pull Request

## 许可证

本项目基于 [MIT License](LICENSE) 开源，可自由使用、修改与分发。

---

如果这个项目对你有帮助，欢迎点个 **Star** ⭐
