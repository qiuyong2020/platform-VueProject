import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('pages/home/Home.vue');
const Information = () => import('pages/information/Information.vue');
const Backstage = () => import('pages/back-stage/Backstage.vue');
const Authority = () => import('pages/authority/Authority.vue');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/information',
      component: Information
    },
    {
      path: '/back-stage',
      component: Backstage
    },
    {
      path: '/authority',
      component: Authority
    },
  ],
  mode: "history"
})
