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
        text: 'VitePress',
        items: [
          { text: 'VitePress', link: '/VitePress/' },
        ]
      },
      {
        text: 'Navigation',
        items: [
          {
            //也能省略
            text: 'Navigation Items (Omitable)',
            items: [
              { text: 'OSActivation', link: '/OSActivation/' },
              { text: 'Jackson', link: '/Jackson/' },
              { text: 'Maven', link: '/Maven/' },
              { text: 'VuePress', link: '/VuePress/' },
            ]
          }
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
