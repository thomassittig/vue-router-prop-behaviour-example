import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import AppLayout from '../components/AppLayout.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'Home',
        props: ()=>{
          console.log('router::props for home')
        },
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        props: ()=>{
          console.log('router::props for about')
        },

        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
