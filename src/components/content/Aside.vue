<template>
  <div class="aside">
    <div class="aside-logo">
      <img src="~assets/images/basic-layout/xiaohui.png" alt="">
      <h5>广东工业大学-大数据组</h5>
    </div>
    <div class="aside-nav">
      <nav-menu></nav-menu>
    </div>
  </div>
</template>
<script>
import NavMenu from '@/components/common/NavMenu.vue'
export default {
  name: "Aside",
  components: { 
    NavMenu 
  }
}
</script>
<style scoped>
  /* aside */
  /* .bg-aside {
    background-color: #393D49;
    color: #fff;
  } */
  .aside {
    display: flex;
    flex-direction: column;
    width: 200px;
    text-align: center;
    overflow: hidden;
    background-color: #393D49;
    color: #fff;
  }
  .aside-logo {
    height: 120px;
    padding: 10px 0;
  }
  .aside-logo img{
    width: 80px;
    height: 80px;
    vertical-align: middle;
  }
  .aside-nav {
    flex: auto;
    /* background-color: dodgerblue; */
  }
</style>