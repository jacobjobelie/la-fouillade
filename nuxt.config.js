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
    plugins: [viteCommonjs()],
    optimizeDeps: {
      exclude: ['gifler'],
      include: ['gifler'],
      //     exclude:['gifler', '@amcharts/amcharts5-geodata'],
      // include: ['@amcharts/amcharts5-geodata > polylabel']
    },
    esbuildOptions: {
      plugins: [esbuildCommonjs(['gifler'])],
    },
  },
  // server config variable

  // register nitro plugin

  /// transpile  afew packages
  build: {
    transpile: ['gifler'],
  },
})
