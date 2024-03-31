[[toc]]
# Markdown Extensions
## GitHub-Style Tables
```
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```
## Emoji 🎉
```
:tada: :100:
```
:tada: :100:
## Custom Containers
```
[info|tip|warning|danger|details]
::: danger
Danger zone, do not proceed
:::

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
#记得把#去掉
#```js
console.log('Hello, VitePress!')
#```
:::
```

::: danger
Danger zone, do not proceed
:::

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::
## Line Highlighting in Code Blocks
```js{1,3-4}
//```js{1,3-4}
console.log('Hello, VitePress!')
console.log('Hello, VitePress!')
console.log('Hello, VitePress!')
```
:::info 行中直接高亮需要注释，无关语言
abc// [!code highlight]
:::
```
abc
abc// [!code highlight]
```
## Focus in Code Blocks
:::info 其他代码行将模糊直到鼠标悬停，无关语言
abc// [!code focus]
:::
```
abc
abc// [!code focus]
```
## Line Numbers
```mts
export default {
  markdown: {
    lineNumbers: true
```
## Import Code Snippets
```js
//高亮第二行
//@可由根配置srcDir改变
<<< ../snippets/snippet.js{2}
<<< @/snippets/snippet.js{2}
//编程语言为C#
<<< @/snippets/snippet.cs{1,2,4-6 c#:line-numbers}
```
## Code Groups
```
::: code-group
#记得去掉#，导入代码片段也得
#```js [aaa]
js1
#```
#```ts [bbb]
ts1
#```
:::
```
::: code-group
```js [aaa]
js1
```
```ts [bbb]
ts1
```
:::

## Markdown File Inclusion
```
## Basics

<!--@include: ./parts/basics.md-->
```
## [Math Equations数学公式](https://vitepress.dev/guide/markdown#math-equations)

## Image Lazy Loading
```mts
export default {
  markdown: {
    image: {
      // image lazy loading is disabled by default
      lazyLoading: true
```