import { createApp } from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import App from "./App.vue";
import Container from "./Container.vue";
import Spinner from "./Spinner.vue";
import ImageGalleryItem from "./ImageGalleryItem.vue";
import ImageGallery from "./ImageGallery.vue";
import ButtonLoadMore from "./ButtonLoadMore.vue";
import ButtonUp from "./ButtonUp.vue";
import SearchBar from "./SearchBar.vue";
import Modal from "./Modal.vue";
import ImageFinder from "./ImageFinder.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  HiSearch,
  PxMoreHorizontal,
  IoCloseSharp,
  HiArrowSmUp,
} from "oh-vue-icons/icons";
addIcons(HiSearch, PxMoreHorizontal, IoCloseSharp, HiArrowSmUp);

const app = createApp(App);

app.use(Toast);

app.component("container", Container);
app.component("spinner", Spinner);
app.component("image-gallery-item", ImageGalleryItem);
app.component("image-gallery", ImageGallery);
app.component("button-load-more", ButtonLoadMore);
app.component("button-up", ButtonUp);
app.component("search-bar", SearchBar);
app.component("modal", Modal);
app.component("image-finder", ImageFinder);
app.component("v-icon", OhVueIcon);

app.mount("#app");
