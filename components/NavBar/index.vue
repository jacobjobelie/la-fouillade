<template>
  <div class="h-full w-full flex justify-between items-center px-2">
    <NuxtLink to="/">
      <img class="w-18 h-18 rounded rounded-svg" src="/img/longcol.svg" />
    </NuxtLink>
    <div id="links" class="flex gap-4 px-3">
      <!-- <NavItemB
        icon="fa-feather-pointed"
        text="Directions"
        to="/flights"
        :activated="routeActivated"
      /> -->

    </div>
    <div class="flex gap-4 pl-3 ml-3 ">
      <Switch :enabled="enabled" @changd="changeMode" />
    </div>
  </div>
</template>

<script lang="ts">
import { } from 'nuxt'
export default defineComponent({
  setup() {
    const routeActivated = computed(() => {
      const route = useRoute()
      const rootRoute = `/${route.path.split('/')[1]}`
      return route.path
    })

    useHead({
      title: 'SamSteph',
      meta: [{ name: 'description', content: 'Wedding time.' }, {
        name: 'viewport', content: 'width=device-width, user-scalable=no'
      }],
      bodyAttrs: { class: 'test' },
      script: [{ children: "console.log('Hello world')" }],
    })


    const colorMode = useColorMode()
    const darkMode = computed(() => colorMode.preference === 'dark')
    function changeMode({ v }: Record<string, boolean>) {
      if (!v) {
        colorMode.preference = 'light'
      } else {
        colorMode.preference = 'dark'
      }
    }

    return {
      routeActivated,
      changeMode,
      enabled: darkMode,
    }
  },
})
</script>

<style scoped>
.rounded-svg {
  clip-path: circle(50%);
  @apply dark: (invert-[0.45]) sepia-[0.2] saturate-[180%] brightness-[300%] hue-rotate-60 contrast-[2.4] filter;
  /* filter: invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg) brightness(119%) contrast(119%); */
}
</style>
