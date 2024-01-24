<template>
  <SiteNavigation />
  <div class="container py-8 about">
    <Transition appear @before-enter="beforeEnter" @enter="enter">
      <h1>About</h1>
    </Transition>
    <p>
      My self Vivek singh and i am Currently Persuing Frond-end Development with Javascript and Vue js from the open Sources Available on Youtube.
    </p>
    &nbsp;

    <p>
      I am Currently a Intern at &nbsp;
      <span> <a href="https://www.argusoft.com/" target="_blank"> Argusoft India</a></span> &nbsp; and soon be Joining as a Jr. Programmer Analyst in
      Argusoft.
    </p>
    &nbsp;
    <Transition appear @before-enter="beforeEnter" @enter="enter"> <h2>My Skills</h2></Transition>

    <div class="container skills flex flex-col justify-around sm:flex-row">
      <img src="@/assets/html.png" />

      <img src="@/assets/css.png" />
      <img src="@/assets/javascript.png" />
      <img src="@/assets/tailwind.png" />
      <img src="@/assets/vue.png" />
    </div>
  </div>
</template>

<script>
import SiteNavigation from "@/components/SiteNavigation.vue";
import gsap from "gsap";
export default {
  name: "About",
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
  components: { SiteNavigation },
};
</script>

<style>
.skills img {
  height: 100px;
  width: auto;

  @media (min-width: 500px) {
    height: 50px;
    width: 50px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }

  @media (min-width: 375px) {
    height: 30px;
    width: 30px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }
}

.skills img:hover {
  transform: scale(1.5);
  transition: ease-out 0.3s;
}
</style>
