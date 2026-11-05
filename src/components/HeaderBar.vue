<!-- Copyright (c) 2026 Kirk Rader -->

<template>
    <header>
        <QrCode v-model="url" />
        <div>
            <div class="title">parasaurolophus</div>
            <BreadCrumbs />
        </div>
        <MdiButton :path="mdiThemeLightDark" @click="toggleTheme" class="theme-button" />
    </header>
</template>

<style scoped>
.theme-button {
    margin-left: auto;
}

.title {
    font-size: large;
    font-weight: bold;
}

@media (width >=1200px) {

    .title {
        font-size: x-large;
    }
}
</style>

<script setup>
import BreadCrumbs from '../components/BreadCrumbs.vue'
import MdiButton from '../components/MdiButton.vue'
import QrCode from '../components/QrCode.vue'
import { mdiThemeLightDark } from '@mdi/js'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const url = computed(() => new URL(route.path, window.location).href)

function toggleTheme() {

    const body = document.getElementsByTagName('body')[0]
    const classes = body.classList
    const oldTheme = classes.contains('dark-theme') ? 'dark-theme' : 'light-theme'
    const newTheme = oldTheme === 'dark-theme' ? 'light-theme' : 'dark-theme'

    classes.replace(oldTheme, newTheme)

    try {

        window.localStorage.setItem('theme', newTheme)

    } catch (error) {

        console.warn(error)
    }
}

onMounted(() => {

    try {

        const theme = window.localStorage.getItem('theme')

        if (theme === 'light-theme') {

            toggleTheme()
        }

    } catch (error) {

        console.warn(error)
    }
})
</script>