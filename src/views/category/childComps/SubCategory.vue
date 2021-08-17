<template>
  <div class="category-detail">
    <div
      :key="index"
      class="category-detail-item"
      v-for="(item, index) in categoryList"
    >
      <a :href="item.link"><img :src="item.image" alt="" /></a>
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
// import Scroll from "@/components/common/scroll/Scroll";

export default {
  name: "Subcategory",
  //   components: { Scroll },
  props: {
    categoryList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.category-detail {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* width: 100%; */
  width: 240px;
  padding: 10px;

  position: absolute;
  top: 44px;
  left: 80px;
}

.category-detail-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 70px;
  height: 100px;
  margin-bottom: 10px;
}

.category-detail-item img {
  width: 65px;
  margin-bottom: 7px;
}

.category-detail-item p {
  font-size: 14px;
}
</style>
