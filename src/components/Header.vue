<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <img class="header__logo" :src="logo" alt="" />
        <a v-if="!isMob" href="tel:+74954954954">+7 (495) 495-49-54</a>
        <a v-if="isMob" href="tel:+74954954954"
          ><img class="" :src="tel" alt=""
        /></a>
      </div>
    </div>
  </header>
</template>

<script>
import logo from "@/assets/logo.png";
import logoMobile from "@/assets/logo-mobile.png";
import tel from "@/assets/tel.png";

export default {
  data: function () {
    return {
      logo: logo,
      tel: tel,
      windowHeight: window.innerWidth,
      isMob: null,
    };
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
      if (this.windowHeight < 1399) {
        this.isMob = true;
        this.logo = logoMobile;
      } else {
        this.isMob = false;
      }
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      this.windowHeight = window.innerHeight;
    },
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

@media (max-width: 1399px) {
  .header__logo {
  }
}
</style>
