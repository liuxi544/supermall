<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <tabbar-tp></tabbar-tp>
  </div>
</template>
<script>
import TabbarTp from "@/components/thisproject/TabbarTp.vue";

export default {
  name: "App",
  components: {
    TabbarTp,
  },
  methods: {
    tabClick(path) {
      this.$router.replace(path);
    },
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
