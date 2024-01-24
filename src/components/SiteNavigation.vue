<template>
  <header class="sticky top-0 bg-weather-secondary shadow-lg z-50">
    <nav class="container flex flex-col sm:flex-row items-center gap-4 text-white py-6">
      <div id="nav">
        <router-link to="/">
          <div class="flex items-center gap-3">
            <i class="fa-solid fa-sun text-2xl"></i>
            <Transition appear @before-enter="beforeEnter" @enter="enter">
              <p class="text-2xl">The Local Weather</p>
            </Transition>
          </div>
        </router-link>
      </div>

      <div class="flex gap-3 flex-1 justify-end">
        <i class="fa-solid fa-circle-info text-xl hover:text-weather-secondary duration-150 cursor-pointer" v-on:click="close"></i>
        <i class="fa-solid fa-plus text-xl hover:text-weather-secondary duration-150 cursor-pointer" v-on:click="plusIcons"></i>
        <div id="nav">
          <router-link to="/about">About</router-link>
        </div>
      </div>
    </nav>
    <Transition name="popup">
      <BaseModal v-show="showdata" :closekro="close" />
    </Transition>
  </header>
</template>

<script>
import BaseModal from "./BaseModal.vue";
import gsap from "gsap";
export default {
  components: {
    BaseModal,
  },

  data() {
    return {
      showdata: false,
    };
  },
  methods: {
    close() {
      this.showdata = !this.showdata;
    },
  },
  props: ["plusIcons"],
  setup() {
    const beforeEnter = (el) => {
      el.style.transform = "translateY(-60px)";
      el.style.opacity = 0;
    };
    const enter = (el) => {
      el.style.opacity = 1;
      gsap.to(el, {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "bounce.out",
      });
    };

    return {
      beforeEnter,
      enter,
    };
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
    transform: translateX(0px);
  }
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
