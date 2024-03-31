[[toc]]
>以下为简介部分（简短一个md文件描述完，写作部分开始细分）  
>写作部分请移步[Writing](./Writing/)
# Introduction
## Routing
### File-Based Routing
```
.
├─ guide
│  ├─ getting-started.md
│  └─ index.md
├─ index.md
└─ prologue.md
```
to
```
index.md                  -->  /index.html (accessible as /)
prologue.md               -->  /prologue.html
guide/index.md            -->  /guide/index.html (accessible as /guide/)
guide/getting-started.md  -->  /guide/getting-started.html
```
### Source Directory
```
.                          # project root
├─ .vitepress              # config dir
└─ src                     # source dir
   ├─ getting-started.md
   └─ index.md
```
to
```
src/index.md            -->  /index.html (accessible as /)
src/getting-started.md  -->  /getting-started.html
```
### Linking Between Pages
[Maven ../Maven/]()

[Maven /Maven/]()

[Baidu](https://www.baidu.com)
```
<!-- Do -->
[Getting Started](./getting-started)
[Getting Started](../guide/getting-started)

<!-- Don't -->
[Getting Started](./getting-started.md)
[Getting Started](./getting-started.html)
```
### Linking to Non-VitePress Pages
未测试成功
[Link to pure.html](){target="_self"}
```
[Link to pure.html](/pure.html){target="_self"}
```
## Deploy
默认端口4173、.vitepress/disk
```
npm run docs:build

npm run docs:preview
```
```json
{
  "scripts": {
    "docs:preview": "vitepress preview docs --port 8080"
  }
}
```
### 设定 public 根目录
例：如果你使用的是 Github（或 GitLab）页面并部署到 user.github.io/repo/，请将 base 设置为 /repo/。
### GitHub Pages
在项目的 .github/workflows 目录中创建一个名为 deploy.yml 的文件，其中包含这样的内容：
```yaml
# 构建 VitePress 站点并将其部署到 GitHub Pages 的示例工作流程
#
name: Deploy VitePress site to Pages

on:
  # 在针对 `main` 分支的推送上运行。如果你
  # 使用 `master` 分支作为默认分支，请将其更改为 `master`
  push:
    branches: [main]

  # 允许你从 Actions 选项卡手动运行此工作流程
  workflow_dispatch:

# 设置 GITHUB_TOKEN 的权限，以允许部署到 GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列
# 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # 构建工作
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        # 如果未启用 lastUpdated，则不需要，默认未启用，文档Ctrl+K搜索lastUpdated
        # with:
        #   fetch-depth: 0
      # - uses: pnpm/action-setup@v3 # 如果使用 pnpm，请取消注释
      # - uses: oven-sh/setup-bun@v1 # 如果使用 Bun，请取消注释
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm # 或 pnpm / yarn
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Install dependencies
        run: npm ci # 或 pnpm install / yarn install / bun install
      - name: Build with VitePress
        run: npm run docs:build # 或 pnpm docs:build / yarn docs:build / bun run docs:build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  # 部署工作
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
