<template>
  <div id="app">
    <!-- 四大视图区域基本布局 -->
    <basic-layout>
      <!-- Header视图区域 -->
      <Header slot="header"></Header>
      <!-- Aside视图区域 -->
      <Aside slot="aside"></Aside>
      <!-- Main视图区域 -->
      <Main slot="main"></Main>
      <!-- Footer视图区域 -->
      <Footer slot="footer"></Footer>
    </basic-layout>
  </div>
</template>

<script>
  import BasicLayout from '@/components/common/BasicLayout';
  import Header from '@/components/content/Header';
  import Aside from '@/components/content/Aside';
  import Main from '@/components/content/Main';
  import Footer from '@/components/content/Footer';


  export default {
    name: 'App',
    data() {
      return {}
    },
    components: {
      BasicLayout,
      Header,
      Aside,
      Main,
      Footer
    }
  }
</script>

<style>
  @import 'assets/css/base.css';
</style>
