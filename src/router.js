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
            path: '/mathml',
            name: 'mathml',
            component: () => import('./pages/MathMlPage.vue'),
            meta: {
                title: 'MathML',
            },
        },

        {
            path: '/qrgenerator',
            name: 'qrgenerator',
            component: () => import('./pages/QrGeneratorPage.vue'),
            meta: {
                title: 'QR Generator',
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