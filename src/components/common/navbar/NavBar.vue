<template>
  <div class="navbar">
    <slot name="left"></slot>
    <slot name="center"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.navbar {
  height: 44px;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 2px 3px 0.5;

  position: fixed;
  top: 0;
  z-index: 9;
}
</style>