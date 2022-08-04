<template>
    <div id="swiperTop">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image.imageUrl" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
import axios from 'axios'
import { getBanner } from '../api/api'
import { reactive, onMounted } from 'vue'
import { async } from 'q'
export default {
  data () {
    return {
      images: []
    }
  },
  methods: {
    async getLunbo () {
      let res = await getBanner()
      this.images = res.data.banners
    }
  },
  mounted () {
    this.getLunbo()
  }
}

</script>
<style>
.van-swipe {
    width: 100%;
    height: 3rem;
}
.van-swipe .van-swipe-item {
    padding: 0 0.2rem;
}
.van-swipe__track .van-swipe-item img {
    width: 100%;
    height: 3rem;
    border-radius: 0.2rem;
}
.van-swipe__indicator--active {
    background-color: rgb(219, 130, 130);
}
</style>
