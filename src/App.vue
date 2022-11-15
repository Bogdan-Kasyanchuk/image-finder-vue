<template>
  <container>
    <image-finder />
  </container>
</template>

<script></script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  color: #212121;
  background-image: linear-gradient(to right, #abbaab, #ffffff);
}

ul,
li {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
}

.button {
  padding: 0 10px;
  color: #fff;
  line-height: 1;
  border: 0;
  border-radius: 2px;
  background-color: #3f51b5;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #b03636;
  }
}

img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
