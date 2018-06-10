// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/icon-font/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import axiosVue from 'vue-axios'
// import axios from 'axios'
import Vuex from 'vuex'
import store from './store/index.js'
import http from './tool/http.js'
Vue.use(ElementUI);
// Vue.use(axiosVue, axios)
Vue.use(Vuex)
 Vue.use(http)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
