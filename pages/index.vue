<template>
  <div class="h-full mx-auto">
    <div class="relative w-full h-full grid items-center place-items-center">
      <div class="w-full h-full grid gap-2 grid-rows-[auto,1fr]">
        <div class="relative w-full">
          <!-- <Text h1>{{ welcom }}</Text> -->
          <Text h1>Fête Fou</Text>
          <Text h3>(crazy party)</Text>
          <Text h2>La Fouillade</Text>
        </div>
        <div class="w-full h-full">
          <!-- <FetchMd/> -->
          <Picture class="w-full h-600px" srcset="/img/longcol-1.webp" marble="/img/marble/SKM_C65823022714142.pdf.png" />
          <Text h1>July 1 - July 8</Text>
          <Text h2>Check-in 5pm, check-out 11am</Text>
          <Picture class="w-full h-500px" srcset="/img/whatsapp.jpeg" marble="/img/marble/SKM_C65823022714152.pdf.png"
            iw="w-500px" />
          <div class="w-full ">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { ref } from 'vue'
// import { createGif } from '../ts/gif'
// import { createMap } from '../ts/ol'

const welcom = ref('Destination: La Fouillade - July 1-8 2023')
const mapEl = ref<HTMLDivElement>()
const cEl = ref<HTMLDivElement>()


onMounted(() => {
  // createMap(mapEl.value!)
})

let i = 1
</script>

<style scoped>
.bg {
  @apply mix-blend-screen
}
</style>
