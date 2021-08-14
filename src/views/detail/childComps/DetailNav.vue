<template>
  <nav-bar class="navbar">
    <div slot="left" class="left" @click="backClick"><</div>
    <div slot="center" class="center">
      <div
        v-for="(item, index) in titles"
        :key="item"
        :in="index"
        @click="itemClick(index)"
        :class="{ red: currentIndex == index }"
      >
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
export default {
  name: "DetailNav",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  computed: {},
  methods: {
    backClick() {
      this.$router.back();
    },
    itemClick(index) {
      this.$emit("itemClick", index);
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #fff;
}
.left {
  width: 20px;
  height: 100%;
  position: absolute;
  left: 15px;
  top: 10px;
  color: #000;
}
.center div {
  float: left;
  width: 45px;
  text-align: center;
  color: #000;
}
.center .red {
  color: red;
}
</style>