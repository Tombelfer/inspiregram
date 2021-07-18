import Vue from 'vue'
import VueRouter from 'vue-router'
import feedPage from '../pages/feed-page.vue'
import profilePage from '../pages/profile-page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'feed-Page',
    component: feedPage
  },
  {
    path:'/profile',
    name: 'profile-page',
    component: profilePage
  }
  
]

const router = new VueRouter({
  routes
})

export default router
