import { createRouter, createWebHistory } from "vue-router";

import Text from "@/pages/Text.vue";
import Carousel from "@/pages/Carousel.vue";

const routes = [
  { path: "/", component: Text },
  { path: "/text", component: Text },
  { path: "/carousel", component: Carousel },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
