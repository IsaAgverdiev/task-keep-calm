<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <img :src="logo" alt="" />
        <a href="tel:+74954954954">+7 (495) 495-49-54</a>
      </div>
    </div>
  </header>
</template>

<script>
import logo from "@/assets/logo.png";
export default {
  data: function () {
    return {
      logo: logo,
    };
  },
};
</script>

<style scoped>
.header {
  background: rgb(70, 67, 65);
  background: linear-gradient(
    0deg,
    rgba(70, 67, 65, 1) 0%,
    rgba(1, 1, 1, 1) 100%
  );
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
}
</style>
