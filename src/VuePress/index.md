---
# title: Page tab title
---
<!-- 
Anchor directory
 -->
[[toc]]
# 指南
## Deploy
### npx vuepress build --clean-temp

>npx vuepress build --clean-temp

### [GitHub Pages with Github Actions to Auto Deploy](https://v2.vuepress.vuejs.org/zh/guide/deployment.html#github-pages)

```cmd


echo "# blog" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/JenmingTang/blog.git
git push -u origin main
```
```cmd
git remote add origin https://github.com/JenmingTang/blog.git
git branch -M main
git push -u origin main
```

## Getting Started manually install
```cmd
mkdir vuepress-starter
cd vuepress-starter

git init
npm init

Step 3: Install VuePress locally
npm install -D vuepress@next

"scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }


Step 5: Add the default temp and cache directory to .gitignore file
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore


mkdir docs
echo '# Hello VuePress' > docs/README.md



npm run docs:dev
```
## auto install
```md
# install in your project
npm install -D vuepress@next

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
npx vuepress dev

# build to static files
npx vuepress build
```

## 页面
### 路由
```md
└─ docs
   ├─ guide
   │  ├─ getting-started.md
   │  └─ README.md
   ├─ contributing.md
   └─ README.md

README.md 和 index.md 都会被转换成 index.html
想同时保留这两个文件，就可能会造成冲突。

生成的路由
  8080/docs/guide
  8080/docs/guide/getting-started
  8080/docs/contributing
  8080/docs
```
## MD
### 语法扩展
#### 链接
```md
<!-- 相对路径 -->
[首页](../README.md)  
[配置参考](../reference/config.md)  
[快速上手](./getting-started.md)  
<!-- 绝对路径 -->
[指南](/zh/guide/README.md)  
[配置参考 > markdown.links](/zh/reference/config.md#links)  
<!-- URL -->
[GitHub](https://github.com) 
```
#### Emoji
>[emoji-cheat-sheet 查看可用](https://github.com/ikatyang/emoji-cheat-sheet)

```
Usage
VuePress 2 已经发布 :tada: ！
```

#### 目录
```md
<!-- 
当前页面的目录添加到 Markdown 内容
 -->
[[toc]]
```
#### 代码块
```md
行高亮
  行数范围： {5-8}
  多个单行： {4,7,9}
  组合： {4,7-13,16,23-27,40}

不显示行号
  :no-line-numbers 


用法，直接复制
  ```ts{1,6-8}:no-line-numbers
  import { defaultTheme, defineUserConfig } from 'vuepress'

  export default defineUserConfig({
    title: '你好， VuePress',

    theme: defaultTheme({
      logo: 'https://vuejs.org/images/logo.png',
    }),
  })
// <!-- ``` -->
```


#### 导入代码块
```md
<!-- 最简单的语法 -->
@[code](../foo.js)


复杂的例子：
  导入 '../foo.js' 文件的第 3 行至第 10 行
  指定语言为 'js'
  对导入代码的第 3 行进行高亮，即 '../foo.js' 文件的第 5 行
  禁用行号
@[code{3-10} js{3}:no-line-numbers](../foo.js)
```
## 多语言支持
### 站点多语言配置
```md

docs
├─ README.md
├─ foo.md
├─ nested
│  └─ README.md
└─ zh
   ├─ README.md
   ├─ foo.md
   └─ nested
      └─ README.md

```
```md
配置参考： locales

  export default {
    locales: {
      // 键名是该语言所属的子路径
      // 作为特例，默认语言可以使用 '/' 作为其路径。
      '/': {
        lang: 'en-US',
        title: 'VuePress',
        description: 'Vue-powered Static Site Generator',
      },
      '/zh/': {
        lang: 'zh-CN',
        title: 'VuePress',
        description: 'Vue 驱动的静态网站生成器',
      },
    },
  }

如果一个语言没有声明 lang, title, description 或者 head ，VuePress 将会尝试使用顶层配置的对应值。
```