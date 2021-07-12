import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装Vuex插件
Vue.use(Vuex)

// 2.创建对象
//状态模块
const moduleA = {
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
}

const store = new Vuex.Store({ // $store === store (const store = new Vuex.Store())
  state: { //想要实现状态共享、修改状态后响应式更新，全部状态信息都要在 state 中定义并初始化   
    counter: 100,
    studentInfo: [
      {//每个学生的信息都是一个对象
        name: "张三",
        age: 23
      },
      {
        name: "李四",
        age: 20
      },
      {
        name: "王五",
        age: 18
      },
      {
        name: "赵六",
        age: 8
      }
    ]
  },  //在其他地方追加与删除状态：Vue.set(store,{状态名:状态信息}) -添加  /  Vue.delete(store,状态名) -删除
  mutations: {//想要修改 state 中的变量并响应式更新，都要在 mutations 中定义方法（同步操作）
    //方法
    increment(state) {// 必须将state状态作为参数传入，否则该方法拿不到state里的状态信息，也就无法对这些数据进行操作
      state.counter++
    },
    decrement(state) {
      state.counter--
    }
  },
  actions: {//想要对异步操作（如网络请求）进行跟踪并响应式更新数据，都要在 actions 中定义方法
    updateStateInfo(context, pyload) { // context为上下文, 携带的额外参数为pyload, 包含一个变量message和一个回调函数success()
      setTimeout(() => { 
        context.commit('updateInfo'); 
        console.log(pyload.message);
        payload.success()
      }, 1000)
    }
  },
  getters: {
    powerCounter(state) { //必须将state状态作为参数传入，否则该方法拿不到state里的状态信息，也就无法对这些数据进行操作
      return (state.counter * state.counter)
    },
    //筛选大于20岁的学生
    above20student(state) { // filter(): 过滤器，返回处理后的值
      return state.studentInfo.filter(s => s.age>=20)   // s为 state.studentInfo 中的学生对象，将满足年龄大于20岁条件的 s 返回
    },
    // 再进一步，筛选大于指定年龄的学生  ==> 想在 getters 方法中传入参数以执行自定义操作，就需要返回一个函数，在这个函数中实现
    aboveAgeStu(state) {
      return function(age) { //当方法需要携带额外参数pyload时 => 返回一个函数，传入想要指定的第二参数
        return state.studentInfo.filter(s => s.age>=age)  //将满足年龄大于20岁条件的 s 返回
      }
    }
  },
  // Vue使用单一状态树，状态都由Vuex管理，当应用变得复杂时，Store对象将变得十分臃肿
  modules: {//对 Store 对象进行分割，单独封装为一个模块(对象)，每个模块拥有自己的状态信息(state)和操作方法(mutations/getters/actions)
    a: moduleA
  }
})

/**
 *  State单一状态树：
 *    - 为方便管理和维护，推荐只使用一个 Store 对象， 所有组件间共用的状态信息的获取和修改统一向这个唯一的 Store 调用
 *    - Vuex采用单一状态树来管理应用层级的全部状态
*/

// 3.导出 store 对象
export default store