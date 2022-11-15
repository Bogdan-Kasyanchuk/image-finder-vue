<template>
  <li class="gallery-item">
    <img
      class="gallery-item-image"
      :src="webformatURL"
      :alt="user"
      :data-fullsize="largeImageURL"
    />
  </li>
</template>

<script>
export default {
  props: {
    webformatURL: {
      type: String,
      default: "",
    },
    user: {
      type: String,
      default: "",
    },
    largeImageURL: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.gallery-item {
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  &-image {
    height: 260px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: scale(1.03);
      cursor: zoom-in;
    }
  }
}
</style>
