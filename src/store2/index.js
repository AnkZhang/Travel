import Vue from 'vue'
import Vuex from 'vuex'
import countModule from './module/countModule/'

Vue.use(Vuex)

// 定义一个状态管理容器
let store = new Vuex.Store({
  modules: {
    countModule
  }
})
export default store
