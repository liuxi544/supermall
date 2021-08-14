<template>
  <swiper>
    <swiper-item v-for="item in img" :key="item" class="swiperitem">
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";

export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    img: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.swiperitem {
  height: 300px;
}
</style>