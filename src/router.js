// Copyright (c) 2026 Kirk Rader

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

        {
            path: '/:pathMatch(.*)*',
            name: 'catchall',
            component: () => import('./pages/CatchAll.vue'),
            meta: {
                title: '404',
                hide: true,
            },
        },
    ],
})

export default router