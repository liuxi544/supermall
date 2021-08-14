<template>
  <div @click="itemClick">
    <img
      :src="this.goodsitem.image || this.goodsitem.img || goodsitem.show.img"
      alt=""
    />
    <div class="goods-info">
      <p>{{ goodsitem.title }}</p>
      <span class="price">{{ goodsitem.price }}</span>
      <span class="collect">{{ goodsitem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    itemClick() {
      var iid = this.goodsitem.iid;
      this.$router.push("/detail/" + iid);
    },
  },
};
</script>

<style>
img {
  width: 100%;
}
p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.goods-info {
  text-align: center;
}
.price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.collect {
  position: relative;
  z-index: -1;
}
.collect::before {
  content: "";
  position: absolute;
  top: 0;
  left: -15px;
  width: 14px;
  height: 14px;
  background: url("~@/assets/img/common/collect.svg") 0 0/14px 14px;
  z-index: -1;
}
</style>