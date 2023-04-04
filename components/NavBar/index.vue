<template>
  <div class="h-full w-full flex justify-between items-center px-2">
    <!-- <NuxtLink to="/">
      <Sparkle />
    </NuxtLink> -->
    <div id="links" class="flex gap-4 px-3">
      <!-- <NavItemB
        icon="fa-feather-pointed"
        text="Directions"
        to="/flights"
        :activated="routeActivated"
      /> -->

    </div>
    <div class="flex gap-4 pl-3 ml-3">
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

<style global>
.ol-control {
  display: none;
}
</style>
