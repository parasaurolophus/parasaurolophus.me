<!-- Copyright (c) Kirk Rader 2026 -->

<template>
    <HeaderBar />
    <MainPanel />
    <FooterBar />
</template>

<script setup>
import FooterBar from './components/FooterBar.vue'
import HeaderBar from './components/HeaderBar.vue'
import MainPanel from './components/MainPanel.vue'
import { onMounted, onUnmounted, provide, ref } from 'vue'

let mediaQuery = null
const mobile = ref(true)

function updateMobile(query) {

    mobile.value = query.matches
}

provide('mobile', mobile)

onMounted(() => {

    mediaQuery = window.matchMedia('(width < 1200px)')
    updateMobile(mediaQuery)
    mediaQuery.addEventListener('change', updateMobile)
})

onUnmounted(() => mediaQuery.removeEventListener('change', updateMobile))
</script>