export default {
  //定义名为changeCity的方法，可直接操作state属性
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
