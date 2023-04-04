<template>
  <div class="h-full mx-auto py-6">
    <div class="relative w-full h-full grid items-center place-items-center">
      <div class="w-full h-full grid gap-2">
        <div class="absolute w-full h-full grid gap-2">
          <img class=" w-full h-full object-cover" src="/img/marble/marble-bg-1.jpg" />
        </div>

        <div class="relative z-10 text-container">
          <!--   <Text h2>Car rental</Text> -->
          <div class="relative w-full flex items-center justify-center flex-col gap-4">
            <div class="absolute w-11/12 h-1/2 bg-yellow-300 bg-opacity-50 translate-y-1/2  rounded-2xl "></div>
            <div class="absolute w-11/12 h-1/2 bg-green-500 bg-opacity-20 translate-y-1/2    rounded-2xl"></div>
            <div
              class="w-9/12 py-8 bg-gray-800 text-light-800 rounded-2xl flex items-center justify-center border-green-300 border-4 z-10">
              <Text h1>option #1 - Car rental</Text>
            </div>
            <div
              class="w-9/12 py-4 px-2 bg-green-200 text-gray-700 rounded-2xl flex items-center justify-center flex-col border-purple-300 border-4 z-10 text-center gap-4">
              <div class="flex flex-row justify-start align-bottom items-center gap-2 whitespace-nowrap flex-wrap">
                <p>
                  The airport in Toulouse
                </p>
                <NuxtLink to="/travel/airport">[google maps]</NuxtLink>
                <p>
                  and Matabiau train station
                </p>
                <NuxtLink to="/travel/airport">[google maps]</NuxtLink>
                <p>
                  have car rental agencies.
                </p>
              </div>
              <div class="flex flex-col">
                <Text h3>
                  <div class="flex flex-col justify-start gap-2">
                    <NuxtLink
                      to="https://cars.booking.com/search-results?aid=304142&coordinates=43.60340118408203%2C1.4460200071334839&doDay=8&doHour=15&doMinute=0&doMonth=7&doYear=2023&driversAge=30&dropCoordinates=43.60340118408203%2C1.4460200071334839&dropFtsType=&dropLocation=-1&dropLocationName=Toulouse%2C%20France&ftsType=A&label=gen173bo-1DEgRjYXJzKIICOOgHSDFYA2iJAogBAZgBMbgBB8gBD9gBA-gBAfgBCogCAZgCAqgCA7gCp4CooQbAAgHSAiQ3ZDc1MjNkNy05NmZkLTRmODAtYWJmNC04NmRkYjNjYzkzOTTYAgTgAgE&location=-1&locationName=Toulouse%2C%20France&prefcurrency=USD&preflang=us&puDay=1&puHour=15&puMinute=0&puMonth=7&puYear=2023&locationIata=&dropLocationIata=">
                      Booking.com</NuxtLink>
                    <NuxtLink to="https://www.kayak.com/cars/TXQ-t24030/2023-07-01/2023-07-08?sort=distance_a">
                      Kayak</NuxtLink>
                  </div>
                </Text>
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
