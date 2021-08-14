<template>
  <div class="home">
    <nav-bar class="navbar">
      <div slot="center" class="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" :recommends="recommends"></home-swiper>
    <Recommends :recommends="recommends" ref="recommeds"></Recommends>
    <tab-control @itemClick="itemClick"></tab-control>
    <goodslist :goods="showGoods"></goodslist>
    <back-top v-show="arrive" @click.native="backTop()"></back-top>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import Goodslist from "@/components/thisproject/goods/Goods.vue";
import TabControl from "@/components/thisproject/tabControl/TabControl.vue";
import BackTop from "@/components/common/backTop/BackTop.vue";

import HomeSwiper from "./childComps/HomeSwiper.vue";
import Recommends from "./childComps/Recommends.vue";

import { getHomeMultidata, getHomeGoods } from "@/network/home.js";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    Recommends,
    Goodslist,
    TabControl,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentIndex: 0,
      currentType: "pop",
      arrive: false,
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    // debounce(func, delay) {
    //   let timer = null;
    //   return function (...args) {
    //     if (timer) clearTimeout(timer);

    //     timer = setTimeout(() => {
    //       func.apply(this, args);
    //     }, delay);
    //   };
    // },
    getHomeGoods(type) {
      var page = this.page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.page = page;
        // console.log("到底了，开始加载数据");
        // console.log(res.data.list);
      });
    },
    itemClick(index) {
      switch (index) {
        case 0: {
          this.currentType = "pop";

          break;
        }
        case 1: {
          this.currentType = "new";
          break;
        }
        case 2: {
          this.currentType = "sell";
          break;
        }
      }
    },
    show() {
      let distance =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (distance > 1000) {
        this.arrive = true;
      } else {
        this.arrive = false;
      }
    },
    backTop() {
      document.documentElement.scrollTop = document.body.scrollTop = 0;
    },
    scrollPosition() {
      let clientHeight = document.documentElement.clientHeight; //浏览器高度
      let scrollHeight = document.body.scrollHeight;
      let scrollTop = document.documentElement.scrollTop;
      let distance = 50; //距离视窗还用50的时候，开始触发；

      if (scrollTop + clientHeight >= scrollHeight - distance) {
        this.getHomeGoods(this.currentType);
      }
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.show);
    window.addEventListener("scroll", this.scrollPosition);
  },
  deactivated() {
    window.removeEventListener("scroll", this.show);
    window.removeEventListener("scroll", this.scrollPosition);
  },
};
</script>

<style scoped>
.home {
  padding-bottom: 49px;
}
.navbar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>