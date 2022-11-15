<template>
  <button type="button" class="button button-up" @click="scroll">
    <v-icon name="hi-arrow-sm-up" scale="1.8" />
  </button>
</template>

<script>
import scrollTop from "./helpers/scrollTop.js";

export default {
  methods: {
    scroll() {
      scrollTop();
    },
  },
};
</script>

<style scoped>
.button-up {
  position: fixed;
  right: 24px;
  bottom: 24px;
}
</style>
