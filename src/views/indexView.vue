<template>
  <div>
    <TopNavVue />
    <SwiperTopVue />
    <IconListVue />
    <MusicListVue />
  </div>
</template>

<script>
import TopNavVue from '../components/TopNav.vue'
import SwiperTopVue from '../components/SwiperTop.vue'
import IconListVue from '../components/IconList.vue'
import MusicListVue from '../components/MusicList.vue'
export default {
  name: 'indexView',
  components: {
    TopNavVue,
    SwiperTopVue,
    IconListVue,
    MusicListVue
  }
}
</script>

<style>
</style>
