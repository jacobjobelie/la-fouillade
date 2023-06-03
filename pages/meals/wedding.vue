<template>
  <div class="h-full mx-auto py-6">

    <div class="relative w-full h-full grid items-center place-items-center">
      <div class="w-full h-full grid gap-4">
        <div class="absolute w-full h-full grid gap-2">
          <img class=" w-full h-full object-cover" src="/img/marble/marble-bg-1.jpg" />
        </div>

        <div class="relative flex flex-col z-10 gap-8 items-center justify-center top-14">
          <div class="absolute left-1/24 w-11/12 h-full text-container"></div>

          <div class="relative w-full flex items-center justify-center flex-col gap-4">
            <div class="absolute w-11/12 h-1/2 bg-yellow-300 bg-opacity-50 translate-y-1/2  rounded-2xl "></div>
            <div class="absolute w-11/12 h-1/2 bg-green-500 bg-opacity-20 translate-y-1/2    rounded-2xl"></div>
            <div
              class="content py-8 bg-gray-800 text-light-800 rounded-2xl flex flex-col gap-4 items-center justify-center border-green-300 border-4 z-10 px-4">
              <Text class="w-9/12 text-center" h2>On Wednesday, July 5, 2023, we will be hosting our wedding celebration.
                More
                information to come
                regarding the menu. Expect food, drinks, dancing, and cheers!</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>


<style scoped>
.bg {
  @apply mix-blend-screen
}

.text-container {
  @apply border-green-300 border-6;
  background-color: var(--peach-c);
}

.header-text {
  font-family: 'bob';
}

.header-neon {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--main-c);
}

.header-border {
  @apply p-4 border-solid;
  border-color: var(--main-c);
}
</style>
