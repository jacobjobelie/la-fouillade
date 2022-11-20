<template>
  <div class="h-full mx-auto">
    <div class="w-full h-full grid items-center place-items-center">
      <Text h1>{{ welcom }}</Text>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { ref } from 'vue'

const welcom = ref('Destination: La Fouillade - July 1-8 2023')

const welcomList = [
  'Hello!👋',
  '你好啊，朋友!👏',
  '5#t~C7T`V ✨',
  'Aloha!🌴',
  'こんにちは!🙌',
  'Bonjour!🍾',
  'Hallo!🍻',
  'नमस्ते🙏',
]
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
