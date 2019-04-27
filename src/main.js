// 入口文件，主要作用是初始化vue实例并使用需要的插件。
// 使用某些插件使用Vue.use(xxx)。
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决点击事件300毫秒延迟问题
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import store from './store'
// 引入reset.css文件
import 'styles/reset.css'
// 一像素边框
import 'styles/border.css'
// 在main.js文件中引入iconfont.css文件
import 'styles/iconfont.css'
// 安装并使用vue-awesome-swiper组件
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  // 声明了根实例Vue，将其挂载到了index.html中id为app的div上
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
