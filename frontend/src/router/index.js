import Vue from 'vue'
import VueRouter from 'vue-router'
import feedPage from '../pages/feed-page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'feed-Page',
    component: feedPage
  },
  
]

const router = new VueRouter({
  routes
})

export default router
