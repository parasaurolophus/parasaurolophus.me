<!-- Copyright (c) Kirk Rader 2026 -->

<template>

    <h2>home</h2>

    <div class="links">
        <a v-for="link in links" :href="link.text" target="_blank">
            <QrCode :text="link.text" :label="link.label" />
        </a>
    </div>

    <NaturalsSet />
    <hr>
    <RussellParadox />
    <hr>
    <YCombinator />
    <CodeBlock v-model="factorial" />

</template>

<style scoped>
.links {
    display: flex;
    flex-flow: row wrap balance;
    padding: 1rem;
    align-items: center;
    justify-content: space-around;
}
</style>

<script setup>
import CodeBlock from '@/components/CodeBlock.vue'
import NaturalsSet from '@/components/NaturalsSet.vue'
import QrCode from '@/components/QrCode.vue'
import RussellParadox from '@/components/RussellParadox.vue'
import YCombinator from '@/components/YCombinator.vue'
import { ref } from 'vue'

const links = [
    {
        text: 'https://rader.us',
        label: 'https://rader.us',
    },
    {
        text: 'https://hyperfollow.com/kirkrader',
        label: 'HyperFollow',
    },
]

const factorial = ref(`;; calculate 10,000! using tail-recursion
;; to prevent stack overflow

(let factorial ((a 1)
                (n 10000))
    (if (< n 2)
        a
        (factorial (* a n) (- n 1))))`)
</script>