<template>
    <div class="musicList">
        <div class="musicTop">
            <div class="musicTitle">发现好歌单</div>
            <div class="musicMore">查看更多</div>
        </div>
        <div class="musicContent">
            <van-swipe :loop="false" :width="150" class="my-swipe" :show-indicators=false>
                <van-swipe-item v-for="(item, index) in musicList" :key="index">
                <router-link :to="{path:'/itemMusic',query:{id:item.id}}">
                 <img :src="item.picUrl" alt="">
                 <span class="playCount">
                    <svg class="iconfont" aria-hidden="true">
                        <use xlink:href="#icon-bofang1"></use>
                    </svg>
                    {{changeCount(item.playCount)}}
                 </span>
                 <span class="name">{{item.name}}</span>
                 </router-link>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>
<script>
import { getMusicList } from '../request/api/home'
export default {
  data () {
    return {
      musicList: []
    }
  },
  methods: {
    async getGedan () {
      let res = await getMusicList()
      this.musicList = res.data.result
    },
    changeCount: function (num) {
      if (num >= 100000000) {
        return (num / 100000000).toFixed(1) + '亿'
      } else if (num >= 10000) {
        return (num / 10000).toFixed(1) + '万'
      }
    }
  },
  mounted () {
    this.getGedan()
  }
}
</script>
<style>
.musicList {
    width: 100%;
    height: 5rem;
    padding: 0.2rem;
}

.musicTop {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
}

.musicTitle{
    font-size: 0.4rem;
    font-weight: 900;
}

.musicMore {
    border: 1px solid #ccc;
    text-align: center;
    line-height: 0.6rem;
    padding: 0 0.2rem;
    border-radius: 0.4rem;
}

.musicContent {
    width: 100%;
    height: 4rem;
    margin-top: .2rem;
}

.my-swipe {
    height: 100%;
}

.my-swipe img {
    width: 100%;
    height: 3rem;
    border-radius: 0.2rem;
}

.playCount .iconfont {
    width: 1.5em;
    height: 1.5em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    line-height: 1.5rem;
}

.my-swipe .van-swipe-item {
    position: relative;
    padding: 0 0.1rem;
}

.playCount {
    position: absolute;
    right: 0.3rem;
    top: 0.1rem;
    display: flex;
    align-items: center;
    color: #fff;
}
</style>
