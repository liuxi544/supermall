<template>
  <div>
    <nav-bar class="navbar">
      <div slot="center" class="center">我的</div>
    </nav-bar>
    <div class="login">
      <div class="avatar">
        <img src="~@/assets/img/profile/avatar.svg" alt="" />
      </div>
      <div class="right">
        <div class="reg">登录/注册</div>
        <img class="phone" src="~@/assets/img/profile/phone.svg" alt="" />
        <span>暂元绑定手机号</span>
      </div>
    </div>
    <div class="money">
      <div>
        <span>0.00元</span>
        <div>我的余额</div>
      </div>
      <div class="bd">
        <span>0个</span>
        <div>我的优惠</div>
      </div>
      <div>
        <span>0分</span>
        <div>我的积分</div>
      </div>
    </div>
    <div class="other">
      <div class="message">
        <img src="~@/assets/img/profile/message.svg" alt="" />
        我的消息
      </div>
      <div class="shop">
        <img src="~@/assets/img/profile/shopping.svg" alt="" />
        积分商城
      </div>
      <div class="vip">
        <img src="~@/assets/img/profile/vip.svg" alt="" />
        会员卡
      </div>
      <div class="cart">
        <img src="~@/assets/img/profile/cart.svg" alt="" />
        我的购物车
      </div>
      <div class="download">
        <img src="~@/assets/img/profile/pointer.svg" alt="" />
        下载购物APP
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
export default {
  name: "Profile",
  components: {
    NavBar,
  },
};
</script>

<style>
.navbar {
  background-color: var(--color-tint);
  color: #fff;
}
.login {
  background-color: var(--color-tint);
  margin-top: 44px;
  height: 60px;
  width: 100%;
  display: flex;
}
.avatar {
  flex: 1;
  width: 70px;
}
.avatar img {
  width: 50px;
  margin-left: 10px;
}
.right {
  flex: 1;
  margin-left: -180px;
  padding-top: 10px;
  color: #fff;
}
.phone {
  width: 10px;
}
.login span {
  font-size: small;
}
.money {
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
  margin: 5px 0;
  border-bottom: 10px solid #eee;
}
.money div {
  text-align: center;
  width: 100px;
  height: 40px;
}
.money span {
  color: red;
}
.bd {
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
}
.other img {
  width: 15px;
  vertical-align: middle;
}
.other div {
  border-bottom: 1px solid #eee;
  padding: 8px 10px;
  font-size: 14px;
}
.other .vip {
  border-bottom: 10px solid #eee;
}
</style>