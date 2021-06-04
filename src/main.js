import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/iconfont/iconfont.css';
import './styles/iconfont/iconfont.js';
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')