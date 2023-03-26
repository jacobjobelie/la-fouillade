<template>
  <div class="flex items-center justify-center relative">
    <div class="absolute h-full w-full rounded-3rem bg-clip-border overflow-hidden">
      <img class="w-full h-full object-cover" :src="marble">
    </div>
    <div :class="`absolute w-11/12 h-11/12 ${iw} ${borderColor} border-4 rounded-xl`">
      <img class="w-full h-full object-cover" :src="srcset">
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'

type Props = {
  srcset: string
  marble: string
  borderColor: string
  iw?: string
}

const props = defineProps<Props>()

</script>

<style scoped></style>
