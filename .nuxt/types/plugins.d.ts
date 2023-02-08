// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../components.plugin").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/pages/runtime/plugins/router").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client").default> &
  InjectionType<typeof import("../../node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server").default> &
  InjectionType<typeof import("../../node_modules/@nuxtjs/color-mode/dist/runtime/plugin.client").default> &
  InjectionType<typeof import("../../node_modules/@nuxtjs/supabase/dist/runtime/plugins/auth-redirect").default> &
  InjectionType<typeof import("../../node_modules/@nuxtjs/supabase/dist/runtime/plugins/supabase.client").default> &
  InjectionType<typeof import("../../node_modules/@nuxtjs/supabase/dist/runtime/plugins/supabase.server").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/payload.client").default> &
  InjectionType<typeof import("../../plugins/fontawesome").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
