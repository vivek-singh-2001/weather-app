<template>
  <SiteNavigation :plusIcons="plusIcons" />

  <main v-show="plusIcons" v-if="plusIcon" class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input
        @keyup="handleEnterKey"
        type="text"
        placeholder="Enter city or state name "
        class="py-2 p-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
      />
    </div>
  </main>

  <MainReport :result="result" :error="error" :city="city" />

  <div v-if="history.length != 0" class="container p-8 flex gap-4">
    <img src="../assets/logo/461610.webp" class="rounded-full w-8 h-8" />
    <h1 class="text-3xl text-white">Your Weather History</h1>
  </div>
  <WeatherTable v-if="history.length != 0" :history="history" :city="city" @remove-data="removeData" />
</template>

<script>
import axios from "axios";
import MainReport from "../components/MainReport.vue";
import WeatherTable from "../components/WeatherTable.vue";
import SiteNavigation from "@/components/SiteNavigation.vue";

export default {
  components: {
    MainReport,
    WeatherTable,
    SiteNavigation,
  },
  data() {
    return {
      city: "",
      result: null,
      error: null,
      history: [],
      plusIcon: false,
    };
  },
  methods: {
    async weatherSearch(event) {
      this.city = event.target.value;
      try {
        const options = {
          method: "GET",
          url: "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather",
          params: {
            city: this.city,
          },
          headers: {
            "X-RapidAPI-Key": "a87be39047mshee4395d1c960a9dp176673jsn542210b0cc5b",
            "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
          },
        };

        const response = await axios.request(options);
        console.log(response);
        this.result = response.data;
        this.error = null;
        // console.log("data recieved", this.result);
        this.result.city = this.city; /* created a new variable city in the result variable */
        this.history.push(this.result);
        localStorage.setItem("updatedData", JSON.stringify(this.history));
      } catch (error) {
        console.log(error);
        this.result = null;
        this.error = error;
      }
    },

    handleEnterKey(event) {
      if (event.keyCode === 13) {
        // Perform the action you want when Enter key is pressed
        this.doSomethingOnEnter(event);
      }
    },
    doSomethingOnEnter(event) {
      // Your desired action here
      this.weatherSearch(event);
    },
    plusIcons() {
      this.plusIcon = !this.plusIcon;
    },
    removeData(index) {
      // console.log("sdjbbc", index);
      // console.log(this.history);
      this.history.splice(index, 1);
    },
  },
};
</script>
