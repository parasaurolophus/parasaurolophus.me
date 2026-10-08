<!-- Copyright (c) Kirk Rader 2026 -->

<template>

    <div class="links">
        <a v-for="link in links" :href="link.text" target="_blank">
            <QrCode :text="link.text" :label="link.label" />
        </a>
    </div>

    <hr>

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

    <CodeBlock v-model="factorial" />

</template>

<style scoped>
.links {
    display: flex;
    flex-flow: row wrap balance;
    align-items: center;
    justify-content: space-between;
}
</style>

<script setup>
import CodeBlock from '@/components/CodeBlock.vue'
import NaturalsSet from '@/components/NaturalsSet.vue'
import NaturalsSetPre from '@/components/NaturalsSetPre.vue'
import QrCode from '@/components/QrCode.vue'
import RussellParadox from '@/components/RussellParadox.vue'
import YCombinator from '@/components/YCombinator.vue'
import { ref } from 'vue'

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

const factorial = ref(`(let factorial ((a 1)
                (n 10000))
    (if (< n 2)
        a
        (factorial (* a n) (- n 1))))`)
</script>