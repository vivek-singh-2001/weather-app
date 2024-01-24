<template>
  <div class="m-6">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">City</th>
            <th scope="col" class="px-6 py-3">Temp</th>
            <th scope="col" class="px-6 py-3">feels like</th>
            <th scope="col" class="px-6 py-3">humidity</th>
            <th scope="col" class="px-6 py-3">wind speed</th>
            <th scope="col" class="px-6 py-3">sunrise</th>
            <th scope="col" class="px-6 py-3">sunset</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <Transition appear name="popup">
          <tbody>
            <tr v-for="(item, index) in history" :key="item">
              <th scope="col" class="px-6 py-3">{{ item.city }}</th>
              <th scope="col" class="px-6 py-3">{{ item.temp }}</th>
              <th scope="col" class="px-6 py-3">{{ item.feels_like }}</th>
              <th scope="col" class="px-6 py-3">{{ item.humidity }}</th>
              <th scope="col" class="px-6 py-3">{{ item.wind_speed }}</th>
              <th scope="col" class="px-6 py-3">{{ item.sunrise }}</th>
              <th scope="col" class="px-6 py-3">{{ item.sunset }}</th>
              <th scope="col" class="px-6 py-3">
                <button v-on:click="removeData(index)">Remove</button>
              </th>
            </tr>
          </tbody>
        </Transition>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherTable",
  props: ["history"],
  methods: {
    removeData(index) {
      console.log(index);
      this.$emit("remove-data", index);
    },
  },
};
</script>

<style>
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
