<template>
  <div class="h-full mx-auto px-4">
    <div class="relative w-full h-full grid items-center place-items-center">
      <div class="w-full h-full grid gap-2 grid-rows-[auto,1fr]">
        <div class="relative w-full flex text-center justify-center flex-col">
          <!-- <Text h1>{{ welcom }}</Text> -->
          <Text h1>Fête Fou</Text>
          <Text h3>(crazy party)</Text>
          <Text h2>La Fouillade</Text>
        </div>
        <div class="w-full h-full px-4">
          <!-- <FetchMd/> -->
          <Picture class="w-full h-600px" srcset="/img/longcol-1.webp" marble="/img/marble/SKM_C65823022714120.pdf.png"
            borderColor="border-yellow-400" />
        </div>
        <div class="w-full h-full flex flex-col items-center justify-center gap-4">

          <div class="relative w-full flex items-center justify-center flex-col gap-4">
            <div class="absolute w-9/12 h-1/2 bg-yellow-300 bg-opacity-50 translate-y-1/2  rounded-2xl "></div>
            <div class="absolute w-9/12 h-1/2 bg-green-500 bg-opacity-20 translate-y-1/2    rounded-2xl"></div>
            <div
              class="w-1/2 h-32 bg-gray-800 text-light-800 rounded-2xl flex items-center justify-center border-green-300 border-4 z-10">
              <Text h1>July 1 - July 8</Text>
            </div>
            <div
              class="w-1/2 h-32 bg-green-200 text-gray-700 rounded-2xl flex items-center justify-center border-gray-800 border-4 z-10">
              <Text h2>Check-in 5pm, check-out 11am</Text>
            </div>
          </div>
          <div class="w-full h-full px-4 ">
            <Picture class="w-full h-500px" srcset="/img/whatsapp.jpeg" marble="/img/marble/SKM_C65823022714100.pdf.png"
              iw="w-500px" borderColor="border-green-400" />
          </div>
          <div class="w-full ">
            <div class="w-full">
              <Travel>
                <template #footer>
                  <Text class="text-gray-400">Card footer</Text>
                </template>
              </Travel>
            </div>
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
