<template>
  <div class="flex items-center justify-center relative">
    <div class="w-full h-full">
      <div :class="`absolute h-full w-full ${borderColor} border-4 rounded-xl`" />
      <div class="absolute h-full w-full rounded-3rem bg-clip-border overflow-hidden ">
        <img class="w-full h-full object-cover" :src="marble">
      </div>
      <div class="relative w-11/12 h-full z-10  flex items-center justify-center mx-auto py-4">
        <img class=" h-full self-center  object-cover " :src="srcset">
      </div>
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
