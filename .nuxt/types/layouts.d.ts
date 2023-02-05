import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
<<<<<<< HEAD
declare module "/Users/sam/Documents/Projects/la-fouillade/node_modules/nuxt/dist/pages/runtime/composables" {
=======
declare module "/Users/sam/Documents/Work/la-fouillade/node_modules/nuxt/dist/pages/runtime/composables" {
>>>>>>> 22dc1ffed1854d8de6b0ab873a62dea0b200fefe
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}