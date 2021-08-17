<template>
  <div>
    <nav-bar class="navbar">
      <div slot="center" class="center">商品分类</div>
    </nav-bar>
    <left-list
      :leftList="leftList"
      class="leftlist"
      @liClick="liClick"
    ></left-list>
    <sub-category
      :categoryList="subcategoryList"
      class="subcategory"
    ></sub-category>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import LeftList from "./childComps/LeftList.vue";
import SubCategory from "./childComps/SubCategory.vue";

import { getCategory, getSubcategory } from "@/network/category.js";
export default {
  name: "Category",
  components: {
    NavBar,
    LeftList,
    SubCategory,
  },
  data() {
    return {
      leftList: [],
      maitKey: "",
      subcategoryList: [],
      currentIndex: 0,
    };
  },
  created() {
    getCategory().then((res) => {
      this.leftList = res.data.category.list;
      this.$nextTick(() => {
        this.getSubcategory(this.leftList[0].maitKey);
        // this.getCategoryDetail(this.leftList[0].miniWallkey, "pop");
      });
    });
    // getSubcategory(this.maitKey).then((res) => {
    //   console.log(res);
    //   console.log(this.maitKey);
    // });
  },
  methods: {
    liClick({ maitKey, index }) {
      // this.maitKey = obj.maitKey;
      // console.log(this.maitKey);
      // 防止反复请求
      if (this.currentIndex === index) return;
      this.currentIndex = index;
      // 每次切换分类初始化tabControl的下标
      // this.$refs.tabControl.curIndex = 0;
      // 请求对应的推荐列表
      // this.getCategoryDetail(
      //   this.categoryList[this.currentIndex].miniWallkey,
      //   "pop"
      // );
      this.getSubcategory(maitKey);
    },
    getSubcategory(key) {
      getSubcategory(key).then((res) => {
        // console.log(res.data.list);
        this.subcategoryList = [...res.data.list];
        // console.log(res);
        console.log(this.subcategoryList);
      });
    },
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
  position: fixed;
}
/* .subcategory {
  float: right;
} */
</style>