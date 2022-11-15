<template>
  <header class="search">
    <form class="search-form" @submit.prevent="handleSubmit">
      <button type="submit" class="search-form-button">
        <v-icon name="hi-search" scale="1.3" />
        <span class="search-form-button-label">Search</span>
      </button>
      <input
        class="search-form-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images"
        v-model.trim="searchQuery"
      />
    </form>
  </header>
</template>

<script>
import { useToast } from "vue-toastification";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },

  data() {
    return {
      searchQuery: "",
    };
  },

  methods: {
    handleSubmit() {
      if (this.searchQuery === "") {
        this.toast.warning("Enter the name of the images!");
      } else {
        this.$emit("submitForm", this.searchQuery.toLocaleLowerCase());
        this.searchQuery = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding: 12px 24px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  &-form {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    padding: 8px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;

    &-button {
      margin-right: 10px;
      padding: 0;
      border: 0;
      opacity: 0.6;
      background-color: transparent;
      transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        opacity: 1;
      }

      &-label {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        clip-path: inset(50%);
        border: 0;
      }
    }

    &-input {
      display: inline-block;
      width: 100%;
      font-size: 22px;
      border: none;
      outline: none;
    }
  }
}
</style>
