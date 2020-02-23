import Vue from 'vue'
import VueRouter from 'vue-router'
import beer from '@/views/beer.vue'
import home from '@/views/index.vue'
import brew from '@/views/brew.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/beer/:nameOfTheBeer',
    name: 'Beer',
    component: beer
}, { 
    path: '/brew',
    name: 'Brew',
    component: brew
  }
]

const router = new VueRouter({
  routes
})

export default router
