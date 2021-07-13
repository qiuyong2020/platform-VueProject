<template>
  <div class="layout">
    <el-container>
      <el-header>
        <!-- Header视图区域 -->
        <div><slot name="header"></slot></div>
        <!-- Header视图区域 -->
      </el-header>
      <el-container>
        <el-aside width="200px">
          <!-- Aside视图区域 -->
          <div><slot name="aside"></slot></div>
          <!-- Aside视图区域 -->
        </el-aside>
        <el-container>
          <el-main>
            <!-- Main视图区域 -->
            <div><slot name="main"></slot></div>
            <!-- Main视图区域 -->
          </el-main>
          <el-footer>
            <!-- Footer视图区域 -->
            <div><slot name="footer"></slot></div>
            <!-- Footer视图区域 -->
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  // import Header from '@/components/content/Header.vue'
  import Aside from '@/components/content/Aside.vue'

  export default {
    name: "Layout",
    components: { 
      // Header,
      Aside
    }
  }
</script>

<style scoped>
    .el-header, .el-footer {
    background-color: #B3C0D1;
    /* background-color: #23262E; */
    color: #333;
    /* color: #fff; */
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    /* background-color: #393D49; */
    color: #333;
    /* color: #fff; */
    text-align: center;
    /* line-height: 200px; */
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 612px;
  }
  
  
  .el-container .el-aside {
    line-height: 712px;
  }

  /* header */
  /* .el-row {
    margin-bottom: 0
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-header {
    background: #23262E;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 60px;
  } */
</style>