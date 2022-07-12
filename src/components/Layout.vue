<template>
  <Header />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  props: ["content"],
  components: { Header, Footer },
};
</script>

<style></style>
