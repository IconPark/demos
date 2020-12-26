// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {install} from '@icon-park/vue/es/all'

install(Vue, 'i') // 图标库增加自定义前缀'i'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
