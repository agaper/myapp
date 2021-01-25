import Vue from 'vue';
import App from './App.vue';
import router from './router.js'
import VueCookies from 'vue-cookies';
import http from '@/core/request/http.js';
// import 'zy-pj-assets/static/scss/main.scss';
import '@/assets/style/main.scss'

Vue.use(VueCookies); 
Vue.$cookies.config('7d');

// 全局通用性常量集合
Vue.prototype.$GlobalConstants = {
  curdActionAdd: 'add',
  curdActionEdit: 'edit',
};
Vue.prototype.$http = http;

Vue.config.productionTip = false;

import ZYPJ from 'zy-pj-assets';
Vue.prototype.$util = ZYPJ;



new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app');