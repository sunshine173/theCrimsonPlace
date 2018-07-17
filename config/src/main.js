import Vue from 'vue'
import App from './App.vue'
import routers from './router'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: routers
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
