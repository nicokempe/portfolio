import { type NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {

  preset: 'vercel-edge',

  experimental: {
    appManifest: false
  },

  modules: [
    '@nuxt/devtools',
    '@nuxtjs/i18n',
    '@nuxtjs/turnstile',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module'
  ],

  devtools: {
    enabled: process.env.NODE_ENV === 'development'
  },

  i18n: {
    locales: [
      { code: 'de', iso: 'de-DE', name: 'Deutsch', file: 'de-DE.json' },
      { code: 'en', iso: 'en-US', name: 'English', file: 'en-US.json' }
    ],
    lazy: false, // todo: debug, to bring lazy loading to working with production language toggling
    langDir: 'lang',
    defaultLocale: 'en',
    vueI18n: './i18n.options.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieCrossOrigin: true,
      cookieSecure: true,
      cookieKey: 'i18n_redirected'
    },
    strategy: 'no_prefix',
  },

  turnstile: {
    siteKey: process.env.CLOUDFLARE_TURNSTILE_SITE_KEY,
  },

  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/fonts.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    name: 'Nico Kempe',
    description: 'Nuxt 3-powered portfolio site, your gateway to explore my IT ventures, skills, and accomplishments.',
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      titleTemplate: '%s • Nico Kempe',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1,shrink-to-fit=no' },
        { id: 'og:site_name', property: 'og:site_name', content: 'Nico Kempe' },
        { id: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { id: 'twitter:site', name: 'twitter:site', content: '@nico_kempe' },
        { id: 'twitter:creator', name: 'twitter:creator', content: '@nico_kempe' },
        { id: 'twitter:creator-id', name: 'twitter:creator:id', content: '990948799504842754' },
        { id: 'twitter:site', name: 'twitter:site', content: '@nico_kempe' },
        { id: 'twitter:site-id', name: 'twitter:site:id', content: '990948799504842754' },
      ],
    }
  },

  eslint: {},

  // Ensure TypeScript recognizes Nuxt Content types
  typescript: {
    types: ['@nuxt/types']
  }
};

export default config;