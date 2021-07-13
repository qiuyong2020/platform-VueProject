// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import ElementUI from 'element-ui'; // 引入 Element 组件库
import 'element-ui/lib/theme-chalk/index.css';

import router from './router' //前端路由
import store from './store'  // Vuex状态管理

Vue.config.productionTip = false
Vue.use(ElementUI); //在 Vue 中使用 ElementUI

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// require('./assets/css/base.css');
