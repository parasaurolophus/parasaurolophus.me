import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
        component: () => import('./pages/HomePage.vue'),
        meta: {
            title: 'Home',
        },
    },
  ],
})

export default router
