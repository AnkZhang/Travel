// 所有的页面基于此项目主组件
<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <!-- 子路由视图 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
