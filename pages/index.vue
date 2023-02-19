<template>
  <div class="h-full mx-auto p-4">
    <div class="relative w-full h-full grid items-center place-items-center">
      <div class="w-full h-full grid gap-2 grid-rows-[auto,auto,1fr]">
        <NavBar/>
        <Text h1>{{ welcom }}</Text>
        <div class="w-full h-full">
          <FetchMd/>
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
.container {
  height: 100%;
}

.welcome {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  display: grid;
  place-items: center;
  height: calc(100vh - 92px - 70px);
}

.about {
  box-shadow: 0 5 10 15 rgba(0, 0, 0, 0.445);
}
</style>
