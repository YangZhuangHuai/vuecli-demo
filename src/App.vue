<template>
  <div id="app">
    <!-- Header区域 -->
    <Header />
    
    <!-- 导航列表区域 -->
    <TypeNav v-show="$route.meta.isShowTypeNav" />

    <!-- 路由显示区域 -->
    <router-view></router-view>
    <!-- Footer组件 -->
    <Footer v-show="!$route.meta.isHiddenFooter"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  
}
</script>

<style lang="less" scoped>
</style>