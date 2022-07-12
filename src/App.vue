<template>
  <Header />
  <Tabs />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

import Tabs from "@/components/Tabs.vue";

export default {
  name: "App",
  components: { Header, Footer, Tabs },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap");

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

#app {
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  height: 100%;
  font-family: "Manrope", sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #141414;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

section {
  flex: 1 0 auto;
}

.container {
  max-width: 1440px;
  width: 100%;
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

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

.title {
  font-size: 64px;
  margin-top: 100px;
  margin-bottom: 70px;
}
.subtitle {
  font-size: 48px;
  margin: 0;
}
p {
  margin: 0;
}
</style>
