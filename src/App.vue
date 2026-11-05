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

const vcard = ref(`BEGIN:VCARD
VERSION:4.0
KIND:individual
FN:parasaurolophus
N:;parasaurolophus
EMAIL:info@parasaurolophus.art
URL:https://www.parasaurolophus.art
URL:https://github.com/parasaurolophus
URL:https://hyperfollow.com/kirkrader
END:VCARD`)

function updateMobile(query) {

    mobile.value = query.matches
}

provide('mobile', mobile)
provide('vcard', vcard)

onMounted(() => {

    mediaQuery = window.matchMedia('(width < 1200px)')
    updateMobile(mediaQuery)
    mediaQuery.addEventListener('change', updateMobile)
})

onUnmounted(() => mediaQuery.removeEventListener('change', updateMobile))
</script>