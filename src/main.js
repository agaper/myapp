import Vue from 'vue';
import App from './App.vue';

import VueCookies from 'vue-cookies';
Vue.use(VueCookies);
Vue.$cookies.config('7d');


import router from './router.js'

// 全局通用性常量集合
Vue.prototype.$GlobalConstants = {
  loginCookieField: 'gfsessionid',
  loginUsername: 'username',
  
  curdActionAdd: 'add',
  curdActionEdit: 'edit',

};

import http from './core/request/http.js';
Vue.prototype.$http = http;

import util from './assets/js/util.js';
Vue.prototype.$util = util;

Vue.config.productionTip = false;


new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app');