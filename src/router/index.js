import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //example route
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
      path: '/Counter',
      name: 'Counter',
      component: () => import('../components/Counter.vue')
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: () => import('../components/Dashboard.vue')
    }
  ]
})

export default router
