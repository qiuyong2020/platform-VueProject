export default {
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
}