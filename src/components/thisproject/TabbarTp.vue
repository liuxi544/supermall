<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <img src="@/assets/img/tabbar/home.svg" alt="" slot="img" />
      <img src="@/assets/img/tabbar/home_active.svg" alt="" slot="img_active" />
      <div slot="title">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img src="@/assets/img/tabbar/category.svg" alt="" slot="img" />
      <img
        src="@/assets/img/tabbar/category_active.svg"
        alt=""
        slot="img_active"
      />
      <div slot="title">目录</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img src="@/assets/img/tabbar/shopcart.svg" alt="" slot="img" />
      <img
        src="@/assets/img/tabbar/shopcart_active.svg"
        alt=""
        slot="img_active"
      />
      <div slot="title">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img src="@/assets/img/tabbar/profile.svg" alt="" slot="img" />
      <img
        src="@/assets/img/tabbar/profile_active.svg"
        alt=""
        slot="img_active"
      />
      <div slot="title">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../common/tabbar/TabBar.vue";
import TabBarItem from "../common/tabbar/TabBarItem.vue";

export default {
  name: "Tabbar_tp",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>