import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import BMap from '../views/BMap'
import BMap2 from '../views/BMap2'
import LiquidFill from '../views/LiquidFill'
import WordCloud from '../views/WordCloud'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/bmap',
  //   name: 'BMap',
  //   component: BMap
  // },
  {
    path: '/bmap2',
    name: 'BMap2',
    component: BMap2
  },
  {
    path: '/liquidFill',
    name: 'LiquidFill',
    component: LiquidFill
  },
  {
    path: '/wordcloud',
    name: 'WordCloud',
    component: WordCloud
  }
]

const router = new VueRouter({
  routes
})

export default router
