<template>
    <div>xaingqing</div>
</template>
<script>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
export default {
  setup () {
    onMounted(() => {
      console.log(useRoute())
    })
  }

}
</script>
