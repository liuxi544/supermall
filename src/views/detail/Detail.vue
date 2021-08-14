<template>
  <div class="detail">
    <detail-nav @itemClick="itemClick" ref="nav"></detail-nav>
    <detail-swiper :img="topImages"></detail-swiper>
    <goods-base-info :goods="goods"></goods-base-info>
    <goods-shop-info :shop="shop"></goods-shop-info>
    <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
    <detail-param-info :paramInfo="paramInfo" ref="param"></detail-param-info>
    <detail-comment-info
      :commentInfo="commentInfo"
      ref="comment"
    ></detail-comment-info>
    <Goodslist :goods="recommends" ref="recommend"></Goodslist>
    <bottom-bar @addCart="addToCart"></bottom-bar>
    <back-top v-show="arrive" @click.native="backTop()"></back-top>
  </div>
</template>

<script>
import DetailNav from "./childComps/DetailNav.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import GoodsBaseInfo from "./childComps/GoodsBaseInfo.vue";
import GoodsShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import Goodslist from "@/components/thisproject/goods/Goods.vue";
import BottomBar from "./childComps/BottomBar.vue";

import { backTopMixin } from "@/common/mixin.js";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "@/network/detail.js";

export default {
  name: "Detail",
  components: {
    DetailNav,
    DetailSwiper,
    GoodsBaseInfo,
    GoodsShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    Goodslist,
    BottomBar,
  },
  mixins: [backTopMixin],
  data() {
    return {
      iid: "",
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      scrollPosition: [],
      currentIndex: 4,
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    console.log(this.iid);
    getDetail(this.iid).then((res) => {
      // console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(data.itemInfo, data.columns, data.itemParams.rule);
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }
      getRecommend().then((res) => {
        this.recommends = res.data.list;
      });

      this.$nextTick(() => {
        this.scrollPosition = [];
        this.scrollPosition.push(0);
        this.scrollPosition.push(this.$refs.param.$el.offsetTop);
        this.scrollPosition.push(this.$refs.comment.$el.offsetTop);
        this.scrollPosition.push(this.$refs.recommend.$el.offsetTop);
        this.scrollPosition.push(1000000);
      });
    });
  },
  // updated() {
  //   this.scrollPosition = [];
  //   this.scrollPosition.push(0);
  //   this.scrollPosition.push(this.$refs.param.$el.offsetTop);
  //   this.scrollPosition.push(this.$refs.comment.$el.offsetTop);
  //   this.scrollPosition.push(this.$refs.recommend.$el.offsetTop);
  // },
  mounted() {
    window.addEventListener("scroll", this.contentScroll);
    window.addEventListener("scroll", this.scrollPosition);
  },
  methods: {
    contentScroll() {
      let offsetTop = document.documentElement.scrollTop + 44;

      for (let i = 0; i < this.scrollPosition.length; i++) {
        if (
          // this.currentIndex != i &&
          offsetTop >= this.scrollPosition[i] &&
          offsetTop < this.scrollPosition[i + 1]
        ) {
          // this.currentIndex = i;
          // console.log(this.currentIndex);
          this.$refs.nav.currentIndex = i;
          // console.log(this.$refs.nav.currentIndex);
        }
      }
    },
    itemClick(index) {
      window.scrollTo({
        top: this.scrollPosition[index] - 44,
        // left: PageId.offsetLeft,
        behavior: "smooth",
      });
    },
    addToCart() {
      const obj = {};
      obj.iid = this.iid;
      obj.imgURL = this.topImages[0];
      obj.title = this.goods.title;
      obj.desc = this.goods.desc;
      obj.price = this.goods.realPrice;

      // this.$store.state.cartList.push(obj);
      // console.log(this.$store.state.cartList);
      this.$store.dispatch("addToCart", obj).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style>
</style>