<template>
  <div class="flex gap-2">
    <span class="w-4 h-4">
      <font-awesome-icon :icon="`fa-solid fa-${value ? 'moon' : 'sun'} fa-lg`" />
    </span>
    <HSwitch @click="changeMode" v-model="value" :class="value ? 'bg-teal-900' : 'bg-teal-700'"
      class="relative inline-flex h-4 w-8 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
      <span class="sr-only">Use setting</span>
      <span aria-hidden="true" :class="value ? 'translate-x-4' : 'translate-x-0'"
        class="pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out" />
    </HSwitch>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { Switch as HSwitch } from '@headlessui/vue'

export default defineComponent({
  components: { HSwitch },
  props: {
    enabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    changd: (v: Record<string, boolean>) => v,
  },

  setup(props, ctx) {
    const colorMode = useColorMode()
    const enabled = computed(() => colorMode.value === 'dark')
    const value = ref(enabled.value)
    function changeMode() {
      value.value = !value.value
      if (!value.value) {
        colorMode.value = 'light'
      } else {
        colorMode.value = 'dark'
      }
    }


    return {
      value,
      changeMode
    }
  },
})
</script>
