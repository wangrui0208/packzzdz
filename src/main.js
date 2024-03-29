// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import BaiduMap from 'vue-baidu-map';
import Mui from 'vue-awesome-mui';
import Vue from 'vue';
import App from './App';
import router from './router';

import '../static/css/swiper.min.css';

Vue.use(Mui);

// router.beforeEach((to, from, next) => {
//   const tag = to.meta.index;
//   store.commit('getTitleName', tag);
//   console.log(store.state.enterTitle);
//   next();
// });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
Vue.use(BaiduMap, {
  ak: 'MldSoQfxQ1kh0oOBMI34L6sXAsPa8abz',
});
