import Vue from 'vue'
import VueRouter from 'vue-router'

let home = () => import('@/views/home/Home.vue')
let category = () => import('@/views/category/Category.vue')
let cart = () => import('@/views/cart/Cart.vue')
let profile = () => import('@/views/profile/Profile.vue')
let detail = () => import('@/views/detail/Detail.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/detail/:iid',
    component: detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
