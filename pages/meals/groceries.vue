<template>
  <div class="h-full mx-auto py-6">

    <div class="relative w-full h-full grid items-center place-items-center">
      <div class="w-full h-full grid gap-4">
        <div class="absolute w-full h-full grid gap-2">
          <img class=" w-full h-full object-cover" src="/img/marble/marble-bg-1.jpg" />
        </div>

        <div class="relative flex flex-col z-10 gap-8">
          <div class="absolute left-1/24 w-11/12 h-full text-container"></div>

          <!--   <Text h2>Car rental</Text> -->
          <div class="relative w-full flex items-center justify-center flex-col gap-4">
            <div class="absolute w-11/12 h-1/2 bg-yellow-300 bg-opacity-50 translate-y-1/2  rounded-2xl "></div>
            <div class="absolute w-11/12 h-1/2 bg-green-500 bg-opacity-20 translate-y-1/2    rounded-2xl"></div>
            <div
              class="content py-8 bg-gray-800 text-light-800 rounded-2xl flex flex-col gap-4 items-center justify-center border-green-300 border-4 z-10 px-4">
              <Text h3>Perhaps we cook some meals together? Keeping it simple, less cook, more play</Text>
            </div>
            <div
              class="content py-8 bg-gray-800 text-light-800 rounded-2xl flex flex-col gap-4 items-center justify-center border-green-300 border-4 z-10 px-4">
              <Text h3>Local producers</Text>
              <NuxtLink to="https://auxpresdici.fr/" class="underline">
                <Text h4>🔗 https://auxpresdici.fr/</Text>
              </NuxtLink>
              <div class="flex items-start justify-start gap-8 overflow-hidden flex-row <sm:(flex-col)">
                <img class="border-light-400 border-4 max-h-96 object-contain object-center"
                  src="/img/groceries/pi1.jpg" />
                <img class="border-light-400 border-4 max-h-96  object-contain object-center"
                  src="/img/groceries/pi2.jpg" />
              </div>
            </div>
            <div class="relative w-full flex items-center justify-center flex-col gap-4">
              <div class="absolute w-11/12 h-1/2 bg-yellow-300 bg-opacity-50 translate-y-1/2  rounded-2xl "></div>
              <div class="absolute w-11/12 h-1/2 bg-green-500 bg-opacity-20 translate-y-1/2    rounded-2xl"></div>
              <div
                class="content py-8 bg-gray-800 text-light-800 rounded-2xl flex flex-col gap-4 items-center justify-center border-green-300 border-4 z-10 px-4">
                <Text h2>fresh markets</Text>
                <Text h3>
                  Jeudi : VILLEFRANCHE DE ROUERGUE 20 min
                  <Text h3>
                    Vendredi : SAUVETERRE DE ROUERGUE 45min
                  </Text>
                  <Text h3>
                    Samedi : CORDES SUR CIEL 35 min
                  </Text>
                  <Text h3>
                    Dimanche : NAJAC 10 min / ST ANTONIN NOBLE VAL 45min / VILLENEUVE D’AVEYRON 35 min
                  </Text>
                </Text>
                <Text h3>Marché de villefranche-de-rouergue</Text>
                <Text h4>Sundays 8am-13:00</Text>
                <NuxtLink to="https://www.bastides-gorges-aveyron.fr/savourer/marches/marche-de-villefranche-de-rouergue/"
                  class="underline">
                  <Text h4>🔗 pretty pictures</Text>
                </NuxtLink>
                <Text h3>Marché de Najac</Text>
                <Text h4>Sundays 9am-13:00</Text>
                <NuxtLink to="https://www.bastides-gorges-aveyron.fr/savourer/marches/marche-de-najac/" class="underline">
                  <Text h4>🔗 pretty pictures</Text>
                </NuxtLink>
              </div>
            </div>
            <div
              class="content py-8 bg-gray-800 text-light-800 rounded-2xl flex flex-col gap-4 items-center justify-center border-green-300 border-4 z-10 px-4">
              <Text h3>supermarché</Text>
              <NuxtLink
                to="https://www.google.com/maps/@44.236945,2.0336187,3a,75y,343.13h,90.39t/data=!3m7!1e1!3m5!1skCxj3-a_PLOiVKsUFqx8bw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DkCxj3-a_PLOiVKsUFqx8bw%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D306.793%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu"
                class="underline">
                <Text h4>🔗 street view</Text>
              </NuxtLink>
              <div class="flex items-start justify-start gap-8 overflow-hidden flex-row <sm:(flex-col)">
                <img class="border-light-400 border-4 max-h-96 object-contain object-center"
                  src="/img/groceries/inter.png" />
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
