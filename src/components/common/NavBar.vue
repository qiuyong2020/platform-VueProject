<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    color: #fff;
    text-align: center;
    font-size: 14px;
    /* background-color: #23262E; */
  }
  .left, .right {
    width: 80px;
    line-height: 50px;
  }
  .left {
    margin-left: 10px;
    /* background-color: deepskyblue; */
  }
  .center {
    flex: auto;
    /* background-color: forestgreen; */
  }
  .right {
    margin-right: 10px;
    /* background-color: hotpink; */
  }
</style>