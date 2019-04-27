// 自己增加文件，作用为数据仓库，对项目中公用数据进行设置存储
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  mutations: mutations
})
