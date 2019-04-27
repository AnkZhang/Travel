<template>
  <div>
    <homeHeader></homeHeader>
    <homeSwiper :list="swiperList"></homeSwiper>
    <homeIcons :list="iconList"></homeIcons>
    <homeRecommend :list="recommendList"></homeRecommend>
    <homeWeekend :list="weekendList"></homeWeekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      // get方法返回promise类型的实例
      axios.get('/api/index.json?city=' + this.city)
      // then函数可以回调请求成功或失败后两个函数，
      // 这里只写了成功情况的函数
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        // Home组件请求到数据后，通过添加属性的方式向子组件传值
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
// scoped意思是选择器只作用在这个组件中，和其它组件中同名的类名等不会冲突。
<style lang="stylus" scoped>

</style>

