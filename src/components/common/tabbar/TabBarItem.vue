<template>
  <div class="tabbaritem" @click="tabClick()">
    <slot name="img" v-if="!currentActive"></slot>
    <slot name="img_active" v-else></slot>
    <div :style="currentStyle">
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {};
  },
  props: {
    path: {
      type: String,
      default() {
        return "";
      },
    },
    activeColor: {
      type: String,
      default() {
        return "red";
      },
    },
  },
  methods: {
    tabClick() {
      this.$router.replace(this.path);
    },
  },
  computed: {
    currentActive() {
      return this.$route.path == this.path;
    },
    currentStyle() {
      return this.currentActive ? { color: this.activeColor } : {};
    },
  },
};
</script>

<style>
.tabbaritem {
  flex: 1;
  font-size: 14px;
}
.tabbaritem img {
  width: 24px;
}
</style>