<template>
  <div
    class="grid gap-4 grid-cols-1 grid-rows-[auto,1fr,auto] min-w-screen min-h-screen text-left justify-center dark:(bg-dark-400 text-light-400) bg-light-900 text-dark-400">
    <div class="mx-auto h-8 w-full <lg:w-100vw <sm:(my-0 px-0)">
      <NavBar />
    </div>

    <div class="w-full mx-auto <lg:w-100vw">
      <slot />
    </div>

    <Footer />
  </div>
</template>

<script lang="ts">
export default {}
</script>
