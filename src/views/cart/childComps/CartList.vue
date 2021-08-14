<template>
  <div class="cartlist">
    <!-- {{ cartList }} -->
    <cart-list-item
      v-for="item in cartList"
      :key="item.iid"
      :itemInfo="item"
    ></cart-list-item>
  </div>
</template>

<script>
import CartListItem from "./CartListItem.vue";
export default {
  name: "CartList",
  props: {
    cartList: {
      type: Array,
    },
  },
  components: {
    CartListItem,
  },
};
</script>

<style scoped>
.cartlist {
  padding-top: 44px;
}
</style>