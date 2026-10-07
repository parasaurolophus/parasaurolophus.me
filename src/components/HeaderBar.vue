<!-- Copyright (c) 2026 Kirk Rader -->

<template>
    <header>
        <span class="title">parasaurolophus</span>
        <MdiButton :path="mdiThemeLightDark" @click="toggleTheme" class="theme-button" />
    </header>
</template>

<style scoped>
.theme-button {
    margin-left: auto;
}

.title {
    font-size: xx-large;
    font-weight: bold;
}
</style>

<script setup>
import MdiButton from '@/components/MdiButton.vue'
import { mdiThemeLightDark } from '@mdi/js'
import { provide } from 'vue'

function toggleTheme() {

    const body = document.getElementsByTagName('body')[0]
    const classes = body.classList

    for (let index = 0; index < classes.length; ++index) {

        const cls = classes.item(index)

        if (cls === 'dark-theme') {

            classes.remove('dark-theme')
            classes.add('light-theme')
            body.classList = classes
            return
        }

        if (cls === 'light-theme') {

            classes.remove('light-theme')
            classes.add('dark-theme')
            body.classList = classes
            return
        }
    }

    classes.add('dark-theme')
    body.classList = classes
}

provide('toggleTheme', toggleTheme)
</script>