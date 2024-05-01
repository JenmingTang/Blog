import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    lineNumbers: true,
    image: {
      // image lazy loading is disabled by default
      lazyLoading: true
    }
  },
  locales: {
    root: {
      label: 'English',
      // lang: 'en'
    },
    cn: {
      label: '简体中文',
      // lang: 'cn', // optional, will be added  as `lang` attribute on `html` tag
      link: '/cn/' // default /fr/ -- shows on navbar translations menu, can be external
      // other locale specific properties...
    },
  },
  base: '/Blog/',
  // 默认是在根下/，注意public会受此自定义资源目录影响
  // 启用后，图片在根目录下引用就没提示了
  srcDir: 'src',

  // Jenming End
  // Jenming End
  // Jenming End
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // logo: '/my-logo.svg',
    // siteTitle: 'false',
    // siteTitle: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Cloud Service',
        items: [
          {
            text: 'Tencent',
            items: [
              { text: 'Tencent', link: '/Cloud Service/Tencent/' },
            ]
          },
          {
            text: 'Alibaba',
            items: [
              { text: 'Alibaba', link: '/Cloud Service/Alibaba/' },
            ]
          },
        ]
      },
      {
        text: 'Navigation',
        items: [
          // {
          //   //也能省略
          //   text: 'IDEA',
          //   items: [
          //     { text: 'IDEA', link: '/IDEA/' },
          //   ]
          // },
          {
            //也能省略
            text: 'Docker',
            items: [
              { text: 'Docker', link: '/Docker/' },
            ]
          },
          {
            //也能省略
            text: 'Issue',
            items: [
              { text: 'Issue', link: '/Issue/' },
            ]
          },
          {
            //也能省略
            text: 'Android',
            items: [
              { text: 'Compose', link: '/Android/Compose/' },
              { text: 'Android', link: '/Android/' },
              { text: 'Android Studio', link: '/Android/AS/' },
              { text: 'Coroutines', link: '/Kotlin/Miscellaneous' },
            ]
          },
          {
            //也能省略
            text: 'Navigation Items (Omitable)',
            items: [
              { text: 'Issue', link: '/Issue/' },
              { text: 'OSActivation', link: '/OSActivation/' },
              { text: 'Jackson', link: '/Jackson/' },
              { text: 'Maven', link: '/Maven/' },
              { text: 'VuePress', link: '/VuePress/' },
              { text: 'VitePress', link: '/VitePress/' },
            ]
          },
        ]
      },
      {
        text: 'Kotlin -> Basics',
        items: [
          {
            //也能省略
            text: 'Navigation',
            items: [
              { text: 'Navigation', link: '/Kotlin/' },
            ]
          },
          {
            //也能省略
            text: 'Basics',
            items: [
              { text: 'Basic syntax', link: '/Kotlin/Basics/' },
              { text: 'Idioms', link: '/Kotlin/Basics/Idioms' },
              { text: 'Kotlin by example', link: '/Kotlin/Basics/Kotlin by example/' },
            ]
          },
          {
            //也能省略
            text: 'Miscellaneous',
            items: [
              { text: 'Miscellaneous', link: '/Kotlin/Miscellaneous' },
            ]
          },
        ]
      },
    ],

    sidebar: [
      {
        text: 'Navigation',
        items: [
          { text: 'Maven', link: '/Mavan/' },
          { text: 'Jackson', link: '/Jackson/' },
          { text: 'OSActivation', link: '/OSActivation/' },
          { text: 'VuePress', link: '/VuePress/' },
          { text: 'VitePress', link: '/VitePress/' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JenmingTang/Blog' }
    ]
  }
})
