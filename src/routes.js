import { createWebHistory, createRouter } from "vue-router";

// import SiteNavigation from "./components/SiteNavigation.vue";
import HomeView from "./views/HomeView.vue";
import About from "./views/About.vue";

const routes = [
  {
    name: "Home",
    component: HomeView,
    path: "/",
  },
  {
    name: "About",
    component: About,
    path: "/about",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
