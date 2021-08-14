<template>
  <div class="baseinfo">
    <div>{{ goods.title }}</div>
    <div>
      <span class="newPrice">{{ goods.newPrice }}</span>
      <span class="oldPrice">{{ goods.oldPrice }}</span>
      <span class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span class="columns1">{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <!-- <span>{{ goods.services[goods.services.length - 1].name }}</span> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.baseinfo {
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
}
.newPrice {
  color: red;
  font-size: large;
}
.oldPrice {
  font-size: small;
  text-decoration: line-through;
}
.discount {
  margin-left: 5px;
  margin-top: 10px;
  font-size: small;
  padding: 2px 5px;
  background-color: red;
  text-align: center;
  line-height: 20px;
  border-radius: 20%;
  color: #fff;
}
.info-other {
  margin-top: 20px;
  font-size: 12px;
}
.columns1 {
  display: inline-block;
  margin-right: 80px;
}
</style>