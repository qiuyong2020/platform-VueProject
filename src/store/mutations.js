export default {//想要修改 state 中的变量并响应式更新，都要在 mutations 中定义方法（同步操作）
  //方法
  increment(state) {// 必须将state状态作为参数传入，否则该方法拿不到state里的状态信息，也就无法对这些数据进行操作
    state.counter++
  },
  decrement(state) {
    state.counter--
  }
}