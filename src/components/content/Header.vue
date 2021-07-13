<template>
  <div class="header">
    <nav-bar>
      <div slot="left">
        <img src="~assets/images/basic-layout/菜单栏收缩.svg" alt="">
        <!-- <img src="../../assets/images/basic-layout/应用功能.svg" alt=""> -->
      </div>
      <div slot="center">
        <span><el-button type="primary" size="mini">登录</el-button></span>
      </div>
      <div slot="right">
        <img src="~assets/images/basic-layout/个人中心.svg" alt="">
        <span>张三</span>
      </div>
    </nav-bar>
  </div>
</template>
<script>
  import NavBar from '@/components/common/NavBar'

  export default {
    name: "Header",
    components: {
      NavBar
    }
  }
</script>
<style scoped>
  img, span {
    vertical-align: middle;
  }
</style>