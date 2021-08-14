<template>
  <div class="goods">
    <goods-item
      v-for="item in goods"
      :key="item.id"
      :goodsitem="item"
      class="goodsitem"
    ></goods-item>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem.vue";
export default {
  name: "Goodslist",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodsItem,
  },
};
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.goodsitem {
  width: 48%;
}
</style>