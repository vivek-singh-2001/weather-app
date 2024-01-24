<template>
  <!-- component -->
  <div class="m-6">
    <div class="container bg-blue" :key="result">
      <Transition appear name="weather">
        <h2 v-if="city" class="text-center mb-8 text-3xl text-white uppercase">Weather for {{ city }}</h2>
      </Transition>
      <Transition appear name="popup">
        <div v-if="result" class="flex flex-col sm:flex-row justify-center mb-6 sm:mb-0 gap-8">
          <div
            class="sm:flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg rounded bg-grey-white mt-4 flex flex-col hover:scale-110 transition duration-700 ease-in-out"
          >
            <div class="p-6 text-3xl font-bold text-center">Temperature</div>
            <div class="border-0 border-grey-light border-t border-solid text-sm">
              <div class="text-center px-8 border-0 border-grey-light border-b border-solid py-4">Temperature :{{ result.temp }}</div>
              <div class="text-center border-0 border-grey-light border-b border-solid py-4">Feels Like : {{ result.feels_like }}</div>
            </div>
          </div>
          <div
            class="flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg bg-grey-white mt-4 sm:-mt-4 shadow-lg z-30 flex flex-col hover:scale-110 transition duration-700 ease-in-out"
          >
            <div class="w-full p-6 text-3xl font-bold text-center">Humidity</div>
            <div class="w-full border-0 border-grey-light border-t border-solid text-sm">
              <div class="text-center border-0 border-grey-light border-b border-solid py-4">Humidity is : {{ result.humidity }}</div>

              <div class="text-center border-0 border-grey-light border-b border-solid py-4 mb-8">Wind speed is : {{ result.wind_speed }}</div>
            </div>
          </div>
          <div
            class="flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg rounded bg-grey-white mt-4 flex flex-col hover:scale-110 transition duration-700 ease-in-out"
          >
            <div class="p-6 text-3xl font-bold text-center">Time</div>
            <div class="border-0 border-grey-light border-t border-solid text-sm">
              <div class="text-center border-0 border-grey-light border-b border-solid py-4">Sunrise : {{ result.sunrise }}</div>
              <div class="text-center border-0 border-grey-light border-b border-solid py-4">Sunset :{{ result.sunset }}</div>
            </div>
          </div>
        </div>
      </Transition>
      <div v-if="error">
        <p>please enter valid city name</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainReport",

  props: ["result", "error", "city"],
};
</script>
<style>
.weather-enter-from {
  opacity: 0;
  transform: translateX(-100px);
}
.weather-enter-active {
  transition: all 0.5s ease;
}

.weather-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
.weather-leave-active {
  transition: all 0.5s ease;
}

.popup-enter-active {
  /* transition: all 0.3s ease; */
  animation: wobbles 2s ease;
}

.popup-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.popup-leave-to {
  opacity: 0;
  transform: translateY(-200px);
}
.popup-leave-active {
  transition: all 2s ease;
}

@keyframes wobbles {
  0% {
    opacity: 0;
    transform: translateY(-200px);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    transform: translate(0px);
  }
}
</style>
