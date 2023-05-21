<template>
  <div class="h-full mx-auto py-6">
    <div class="relative w-full h-full grid items-center place-items-center">
      <div class="w-full h-full grid gap-2">

        <section class="relative w-full flex text-center justify-center flex-col mb-6">
          <!-- <Text h1>{{ welcom }}</Text> -->
          <div class="w-full h-full text-light-500">
            <PictureSlot class="w-full " marble="/img/marble/IMG_4643.jpg" imgClass="">
              <div class="relative flex-col flex items-center justify-center org rounded-4xl text-green-200 px-4 py-8">
                <div class="absolute w-full h-full header-border"></div>
                <h1 class=" m-0 header-text header-color extrabold">Fête Fou</h1>
                <h3 class=" m-0 header-text neon-color header-neon extrabold">(crazy party)</h3>
                <h2 class=" m-0 mt-6 header-text header-color extrabold">La Fouillade - Château du Longcol</h2>
              </div>
            </PictureSlot>
          </div>
        </section>

        <section class="w-full h-full px-4">
          <Picture class="w-full h-600px" srcset="/img/longcol-1.webp" marble="/img/marble/SKM_C65823022714120.pdf.png"
            borderColor="border-yellow-400" />
        </section>

        <section class="w-full px-4 flex items-center justify-center gap-4">
          <a target="_blank" class="h3 link" :href="linksRef.gLongcolNajac">🔗 google maps</a>
          <a target="_blank" class="h3 link" :href="linksRef.longcol">🔗 the Château </a>
        </section>

        <section class="w-full h-full flex flex-col items-center justify-center gap-4">
          <div class="relative w-full flex items-center justify-center flex-col gap-4">
            <div class="absolute w-11/12 h-1/2 bg-yellow-300 bg-opacity-50 translate-y-1/2  rounded-2xl "></div>
            <div class="absolute w-11/12 h-1/2 bg-green-500 bg-opacity-20 translate-y-1/2    rounded-2xl"></div>
            <div
              class="w-9/12 py-8 bg-gray-800 text-light-800 rounded-2xl flex items-center justify-center border-green-300 border-4 z-10">
              <Text h1>July 1 - July 8</Text>
            </div>
            <div
              class="w-9/12 py-4 bg-green-200 text-gray-700 rounded-2xl flex items-center justify-center flex-col border-gray-800 border-4 z-10 text-center">
              <Text h2>Check-in 5pm, </Text>
              <Text h2>Check-out 11am</Text>
            </div>
          </div>

        </section>


        <section class="w-full h-full px-4 ">
          <div class="w-full h-full ">
            <Picture iw="max-w-300px" class="w-full " srcset="/img/whatsapp.png"
              marble="/img/marble/SKM_C65823022714100.pdf.png" borderColor="border-green-400" />
          </div>
        </section>

        <section class="w-full px-4 flex items-center justify-center">
          <Text @click="fetchWassap" h3>{{ wassapText }}</Text>
        </section>

        <section class="w-full h-full px-4 ">
          <div class="relative w-full flex items-center justify-center flex-col gap-4">
            <div class="absolute w-11/12 h-1/2 bg-yellow-300 bg-opacity-50 translate-y-1/2  rounded-2xl "></div>
            <div class="absolute w-11/12 h-1/2 bg-green-500 bg-opacity-20 translate-y-1/2    rounded-2xl"></div>
            <div
              class="w-9/12 py-8 bg-gray-800 text-light-800 rounded-2xl flex items-center justify-center border-green-300 border-4 z-10">
              <Text h1>Travel</Text>
            </div>
            <div
              class="w-9/12 py-4 bg-green-200 text-gray-700 rounded-2xl flex items-center justify-center flex-col border-purple-300 border-4 z-10 text-center gap-8">
              <NuxtLink to="/travel/toulouse" class="underline">
                <Text h2>🔗 Toulouse → </Text>
                <Text h2>Château de Longcol</Text>
              </NuxtLink>
            </div>
            <div
              class="w-9/12 py-8 bg-gray-800 text-light-800 rounded-2xl flex items-center justify-center border-green-300 border-4 z-10">
              <Text h1>Meals</Text>
            </div>
            <div
              class="w-9/12 py-4 bg-green-200 text-gray-700 rounded-2xl flex items-center justify-center flex-col border-purple-300 border-4 z-10 text-center gap-8">
              <NuxtLink to="/meals/menu" class="underline">
                <Text h2>🔗 1st Night Menu </Text>
              </NuxtLink>
              <NuxtLink to="/meals/wedding" class="underline">
                <Text h2>🔗 Wednesday Wedding Celebration</Text>
              </NuxtLink>
              <NuxtLink to="/meals/groceries" class="underline">
                <Text h2>🔗 Groceries</Text>
              </NuxtLink>
            </div>
            <div
              class="w-9/12 py-8 bg-gray-800 text-light-800 rounded-2xl flex items-center justify-center border-green-300 border-4 z-10">
              <Text h1>Excursions</Text>
            </div>
            <div
              class="w-9/12 py-4 bg-green-200 text-gray-700 rounded-2xl flex items-center justify-center flex-col border-purple-300 border-4 z-10 text-center gap-8">
              <NuxtLink to="/travel/bikes" class="underline">
                <Text h2>🔗 Bike Rental</Text>
              </NuxtLink>
              <NuxtLink to="/travel/daytrips" class="underline">
                <Text h2>🔗 Day Trips</Text>
              </NuxtLink>
            </div>
          </div>
          <div class="w-full">
            <!-- <Travel>
              <template #footer>
                <Text class="text-gray-400">EURO</Text>
              </template>
            </Travel> -->
          </div>
        </section>




      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { ref } from 'vue'
import { links } from '../utils/data'
// import { createGif } from '../ts/gif'
// import { createMap } from '../ts/ol'

const welcom = ref('Destination: La Fouillade - July 1-8 2023')
const mapEl = ref<HTMLDivElement>()
const linksRef = ref(links)
const cEl = ref<HTMLDivElement>()
const wassapText = ref('🔗 Click to get Invite link')

function b64_to_utf8(str: string): string {
  return decodeURIComponent(escape(window.atob(str)));
}

async function fetchWassap() {
  if (wassapText.value.includes('https://')) return
  const { data } = await useAsyncData<string>('count', () => $fetch('/api/wassap'))
  wassapText.value = data.value || b64_to_utf8('aHR0cHM6Ly9jaGF0LndoYXRzYXBwLmNvbS9HODF0bXNhbjNKeTdSaVg0NkFQOHJa') || 'failed to get the link :('
}


</script>



<style scoped>
.bg {
  @apply mix-blend-screen
}

.org {
  @apply border-green-300 border-6;

  background-color: var(--peach-c);
}

.header-text {
  font-family: 'bob';
}

.header-neon {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--main-c);
}

.header-border {
  @apply p-4 border-solid;
  border-color: var(--main-c);
}
</style>
