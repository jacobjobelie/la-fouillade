<template>
  <div class="h-18 w-full flex justify-between items-center">
    <NuxtLink to="/">
      <Sparkle />
    </NuxtLink>
    <div id="links" class="flex gap-4 px-3">
      <NavItemB
        icon="fa-feather-pointed"
        text="Directions"
        to="/article/directions"
        :activated="routeActivated"
      />
      <NavItemB
        icon="fa-feather-pointed"
        text="Findings"
        to="/article"
        :activated="routeActivated"
      />
    </div>
    <div id="links" class="flex gap-4 pl-3">
      <Switch @changd="changeMode" />
    </div>
  </div>
</template>

<script lang="ts">
import {} from 'nuxt'
export default defineComponent({
  setup() {
    const routeActivated = computed(() => {
      const route = useRoute()
      const rootRoute = `/${route.path.split('/')[1]}`
      return route.path
    })

    useHead({
      title: 'My App',
      meta: [{ name: 'description', content: 'My amazing site.' }],
      bodyAttrs: { class: 'test' },
      script: [{ children: "console.log('Hello world')" }],
    })

    const homeActivatedStyles = computed(() => {
      if (routeActivated.value === '/') {
        return 'drop-shadow-lg'
      } else return ''
    })
    const c = useColorMode()

    function changeMode(v: boolean) {
      if (!v) {
        c.preference = 'light'
      } else {
        c.preference = 'dark'
      }
    }

    return {
      routeActivated,
      homeActivatedStyles,
      changeMode,
    }
  },
})
</script>

<style global>
.ol-control {
  display: none;
}
</style>
