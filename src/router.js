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
            path: '/mathml/naturals',
            name: 'naturals',
            component: () => import('./pages/NaturalsPage.vue'),
            meta: {
                title: 'ℕ',
            },
        },

        {
            path: '/mathml/russell',
            name: 'russell',
            component: () => import('./pages/RussellParadoxPage.vue'),
            meta: {
                title: "Russell's Paradox",
            },
        },

        {
            path: '/mathml/ycombinator',
            name: 'ycombinator',
            component: () => import('./pages/YCombinatorPage.vue'),
            meta: {
                title: "Y Combinator",
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