<!-- Copyright (c) Kirk Rader 2026 -->

<template>

    <a href="https://raw.githubusercontent.com/parasaurolophus/parasaurolophus.me/refs/heads/main/src/components/NaturalsSet.vue"
        target="_blank">
        <NaturalsSet />
    </a>

    <hr>

    <a href="https://raw.githubusercontent.com/parasaurolophus/parasaurolophus.me/refs/heads/main/src/components/RussellParadox.vue"
        target="_blank">
        <RussellParadox />
    </a>

    <hr>

    <a href="https://raw.githubusercontent.com/parasaurolophus/parasaurolophus.me/refs/heads/main/src/components/YCombinator.vue"
        target="_blank">
        <YCombinator />
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

    <div class="links">
        <a v-for="link in links" :href="link.text" target="_blank">
            <QrCode :text="link.text" :label="link.label" />
        </a>
    </div>

</template>

<style scoped>
.links {
    display: flex;
    flex-flow: row wrap balance;
    align-items: center;
    justify-content: space-between;
}

.undecidable {
    display: flex;
    justify-content: center;
}
</style>

<script setup>
import CodeBlock from '@/components/CodeBlock.vue'
import NaturalsSet from '@/components/NaturalsSet.vue'
import QrCode from '@/components/QrCode.vue'
import RussellParadox from '@/components/RussellParadox.vue'
import UndecidableLink from '@/components/UndecidableLink.vue'
import YCombinator from '@/components/YCombinator.vue'
import { onMounted, onUnmounted, ref } from 'vue'

const factorial = ref(`(let factorial ((a 1)
                (n 10000))
    (if (< n 2)
        a
        (factorial (* a n) (- n 1))))`)

const mobile = ref(false)

const links = [
    {
        text: 'https://hyperfollow.com/kirkrader',
        label: 'HyperFollow',
    },
    {
        text: 'https://rader.us',
        label: 'https://rader.us',
    },
    {
        text: 'https://github.com/parasaurolophus',
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