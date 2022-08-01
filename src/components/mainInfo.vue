<template>
  <div class="mainInfo">
    <div class="swiper">
      <van-swipe :autoplay="2000" :show-indicators=false>
        <van-swipe-item v-for="(banner, index) in bannerList" :key="index">
          <img v-lazy="banner.imageUrl" class="bannerImg"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="navbar"></div>
  </div>
</template>

<script>
export default {
  name: 'mainInfo',
  data () {
    return {
      bannerList: []
    }
  },
  mounted () {
    this.$bus.$on('getBanners', (banners) => {
      console.log('succeed', banners)
      this.bannerList = banners
    })
  }
}
</script>

<style>
.mainInfo{
  width: 187.5px;
  height: auto;
}
.swiper{
  width: 187.5px;
  height: 60px;
  margin-top: 5px;
  overflow: hidden;
}
.bannerImg{
  width: 90%;
  height: 100%;
  border-radius: 10px;
  margin-left: 5%;
}
.navbar{
  width: 187.5px;
  height: 30px;
  display: flex;
  margin-top: 3px;
  justify-content: space-evenly;
}
</style>
