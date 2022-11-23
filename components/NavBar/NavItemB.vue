<template>
  <NuxtLink :to="props.to">
    <div
      class="nav"
      :class="activatedStyles"
    >
      <span>{{ text }}</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
type props = {
  icon: string
  text: string
  to: string
  activated: string
}

const props = defineProps<props>()

const activatedStyles = computed(() => {
  const route = useRoute()
  if (props.to === props.activated || route.path.includes(props.to)) {
    return 'activate'
  } else return ''
})
</script>

<style scoped>
.nav {
  @apply text-2xl py-0 px-1 rounded-sm;
  @apply group flex-center transition-all transform hover:(bg-gradient-to-br from-yellow-300 to-orange-400) active:(scale-95)
}
.activate{
  @apply dark:(bg-gradient-to-br from-blue-300 to-blue-400 text-dark-50) bg-gradient-to-br from-blue-700 to-blue-800 text-light-100;
}
.activate:hover {
  filter: contrast(120%);
}
</style>
