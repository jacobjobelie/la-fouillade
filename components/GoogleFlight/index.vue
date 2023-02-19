<template>
  <div class="rounded-1rem w-96 h-56">
   <iframe  width="450"
  height="250"
  frameborder="0" style="border:0"
  referrerpolicy="no-referrer-when-downgrade"
  :src="url"></iframe>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    default: '',
  },
})


</script>