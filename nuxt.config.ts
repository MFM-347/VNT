import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  vite: { plugins: [tailwindcss()] },

  css: ['@/style.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/seo',
    '@nuxtjs/fontaine',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
  ],

  site: {
    name: 'VNT',
    url: 'https://vnt.vercel.app',
    description: 'A template for my upcoming projects created with Vue, Nuxt, Tailwind ',
  },

  icon: {
    size: '24px',
    class: 'inline-block',
    clientBundle: { scan: true },
  },

  fonts: {
    defaults: {
      preload: true,
      weights: [400, 500, 600, 700, 800],
      styles: ['normal', 'italic'],
      fallbacks: {
        'sans-serif': ['Roboto', 'Segoe UI'],
      },
    },
  },

  colorMode: {
    preference: 'dark',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage',
    storageKey: 'v-theme',
  },

  routeRules: {
    '/**/*.{css,svg,woff,woff2}': {
      cache: {
        swr: true,
        maxAge: 60 * 60 * 72, // 3 days
      },
    },
  },
})
