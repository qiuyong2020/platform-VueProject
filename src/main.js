import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'  //自动扫描里面的路由配置

Vue.config.productionTip = false

//显示声明使用VueRouter
Vue.use(VueRouter);

new Vue({
  el: '#app',
  //配置路由
  router,
  components: { App },
  template: '<App/>'
})
