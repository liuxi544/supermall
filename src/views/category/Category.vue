<template>
  <div>
    <nav-bar class="navbar">
      <div slot="center" class="center">商品分类</div>
    </nav-bar>
    <left-list :leftList="leftList" class="leftlist"></left-list>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import LeftList from "./childComps/LeftList.vue";

import { getCategory } from "@/network/category.js";
export default {
  name: "Category",
  components: {
    NavBar,
    LeftList,
  },
  data() {
    return {
      leftList: [],
    };
  },
  created() {
    getCategory().then((res) => {
      this.leftList = res.data.category.list;
    });
  },
};
</script>

<style>
.navbar {
  background-color: var(--color-tint);
  color: #fff;
}
.leftlist {
  padding-top: 44px;
  padding-bottom: 49px;
}
</style>