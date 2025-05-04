// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'New Coder Space',
    description: 'This is blog for new coder with no backgroud knowledge like product manager, designer,and operator.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
  /*  socials: {
      twitter: 'nuxt_js',
      github: 'nuxt-themes/docus',
      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://nuxt.com'
      }
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: true
    },*/
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: false,
      showLinkIcon: false,
      title:'New Coder Space',
      exclude: [],
      fluid: true
    },
    footer: {
      credits: {
        icon: '',
        text: 'Copyright © 2025 newcoder.space',
        href: '',
      },
    },
    search: {
      fuse: {
        keys: ['title', 'description', 'content'], // 指定要搜索的字段
        threshold: 0.3, // 设置模糊搜索的阈值
        // 其他 Fuse.js 配置选项
      },
      object: {
        // 其他搜索配置选项
      },
      useFuseOptions: true // 启用 Fuse.js 配置
    }
  }
})
