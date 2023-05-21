<template>
  <div class="h-full mx-auto py-6">

    <div class="relative w-full h-full grid items-center place-items-center">
      <div class="w-full h-full grid gap-4">
        <div class="absolute w-full h-full grid gap-2">
          <img class="w-full h-full object-cover" src="/img/marble/marble-bg-1.jpg" />
        </div>

        <div class="relative flex flex-col z-10 gap-8">
          <div class="absolute left-1/24 w-11/12 h-full text-container"></div>

          <!--   <Text h2>Car rental</Text> -->
          <div class="relative w-full flex items-center justify-center flex-col gap-4">
            <div class="absolute w-11/12 h-1/2 bg-yellow-300 bg-opacity-10 translate-y-1/2  rounded-2xl "></div>
            <div class="absolute w-11/12 h-1/2 bg-green-500 bg-opacity-10 translate-y-1/2    rounded-2xl"></div>
            <div
              class="w-9/12 py-8 bg-gray-800 text-light-800 rounded-2xl flex items-center justify-center border-green-300 border-4 z-10">
              <Text h1>Option #1 - Car Rental</Text>
            </div>
            <div
              class="w-9/12 py-4 px-2 bg-green-200 text-gray-700 rounded-2xl flex items-center justify-center flex-col border-purple-300 border-4 z-10 text-center gap-4">
              <div class="flex flex-row justify-start align-bottom items-center gap-2 whitespace-nowrap flex-wrap">
                <h3>
                  The airport in Toulouse
                </h3>
                <NuxtLink to="/travel/airport">[google maps]</NuxtLink>
                <h3>
                  and Matabiau train station
                </h3>
                <NuxtLink to="/travel/airport">[google maps]</NuxtLink>
                <h3>
                  have car rental agencies.
                </h3>
              </div>
              <div class="flex flex-col">
                <Text h3>
                  <div class="flex flex-col justify-start gap-2">
                    <NuxtLink class="h3 link"
                      to="https://cars.booking.com/search-results?aid=304142&coordinates=43.60340118408203%2C1.4460200071334839&doDay=8&doHour=15&doMinute=0&doMonth=7&doYear=2023&driversAge=30&dropCoordinates=43.60340118408203%2C1.4460200071334839&dropFtsType=&dropLocation=-1&dropLocationName=Toulouse%2C%20France&ftsType=A&label=gen173bo-1DEgRjYXJzKIICOOgHSDFYA2iJAogBAZgBMbgBB8gBD9gBA-gBAfgBCogCAZgCAqgCA7gCp4CooQbAAgHSAiQ3ZDc1MjNkNy05NmZkLTRmODAtYWJmNC04NmRkYjNjYzkzOTTYAgTgAgE&location=-1&locationName=Toulouse%2C%20France&prefcurrency=USD&preflang=us&puDay=1&puHour=15&puMinute=0&puMonth=7&puYear=2023&locationIata=&dropLocationIata=">
                      🔗 Booking.com</NuxtLink>
                    <NuxtLink class="h3 link"
                      to="https://www.kayak.com/cars/TXQ-t24030/2023-07-01/2023-07-08?sort=distance_a">
                      🔗 Kayak</NuxtLink>
                  </div>
                </Text>
              </div>
            </div>
          </div>

          <div class="relative w-full flex items-center justify-center flex-col gap-4">
            <div class="absolute w-11/12 h-1/2 bg-yellow-300 bg-opacity-10 translate-y-1/2  rounded-2xl "></div>
            <div class="absolute w-11/12 h-1/2 bg-green-500 bg-opacity-10 translate-y-1/2    rounded-2xl"></div>
            <div
              class="w-9/12 py-8 bg-gray-800 text-light-800 rounded-2xl flex items-center justify-center border-green-300 border-4 z-10">
              <Text h1>Option #2 - Train from Toulouse -> Najac</Text>
            </div>
            <div
              class="w-9/12 py-4 px-2 bg-green-200 text-gray-700 rounded-2xl flex items-center justify-center flex-col border-purple-300 border-4 z-10 text-center gap-4">
              <div class="flex flex-row justify-start align-bottom items-center gap-2 whitespace-nowrap flex-wrap">
                <div class="flex flex-col gap-8">
                  <Text h3>
                    <div class="flex flex-col justify-start gap-2">
                      <NuxtLink class="h3 link"
                        to="https://www.google.com/maps/dir/Toulouse+Matabiau,+Boulevard+Pierre+Semard,+Toulouse,+France/Gare+de+Najac,+12270+Najac,+France/@43.9160296,1.3875512,10z/am=t/data=!4m14!4m13!1m5!1m1!1s0x12aebcbd2904f5e7:0x5d7e80cdfb7ad6dc!2m2!1d1.4537586!2d43.6112379!1m5!1m1!1s0x12adb01a929a02a1:0x95e568f2b1ba3e6b!2m2!1d1.9761888!2d44.2217376!3e3">
                        🔗 google maps</NuxtLink>
                      <NuxtLink class="h3 link"
                        to="https://www.sncf.com/en/booking-itinerary/itinerary/results-list?uic1=OCE87611004&coordX1=1.453616&coordY1=43.611206&uic2=12167&coordX2=&coordY2=&date=1688204885&when=leave-at&label1=Toulouse%20Matabiau&label2=Najac%20(All%20stations)&typeDepart=ZONE_ARRET&typeArrivee=COMMUNE&listeCodesMode=0,1,2,3,4,5,6,7,8,9&origineCP=31000&destinationCP=12270">
                        🔗 Book SNCF Tickets</NuxtLink>
                    </div>
                  </Text>
                  <h3 class="cta-text">
                    Fill out the form below or text the WhatsApp group on the home page.
                  </h3>
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScGqaYahObptjrgMFB4EpeE4C9WoqcH55bhiCUnAaC7CBajXw/viewform?embedded=true"
                    width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
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
