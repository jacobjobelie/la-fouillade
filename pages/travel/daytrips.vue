<template>
  <div class="h-full mx-auto py-6">

    <div class="relative w-full h-full grid items-center place-items-center">
      <div class="w-full h-full grid gap-4">
        <div class="absolute w-full h-full grid gap-2">
          <img class="w-full h-full object-cover" src="/img/marble/marble-bg-1.jpg" />
        </div>

        <div class="relative flex flex-col z-10 gap-8">
          <div class="absolute left-1/24 w-11/12 h-full text-container"></div>


          <div class="relative w-full flex items-center justify-center flex-col gap-4">
            <div class="absolute w-11/12 h-1/2 bg-yellow-300 bg-opacity-10 translate-y-1/2  rounded-2xl "></div>
            <div class="absolute w-11/12 h-1/2 bg-green-500 bg-opacity-10 translate-y-1/2    rounded-2xl"></div>
            <div
              class="w-9/12 py-8 bg-gray-800 text-light-800 rounded-2xl flex items-center justify-center border-green-300 border-4 z-10 p-8">
              <Text class="text-center" h1>Cool destinations in the area.</Text>
            </div>
            <div
              class="w-9/12 py-4 px-2 bg-green-200 text-gray-700 rounded-2xl flex items-center justify-center flex-col border-purple-300 border-4 z-10 text-center gap-4">
              <div class="flex flex-row justify-start align-bottom items-center gap-2 whitespace-nowrap flex-wrap">
                <div class="flex flex-col gap-8">
                  <Text h3>
                    Weigh in on the WhatsApp chat if you'd to coordinate a trip.
                  </Text>
                  <h3 class="cta-text">
                    There is an option for getting a driver and minibus for the day.
                  </h3>
                </div>
              </div>
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
