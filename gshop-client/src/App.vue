<template>
  <!-- 修改应用组件的模板 -->
  <div id="app">
    <!-- 设置路由组件的视图位置 -->
    <router-view></router-view>
    <!-- 并放置非路由组件 -->
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
// 引入底部组件并注册
export default {
  mounted(){
    //  this.$store.dispatch('getAddress')
    this.getAddress()
    this.getUserInfo()
    this.getShopInfo()
  },
  methods:{
    ...mapActions(['getAddress','getUserInfo','getShopInfo'])
  },
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
// 整个应用组件的样式
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
