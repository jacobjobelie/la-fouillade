<template>
  <div class="flex items-center justify-center relative">
    <div class="absolute h-full w-full bg-clip-border overflow-hidden">
      <img :class="`w-full h-full object-cover ${imgClass}`" :src="marble">
    </div>
    <div class="z-10">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'

type Props = {
  marble: string
  imgClass?: string
}

const props = defineProps<Props>()

</script>

<style scoped></style>
