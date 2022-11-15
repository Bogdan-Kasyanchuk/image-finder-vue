<template>
  <ul class="gallery">
    <image-gallery-item
      v-for="image in images"
      :key="image.id"
      :webformatURL="image.webformatURL"
      :user="image.user"
      :largeImageURL="image.largeImageURL"
    ></image-gallery-item>
  </ul>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style scoped>
.gallery {
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  max-width: calc(100% - 48px);
}
</style>
