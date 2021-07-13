<template>
  <div class="home">
    <nav-bar></nav-bar>
  </div>
</template>

<script>
  import NavBar from '@/components/common/NavBar';
  import {getHomeMultidata} from '@/network/home';

  export default {
    name: "Home",
    components: {
      NavBar
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      // 1.请求多个数据
      getHomeMultidata().then(res => {
        // this.result = res;
        this.banners = res.data.banners.list;
        this.recommends = res.data.recommends.list;
      })
    }
  }
</script>

<style scoped>
   
</style>