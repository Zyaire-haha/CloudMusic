<template>
  <div class="homeView">
    <headers></headers>
    <MainInfo></MainInfo>
  </div>
</template>

<script>
import headers from '../components/headers.vue'
import MainInfo from '../components/mainInfo.vue'
export default {
  components: { headers, MainInfo },
  name: 'homeView'
}
</script>

<style>
.homeView{
  width: 187.5px;
  height: auto;
  display: flex;
  flex-direction: column;
}
</style>
