<template>
  <div class="relative">
    <slot name="header"></slot>
    <slot name="body"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'

type Props = {
  iw?: string
}

const props = defineProps<Props>()

</script>

<style scoped></style>
