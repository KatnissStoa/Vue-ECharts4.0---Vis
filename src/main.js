import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/vcharts'
import * as echarts from 'echarts'
import VueECharts from 'vue-echarts'

Vue.config.productionTip = false
// 在Vue的原型链中添加$echarts，使得在其他组件中使用echarts时只需要调用echarts，而不需要每次都import Echarts
Vue.prototype.$echarts = echarts
Vue.use(echarts)
// 注册新组件v-chart
Vue.component('v-chart', VueECharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
