<template>
  <div id="app">
    <div class="mian">
      <div class="btn-wrapper">
        <button class="btn btn-primary" @click="delHandleClick({step: 6})">-</button>
        {{count}}-{{filterCount}}
        <button class="btn btn-primary" @click="addHandleClick">+</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  name: 'Demo',
  computed: {
    // num () {
    //   return this.$store.state.count
    // },
    // filterNum () {
    //   return this.$store.getters.filterCount
    // }
    ...mapState({
      count: state => state.countModule.count
    }),
    ...mapGetters({filterCount: 'filterCount'})
  },
  methods: {
    // delHandleClick () {
    //   this.$store.dispatch('dispatchDel', {
    //     step: 6
    //   })
    // },
    // addHandleClick () {
    //   this.$store.commit('add')
    // }
    ...mapActions({
      delHandleClick: 'dispatchDel'
    }),
    ...mapMutations({
      addHandleClick: 'add'
    })
  }
}
</script>

<style lang="stylus" scoped>
  .mian
    display:flex
    flex-direction:column
    justify-content:center
    width:100%
    height:4rem
    .btn-wrapper
      margin:0 auto
      .btn
        width:1rem
        height:.5rem
        border-radius:.5rem
      .btn-primary
        background:indianred
</style>
