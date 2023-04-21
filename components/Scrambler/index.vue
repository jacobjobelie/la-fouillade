<template>
  <span class="whitespace-nowrap overflow-hidden">
    <Text h1>{{ result }}</Text>
  </span>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'
import Scrambler from './scrambler';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));


const welcome = ref([
  'La Fouillade - July 1-8 2023',
  'Stay a long as you like',
  'For good times'
])
const i = ref(0)
const result = ref(welcome.value[0])


onMounted(() => {
  // createMap(mapEl.value!)

  setInterval(async ()=>{
    console.log('welcome.value.length', welcome.value.length)
    i.value = i.value+1
    const _i = i.value % welcome.value.length
    console.log(_i)
    await sleep(2000)
    const scrambler = new Scrambler();
    scrambler.scramble(welcome.value[_i],(t)=>{
      result.value = t
    }, {
      characters: ['a', 'b', 'c'],
    });

  }, 5000)
})

</script>

