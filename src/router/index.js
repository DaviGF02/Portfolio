import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //example route
    //first import component at the beginning of the component
    //import HomeView from '../components/Home.vue'
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },

    //another example

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path: '/',
      name: 'Home',
      component: () => import('../components/Home.vue')
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: () => import('../components/DashBoard.vue')
    },
    {
      path: '/Climate',
      name: 'Climate',
      component: () => import('../components/Climate.vue')
    }
  ]
})

export default router
