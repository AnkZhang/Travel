<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        // pagination: '.swiper-pagination',
        pagination: {
          el: '.swiper-pagination'
        },
        // 设置小圆点和自动滚动
        loop: true,
        autoplay: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
// 设置.wrapper里的.swiper-pagination-bullet-active类型的样式，
// 因为swiper是另一个组件中的class，>>>可以穿透到其它组件，无视scoped的作用。
  .wrapper >>> .swiper-pagination-bullet-active {
    background: #fff !important
  }
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
