import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/sam/Documents/Projects/la-fouillade/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}