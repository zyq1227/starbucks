// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './static/scss/common.scss';
import './utils/flexble.js';
import './utils/fonts/iconfont.css';
import store from './store/index';
import {DatePicker,TimePicker} from 'element-ui';
import '../node_modules/element-ui/lib/theme-chalk/index.css'

Vue.use(DatePicker)
Vue.use(TimePicker)

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store, 
  components: { App },
  template: '<App/>'
})
