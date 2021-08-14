<template>
  <div>
    <nav-bar class="navbar">
      <div slot="center" class="center">
        购物车({{ $store.state.cartList.length }})
      </div>
    </nav-bar>
    <cart-list class="cartlist" :cartList="cartList"></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import CartList from "./childComps/CartList.vue";
import CartBottomBar from "./childComps/CartBottomBar.vue";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar,
  },
  computed: {
    cartList() {
      return this.$store.state.cartList;
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: var(--color-tint);
}
</style>