<template>
  <span class="wrapper">
    <SparkleInstance />
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { getUid } from '../../utils/getUid'
import SparkleInstance from './SparkleInstance.vue'

type sparklesProps = {
  color?: string
  rainbow?: boolean
}

const props = defineProps<sparklesProps>()
</script>

<style scoped>
.wrapper {
  position: relative;
  display: inline-block;
  font-weight: 600;
}

.child-wrapper {
  position: relative;
  z-index: 1;
  font-weight: bold;
  color: hsl(200deg, 100%, 50%);
}
</style>
