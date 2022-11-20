<template>
  <NuxtLink :to="props.to">
    <div
      class="group flex-centertransition-all transform hover:(bg-gradient-to-br from-yellow-300 to-orange-400) active:(scale-95)"
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
  if (props.to === props.activated) {
    return 'activate'
  } else return ''
})
</script>

<style scoped>
.activate {
  @apply bg-gradient-to-br from-[#cad9ff] to-[#4f71d1] text-white;
}

.activate:hover {
  filter: contrast(120%);
}
</style>
