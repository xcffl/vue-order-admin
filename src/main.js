import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'

import App from './App'
import store from './store'
import Routers from './router'
import Util from 'common/js/setTitle'
import 'common/scss/index.scss'
import 'element-ui/lib/theme-default/index.css'
import AxiosPlugin from 'common/js/Axios'

// import { AV } from 'common/js/initLeanCloud'

Vue.use(AxiosPlugin)
Vue.use(ElementUI)
Vue.use(VueRouter)

// route config
const router = new VueRouter({
  routes: Routers
})
router.beforeEach((to, from, next) => {
  Util.title(to.meta.title)
  next()
})


// Initialize LeanCloud
import AV from 'leancloud-storage';

var APP_ID = 'RiuJ8JBVvWEF4gV14m6BmzuF-MdYXbMMI';
var APP_KEY = 'wo2lENlIhojPLiQFi3D8fFDR';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY,
  region: 'us'
});
Vue.prototype.$AV = AV

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),

})
