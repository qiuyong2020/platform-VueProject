export default {//想要对异步操作（如网络请求）进行跟踪并响应式更新数据，都要在 actions 中定义方法
  updateStateInfo(context, pyload) { // context为上下文, 携带的额外参数为pyload, 包含一个变量message和一个回调函数success()
    setTimeout(() => { 
      context.commit('updateInfo'); 
      console.log(pyload.message);
      payload.success()
    }, 1000)
  }
}