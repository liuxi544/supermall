<template>
  <div class="leftlist">
    <ul v-for="(item, index) in leftList" :key="item.miniWallkey" :in="index">
      <li
        @click="liClick(index, item)"
        :class="{ active: currentIndex == index }"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LeftList",
  props: {
    leftList: {
      type: Array,
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    liClick(index, item) {
      const obj = {
        maitKey: item.maitKey,
        index,
      };
      this.currentIndex = index;
      this.$emit("liClick", obj);
      // console.log(item.maitKey);
    },
  },
};
</script>

<style scoped>
/* .leftList {

} */
ul {
  text-align: center;
}
li {
  font-size: small;
  display: block;
  width: 80px;
  /* border: 1px solid #000; */
  padding: 7.7px 8px;
  background-color: #eee;
}
.active {
  color: red;
  background-color: #fff;
  border-left: 2px solid red;
}
</style>