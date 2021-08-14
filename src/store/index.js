import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payload) {
      payload.count = 1
      payload.checked = false
      state.cartList.push(payload);
    },
    addCount(state, index) {
      state.cartList[index].count += 1
    }
  },
  actions: {
    addToCart(context, payload) {
      return new Promise(resolve => {
        const oldinfo = this.state.cartList.find(item => item.iid == payload.iid)
        if (oldinfo) {
          const index = context.state.cartList.indexOf(oldinfo)
          context.commit('addCount', index)
        } else {
          context.commit('addCart', payload)
        }
      })

      resolve()
    }
  },
  getters
})
export default store
