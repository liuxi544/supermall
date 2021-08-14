<template>
  <div class="tabcontrol">
    <div
      v-for="(item, index) in tabs"
      :key="item"
      :in="index"
      class="tabcontrolitem"
      @click="itemClick(index)"
    >
      <span :class="{ active: currentIndex == index }">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      tabs: ["流行", "新款", "热卖"],
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.$emit("itemClick", index);
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.tabcontrol {
  display: flex;
  text-align: center;
  height: 30px;
  align-items: center;
  margin-bottom: 5px;

  position: sticky;
  top: 43px;
  background-color: #fff;
}
.tabcontrolitem {
  flex: 1;
}
.active {
  padding-bottom: 2px;
  border-bottom: 3px solid rgb(226, 114, 114);
}
</style>