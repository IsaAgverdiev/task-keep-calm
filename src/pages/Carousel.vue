<template>
  <main class="main">
    <div class="container">
      <h1 class="title carousel-title">Лучшие аниме тайтлы</h1>
      <carousel :items-to-show="3.95" :wrapAround="true">
        <slide v-for="slide in images" :key="slide">
          <img class="slide__img" :src="slide" alt="" />
        </slide>

        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>
  </main>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

import img1 from "@/assets/page2/1.jpg";
import img2 from "@/assets/page2/2.jpg";
import img3 from "@/assets/page2/3.jpg";
import img4 from "@/assets/page2/4.jpg";
import img5 from "@/assets/page2/5.jpg";
import img6 from "@/assets/page2/6.jpg";
import img7 from "@/assets/page2/7.jpg";

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },

  data() {
    return {
      images: [img1, img2, img3, img4, img5, img6, img7],
    };
  },
};
</script>

<style>
.carousel-title {
  text-align: center;
}
.carousel__slide {
  padding: 15px;
  width: 300px;
  height: 550px;
}
.carousel__slide > .slide__img {
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .slide__img {
  opacity: 1;
  transition: 0.5s;
}

.slide__img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  background: #c3c3c3;
  border: 1px solid #141414;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.carousel {
  position: relative;
  margin-bottom: 210px;
}
.carousel__prev,
.carousel__next {
  /* box-sizing: content-box; */
  position: absolute;
  bottom: -65px;
  background: none;
  top: auto;
}
.carousel__prev svg path,
.carousel__next svg path {
  fill: #000;
}
.carousel__prev {
  left: auto;
  right: 50%;
}
.carousel__next {
  left: 50%;
}
</style>
