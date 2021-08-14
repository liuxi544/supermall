<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;

  background-color: #eee;

  display: flex;
  text-align: center;
  padding-top: 4px;
}
</style>