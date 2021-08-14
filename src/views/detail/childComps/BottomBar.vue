<template>
  <div class="bottombar">
    <div class="left">
      <tab-bar-item class="tabbaritem">
        <div slot="img" class="img1 img"></div>
        <div slot="title">客服</div>
      </tab-bar-item>
      <tab-bar-item>
        <div slot="img" class="img2 img"></div>
        <div slot="title">店铺</div>
      </tab-bar-item>
      <tab-bar-item>
        <div slot="img" class="img3 img"></div>
        <div slot="title">收藏</div>
      </tab-bar-item>
    </div>
    <div class="bar-right">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
import TabBarItem from "@/components/common/tabbar/TabBarItem.vue";
export default {
  name: "BottomBar",
  components: {
    TabBarItem,
  },
  methods: {
    addCart() {
      this.$emit("addCart");
    },
  },
};
</script>

<style scoped>
.bottombar {
  position: fixed;
  bottom: 0;
  /* background: red; */
  height: 49px;
  z-index: 10;
  width: 100%;
}
.tabbaritem {
  margin: 0 10px;
}
.left {
  display: flex;
  width: 50%;
  background-color: #fff;
}
.img {
  flex: 1;
  width: 24px;
  height: 24px;
  background-image: url(~@/assets/img/detail/detail_bottom.png);
  background-size: 100%;
  background-repeat: no-repeat;
  margin: 5px 2px;
}
.img1 {
  background-position-y: -58px;
}
.img2 {
  background-position-y: -105px;
}
.img3 {
  background-position-y: 2px;
}
.bar-right {
  font-size: 15px;
  color: #fff;
  line-height: 58px;
  display: flex;
  text-align: center;
}

.bar-right .cart {
  background-color: #ffe817;
  color: #333;
  width: 100px;
}

.bar-right .buy {
  background-color: #f69;
  width: 60px;
}
</style>