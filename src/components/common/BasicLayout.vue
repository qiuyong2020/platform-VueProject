<template>
  <div class="basic-layout">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="aside">
      <slot name="aside"></slot>
    </div>
    <div class="body">
      <div class="main">
        <slot name="main"></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BasicLayout",
    components: {
      
    }
  }
</script>

<style scoped>
  .basic-layout {
    color: #fff;
    text-align: center;
    overflow: hidden;
    font-size: 14px;
  }
  .header {
    width: 100%;
    text-align: center;
    line-height: 50px;
    max-height: 50px;
    background-color: #23262E;
  }
  .aside{
    position: fixed;
    top: 50px;
    left: 0;
    width: 200px;
    height: 723px;
    background-color: #393D49;
  }
  .body {
    position: fixed;
    top: 50px;
    left: 200px;
    width: calc(100% - 200px);
    line-height: 723px;
    color: #333;
    background-color: #fff;
  }
  .main {
    width: 100px;
    width: auto;
    height: 680px;
  }
  .footer {
    width: 100%;
    height: 43px;
    background-color: #23262E;
  }
</style>