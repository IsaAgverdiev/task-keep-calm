<template>
  <Header />
  <Tabs />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Main from "./pages/Main.vue";

import Tabs from "@/components/Tabs.vue";
export default {
  name: "App",
  components: { Header, Footer, Main, Tabs },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap");

#app {
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  height: 100%;
  font-family: "Manrope", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100vh;
}
main {
  flex: 1 0 auto;
}

.container {
  max-width: 1440px;
  padding: 0 20px;
  margin: 0 auto;
}

a {
  color: #fff;
  text-decoration: none;
  font-family: "Manrope", sans-serif;
}
a:visited {
  color: inherit;
  font-size: 24px;
}
</style>
