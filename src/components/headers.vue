<template>
  <div class="headers">
    <div class="menu_btn"><img src="../assets/menu_btn.jpg" alt=""></div>
    <div class="input_search">
      <div class="search_icon">
        <img src="../assets/search_icon.png" alt="" class="s_icon">
      </div>
      <input type="text" placeholder="请输入歌名" class="input_inner" v-model="keyWord">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { getBanner } from '../api/api'
export default {
  name: 'headers',
  data () {
    return {
      keyWord: ''
    }
  },
  methods: {
    async getBannerImg () {
      let data = await getBanner()
      this.$bus.$emit('getBanners', data.banners)
    }
  },
  created () {
    this.getBannerImg()
  }
}
</script>

<style scoped>
  .headers{
    display: flex;
    background-color: #ec4141;
    height: 30px;
    width: 100%;
  }
  .menu_btn{
    width: 12px;
    height: 12px;
    align-self: center;
    margin-left: 5px;
  }
  .input_search{
    display: flex;
    width: 130px;
    height: 20px;
    align-self: center;
    margin-left: 5px;
    border-radius:8px;
    background-color: #e13e3e;
  }
  .search_icon{
    width: 14px;
    height: 14px;
    align-self: center;
    margin-left: 5px;
  }
  .s_icon{
    width: 100%;
  }
  .input_inner{
    width: 90px;
    height: 15px;
    border: 0px;
    align-self: center;
    line-height: 15px;
    background-color: #e13e3e;
    color: rgb(255, 255, 255);
    margin-left: 10px;
    outline:none;
  }
  input::-webkit-input-placeholder {
    color: #c4b0b0;
    margin-left: 1px;
  }
  input:focus::placeholder{
        opacity: 0;
  }
</style>
