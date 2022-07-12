<template>
  <div class="tabs">
    <div class="container">
      <div class="tabs__wrap">
        <button
          :class="{ active: activeTabText }"
          class="tab"
          @click="$router.push('/text')"
        >
          Дискусия
        </button>
        <button
          :class="{ active: activeTabCarousel }"
          class="tab"
          @click="$router.push('/carousel')"
        >
          Слайдер
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTabText: true,
      activeTabCarousel: false,
    };
  },
  watch: {
    $route(to, from) {
      const path = to.path.slice(1);

      if (path === "text") {
        (this.activeTabText = true), (this.activeTabCarousel = false);
      } else if (path === "carousel") {
        (this.activeTabText = false), (this.activeTabCarousel = true);
      }
    },
  },
};
</script>

<style>
.tabs__wrap {
  display: flex;
  width: 100%;
  gap: 55px;
  margin-top: 80px;
  justify-content: flex-start;
}
.tab {
  background: none;
  outline: none;
  border: none;
  font-size: 36px;
  font-weight: bold;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-family: "Manrope", sans-serif;
  border-bottom: 3px solid transparent;
  transition: 0.3s;
}

.tab.active {
  border-bottom: 3px solid #141414;
  transition: 0.3s;
}

@media (max-width: 1399px) {
  .tabs__wrap {
    margin-top: 30px;
  }
  .tab {
    font-size: 18px;
  }
}
</style>
