<!-- Copyright (c) Kirk Rader 2026 -->

<template>

    <a href="https://raw.githubusercontent.com/parasaurolophus/parasaurolophus.me/refs/heads/main/src/components/NaturalsSet.vue"
        target="_blank">
        <NaturalsSet v-model="mobile" />
    </a>

    <hr>

    <a href="https://raw.githubusercontent.com/parasaurolophus/parasaurolophus.me/refs/heads/main/src/components/RussellParadox.vue"
        target="_blank">
        <RussellParadox v-model="mobile" />
    </a>

    <hr>

    <a href="https://raw.githubusercontent.com/parasaurolophus/parasaurolophus.me/refs/heads/main/src/components/YCombinator.vue"
        target="_blank">
        <YCombinator v-model="mobile" />
    </a>

    <hr>

    <template v-if="mobile">
        <div class="undecidable">
            <UndecidableLink :table="true" />
        </div>
        <hr>
    </template>

    <CodeBlock v-model="factorial" />

    <hr>

    <details v-for="link in links" name="sections">
        <summary>
            {{ link.label }}
        </summary>
        <a v-if="link.href" :href="link.href" target="_blank">
            <QrCode v-model="link.href" :label="link.href" size="large" />
        </a>
        <QrCode v-else v-model="link.text" />
    </details>

    <details name="sections">
        <summary>QR Code Generator</summary>
        <QrGenerator />
    </details>

</template>

<style scoped>
.undecidable {
    display: flex;
    justify-content: center;
}
</style>

<script setup>
import CodeBlock from '../components/CodeBlock.vue'
import NaturalsSet from '../components/NaturalsSet.vue'
import QrCode from '../components/QrCode.vue'
import QrGenerator from '../components/QrGenerator.vue'
import RussellParadox from '../components/RussellParadox.vue'
import UndecidableLink from '../components/UndecidableLink.vue'
import YCombinator from '../components/YCombinator.vue'
import { onMounted, onUnmounted, ref } from 'vue'

const factorial = ref(`(let factorial ((a 1)
                (n 10000))
    (if (< n 2)
        a
        (factorial (* a n) (- n 1))))`)

const mobile = ref(false)

const links = [
    {
        href: 'https://rader.us',
        label: 'https://rader.us',
    },
    {
        href: 'https://hyperfollow.com/kirkrader',
        label: 'HyperFollow',
    },
    {
        href: 'https://github.com/parasaurolophus',
        label: 'GitHub',
    },
]

let mediaQuery = null

function updateMobile(query) {

    mobile.value = query.matches
}

onMounted(() => {

    mediaQuery = window.matchMedia('(width < 1200px)')
    mediaQuery.addEventListener('change', updateMobile)
    updateMobile(mediaQuery)
})

onUnmounted(() => mediaQuery.removeEventListener('change', updateMobile))
</script>