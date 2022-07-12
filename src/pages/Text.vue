<template>
  <section class="page1">
    <div class="container">
      <h1 class="title page1__title">Lorem ipsum dolor sit amet</h1>
      <div class="page1__inner">
        <div class="page1__left page1__inner-item">
          <h2 class="title subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h2>
          <p class="page1__text page1__left-text">
            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum/ Incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat.
          </p>
          <div class="img__wrap">
            <img class="img img1" :src="img1" alt="photo" />
          </div>
        </div>
        <div class="page1__right page1__inner-item">
          <div class="img__wrap img2__wrap">
            <img class="img img2" :src="img2" alt="photo" />
          </div>
          <h2 class="title subtitle page1__right-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h2>
          <p class="page1__text page1__right-text">
            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import img1 from "@/assets/page1/img1.jpg";
import img2 from "@/assets/page1/img2.jpg";

export default {
  data: function () {
    return {
      img1: img1,
      img2: img2,
    };
  },
};
</script>

<style>
.page1 {
  margin-bottom: 222px;
}
.page1__inner {
  display: flex;
  gap: 200px;
}
.page1__inner-item {
  max-width: 600px;
  width: 100%;
}

.page1__text {
  font-size: 18px;
  line-height: 130%;
}
.page1__left-text {
  margin-top: 25px;
  margin-bottom: 112px;
}

.img__wrap {
  width: 100%;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img2 {
  width: auto;
}
.subtitle.page1__right-subtitle {
  margin-top: 125px;
  margin-bottom: 25px;
}
</style>
