import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth"
<<<<<<< HEAD
declare module "/Users/sam/Documents/Projects/la-fouillade/node_modules/nuxt/dist/pages/runtime/composables" {
=======
declare module "/Users/sam/Documents/Work/la-fouillade/node_modules/nuxt/dist/pages/runtime/composables" {
>>>>>>> 22dc1ffed1854d8de6b0ab873a62dea0b200fefe
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}