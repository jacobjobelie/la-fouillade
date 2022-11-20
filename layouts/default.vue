<template>
  <div
    class="grid grid-rows-[auto,1fr,auto] min-h-screen text-left justify-center dark:(bg-dark-400 text-light-400) bg-light-400 text-dark-400"
  >
    <div class="mx-auto px-2rem w-full <lg:w-100vw <sm:(my-0 px-0)">
      <NavBar />
    </div>
    <div class="w-screen-lg mx-auto px-2rem <lg:w-100vw">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
export default {}
</script>
