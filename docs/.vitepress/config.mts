import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Evernight-BOT',
  description: 'Evernight-BOT games, commands, and documentation',
  base: '/Evernight-BOT-Docs/',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: '🌑',
    siteTitle: 'Evernight-BOT',
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/R2T1AEvern1ght/Evernight-BOT-Docs' }],
    footer: { message: 'Evernight-BOT 文档 · 内容以正式已发布版本为准' },
  },
  locales: {
    root: {
      label: '简体中文', lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '功能指南', link: '/guide' },
          { text: '游戏规则', link: '/games' },
          { text: '更新记录', link: '/changelog' }
        ],
        sidebar: [
          { text: '快速开始', items: [
            { text: '首页', link: '/' }, { text: '功能与示例', link: '/guide' },
            { text: '32款游戏', link: '/games' }, { text: '更新记录', link: '/changelog' }
          ] }
        ],
        outline: { label: '本页目录', level: [2,3] },
        docFooter: { prev: '上一篇', next: '下一篇' },
      }
    },
    en: {
      label: 'English', lang: 'en-US', link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' }, { text: 'Guide', link: '/en/guide' },
          { text: 'Games', link: '/en/games' }, { text: 'Changes', link: '/en/changelog' }
        ],
        sidebar: [{ text: 'Documentation', items: [
          { text: 'Home', link: '/en/' }, { text: 'Feature examples', link: '/en/guide' },
          { text: 'All games', link: '/en/games' }, { text: 'Changelog', link: '/en/changelog' }
        ] }],
        outline: { label: 'On this page' }
      }
    },
    ja: {
      label: '日本語', lang: 'ja-JP', link: '/ja/',
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/ja/' }, { text: '使い方', link: '/ja/guide' },
          { text: 'ゲーム', link: '/ja/games' }, { text: '更新履歴', link: '/ja/changelog' }
        ],
        sidebar: [{ text: 'ドキュメント', items: [
          { text: 'ホーム', link: '/ja/' }, { text: '機能・操作例', link: '/ja/guide' },
          { text: 'ゲーム一覧', link: '/ja/games' }, { text: '更新履歴', link: '/ja/changelog' }
        ] }],
        outline: { label: 'このページ内' }
      }
    }
  },
  vite: {
    css: { preprocessorOptions: {} }
  }
})
