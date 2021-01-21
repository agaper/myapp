import Vue from 'vue';
import App from './App.vue';
import router from './router.js'
import VueCookies from 'vue-cookies';
import http from '@/core/request/http.js';
import util from '@/assets/js/util.js';
import '@/assets/style/main.scss'

Vue.use(VueCookies);
Vue.$cookies.config('7d');

// 全局通用性常量集合
Vue.prototype.$GlobalConstants = {
  curdActionAdd: 'add',
  curdActionEdit: 'edit',
};
Vue.prototype.$http = http;
Vue.prototype.$util = util;

Vue.config.productionTip = false;


new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app');