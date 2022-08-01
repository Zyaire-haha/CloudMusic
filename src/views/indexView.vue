<template>
  <div class="indexView">
    <router-view></router-view>
    <van-tabbar route v-model="active">
      <van-tabbar-item replace to="/index/home" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item replace to="" icon="search">标签</van-tabbar-item>
      <van-tabbar-item replace to="" icon="search">标签</van-tabbar-item>
      <van-tabbar-item replace to="" icon="search">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'indexView',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style>
.indexView{
  width: 187.5px;
  height: auto;
  display: flex;
  flex-direction: column;
}
</style>
