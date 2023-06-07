<template>
  <div class="h-full mx-auto py-6">

    <div class="relative w-full h-full grid items-center place-items-center">
      <div class="w-full h-full grid gap-4">
        <div class="absolute w-full h-full grid gap-2">
          <img class=" w-full h-full object-cover" src="/img/marble/marble-bg-1.jpg" />
        </div>

        <div class="relative flex flex-col z-10 text-container gap-8">

          <!--   <Text h2>Car rental</Text> -->
          <div class="relative w-full flex items-center justify-center flex-col gap-4">
            <div class="absolute w-11/12 h-1/2 bg-yellow-300 bg-opacity-50 translate-y-1/2  rounded-2xl "></div>
            <div class="absolute w-11/12 h-1/2 bg-green-500 bg-opacity-20 translate-y-1/2    rounded-2xl"></div>
            <div
              class="content py-8 bg-gray-800 text-light-800 rounded-2xl flex gap-4 flex-col items-center justify-center border-green-300 border-4 z-10 px-2">
              <div
                class="py-2 bg-gray-800 text-light-800 rounded-2xl flex gap-4 flex-row items-center flex-wrap justify-center <md:(gap-2 items-start justify-start)">
                <Text h4>There is a place</Text>
                <NuxtLink className="a-light" href="https://www.activites-loisirs-aveyron.com/en-gb/home">🔗 AAGAC
                </NuxtLink>
                <Text>in Najac,
                  that
                  rents Electric bikes (and offers other activities)</Text>
                <Text h3>With an electric bike it should be do-able to ride to the nearby towns.</Text>
                <Text h4>170 euros for 5 days. Delivery & pickup to Château & helmet included.</Text>

                <h3 class="cta-text">
                  Fill out the form below or text the WhatsApp group on the home page.
                </h3>
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfwkmTOe__bHvyfaMUep67-8s-eaSbPZX8J4H_DvynOzS3y4w/viewform?embedded=true"
                  width="100%" height="440" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

              </div>
            </div>
            <div
              class=" py-4 px-2 bg-green-200 text-gray-700 rounded-2xl flex items-center justify-center flex-col border-purple-300 border-4 z-10 text-center gap-4">
              <div class="flex flex-row justify-start align-bottom items-center gap-2 whitespace-nowrap flex-wrap">
                <NuxtLink className="a-dark"
                  href="https://www.alltrails.com/explore/france/aveyron/la-fouillade?b_tl_lat=44.25894257508321&b_tl_lng=1.9950115882961654&b_br_lat=44.25367284956798&b_br_lng=2.007562853995097&mobileMap=true">
                  🔗 alltrails at the chateau/</NuxtLink>
              </div>
            </div>
            <div
              class=" py-4 px-2 bg-green-200 text-gray-700 rounded-2xl flex items-center justify-center flex-col border-purple-300 border-4 z-10 text-center gap-4">
              <div class="flex flex-row justify-start align-bottom items-center gap-2 whitespace-nowrap flex-wrap">
                <Text h4>Morning shopping?</Text>
                <img class=" max-h-[200px]  w-full h-full object-contain" src="/img/bike-la.png" />
              </div>
            </div>
            <div
              class=" py-4 px-2 bg-green-200 text-gray-700 rounded-2xl flex items-center justify-center flex-col border-purple-300 border-4 z-10 text-center gap-4">
              <div class="flex flex-row justify-start align-bottom items-center gap-2 whitespace-nowrap flex-wrap">
                <Text h4>Trail ride to Najac</Text>
                <img class=" w-full h-full max-h-[600px] object-contain" src="/img/bike-river.jpg" />
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
