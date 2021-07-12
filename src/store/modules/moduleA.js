export default {  //状态模块
  state: {
    name: "孙悟空"
  },
  mutations: {
    updateName(state, payload) { //方法名不要和store对象中其他方法重复！！！
      state.name = payload //将 孙悟空 修改 为其他指定的名字(pyload变量)
    }
  },
  getters: {
    fullname(state) {
      return state.name + '11111' //孙悟空11111
    },
    fullname2(state, getters) { // 传入getters作为第二参数，可调用同为getters中的其他方法
      return getters.fullname + '22222' //孙悟空1111122222
    }
  },
  actions: {}
};
