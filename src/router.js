import { createRouter, createWebHistory } from "vue-router";

import Text from "@/components/Text.vue";
import Carousel from "@/components/Carousel.vue";

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
