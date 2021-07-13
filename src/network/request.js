import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例, 配置固定选项
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  })
  // 2.axios的拦截器
  // axios.interceptors //全局拦截
  // 2.1、请求拦截
  instance.interceptors.request.use(config => {//请求发送成功
    console.log(config);
    /**
     *  什么情况下要用到拦截器？
     *      1.config中的一些配置信息不符合服务器的要求；
     *      2.每次发送网络请求时，都希望在界面中显示一个请求的图标或动画效果；
     *      3.某些网络请求（比如登录时的 token 令牌，拦截请求并导引到登录界面）必须携带一些特殊的信息。
    */
    // 拦截请求配置后，必须将请求的配置返回，否则内部拿不到config会导致所有请求失败
    return config
  }, err => {// 请求发送失败
    console.log(err);
  });

  // 2.2、响应拦截
  instance.interceptors.response.use(res => {//响应成功
    console.log(res);
    // 拦截响应后，必须将响应的数据 data 返回，否则内部所有请求在成功后无法拿到响应数据
    return res.data
  }, err => { //响应失败
    console.log(err);
  })
  // 3.发送真正的网络请求
  return instance(config)
}
