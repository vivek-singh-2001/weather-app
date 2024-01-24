<template>
  <div class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8 z-0">
    <div class="p-4 bg-white self-start mt-32 max-w-screen-md">
      <div class="text-black">
        <h1 class="text-2xl mb-1">About:</h1>
        <p class="mb-4">The Local Weather allows you to track the current and future weather of cities of your choosing.</p>
        <h2 class="text-2xl">How it works:</h2>
        <ol class="list-decimal list-inside mb-4">
          <li>Search for your city by entering the name into the search bar.</li>
          <li>Select a city within the results, this will take you to the current weather for your selection.</li>
          <li>Track the city by clicking on the "+" icon in the top right. This will save the city to view at a later time on the home page.</li>
        </ol>

        <h2 class="text-2xl">Removing a city</h2>
        <p>
          If you no longer wish to track a city, simply select the city within the home page. At the bottom of the page, there will be am option to
          delete the city.
        </p>
      </div>
      <button v-on:click="closekro" class="text-white mt-8 bg-weather-primary py-2 px-6">close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["closekro"],
};
</script>
