<template>
  <div class="wrapper">
    <fade-loader
      :color="'#3f51b5'"
      :height="'30px'"
      :width="'10px'"
      :radius="'40px'"
    />
  </div>
</template>

<script>
import FadeLoader from "vue-spinner/src/FadeLoader.vue";
export default {
  components: {
    FadeLoader,
  },
};
</script>

<style scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1200;
}
</style>
