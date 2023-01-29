<template>
  <div class="h-full mx-auto p-4">
    <div class="relative w-full h-full grid items-center place-items-center">
      <div class="w-full h-full grid gap-2 grid-rows-[auto,auto,1fr]">
        <Text h1>{{ welcom }}</Text>
        <div class="w-full h-full">
          <!-- <h2>sticky notes</h2>
          <Shoutbox /> -->

  <NavItemB
        icon="fa-feather-pointed"
        text="Directions"
        to="/article/directions"
        activated=""
      />
        </div>
        <div class="relative w-full h-full grid items-center place-items-center">
          <div class="grid grid-cols-2 gap-2 grid-rows-1 w-full h-full">
            <div class="w-full h-full">
              <img class="w-full h-full object-cover" src="/img/IMG_3434.jpeg"/>
            </div>
            <div class="relative grid gap-2 grid-cols-1 grid-rows-[1fr,1fr,auto] w-full h-full">
              <div class="relative w-full h-full">
              </div>
              <div class="relative w-full h-full">
                <div class="absolute top-0 left-0 h-full w-full" ref="mapEl"></div>
              </div>
              <p class="italic m-0">le chateâu Longcol</p>
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
import { createGif } from '../ts/gif'
import { createMap } from '../ts/ol'

const welcom = ref('Destination: La Fouillade - July 1-8 2023')
const mapEl = ref<HTMLDivElement>()
const cEl = ref<HTMLDivElement>()

onMounted(() => {
  createMap(mapEl.value!)
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
