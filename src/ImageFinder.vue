<template>
  <div class="image-finder">
    <search-bar @submitForm="getImages" />
    <spinner v-show="status === 'pending'" />
    <image-gallery
      v-show="status === 'resolved'"
      :images="images"
      @click="openModal"
    />
    <button-load-more
      v-show="images.length > 10 && status === 'resolved'"
      @click="getMoreImages"
    />
    <button-up v-show="images.length > 10" />
  </div>
  <Teleport to="body">
    <Transition name="modal">
      <modal
        v-if="showModal"
        :show="showModal"
        :fullSize="fullSize"
        :name="alt"
        @close="showModal = false"
      />
    </Transition>
  </Teleport>
</template>

<script>
import { useToast } from "vue-toastification";
import pixabayAPI from "./services/pixabayAPI.js";
import { scrollPosition, scrollBottom } from "./helpers/scrollBottom.js";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },

  data() {
    return {
      query: "",
      images: [],
      status: null,
      page: 1,
      showModal: false,
      fullSize: "",
      alt: "",
    };
  },

  methods: {
    async getImages(searchQuery) {
      if (this.query === searchQuery) return;
      this.query = searchQuery;
      this.page = 1;
      this.status = "pending";
      await pixabayAPI(this.query, this.page)
        .then((data) => {
          if (data.length === 0) {
            this.toast.warning(
              "Sorry, there are no images matching your search query. Please try again."
            );
            this.images = [];
          } else {
            this.images = data;
          }
          this.status = "resolved";
        })
        .catch((error) => {
          this.status = null;
          this.toast.error(`${error}`);
        });
    },

    async getMoreImages() {
      scrollPosition();
      this.page += 1;
      this.status = "pending";
      await pixabayAPI(this.query, this.page)
        .then((data) => {
          if (data.length === 0) {
            this.toast.warning(
              "Sorry, there are no images matching your search query. Please try again."
            );
          } else {
            this.images = [...this.images, ...data];
          }
          this.status = "resolved";
        })
        .catch((error) => {
          this.status = null;
          this.toast.error(`${error}`);
        });
      scrollBottom();
    },

    openModal(e) {
      if (e.target.nodeName !== "IMG") return;
      this.showModal = true;
      this.fullSize = e.target.dataset.fullsize;
      this.alt = e.target.alt;
    },
  },
};
</script>

<style scoped>
.image-finder {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
