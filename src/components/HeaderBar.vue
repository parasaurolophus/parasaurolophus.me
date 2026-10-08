<!-- Copyright (c) 2026 Kirk Rader -->

<template>
    <header>
        <QrCode :text="url" />
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

@media (width >= 1200px) {

    .title {
        font-size: x-large;
    }
}
</style>

<script setup>
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import MdiButton from '@/components/MdiButton.vue'
import QrCode from '@/components/QrCode.vue'
import { mdiThemeLightDark } from '@mdi/js'
import { computed } from 'vue'

const url = computed(() => window.location.href)

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
</script>