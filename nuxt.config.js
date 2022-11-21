import { viteCommonjs, esbuildCommonjs } from '@originjs/vite-plugin-commonjs'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/supabase',
    'nuxt-windicss',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
  ],
  target: 'static',
  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },
  buildModules: [
    // ...
    // https://github.com/whardier/nuxt-hero-icons
    '@nuxt-hero-icons/outline/nuxt',
    '@nuxt-hero-icons/solid/nuxt',
  ],

  // custom tailwindcss path
  tailwindcss: {
    // cssPath: "~/assets/main.css",
  },
  vite: {
    optimizeDeps: {},
    esbuildOptions: {},
  },
  // server config variable

  // register nitro plugin

  /// transpile  afew packages
  build: {},
})
