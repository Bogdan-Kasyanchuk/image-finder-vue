<template>
  <div class="overlay" @click="closeModal">
    <div class="modal">
      <img :src="fullSize" :alt="name" />
    </div>
    <button type="button" class="button button-close" @click="$emit('close')">
      <v-icon name="io-close-sharp" scale="1.8" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    fullSize: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  },

  mounted() {
    window.addEventListener("keydown", this.closeModal);
  },

  beforeUnmount() {
    window.removeEventListener("keydown", this.closeModal);
  },

  methods: {
    closeModal(e) {
      if (e.currentTarget === e.target || e.code === "Escape") {
        this.$emit("close");
      }
    },
  },
};
</script>

<style scoped>
.overlay {
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
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.modal {
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
}

.button-close {
  position: absolute;
  top: 12px;
  right: 28px;
}
</style>
