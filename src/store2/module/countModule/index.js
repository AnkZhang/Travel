// 定义一个状态管理容器
let countModule = {
  state: {
    count: 10086
  },
  // state 中定义的所有状态，都必需也只能通过 mutations 中的方法来进行修改，
  // 在其它组件中通过调用此方法来间接地修改 state 中的状态
  mutations: {
    add (state) {
      state.count++
    },
    del (state, params) {
      state.count -= params.step
    }
  },
  getters: {
    filterCount (state) {
      return state.count > 10088 ? 10088 : state.count
    }
  },
  actions: {
    dispatchDel (context, params) {
      setTimeout(() => {
        context.commit('del', params)
      }, 1000)
    }
  }
}
export default countModule
