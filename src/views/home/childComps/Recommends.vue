<template>
  <div class="recommends">
    <div class="recommend-item" v-for="item in recommends" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommends",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommends {
  display: flex;
  font-size: 14px;
  justify-content: space-evenly;

  padding-top: 10px;
  padding-bottom: 25px;
  border-bottom: 10px solid #eee;
}
.recommends-item {
  flex: 1;
}
img {
  width: 60px;
}
</style>